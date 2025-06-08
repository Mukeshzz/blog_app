import CardList from '@/components/cardList/CardList'
import Menu from '@/components/menu/Menu'
import React from 'react'

const BlogPage = () => {
  return (
    <div>
      <h1 className='bg-[coral] text-white text-center py-[5px] px-[10px]'>Style Blog</h1>
      <div className='flex gap-[50px] '>
        <CardList />
        <Menu />
      </div>
    </div>
  )
}

export default BlogPage
