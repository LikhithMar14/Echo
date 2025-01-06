import { NextResponse } from 'next/server'; // Import NextResponse
import authConfig from "./auth.config";
import NextAuth from "next-auth";
import { privateRoutes } from "./route";


const { auth } = NextAuth(authConfig);

export default auth(async (req) => {



  const isLoggedIn = !!req.auth;
  const { nextUrl } = req;
  const isPrivateRoutes = privateRoutes.includes(nextUrl.pathname);
  const isAuthRoute = nextUrl.pathname.includes("/login") || nextUrl.pathname.includes("/register");
  const isApiRoute = nextUrl.pathname.includes("/api");



  if (nextUrl.pathname.includes("/api/auth/signin")) {

    return NextResponse.redirect(`${nextUrl.origin}/login`);
  }

  if ((nextUrl.pathname.includes('profile') || nextUrl.pathname.includes('posts')) && !isLoggedIn) {
    return NextResponse.redirect(`${nextUrl.origin}/login`);
  }

  if (isApiRoute) {
    return NextResponse.next();
  }

  if (isLoggedIn && isAuthRoute) {
    return NextResponse.redirect(`${nextUrl.origin}/home`);
  }

  if (isAuthRoute && !isLoggedIn) {
    return NextResponse.next(); 
  }

  if (!isLoggedIn && isPrivateRoutes) {
    return NextResponse.redirect(`${nextUrl.origin}/login`);
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
};
