"use client";
import Image from "next/image";
import React, { useState } from "react";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.bubble.css";

const WritePage = () => {
  const [open, setOpen] = useState(true);
  const [value, setValue] = useState("");

  return (
    <div>
      <input type="text" placeholder="Title" />
      <div className="flex gap-5 h-[700px]">
        <button
          onClick={() => setOpen(!open)}
          className="h-9 w-9 rounded-[50%] bg-transparent border border-[var(--textColor)] flex justify-center items-center cursor-pointer"
        >
          <Image src="/plus.png" alt="" height={16} width={16} />
        </button>
        {open && (
          <div>
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
    </div>
  );
};

export default WritePage;
