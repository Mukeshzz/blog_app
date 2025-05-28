import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const MenuPosts = ({withImage}) => {
  return (
    <div className="flex flex-col gap-[35px] mt-[35px] mb-[60px]">
        <Link href="/" className="flex  items-center gap-5">
          {withImage && <div className="flex-1 relative aspect-[1/1]">
            <Image
              src="/p1.jpeg"
              alt=""
              fill
              className="rounded-[50px] border-[3px] border-gray-500 object-cover "
            />
          </div>}
          <div className="flex-4 flex flex-col gap-[5px]">
            <span className="px-[8px] py-[3px] rounded-[10px] text-[12px] text-white bg-[#ff7857] max-w-fit">
              Travel
            </span>
            <h3 className="text-[18px] font-[400px] text-[var(--softText)]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </h3>
            <div className="text-[12px]">
              <span>John Doe</span>
              <span className="text-gray-400">10.03.2025</span>
            </div>
          </div>
        </Link>
        <Link href="/" className="flex  items-center gap-5">
          {withImage && <div className="flex-1 relative aspect-[1/1]">
            <Image
              src="/p1.jpeg"
              alt=""
              fill
              className="rounded-[50px] border-[3px] border-gray-500 object-cover "
            />
          </div>}
          <div className="flex-4 flex flex-col gap-[5px]">
            <span className="px-[8px] py-[3px] rounded-[10px] text-[12px] text-white bg-[#ffb14f] max-w-fit">
              Culture
            </span>
            <h3 className="text-[18px] font-[400px] text-[var(--softText)]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </h3>
            <div className="text-[12px]">
              <span>John Doe</span>
              <span className="text-gray-400">10.03.2025</span>
            </div>
          </div>
        </Link>

        <Link href="/" className="flex  items-center gap-5">
          {withImage && <div className="flex-1 relative aspect-[1/1]">
            <Image
              src="/p1.jpeg"
              alt=""
              fill
              className="rounded-[50px] border-[3px] border-gray-500 object-cover "
            />
          </div>}
          <div className="flex-4 flex flex-col gap-[5px]">
            <span className="px-[8px] py-[3px] rounded-[10px] text-[12px] text-white bg-[#7fb881] max-w-fit">
              Food
            </span>
            <h3 className="text-[18px] font-[400px] text-[var(--softText)]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </h3>
            <div className="text-[12px]">
              <span>John Doe</span>
              <span className="text-gray-400">10.03.2025</span>
            </div>
          </div>
        </Link>
        <Link href="/" className="flex  items-center gap-5">
          {withImage && <div className="flex-1 relative aspect-[1/1]">
            <Image
              src="/p1.jpeg"
              alt=""
              fill
              className="rounded-[50px] border-[3px] border-gray-500 object-cover "
            />
          </div>}
          <div className="flex-4 flex flex-col gap-[5px]">
            <span className="px-[8px] py-[3px] rounded-[10px] text-[12px] text-white bg-[#ff7887] max-w-fit">
              Fashion
            </span>
            <h3 className="text-[18px] font-[400px] text-[var(--softText)]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </h3>
            <div className="text-[12px]">
              <span>John Doe</span>
              <span className="text-gray-400">10.03.2025</span>
            </div>
          </div>
        </Link>
      </div>
  )
}

export default MenuPosts
