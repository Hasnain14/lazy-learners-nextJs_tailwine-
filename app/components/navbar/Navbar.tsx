import Link from "next/link";
import React from "react";
import Image from "next/image";
import profile from "../../../public/lll.png";
import p from "../../../public/p.jpg";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-300">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link href="\">Homepage</Link>
              </li>
              <li>
                <Link href="\course">Our Courses</Link>
              </li>
              <li>
                <Link href="\about">About</Link>
              </li>
            </ul>
          </div>
        </div>
        <Link href="/">
          <div className="navbar-center flex">
            <Image className="w-8 h-8 pr-2" src={profile} alt="image" />
            <h1 className="text-2xl font-extrabold font-Audiowide text-red-700">
              Lezy <span className="text-blue-950 font-cursive">Learnes</span>
            </h1>
          </div>
        </Link>
        <div className="navbar-end">
          {/* profile section */}
          <div className="hidden dropdown dropdown-end pr-5 md:block">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <Image src={p} alt="t" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link className="justify-between" href="/profile">
                  Profile
                </Link>
              </li>
              <li>
                <Link href="/setting">Settings</Link>
              </li>
              <li>
                <Link href="/logOut">Logout</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
