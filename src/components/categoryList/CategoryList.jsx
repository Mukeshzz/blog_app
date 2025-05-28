import Image from "next/image";
import Link from "next/link";
import React from "react";

const CategoryList = () => {
  return (
    <div>
      <h1 className="my-[50px]">Popular Categories</h1>
      <div className="flex justify-between flex-wrap gap-[20px]"> 
        <Link href="/blog?cat=style" className="flex items-center justify-center gap-2.5 xl:w-[15%] lg:w-[20%] md:w-[25%] sm:w-[45%] w-full h-[80px] rounded-[10px] bg-[#57c4ff31]"> 
          <Image src="/style.png" alt="" height={32} width={32} className="rounded-[50%] max-w-none"/>
          Style
        </Link>
        <Link href="/blog?cat=style" className="flex items-center justify-center gap-2.5 xl:w-[15%] lg:w-[20%] md:w-[25%] sm:w-[45%] w-full h-[80px] rounded-[10px] bg-[#da85c731]">
          <Image src="/fashion.png" alt="" height={32} width={32} className="rounded-[50%]"/>
          Fashion
        </Link>
        <Link href="/blog?cat=style" className="flex items-center justify-center gap-2.5 xl:w-[15%] lg:w-[20%] md:w-[25%] sm:w-[45%] w-full h-[80px] rounded-[10px] bg-[#7fb88133]">
          <Image src="/food.png" alt="" height={32} width={32} className="rounded-[50%]"/>
          Food
        </Link>
        <Link href="/blog?cat=style" className="flex items-center justify-center gap-2.5 xl:w-[15%] lg:w-[20%] md:w-[25%] sm:w-[45%] w-full h-[80px] rounded-[10px] bg-[#ff795736]">
          <Image src="/travel.png" alt="" height={32} width={32} className="rounded-[50%]"/>
          Travel
        </Link>
        <Link href="/blog?cat=style" className="flex items-center justify-center gap-2.5 xl:w-[15%] lg:w-[20%] md:w-[25%] sm:w-[45%] w-full h-[80px] rounded-[10px] bg-[#ffb04f45]">
          <Image src="/culture.png" alt="" height={32} width={32} className="rounded-[50%]"/>
          Culture
        </Link>
        <Link href="/blog?cat=style" className="flex items-center justify-center gap-2.5 xl:w-[15%] lg:w-[20%] md:w-[25%] sm:w-[45%] w-full h-[80px] rounded-[10px] bg-[#5e4fff31]">
          <Image src="/coding.png" alt="" height={32} width={32} className="rounded-[50%]"/>
          Coding
        </Link>
      </div>
    </div>
  );
};

export default CategoryList;
