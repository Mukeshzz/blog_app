"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React, { useState } from "react";

const AuthLinks = () => {
 

  const [open, setOpen] = useState(false);

  const {status} = useSession()

  return (
    <>
      {status === "unauthenticated" ? (
        <Link href="/login" className="hidden sm:block">Login</Link>
      ) : (
        <>
          <Link href="/write" className="hidden sm:block">Write</Link>
          <span onClick={signOut}>Logout</span>
        </>
      )}

      {/* Humburger Button */}
      <div className="w-5 h-4 flex flex-col justify-between cursor-pointer sm:hidden " onClick={() => setOpen(!open)}>
        <div className="w-full h-[2px] bg-[var(--textColor)]"></div>
        <div className="w-full h-[2px] bg-[var(--textColor)]"></div>
        <div className="w-full h-[2px] bg-[var(--textColor)]"></div>
      </div>
      {open && (
        <div className="absolute top-[100px] left-0 bg-[var(--bg)] h-[cal(100vh-100px)] w-full flex flex-col items-center justify-center gap-[50px] text-4xl sm:hidden"> 
          <Link href="/homepage">Homepage</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          {status === "unauthenticated" ? (
            <Link href="/login">Login</Link>
          ) : (
            <>
              <Link href="/write">Write</Link>
              <span onClick={signOut}>Logout</span>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default AuthLinks;
