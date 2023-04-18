import React from 'react'
import { NavLink } from 'react-router-dom'

const BlogDetails = ({post}) => {
  return (
    <div>
      <div className='flex flex-col gap-y-1'>
        <NavLink to={`/blog/${post.id}`} >
          <span className='text-base sm:text-xl font-bold hover:underline'>{post.title}</span>
        </NavLink>
        <p className='text-sm'>
          By 
          <span className='italic'> {post.author} </span>
          on {" "}
          <NavLink to={`/categories/${post.category.replaceAll(" ","-")}`}>
              <span className='font-bold underline'>{post.category}</span> 
          </NavLink>
        </p>
        <p className='text-sm'> Posted on {post.date} </p>
        <p className='mt-3'> {post.content}</p>
        <div className='mb-7'>
          {post.tags.map( (tag, index) => (
              <NavLink key={index} to={`/tags/${tag.replaceAll(" ","-")}`}>
                  <span className='text-blue-700 font-bold text-[11px] sm:text-xs underline mr-2'>{`#${tag}`}</span>
              </NavLink>
          ) )}
        </div>
      </div>
    </div>
  )
}

export default BlogDetails
