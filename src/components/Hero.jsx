import React, { useRef, useEffect } from 'react'
import TypeData from './TypeData'
import HomeStyle from './Hero.css'

const Hero = (props) => {
  const homeElementRef = useRef(null);
  
  useEffect( () => {
    setTimeout( () => {
      if (homeElementRef.current) {
        homeElementRef.current.style.animation = 'scaleImage 2s linear infinite';
      }
    },5000)
  },[props.slide === false])

  return (
    <div  ref={homeElementRef} className="home">

      <div className='bg-slate-100 w-screen h-screen flex pb-20 flex-col
      justify-center items-center'>
        <h1 className='text-slate-600 text-3xl font-bold -mb-5 textTo'>Tech Bloger</h1>
        <TypeData/>
      </div>

    </div>
  )
}

export default Hero