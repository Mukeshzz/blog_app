import Image from 'next/image'
import React from 'react'

const Featured = () => {
  return (
    <div className='mt-[30px]'> 
      <h1 className='xl:text-8xl lg:text-[64px] md:text-[46px] text-4xl font-light '><b>Lorem ipsum dolor sit!</b> amet consectetur adipisicing elit.</h1>
      <div className='flex items-center gap-[50px] mt-[60px]'> 
        <div className='hidden lg:block flex-1 h-[500px] relative'>
          <Image src="/p1.jpeg" alt='' fill className='object-cover'/>
        </div>
        <div className='flex-1 flex flex-col gap-4'>
          <h1 className='text-[40px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
          <p className='text-xl font-light text-[var(--softTextColor)]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe commodi est culpa ea sapiente amet animi quia. Perspiciatis, voluptatum optio?</p>
          <button className='py-4 px-5 border-none rounded-[5px] cursor-pointer w-max '>Read More</button>
        </div>
      </div>
    </div>
  )
}

export default Featured
