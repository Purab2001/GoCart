# EazyCart agent instructions

## Project snapshot
- Next.js App Router app with three surfaces: public storefront (`app/(public)`), seller dashboard (`app/store`), and admin dashboard (`app/admin`).
- Backend is route-handler driven under `app/api/**` (no separate server layer).
- Auth is Clerk-based; persistence is Prisma + PostgreSQL (Neon adapter support in edge runtime).

## Core architecture and data flow
- Global providers are wired in `app/layout.jsx`: `ClerkProvider` + Redux `StoreProvider` + `react-hot-toast` toaster.
- Redux store setup is centralized in `lib/store.js` with slices under `lib/features/**`.
- Cart state is dual-layer: client Redux state + persisted JSON in `User.cart` via `/api/cart` (`lib/features/cart/cartSlice.js`, `app/api/cart/route.js`).
- Orders are created per seller/store from one checkout payload (`app/api/orders/route.js`), then split into multiple `Order` records.
- Stripe flow: checkout session metadata stores `orderIds` + `userId`; webhook in `app/api/stripe/route.js` marks orders paid or deletes canceled orders.

## Auth and authorization conventions
- Route handlers read identity with `getAuth(request)` from `@clerk/nextjs/server`.
- Client components call protected APIs with `Authorization: Bearer ${await getToken()}` (see `components/admin/AdminLayout.jsx`, `components/store/StoreLayout.jsx`).
- Admin authorization is email-list based (`middlewares/authAdmin.js`, `ADMIN_EMAIL` env var, comma-separated).
- Seller authorization resolves to `storeId` only when store status is `approved` (`middlewares/authSeller.js`).

## API and coding patterns to follow
- Use `NextResponse.json(...)` for API responses and return `{ error: ... }` payloads with explicit status codes on failures.
- For media uploads (store logos/product images), handlers accept `formData()`, upload via ImageKit, and persist optimized URLs (`app/api/store/create/route.js`, `app/api/store/product/route.js`).
- Prefer lowercased `Store.username` for lookups and uniqueness (`app/api/store/create/route.js`, `app/api/store/data/route.js`).
- Keep Prisma access centralized through `lib/prisma.js`; do not create ad-hoc Prisma clients in feature files.

## Background jobs and external integrations
- Inngest endpoint is `app/api/inngest/route.js`; functions live in `inngest/functions.js`.
- Clerk lifecycle events (`clerk/user.created|updated|deleted`) sync `User` rows via Inngest.
- Coupon expiry cleanup is event-driven (`app/coupon.expired`) with `step.sleepUntil(...)` before delete.
- OpenAI client is configured in `configs/openai.js`; ImageKit client in `configs/imagekit.js`.

## Local workflow (actual scripts)
- Install deps: `npm install`
- Generate Prisma client: `npx prisma generate` (also runs in `postinstall` and before build)
- Push schema: `npx prisma db push`
- Dev server: `npm run dev` (uses Turbopack)
- Production build: `npm run build`
- Lint: `npm run lint`

## Implementation guardrails for agents
- Keep features aligned to the existing route partitioning: public pages in `app/(public)`, seller in `app/store`, admin in `app/admin`.
- Reuse existing auth helpers (`authAdmin`, `authSeller`) instead of duplicating role checks.
- When adding protected client API calls, include Clerk bearer token header as shown in existing dashboard layouts.
- When changing order/cart/coupon behavior, update both API handlers and dependent Redux/UI consumers to keep state and DB behavior consistent.