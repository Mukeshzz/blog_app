import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = () => {
  return (
    <div className="mb-[50px] flex gap-[50px] items-center">
      <div className="flex-1 h-[350px] relative hidden xl:flex">
        <Image src="/p1.jpeg" alt="" fill className="object-cover"/>
      </div>
      <div className="flex-1 flex flex-col gap-[30px]">
        <div>
          <span className="text-[gray]">11.02.2024 - </span>
          <span className="text-[crimson] font-medium">CULTURE</span>
        </div>
        <Link href="/">
          <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h1>
        </Link>
        <p className="text-[18px] font-light text-[var(--softText)]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos
          debitis nam et sit dolorem. Non aliquam voluptates molestias, illo
          officia libero? Quia iste est harum, deserunt quidem dolore optio
          inventore.
        </p>
        <Link href="/" className="border-b-[1px] border-[crimson] w-max py-0.5">Read More</Link>
      </div>
    </div>
  );
};

export default Card;
