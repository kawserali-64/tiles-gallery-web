"use client"

import { useState } from "react"
import { authClient } from "@/lib/auth-client"
import { useSession } from "@/lib/auth-client"

export default function UpdateProfilePage() {
    const { data: session } = useSession()
    const user = session?.user

    const [name, setName] = useState(user?.name || "")
    const [image, setImage] = useState(user?.image || "")

    const handleSubmit = async (e) => {
        e.preventDefault()

        await authClient.updateUser({
            name,
            image
        })

        alert("Profile Updated Successfully")
    }

    return (
        <div className="min-h-[80vh] flex items-center justify-center bg-slate-100 p-4">

            <form
                onSubmit={handleSubmit}
                className="bg-white p-6 rounded-xl shadow-md w-full max-w-md space-y-4"
            >

                <h2 className="text-xl font-bold text-center">Update Profile</h2>

                <input
                    className="input input-bordered w-full"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                />

                <input
                    className="input input-bordered w-full"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    placeholder="Image URL"
                />

                <button className="btn bg-[#824326] text-white w-full">
                    Save Changes
                </button>

            </form>
        </div>
    )
}