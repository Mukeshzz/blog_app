import Image from "next/image";
import Link from "next/link";
import React from "react";

const Comments = () => {
  const status = true;

  return (
    <div className="mt-[50px]">
      <h1 className="text-[var(--softText)] mb-[30px]">Comments</h1>
      {status === true ? (
        <div className="flex items-center justify-between gap-[30px]">
          <textarea placeholder="write a comment..." className="p-5 w-full" />
          <button className="py-4 px-5 bg-[teal] text-white font-bold border-none rounded-[5px] cursor-pointer">
            Send
          </button>
        </div>
      ) : (
        <Link href="/login">Login to write a comment</Link>
      )}
      <div className="mt-[50px]">
        <div className="mb-[50px]">
          <div className="flex items-center gap-5 mb-5">
            <Image
              src="/p1.jpeg"
              height={50}
              width={50}
              alt=""
              className="rounded-[50%] object-cover"
            />
            <div className="flex flex-col gap-[5px] text-[var(--softText)]">
              <span className="font-medium">Rocky</span>
              <span className="text-[14px]">01.01.2025</span>
            </div>
          </div>
          <p className="text-[18px] font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            quaerat quibusdam distinctio, velit magnam quidem totam consequatur
            voluptatem illo cupiditate praesentium aliquam et harum accusantium
            consequuntur voluptatibus, repudiandae corporis. Eos, qui
            consequuntur.
          </p>
        </div>
        <div className="mb-[50px]">
          <div className="flex items-center gap-5 mb-5">
            <Image
              src="/p1.jpeg"
              height={50}
              width={50}
              alt=""
              className="rounded-[50%] object-cover"
            />
            <div className="flex flex-col gap-[5px] text-[var(--softText)]">
              <span className="font-medium">Rocky</span>
              <span className="text-[14px]">01.01.2025</span>
            </div>
          </div>
          <p className="text-[18px] font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            quaerat quibusdam distinctio, velit magnam quidem totam consequatur
            voluptatem illo cupiditate praesentium aliquam et harum accusantium
            consequuntur voluptatibus, repudiandae corporis. Eos, qui
            consequuntur.
          </p>
        </div>
        <div className="mb-[50px]">
          <div className="flex items-center gap-5 mb-5">
            <Image
              src="/p1.jpeg"
              height={50}
              width={50}
              alt=""
              className="rounded-[50%] object-cover"
            />
            <div className="flex flex-col gap-[5px] text-[var(--softText)]">
              <span className="font-medium">Rocky</span>
              <span className="text-[14px]">01.01.2025</span>
            </div>
          </div>
          <p className="text-[18px] font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            quaerat quibusdam distinctio, velit magnam quidem totam consequatur
            voluptatem illo cupiditate praesentium aliquam et harum accusantium
            consequuntur voluptatibus, repudiandae corporis. Eos, qui
            consequuntur.
          </p>
        </div>
        <div className="mb-[50px]">
          <div className="flex items-center gap-5 mb-5">
            <Image
              src="/p1.jpeg"
              height={50}
              width={50}
              alt=""
              className="rounded-[50%] object-cover"
            />
            <div className="flex flex-col gap-[5px] text-[var(--softText)]">
              <span className="font-medium">Rocky</span>
              <span className="text-[14px]">01.01.2025</span>
            </div>
          </div>
          <p className="text-[18px] font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            quaerat quibusdam distinctio, velit magnam quidem totam consequatur
            voluptatem illo cupiditate praesentium aliquam et harum accusantium
            consequuntur voluptatibus, repudiandae corporis. Eos, qui
            consequuntur.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Comments;
