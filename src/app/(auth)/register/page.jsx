'use client'

import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';

const RegisterPage = () => {
    const { register,
        handleSubmit, formState: { errors } } = useForm()

    const handleRegisterFunc = async (data) => {
        const { email, name, password, image} = data

        const { data: res, error } = await authClient.signUp.email({
            name: name, // required
            email: email, // required
            password: password, // required
            image: image,
            callbackURL: "/",
        })
        console.log(res, error);
        if (error) {
            alert(error.message)
        }
        if (res) {
            alert("Signup successful")
            window.location.href='/'
        }
    }
    console.log(errors);
    return (
        <div className='container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100'>
            <div className='p-4 rounded-xl bg-white'>
                <h2 className='font-bold text-3xl text-center mb-6'>Register Your Account</h2>

                <form className='space-y-4' onSubmit={handleSubmit(handleRegisterFunc)}>

                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Name</legend>
                        <input type="text" className="input"
                            name='name'
                            placeholder="Type your name" {...register("name", { required: "name field is required" })} />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </fieldset>

                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Image url</legend>
                        <input
                            type="text"
                            className="input"
                            name='image'
                            placeholder="Paste your image url"
                            {...register("image",{required: 'image filed is required'})}
                        />
                        {errors.image && <p className='text-red-500'>{errors.image.message}</p>}
                    </fieldset>

                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Email</legend>
                        <input type="email" className="input"
                            name='email'
                            placeholder="Type your email" {...register("email", { required: "email field is required" })} />
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                    </fieldset>

                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Password</legend>
                        <input type="Password" className="input"
                            name='password'
                            placeholder="Type your Password" {...register("password", { required: "password field is required" })} />
                        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                    </fieldset>
                    <button className="btn w-full btn-primary">Register</button>
                </form>

            </div>
        </div>
    );
};

export default RegisterPage;