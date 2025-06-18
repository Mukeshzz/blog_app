import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = ({ key, item }) => {
  return (
    <div className="mb-[50px] flex gap-[50px] items-center" key={key}>
      {item.img && (
        <div className="flex-1 h-[350px] relative hidden xl:flex">
          <Image src={item.img} alt="" fill className="object-cover" />
        </div>
      )}
      <div className="flex-1 flex flex-col gap-[30px]">
        <div>
          <span className="text-[gray]">
            {item.createdAt.substring(0, 10)} -{" "}
          </span>
          <span className="text-[crimson] font-medium">{item.catSlug}</span>
        </div>
        <Link href={`/posts/${item.slug}`}>
          <h1>{item.title}</h1>
        </Link>
        <p className="text-[18px] font-light text-[var(--softText)]">
          {item.desc.substring(0, 60)}
        </p>
        <Link
          href={`/posts/${item.slug}`}
          className="border-b-[1px] border-[crimson] w-max py-0.5"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
