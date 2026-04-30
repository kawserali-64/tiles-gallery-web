import Link from 'next/link';
import React from 'react';

const LoginPage = () => {
    return (
        <div className='container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100'>
            <div className='p-4 rounded-xl bg-white'>
                <h2 className='font-bold text-3xl text-center mb-6'>Login Your Account</h2>

                <form className='space-y-4'>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Email</legend>
                        <input type="email" className="input" placeholder="Type your email" />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Password</legend>
                        <input type="Password" className="input" placeholder="Type your Password" />
                    </fieldset>
                    <button className="btn w-full btn-primary">Login</button>
                </form>
                <p>Don't have an account? <Link href={'/'}>register</Link></p>
            </div>
        </div>
    );
};

export default LoginPage;