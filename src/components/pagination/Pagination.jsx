import React from "react";

const Pagination = () => {
  return (
    <div className="flex justify-between">
      <button className="w-[100px] border-none p-4 bg-[crimson] text-white cursor-pointer">
        Previous
      </button>
      <button className="w-[100px] border-none p-4 bg-[crimson] text-white cursor-pointer">
        Next
      </button>
    </div>
  );
};

export default Pagination;
