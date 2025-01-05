import authConfig from "./auth.config"
import NextAuth from "next-auth"
import { privateRoutes } from "./route"
// Use only one of the two middleware options below
// 1. Use middleware directly
// export const { auth: middleware } = NextAuth(authConfig)
 
// 2. Wrapped middleware option
const { auth } = NextAuth(authConfig)
export default auth(async (req) => {
  // Your custom middleware logic goes here
  console.log("Middleware call",req.nextUrl.pathname)
  console.log(req.auth);
  const url = "http://localhost:3000"
  const isLoggedIn = !!req.auth;

  const  { nextUrl } = req;
  const isPrivateRoutes = privateRoutes.includes(nextUrl.pathname);
  const isAuthRoute = nextUrl.pathname.includes("/login") || nextUrl.pathname.includes("/register");
  const isApiRoute = nextUrl.pathname.includes("/api");
  const slug  =(nextUrl.pathname.split('/'))
  const val = slug[1]

  console.log(val)
  if(nextUrl.pathname.includes("/api/auth/signin")){
    console.log("I BLOCKED BROOOO")
    console.log("I BLOCKED BROOOO")
    return Response.redirect(`${url}/login`)
  }
  if((nextUrl.pathname.includes('profile') || nextUrl.pathname.includes('posts')) && !isLoggedIn){
    return Response.redirect(`${url}/login`)
  }
  if(isApiRoute){
    return;
  }
  if(isLoggedIn && isAuthRoute){
    return Response.redirect(`${url}/home`);
  }

  if(isAuthRoute && !isLoggedIn){
    return
  }
  if(!isLoggedIn && isPrivateRoutes){
    return Response.redirect(`${url}/login`)
  }


})

export const config = {
    matcher: [

      // Skip Next.js internals and all static files, unless found in search params
      '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
      // Always run for API routes
      '/(api|trpc)(.*)',
    ],
  }