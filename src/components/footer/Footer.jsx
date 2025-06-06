import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="mt-[50px] flex flex-col sm:flex-row gap-[50px] items-center justify-between text-[var(--softText)] px-4 py-0 ">
      <div className="flex-1 flex flex-col gap-[14px]">
        <div className="flex items-center gap-[10px]">
          <Image src="/logo.png" alt="blog spot" width={50} height={50} />
          <h1 className="text-2xl">blogspot</h1>
        </div>
        <p className="font-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
          molestiae cum soluta ullam suscipit officiis dolore exercitationem
          similique error deserunt atque eum, obcaecati eius earum voluptates
          qui magnam. Dignissimos labore accusamus a?
        </p>
        <div className="mt-[10px] flex gap-[10px]">
          <Image src="/facebook.png" alt="" width={18} height={18} />
          <Image src="/instagram.png" alt="" width={18} height={18} />
          <Image src="/youtube.png" alt="" width={18} height={18} />
        </div>
      </div>
      <div className="flex-1 flex sm:justify-end justify-between text-[14px] sm:text-[16px] w-full lg:gap-[100px] gap-[50px] ">
        <div className="flex flex-col gap-[10px] font-light">
          <span className="font-bold">Links</span>
          <Link href="/">Homepage</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className="flex flex-col gap-[10px] font-light">
          <span className="font-bold">Tags</span>
          <Link href="/">Style</Link>
          <Link href="/blog">Fashion</Link>
          <Link href="/about">Coding</Link>
          <Link href="/contact">Travel</Link>
        </div>
        <div className="flex flex-col gap-[10px] font-light">
          <span className="font-bold">Social</span>
          <Link href="/">Facebook</Link>
          <Link href="/blog">Instagram</Link>
          <Link href="/about">Youtube</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
