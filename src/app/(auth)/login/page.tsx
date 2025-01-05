import LoginForm from "@/components/auth/forms/login-form";
import React from "react"
const LoginPage = () => {
    return (
        <div className="text-4xl flex items-center justify-center min-h-screen">
            <div><LoginForm/></div>
        </div>
    );
};

export default LoginPage;
