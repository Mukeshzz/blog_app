"use client";
import Link from "next/link";
import React, { useState } from "react";

const AuthLinks = () => {
  const auth = false;

  const [open, setOpen] = useState(false);

  return (
    <>
      {auth === false ? (
        <Link href="/login" className="hidden sm:block">Login</Link>
      ) : (
        <>
          <Link href="/write" className="hidden sm:block">Write</Link>
          <span>Logout</span>
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
          {auth === false ? (
            <Link href="/login">Login</Link>
          ) : (
            <>
              <Link href="/write">Write</Link>
              <span>Logout</span>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default AuthLinks;
