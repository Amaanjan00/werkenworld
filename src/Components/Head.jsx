import React from 'react'
import leather from '../assets/head/leather.jpg'
import jewellery from '../assets/head/jewellery.jpg'
import paper from '../assets/head/paper.jpg'
import scarves from '../assets/head/scarves.jpg'
import toys from '../assets/head/toys.jpg'

function Head() {
  return (
    <>
    <div className='flex w-full justify-center items-center text-[14px]'>
        <div className='inline-flex my-5 ms-5 sm:overflow-auto overflow-x-scroll gap-4 flex-nowrap'>
            <div className='flex justify-center items-center shrink-0 flex-col'>
                <img className='h-25 w-25 sm:h-20 sm:w-20 rounded-full object-cover' src={leather} alt="" />
                <h2>Wallets</h2>
            </div>
            <div className='flex justify-center items-center shrink-0 flex-col'>
                <img className='h-25 w-25 sm:h-20 sm:w-20 rounded-full object-cover' src={jewellery} alt="" />
                <h2>Jewellery</h2>
            </div>
            <div className='flex justify-center items-center shrink-0 flex-col'>
                <img className='h-25 w-25 sm:h-20 sm:w-20 rounded-full object-cover' src={paper} alt="" />
                <h2>Paper</h2>
            </div>
            <div className='flex justify-center items-center shrink-0 flex-col'>
                <img className='h-25 w-25 sm:h-20 sm:w-20 rounded-full object-cover' src={scarves} alt="" />
                <h2>Scarves</h2>
            </div>
            <div className='flex justify-center items-center shrink-0 flex-col'>
                <img className='h-25 w-25 sm:h-20 sm:w-20 rounded-full object-cover' src={toys} alt="" />
                <h2>Toys</h2>
            </div>
        </div>
    </div>
    </>
  )
}

export default Head
