import Image from "next/image";
import Link from "next/link";
import React from "react";

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/categories", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const CategoryList = async () => {
  const data = await getData();

  return (
    <div>
      <h1 className="my-[50px]">Popular Categories</h1>
      <div className="flex justify-between flex-wrap gap-[20px]">
        {data?.map((item) => (
          <Link
            href="/blog?cat=style"
            className="flex items-center justify-center gap-2.5 xl:w-[15%] lg:w-[20%] md:w-[25%] sm:w-[45%] w-full h-[80px] rounded-[10px] bg-[#57c4ff31]"
            key={item._id}
          >
            {item.img && (
              <Image
                src={item.img}
                alt=""
                height={32}
                width={32}
                className="rounded-[50%] max-w-none"
              />
            )}

            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
