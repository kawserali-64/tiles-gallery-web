'use client';

import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';
import { authClient } from "@/lib/auth-client";
import Image from 'next/image';

const Navbar = () => {
  const pathname = usePathname();

  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  const isActive = (path) => pathname === path;

  const handleLogout = async () => {
    await authClient.signOut();
  };

  const linkClass = (path) =>
    `px-2 py-1 rounded-md transition ${
      isActive(path)
        ? "text-primary font-semibold border-b-2 border-primary"
        : "hover:text-primary"
    }`;

  const links = (
    <>
      <li>
        <Link href="/" className={linkClass("/")}>
          Home
        </Link>
      </li>

      <li>
        <Link href="/allTiles" className={linkClass("/allTiles")}>
          All Tiles
        </Link>
      </li>

      <li>
        <Link href="/profile" className={linkClass("/profile")}>
          My Profile
        </Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-md px-4 sticky top-0 z-50">

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

        <Link href="/" className="btn btn-ghost text-xl font-bold">
          Tiles
        </Link>
      </div>

      {/* CENTER */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}
        </ul>
      </div>

      {/* END */}
      <div className="navbar-end flex items-center gap-3">

        {isPending ? (
          <span className="text-sm">loading...</span>
        ) : user ? (
          <>
            {/* User */}
            <div className="flex items-center gap-2">
              <div className="w-[42px] h-[42px] relative rounded-full overflow-hidden border">
                <Image
                  src={user.image || "/default-user.png"}
                  alt="user"
                  fill
                  className="object-cover"
                />
              </div>

              <span className="text-sm font-medium hidden md:block">
                {user.name}
              </span>
            </div>

            {/* Logout */}
            <button
              className="btn btn-sm btn-primary"
              onClick={handleLogout}
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