import LoginForm from "@/components/auth/forms/login-form";
import React from "react"
const LoginPage = () => {
    return (
<div className="text-4xl flex items-center justify-center  bg-gradient-to-b from-[#2d046e] to-[#ff8c00] text-white rounded-3xl max-h-[500px] w-[300px]">
    <div>
        <LoginForm />
    </div>
</div>




    );
};

export default LoginPage;
