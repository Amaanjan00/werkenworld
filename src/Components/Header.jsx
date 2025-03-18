import React from 'react'
import logo from '../assets/logo.png'
import menu from '../assets/menu.png'

function Header() {
  return (
    <>
    <header className='flex items-center justify-between sm:px-40'>

        <div className='px-10'>
            <img className='sm:w-35 sm:h-25 h-20 object-contain' src={logo} alt="" />
        </div>

        <nav className='hidden sm:flex text-[14px] font-mono font-medium text-gray-700'>
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
                <li>
                    <a className='px-4 py-2' href="/artisans">Artisans</a>
                </li>
            </ul>
        </nav>

        <div className='p-5'>
            <img className='h-7 w-7' src={menu} alt="" />
        </div>

    </header>
    </>
  )
}

export default Header
