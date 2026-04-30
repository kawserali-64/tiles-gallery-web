'use client'

import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';
import { FcGoogle } from "react-icons/fc";

const LoginPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()

    const handleLoginFunc = async (data) => {
        const { data: res, error } = await authClient.signIn.email({
            email: data.email,
            password: data.password,
            rememberMe: true,
            callbackURL: "/",
        });

        if (error) {
            alert(error.message)
        }
    }
    const handleGoogleSignin = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });

        console.log(data);
    }
    return (
        <div className='container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100'>
            <div className='p-6 rounded-xl bg-white w-[350px] shadow-md'>

                <h2 className='font-bold text-3xl text-center mb-6'>Login Your Account</h2>

                <form className='space-y-4' onSubmit={handleSubmit(handleLoginFunc)}>

                    {/* Email */}
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Email</legend>
                        <input
                            type="email"
                            className="input w-full"
                            placeholder="Type your email"
                            {...register("email", { required: "email field is required" })}
                        />
                        {errors.email && <p className='text-red-500 text-sm'>{errors.email.message}</p>}
                    </fieldset>

                    {/* Password */}
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Password</legend>
                        <input
                            type="password"
                            className="input w-full"
                            placeholder="Type your Password"
                            {...register("password", { required: "password field is required" })}
                        />
                        {errors.password && <p className='text-red-500 text-sm'>{errors.password.message}</p>}
                    </fieldset>

                    {/* Login button */}
                    <button className="btn w-full btn-primary">Login</button>
                </form>

                {/* Divider */}
                <div className="divider">OR</div>

                {/* Social buttons */}
                <div className="space-y-3">

                    {/* Google */}
                    <button className="btn w-full flex items-center justify-center gap-2 border border-gray-300 bg-white hover:bg-gray-100 text-black"
                        onClick={handleGoogleSignin}>
                        <FcGoogle size={20} />
                        Continue with Google
                    </button>
                </div>

                <p className='mt-4 text-center text-sm'>
                    Don't have an account?{" "}
                    <Link href={'/register'} className='text-blue-500 font-medium'>
                        Register
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default LoginPage;