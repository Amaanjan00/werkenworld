import React from 'react'
import p1 from '../assets/paper/p1.jpg'
import p2 from '../assets/paper/p2.jpg'
import p3 from '../assets/paper/p3.jpg'
import p4 from '../assets/paper/p4.jpg'

import p6 from '../assets/paper/p6.jpg'
import p7 from '../assets/paper/p7.jpg'
import p8 from '../assets/paper/p8.jpg'

function PaperProducts() {
  return (
    <>
    <div className='sm:px-40 sm:mt-20'>
        <div className='px-5 mt-10'>
            <h1 className='text-2xl font-bold'>PAPER PRODUCTS</h1>
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
                    <img className='h-100 w-70 rounded-2xl object-cover' src={p6} alt="" />
                </div>

                <div className='flex justify-start items-start center shrink-0 flex-col rounded-2xl relative'>
                    <img className='h-100 w-70 rounded-2xl object-cover' src={p7} alt="" />
                </div>

                <div className='flex justify-start items-start center shrink-0 flex-col rounded-2xl relative'>
                    <img className='h-100 w-70 rounded-2xl object-cover' src={p8} alt="" />
                </div>

            </div>
        </div>
    </div>
    </>
  )
}

export default PaperProducts
