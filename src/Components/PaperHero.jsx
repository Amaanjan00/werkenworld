import React from 'react'
import hero from '../assets/paper/p1.jpg'

function PaperHero() {
  return (
    <>
    <div className='flex flex-col w-full h-90 mt-10 sm:px-40 px-4'>
        <h2 className='text-4xl py-4 font-bold'>RECYCLED PAPER CRAFT</h2>
        <img className='object-cover h-full w-full rounded-2xl' src={hero} alt="" />
    </div>
    <div className='px-5 sm:px-50'>
        <hr className='rounded-full h-1 w-full bg-amber-900 mt-4' />
    </div>
    </>
  )
}

export default PaperHero
