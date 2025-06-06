import Image from "next/image";
import Link from "next/link";
import React from "react";
import MenuPosts from "../menuPosts/MenuPosts";
import MenuCategories from "../menuCategories/MenuCategories";

const Menu = () => {
  return (
    <div className="flex-2 mt-[60px] hidden lg:flex flex-col">
      <h2 className="text-gray-600 text-[16px] font-[400px]">"What's hot"</h2>
      <h1 className="text-[28px]">Most Popular</h1>
      <MenuPosts />
      <h2 className="text-gray-600 text-[16px] font-[400px]">
        Discover by topic
      </h2>
      <h1 className="text-[28px]">Categories</h1>
      <MenuCategories />
      <h2 className="text-gray-600 text-[16px] font-[400px]">
        Chosen by the editor
      </h2>
      <h1 className="text-[28px]">Editors Pick</h1>
      <MenuPosts withImage={true}/>
    </div>
  );
};

export default Menu;
