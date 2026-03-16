---
trigger: always_on
---

# Antigravity Rules for EazyCart

## Core Tech Stack
- Framework: Next.js 15 (App Router)
- UI/Styling: React 19, Tailwind CSS v4, Lucide React
- Database & ORM: Prisma, Neon Database (@neondatabase/serverless)
- Authentication: Clerk (@clerk/nextjs)
- State Management: Redux Toolkit
- Background Jobs: Inngest
- Payments: Stripe
- Media/Image Storage: ImageKit

## Development Guidelines

### 1. Next.js App Router & React 19
- Default to **React Server Components (RSC)**. Do not use `'use client'` unless strictly necessary (e.g., using `useState`, `useEffect`, React-Redux hooks, or browser-specific APIs).
- For data mutations, strongly prefer **Server Actions** over API routes when suitable.
- Use native Next.js caching and data fetching mechanisms where possible.

### 2. Styling (Tailwind CSS v4)
- Use Tailwind utility classes for all styling.
- Avoid writing custom CSS unless absolutely required for animations or unsupported features.
- Ensure components are fully responsive (mobile-first approach).

### 3. Database & Prisma
- Always use the Prisma client instantiated inside `lib/prisma.ts` or similar singleton file to prevent excessive connection limits during hot reloading.
- For schema changes, propose the update to `prisma/schema.prisma` first.

### 4. Background Jobs (Inngest)
- Long-running tasks, heavy data processing, and external API retries should be put into `inngest/` functions.
- Think about idempotency when designing Inngest event handlers.

### 5. Authentication & User State (Clerk)
- Server-side: Use `auth()` or `currentUser()` from `@clerk/nextjs/server`.
- Client-side: Use `useAuth()` or `useUser()` from `@clerk/nextjs`.
- Always check for the user's role/permissions if modifying distinct admin vs customer flows.

### 6. Code Style
- Use **TypeScript** strictly. Avoid using `any`; define robust interfaces or types.
- Export components as `default` or `named` depending on the current codebase's dominant pattern, but maintain consistency within a given directory.
- Keep components small and composable. Move complex business logic to `/lib` or custom hooks.

### 7. Agent Behavior
- When requested to build a UI task, check `/components` for existing reusable elements first.
- Do not run commands that clear the database unless explicitly confirmed by the user.
- Focus strictly on addressing the user's specific request while respecting these project structures.