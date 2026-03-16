import authSeller from "@/middlewares/authSeller";
import { getAuth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { gemini } from "@/configs/openai";

async function main(base64Image, mimeType) {
  const response = await gemini.models.generateContent({
    model: process.env.OPENAI_MODEL || "gemini-2.0-flash",
    config: {
      systemInstruction: `You are a product listing assistant for an e-commerce store. Your job is to analyze an image of a product and generate structured data.

Respond ONLY with raw JSON (no code block, no markdown, no explanation).
The JSON must strictly follow this schema:

{
  "name": string,
  "description": string
}`,
    },
    contents: [
      {
        role: "user",
        parts: [
          { text: "Analyze this image and return name + description." },
          { inlineData: { mimeType, data: base64Image } },
        ],
      },
    ],
  });

  const raw = response.text;
  const cleaned = raw.replace(/```json|```/g, "").trim();
  try {
    return JSON.parse(cleaned);
  } catch {
    throw new Error("Failed to parse JSON response from Gemini");
  }
}

export async function POST(request) {
  try {
    const { userId } = getAuth(request);
    const isSeller = await authSeller(userId);

    if (!isSeller) {
      return NextResponse.json({ error: "Not authorized" }, { status: 401 });
    }

    const { base64Image, mimeType } = await request.json();
    const result = await main(base64Image, mimeType);

    return NextResponse.json({ ...result });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: error.code || error.message },
      { status: 400 }
    );
  }
}
