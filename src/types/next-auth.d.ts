import NextAuth, { DefaultSession } from "next-auth"


declare module "next-auth"{
    interface Session{
        user:{
            isOauth:boolean,
            location:string,
            username:string,
            webiste:string
        } & DefaultSession["user"];
    }
}