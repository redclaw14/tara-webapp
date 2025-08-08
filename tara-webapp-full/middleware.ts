// middleware.ts
import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware({
  // Routes that should be public (no auth required)
  publicRoutes: ["/", "/sign-in(.*)", "/sign-up(.*)", "/api/webhooks/(.*)"],
});

export const config = {
  matcher: [
    // Skip Next internals & static files
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
