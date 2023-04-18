import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import Pagination from '../components/Pagination';
import Blogs from '../components/Blogs';


const TagPage = () => {

    const navigation = useNavigate();
    const location = useLocation();
    const tag = location.pathname.split("/").at(-1).replace("-"," ");
  return (
    <div className='w-11/12 max-w-[630px] mx-auto select-none'>
        <Header/>
        <div className='flex items-center mt-20'>
            <button 
            onClick={() => navigation(-1)}
            className='border py-1 px-4 mr-3 shadow rounded-sm bg-gray-100'
            >
                back
            </button>
            <h2 className='font-bold'>
                Blogs Tagged <span className='text-blue-700 underline font-bold'>#{tag}</span>
            </h2>
        </div>
        <Blogs/>
        <Pagination/>
      
    </div>
  )
}

export default TagPage
