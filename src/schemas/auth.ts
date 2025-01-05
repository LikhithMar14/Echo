import {z} from "zod"


export const RegistrationSchema = z.object({
    username:z.string().min(1,"Username should not be empty").max(50,"Username should not be more than 50 letters"),
    email:z.string().email("Invalid email id"),
    password:z.string().min(8,"Password should contain atleast 8 characters"),
    confirmPassword:z.string()
}).refine((data)=> data.password === data.confirmPassword, {
    message:"Passwords do not match",
    path:["confirm password"]
})

export const LoginSchema = z.object({
    username:z.string().min(1,"Username should not be empty").max(50,"Username should not be more than 50 letters"),
    password:z.string().min(8,"Password should contain atleast 8 characters"),
})

export type RegistrationType = z.infer<typeof RegistrationSchema>
export type LoginType = z.infer<typeof LoginSchema>