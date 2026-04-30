'use client'

import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import Link from 'next/link';

const MyProfile = () => {
    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;

    if (isPending) {
        return (
            <div className="flex justify-center items-center min-h-[80vh]">
                <span className="loading loading-spinner loading-lg"></span>
            </div>
        );
    }

    if (!user) {
        return (
            <div className="text-center mt-20">
                <h2 className="text-xl font-semibold">You are not logged in</h2>
                <Link href="/login" className="btn btn-primary mt-4">Go to Login</Link>
            </div>
        );
    }

    return (
        <div className="min-h-[80vh] bg-slate-100 flex justify-center items-center p-4">

            <div className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-md text-center">

                {/* User Image */}
                <div className="flex justify-center mb-4">
                    <div className="w-28 h-28 relative">
                        <Image
                            src={user.image || "/default-user.png"}
                            alt="user image"
                            fill
                            className="rounded-full object-cover border-4 border-primary"
                        />
                    </div>
                </div>

                {/* Name */}
                <h2 className="text-2xl font-bold">{user.name || "No Name"}</h2>

                {/* Email */}
                <p className="text-gray-500 mt-1">{user.email}</p>

                {/* Extra Info */}
                <div className="mt-4 text-left space-y-2">
                    <p><span className="font-semibold">User ID:</span> {user.id}</p>
                    <p><span className="font-semibold">Verified:</span> {user.emailVerified ? "Yes" : "No"}</p>
                </div>

                {/* Update Button */}
                <Link href="/profile/update">
                    <button className="btn btn-primary w-full mt-6">
                        Update Profile
                    </button>
                </Link>

            </div>
        </div>
    );
};

export default MyProfile;