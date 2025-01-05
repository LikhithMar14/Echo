"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from 'next/navigation';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema, LoginType } from "@/schemas/auth";
import { login } from "@/actions/auth.actions";
import CardWrapper from "../card-wrapper";
import { Input } from "@/components/ui/input";
import { FormSuccess } from "../form-submit";
import { FormError } from "../form-error";
import { Loader2 } from "lucide-react";
import GoogleLogin from "../google-login";

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const router = useRouter();

  const form = useForm<LoginType>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      username: "",
      password: "",

    },
  });

  const onSubmit = async (data: LoginType) => {
    console.log("Submission Triggered");
    setError("");
    setSuccess("");
    setLoading(true);

    try {
      const response = await login(data);
      if (response?.error) {
        form.reset();
        setError(response.error);
      } else if (response?.success) {
        form.reset();
        setSuccess("Login Successfully");
        router.push('/home')
        
      }
    
    } catch (err) {
      setError("An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <CardWrapper
      headerLabel="to Amplify your taughts"
      title="Login"
      backButtonHref="/register"
      backButtonLabel="Don't have an account"
      showSocial
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div >
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="John Doe" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Enter your password" type="password" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormSuccess message={success} />
          <FormError message={error} />

          <Button type="submit" className="w-full" disabled={loading} variant={"orange"} >
            {loading ? (
              <>
                <Loader2 className="animate-spin h-4 w-4 mr-2" />
                Please wait
              </>
            ) : (
              "Login"
            )}
          </Button>
        </form>
      </Form>
      <GoogleLogin />
    </CardWrapper>
  );
};

export default LoginForm;
