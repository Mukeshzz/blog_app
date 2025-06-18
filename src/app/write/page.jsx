"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.bubble.css";

const WritePage = () => {
  const { status } = useSession();

  const [open, setOpen] = useState(true);
  const [value, setValue] = useState("");
  const router = useRouter();

  console.log(status);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "authenticated") {
    router.push("/");
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Title"
        className="p-[50px] text-[64px] border-none outline-none bg-transparent placeholder:text-[#b3b3b1]"
      />
      <div className="flex gap-5 h-[700px] relative">
        <button
          onClick={() => setOpen(!open)}
          className="h-9 w-9 rounded-[50%] bg-transparent border border-[var(--textColor)] flex justify-center items-center cursor-pointer"
        >
          <Image src="/plus.png" alt="" height={16} width={16} />
        </button>
        {open && (
          <div className="flex gap-5 bg-[var(--bg)] absolute z-[999] w-full left-[50px]">
            <button className="h-9 w-9 rounded-[50%] bg-transparent border flex justify-center items-center cursor-pointer border-[#1a8917]">
              <Image src="/image.png" alt="" height={16} width={16} />
            </button>
            <button className="h-9 w-9 rounded-[50%] bg-transparent border flex justify-center items-center cursor-pointer border-[#1a8917]">
              <Image src="/external.png" alt="" height={16} width={16} />
            </button>
            <button className="h-9 w-9 rounded-[50%] bg-transparent border flex justify-center items-center cursor-pointer border-[#1a8917]">
              <Image src="/video.png" alt="" height={16} width={16} />
            </button>
          </div>
        )}
        <ReactQuill
          theme="bubble"
          value={value}
          onChange={setValue}
          placeholder="Tell your Story..."
          className="w-full"
        />
      </div>
      <button className="absolute top-[30px] right-[20px] py-[10px] px-[20px] border-none bg-[#1a8917] text-white cursor-pointer rounded-[20px]">
        Publish
      </button>
    </div>
  );
};

export default WritePage;
