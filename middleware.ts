import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isAuthenticate = createRouteMatcher(["/profile(.*)"]);

export default clerkMiddleware((auth, req) => {
  if (isAuthenticate(req)) auth().protect();
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
