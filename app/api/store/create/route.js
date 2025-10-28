import imagekit from "@/configs/imagekit";
import prisma from "@/lib/prisma";
import { clerkClient, getAuth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

// create the store
export async function POST(request) {
  try {
    const { userId } = getAuth(request);
    if (!userId) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    // get the data from the form
    const formData = await request.formData();
    const name = formData.get("name")?.toString().trim() ?? "";
    const username = formData.get("username")?.toString().trim() ?? "";
    const description = formData.get("description")?.toString().trim() ?? "";
    const email = formData.get("email")?.toString().trim() ?? "";
    const contact = formData.get("contact")?.toString().trim() ?? "";
    const address = formData.get("address")?.toString().trim() ?? "";
    const image = formData.get("image");

    if (
      !name ||
      !username ||
      !description ||
      !email ||
      !contact ||
      !address ||
      !image ||
      typeof image === "string" ||
      typeof image.arrayBuffer !== "function"
    ) {
      return NextResponse.json(
        { message: "Missing required store information" },
        { status: 400 }
      );
    }

    // ensure user exists locally before creating a store (covers missing webhook events)
    let existingUser = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!existingUser) {
      let clerkUser;
      try {
        clerkUser = await clerkClient.users.getUser(userId);
      } catch (clerkError) {
        console.error("Failed to fetch Clerk user", clerkError);
      }

      const clerkName = [clerkUser?.firstName, clerkUser?.lastName]
        .filter(Boolean)
        .join(" ")
        .trim();

      const fallbackEmail =
        clerkUser?.primaryEmailAddress?.emailAddress ||
        clerkUser?.emailAddresses?.[0]?.emailAddress ||
        email;

      existingUser = await prisma.user.create({
        data: {
          id: userId,
          name: clerkName || name,
          email: fallbackEmail,
          image: clerkUser?.imageUrl || "",
        },
      });
    }

    const normalizedUsername = username.toLowerCase();

    // check if user have already registered a store
    const store = await prisma.store.findFirst({
      where: {
        userId: userId,
      },
    });

    // if store is already registered then send status of store
    if (store) {
      return NextResponse.json({ status: store.status });
    }

    // check if username is already taken
    const isUsernameTaken = await prisma.store.findFirst({
      where: {
        username: normalizedUsername,
      },
    });

    if (isUsernameTaken) {
      return NextResponse.json(
        { message: "Username already taken" },
        { status: 400 }
      );
    }

    // image upload to imagekit
    const buffer = Buffer.from(await image.arrayBuffer());
    const response = await imagekit.upload({
      file: buffer,
      fileName: image.name,
      folder: "logos",
    });

    const optimizedImage = imagekit.url({
      path: response.filePath,
      transformation: [
        { quality: "auto" },
        { format: "webp" },
        { height: "512" },
      ],
    });

    const newStore = await prisma.store.create({
      data: {
        userId,
        name,
        description,
        username: normalizedUsername,
        email,
        contact,
        address,
        logo: optimizedImage,
      },
    });

    // Link store to user
    await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        store: { connect: { id: newStore.id } },
      },
    });

    return NextResponse.json({ message: "applied, waiting for approval" });
  } catch (error) {
    console.error(error);
    const errorMessage =
      typeof error === "string"
        ? error
        : error?.message || "Unable to create store";
    return NextResponse.json(
      { message: error.code || errorMessage },
      { status: 400 }
    );
  }
}

// check if user have already registered a store
export async function GET(request) {
    try {
        const { userId } = getAuth(request);

        const store = await prisma.store.findFirst({
          where: {
            userId: userId,
          },
        });

        if (store) {
          return NextResponse.json({ status: store.status });
        }

        return NextResponse.json({ status: "not registered" });
    } catch (error) {
        console.error(error);
        return NextResponse.json(
          { message: error.code || error.message || "Unable to fetch store status" },
          { status: 400 }
        );
    }
}
