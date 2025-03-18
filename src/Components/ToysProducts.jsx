import React from 'react'
import ButtonP from '../Constants/ButtonP'
import t1 from '../assets/toys/t1.jpg'
import t2 from '../assets/toys/t2.jpg'
import t3 from '../assets/toys/t3.jpg'
import t4 from '../assets/toys/t4.jpg'
import t5 from '../assets/toys/t5.jpg'
import t6 from '../assets/toys/t6.jpg'

function Products() {
  return (
    <>
    <div className='sm:px-40 sm:mt-20 sm:mb-30'>
        <div className='px-5 mt-10'>
            <h1 className='text-2xl font-bold'>TOYS</h1>
        </div>
        <div className='flex flex-col w-full'>
            <div className='inline-flex m-5 sm:overflow-auto overflow-x-scroll gap-4 flex-nowrap'>

                <div className='flex justify-start items-start center shrink-0 flex-col rounded-2xl relative'>
                    <img className='h-100 w-70 rounded-2xl object-cover' src={t1} alt="" />
                    <div className='px-4 py-8 absolute w-full h-full items-end flex'>
                        <h2 className='text-[34px] font-bold text-white'>Indian Doll</h2>
                    </div>
                </div>

                <div className='flex justify-start items-start center shrink-0 flex-col rounded-2xl relative'>
                    <img className='h-100 w-70 rounded-2xl object-cover' src={t2} alt="" />
                    <div className='px-4 py-8 absolute w-full h-full items-end flex'>
                        <h2 className='text-[34px] font-bold text-white'>Hacky Sack</h2>
                    </div>
                </div>

                <div className='flex justify-start items-start center shrink-0 flex-col rounded-2xl relative'>
                    <img className='h-100 w-70 rounded-2xl object-cover' src={t3} alt="" />
                    <div className='px-4 py-8 absolute w-full h-full items-end flex'>
                        <h2 className='text-[34px] font-bold text-white'>Punjabi Doll</h2>
                    </div>
                </div>

                <div className='flex justify-start items-start center shrink-0 flex-col rounded-2xl relative'>
                    <img className='h-100 w-70 rounded-2xl object-cover' src={t4} alt="" />
                    <div className='px-4 py-8 absolute w-full h-full items-end flex'>
                        <h2 className='text-[34px] font-bold text-white'>Ten little Bears</h2>
                    </div>
                </div>

                <div className='flex justify-start items-start center shrink-0 flex-col rounded-2xl relative'>
                    <img className='h-100 w-70 rounded-2xl object-cover' src={t5} alt="" />
                    <div className='px-4 py-8 absolute w-full h-full items-end flex'>
                        <h2 className='text-[34px] font-bold text-white'>Family Set</h2>
                    </div>
                </div>

                <div className='flex justify-start items-start center shrink-0 flex-col rounded-2xl relative'>
                    <img className='h-100 w-70 rounded-2xl object-cover' src={t6} alt="" />
                    <div className='px-4 py-8 absolute w-full h-full items-end flex'>
                        <h2 className='text-[34px] font-bold text-white'>Dinosaur Set</h2>
                    </div>
                </div>

            </div>
        </div>
    </div>
    </>
  )
}

export default Products
