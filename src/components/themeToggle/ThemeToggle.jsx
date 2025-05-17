"use client";
import { ThemeContext } from "@/context/ThemeContext";
import Image from "next/image";
import React, { useContext } from "react";

const ThemeToggle = () => {
  const { theme, toggle } = useContext(ThemeContext);
  console.log(theme);

  return (
    <div
      className={`flex justify-between items-center w-10 h-5 rounded-full cursor-pointer relative ${
        theme === "dark" ? "bg-white" : "bg-[#0f172a]"
      }`}
      onClick={toggle}
    >
      <Image src="/moon.png" alt="" width={14} height={14} />
      <div
        className={`h-[15px] w-[15px] rounded-[50%] absolute  ${
          theme === "dark" ? "left-1 bg-[#0f172a]" : "right-1 bg-white"
        }`}
      ></div>
      <Image src="/sun.png" alt="" width={14} height={14} />
    </div>
  );
};

export default ThemeToggle;
