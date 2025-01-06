"use server"

import { auth, signIn } from "@/auth"
import { AuthError } from "next-auth"


export async function googleAuthenticate(){
    try{


        const session = await auth();


        const response = await signIn('google')


    }catch(err){
        if(err instanceof AuthError)return 'google logIn failed'
        
        throw err
    }
}