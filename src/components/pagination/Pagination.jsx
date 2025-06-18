"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Pagination = ({ page, hasPrev, hasNext }) => {
  const router = useRouter();

  return (
    <div className="flex justify-between">
      <button
        className="w-[100px] border-none p-4 bg-[crimson] text-white cursor-pointer disabled:bg-[#ff7f5052] disabled:cursor-not-allowed"
        onClick={() => router.push(`?page=${page - 1}`)}
        disabled={!hasPrev}
      >
        Previous
      </button>
      <button
        className="w-[100px] border-none p-4 bg-[crimson] text-white cursor-pointer disabled:bg-[#ff7f5052] disabled:cursor-not-allowed"
        onClick={() => router.push(`?page=${page + 1}`)}
        disabled={!hasNext}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
