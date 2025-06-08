import Comments from "@/components/comments/Comments";
import Menu from "@/components/menu/Menu";
import Image from "next/image";
import React from "react";

const SinglePage = () => {
  return (
    <div>
      <div className="flex items-center gap-[50px]">
        <div className="flex-1">
          <h1 className="text-[36px] mb-[50px]  2xl:text-[64px] xl:text-[54px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <div className="flex items-center gap-5">
            <div className="h-[50px] w-[50px] relative">
              <Image
                src="/p1.jpeg"
                alt=""
                fill
                className="rounded-[50%] object-cover"
              />
            </div>
            <div className="flex flex-col gap-[5px] text-[var(--softText)]">
              <span className="text-[20px] font-medium">Rocky</span>
              <span>01.01.2025</span>
            </div>
          </div>
        </div>
        <div className="flex-1 h-[350px] relative hidden lg:block">
          <Image src="/p1.jpeg" alt="" fill className="object-cover" />
        </div>
      </div>
      <div className="flex gap-[50px]">
        <div className="flex- mt-[60px]">
          <div className="text-[20px] font-light mb-5">
            <p className="text-[18px]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Excepturi voluptates atque ad iste cum maiores quia sunt
              blanditiis obcaecati? Deleniti!
            </p>
            <h2>Lorem ipsum dolor sit amet.</h2>
            <p className="text-[18px]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Excepturi voluptates atque ad iste cum maiores quia sunt
              blanditiis obcaecati? Deleniti!
            </p>
            <p className="text-[18px]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Excepturi voluptates atque ad iste cum maiores quia sunt
              blanditiis obcaecati? Deleniti!
            </p>
          </div>
          <div>
            <Comments />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
