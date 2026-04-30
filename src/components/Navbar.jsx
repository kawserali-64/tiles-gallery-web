'use client'

import Link from 'next/link';
import React from 'react';
import { authClient } from "@/lib/auth-client"
import Image from 'next/image';

const Navbar = () => {
  const { data: session , isPending } = authClient.useSession()
  const user = session?.user;

  const handleLogout = async () => {
    await authClient.signOut();
  };

  const links = (
    <>
      <li><Link href="/">Home</Link></li>
      <li><Link href="/allTiles">All Tiles</Link></li>
      <li><Link href="/profile">My Profile</Link></li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-md px-4">
      
      {/* START */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            ☰
          </div>

          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow">
            {links}
          </ul>
        </div>

        <a className="btn btn-ghost text-xl font-bold">Tiles</a>
      </div>

      {/* CENTER */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}
        </ul>
      </div>

      {/* END */}
      <div className="navbar-end flex items-center gap-3">

        {isPending ?'loading...': user ? (
          <>
            {/* User info */}
            <div className="flex items-center gap-2">
              <Image
                src={user.image || "/default-user.png"}
                alt="user"
                width={50}
                height={50}
                className="rounded-full object-cover border"
              />

              <span className="text-sm font-medium hidden md:block">
                {user.name}
              </span>
            </div>

            {/* Logout */}
            <button className="btn btn-sm btn-primary"
              onClick={async()=> await authClient.signOut()} 
            >
              Logout
            </button>
          </>
        ) : (
          <Link href="/login">
            <button className="btn btn-sm btn-primary">
              Login
            </button>
          </Link>
        )}

      </div>
    </div>
  );
};

export default Navbar;