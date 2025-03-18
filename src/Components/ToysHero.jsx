import React from 'react'
import hero from '../assets/toys/hero.jpg'

function ToysHero() {
  return (
    <>
    <div className='flex flex-col w-full h-90 mt-5 sm:px-40 px-4'>
        <h2 className='text-2xl py-4 font-bold'>WHERE DESIGN MEETS ELEGANCE</h2>
        <img className='object-cover h-full w-full rounded-2xl' src={hero} alt="" />
    </div>
    <div className='px-5 sm:px-50'>
        <hr className='rounded-full h-1 w-full bg-amber-900 mt-4' />
    </div>
    </>
  )
}

export default ToysHero
