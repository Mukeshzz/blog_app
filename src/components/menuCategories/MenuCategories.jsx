import Link from "next/link";
import React from "react";

const MenuCategories = () => {
  return (
    <div className="flex flex-wrap mt-[35px] mb-[60px] gap-5">
      <Link className="py-[10px] px-[25px] rounded-[10px] text-[14px] bg-[#57c4ff31]" href="/blog?cat=style">
        Style
      </Link>
      <Link className="py-[10px] px-[25px] rounded-[10px] text-[14px] bg-[#da85c731]" href="/blog?cat=style">
        Fashion
      </Link>
      <Link className="py-[10px] px-[25px] rounded-[10px] text-[14px] bg-[#7fb88133]" href="/blog?cat=style">
        Food
      </Link>
      <Link className="py-[10px] px-[25px] rounded-[10px] text-[14px] bg-[#ff795736]" href="/blog?cat=style">
        Culture
      </Link>
      <Link className="py-[10px] px-[25px] rounded-[10px] text-[14px] bg-[#ffb04f45]" href="/blog?cat=style">
        Travel
      </Link>
      <Link className="py-[10px] px-[25px] rounded-[10px] text-[14px] bg-[#5e4fff31]" href="/blog?cat=style">
        Coding
      </Link>
    </div>
  );
};

export default MenuCategories;
