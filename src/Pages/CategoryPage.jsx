import React from 'react'
import Header from '../components/Header'
import { useLocation, useNavigate } from 'react-router-dom';
import Pagination from '../components/Pagination';
import Blogs from '../components/Blogs';

const CategoryPage = () => {

    const navigation = useNavigate();
    const location = useLocation();
    const category = location.pathname.split("/").at(-1);

  return (
    <div className='w-11/12 max-w-[630px] mx-auto select-none'>
      <Header/>
      <div className='flex items-center mt-20'>
        <button
        onClick={() => navigation(-1)}
        className='border py-1 px-4 mr-3 shadow rounded-sm bg-gray-100'
        >
            Back
        </button>
        <h2 className='font-extrabold sm:font-bold sm:text-lg'> 
            Blogs On <span className='underline'>{category}</span>
        </h2>
      </div>
      <Blogs/>
      <Pagination/>
    </div>
  )
}

export default CategoryPage
