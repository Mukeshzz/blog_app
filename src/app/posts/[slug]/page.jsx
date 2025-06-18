import Comments from "@/components/comments/Comments";
import Menu from "@/components/menu/Menu";
import Image from "next/image";
import React from "react";

const getData = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/posts/${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const SinglePage = async ({ params }) => {
  const { slug } = params;

  const data = await getData(slug);

  return (
    <div>
      <div className="flex items-center gap-[50px]">
        <div className="flex-1">
          <h1 className="text-[36px] mb-[50px]  2xl:text-[64px] xl:text-[54px]">
            {data?.title}
          </h1>
          <div className="flex items-center gap-5">
            {data?.img && (
              <div className="h-[50px] w-[50px] relative">
                <Image
                  src={data.img}
                  alt=""
                  fill
                  className="rounded-[50%] object-cover"
                />
              </div>
            )}

            <div className="flex flex-col gap-[5px] text-[var(--softText)]">
              <span className="text-[20px] font-medium">Rocky</span>
              <span>01.01.2025</span>
            </div>
          </div>
        </div>
        {data?.img && (
          <div className="flex-1 h-[350px] relative hidden lg:block">
            <Image src={data.img} alt="" fill className="object-cover" />
          </div>
        )}
      </div>
      <div className="flex gap-[50px]">
        <div className="flex-5 mt-[60px]">
          <div
            className="text-[20px] font-light"
            dangerouslySetInnerHTML={{ __html: data?.desc || "" }}
          />
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
