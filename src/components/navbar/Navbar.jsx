import Image from "next/image";
import Link from "next/link";
import React from "react";
import ThemeToggle from "../themeToggle/ThemeToggle";
import AuthLinks from "../authLinks/AuthLinks";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center h-[100px]">
      <div className="flex-1 gap-2.5 hidden lg:flex">
        <Image src="/facebook.png" alt="" width={24} height={24}  />
        <Image src="/instagram.png" alt="" width={24} height={24} />
        <Image src="/youtube.png" alt="" width={24} height={24} />
      </div>
      <div className="flex-1 lg:text-center xl:text-4xl lg:text-[32px] md:text-2xl text-left font-bold font-poppins">
        blog spot
      </div>
      <div className="flex sm:items-center justify-end  flex-1 xl:gap-5 xl:text-xl text-[18px] gap-[15px]">
        <ThemeToggle />
        <Link href="/" className="sm:block hidden">Homepage</Link>
        <Link href="/" className="sm:block hidden">About</Link>
        <Link href="/" className="sm:block hidden">Contact</Link>
        <AuthLinks />
      </div>
    </div>
  );
};

export default Navbar;
