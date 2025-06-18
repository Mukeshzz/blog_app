import CardList from "@/components/cardList/CardList";
import Menu from "@/components/menu/Menu";
import React from "react";

const BlogPage = ({ searchParams }) => {
  const page = parseInt(searchParams.page) || 1;

  const { cat } = searchParams;

  return (
    <div>
      <h1 className="bg-[coral] text-white text-center py-[5px] px-[10px] capitalize">
        {cat} Blog
      </h1>
      <div className="flex gap-[50px] ">
        <CardList page={page} cat={cat}/>
        <Menu />
      </div>
    </div>
  );
};

export default BlogPage;
