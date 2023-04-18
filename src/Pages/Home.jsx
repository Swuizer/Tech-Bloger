import React from 'react'
import Blogs from '../components/Blogs'
import Header from '../components/Header'
import Pagination from '../components/Pagination'

const Home = () => {
  return (
    <div className='mt-20 select-none'>
      <Header/>
      <div className='w-11/12 max-w-[630px] mx-auto'>
        <Blogs/>
        <Pagination/>
      </div>
    </div>
  )
}

export default Home
