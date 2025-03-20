import React, { useState } from 'react'
import logo from '../assets/logo.png'
import menu from '../assets/menu.png'
import close from '../assets/close.png'

function Header() {

    const [nav, setNav] = useState(false)

  return (
    <>
    <header className='flex items-center justify-between sm:px-10'>

        <div className='px-10'>
            <img className='sm:w-55 sm:h-25 h-15 p-1 object-contain' src={logo} alt="" />
        </div>

        <div className='flex justify-center items-center'>
            <nav className='hidden sm:flex text-[14px]  font-medium text-gray-700'>
                <ul className='flex'>
                    <li>
                        <a className='px-4 py-2' href="/">Home</a>
                    </li>
                    <li>
                        <a className='px-4 py-2' href="/about">About Us</a>
                    </li>
                    <li>
                        <a className='px-4 py-2' href="/contact">Contact</a>
                    </li>
                </ul>
            </nav>

            <div className='p-5 sm:hidden'>
                <img className='h-7 w-7' onClick={() => setNav(true)} src={menu} alt="" />
            </div>
        </div>

    </header>

    {
            nav &&

            <div className=' bg-amber-900 absolute z-9999999 top-0 w-full h-full flex flex-col'>

                <div className='px-10 bg-white flex justify-center'>
                    <img className='sm:w-35 sm:h-25 h-20 object-contain' src={logo} alt="" />
                </div>

                <div className='font-medium flex justify-between p-10'>

                    <nav className='sm:flex text-[14px] text-gray-700'>
                        <ul className='flex flex-col text-2xl gap-6 text-white'>
                            <li>
                                <a className='px-4 py-2' href="/">Home</a>
                            </li>
                            <li>
                                <a className='px-4 py-2' href="/about">About Us</a>
                            </li>
                            <li>
                                <a className='px-4 py-2' href="/contact">Contact</a>
                            </li>
                            <li>
                                <a className='px-4 py-2' href="/artisans">Artisans</a>
                            </li>
                        </ul>
                    </nav>

                    <div>
                        <img className='h-10 w-10' onClick={() => setNav(false)} src={close} alt="" />
                    </div>

                </div>

            </div>
        }
    </>
  )
}

export default Header
