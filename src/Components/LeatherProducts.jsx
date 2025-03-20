import React from 'react'
import p1 from '../assets/leather/p1.jpg'
import p2 from '../assets/leather/p2.jpg'
import p3 from '../assets/leather/p3.jpg'
import p4 from '../assets/leather/p4.jpg'
import p5 from '../assets/leather/p5.jpg'
import p6 from '../assets/leather/p6.jpg'
import p7 from '../assets/leather/p7.jpg'

function LeatherProducts() {
  return (
    <>
    <div className='sm:px-40 sm:mt-20'>
        <div className='px-5 mt-10'>
            <h1 className='text-2xl font-bold'>LEATHER PRODUCTS</h1>
        </div>
        <div className='flex flex-col w-full'>
            <div className='inline-flex m-5 sm:overflow-auto overflow-x-scroll gap-4 flex-nowrap'>

                <div className='flex justify-start items-start center shrink-0 flex-col rounded-2xl relative'>
                    <img className='h-100 w-70 rounded-2xl object-cover' src={p1} alt="" />
                </div>

                <div className='flex justify-start items-start center shrink-0 flex-col rounded-2xl relative'>
                    <img className='h-100 w-70 rounded-2xl object-cover' src={p2} alt="" />
                </div>

                <div className='flex justify-start items-start center shrink-0 flex-col rounded-2xl relative'>
                    <img className='h-100 w-70 rounded-2xl object-cover' src={p3} alt="" />
                </div>

                <div className='flex justify-start items-start center shrink-0 flex-col rounded-2xl relative'>
                    <img className='h-100 w-70 rounded-2xl object-cover' src={p4} alt="" />
                </div>

                <div className='flex justify-start items-start center shrink-0 flex-col rounded-2xl relative'>
                    <img className='h-100 w-70 rounded-2xl object-cover' src={p5} alt="" />
                </div>

                <div className='flex justify-start items-start center shrink-0 flex-col rounded-2xl relative'>
                    <img className='h-100 w-70 rounded-2xl object-cover' src={p6} alt="" />
                </div>

                <div className='flex justify-start items-start center shrink-0 flex-col rounded-2xl relative'>
                    <img className='h-100 w-70 rounded-2xl object-cover' src={p7} alt="" />
                </div>

            </div>
        </div>
    </div>
    </>
  )
}

export default LeatherProducts
