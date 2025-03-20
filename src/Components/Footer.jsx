import React from 'react'
import logo from '../assets/logo.png'

function Footer() {
  return (
    <>
     <footer className="w-full">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* <!--Grid--> */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3 gap-y-8 md:gap-8 py-10 max-w-sm mx-auto sm:max-w-3xl lg:max-w-full">
                <div className="col-span-full mb-10 lg:col-span-2 lg:mb-0">
                    <a href="#"  className="flex justify-center lg:justify-start">
                        <img className='aspect-video w-50 object-contain' src={logo} alt="" />
                    </a>
                    <p className="py-8 text-sm text-gray-500 lg:max-w-xs text-center lg:text-left">Trusted in more than 100 countries & 5 million customers. Have any query ?</p>
                    <a href="/contact"  className="py-2.5 px-5 h-9 block w-fit bg-indigo-600 rounded-full shadow-sm text-xs text-white mx-auto transition-all  duration-500 hover:bg-indigo-700 lg:mx-0">
                        Contact us
                    </a>
                </div>
                {/* <!--End Col--> */}
                <div className="lg:mx-auto text-left ">
                    <h4 className="text-lg text-gray-900 font-medium mb-7">Tripverse</h4>
                    <ul className="text-sm  transition-all duration-500">
                        <li className="mb-6"><a href="/"  className="text-gray-600 hover:text-gray-900">Home</a></li>
                        <li className="mb-6"><a href="/about"  className=" text-gray-600 hover:text-gray-900">About</a></li>
                        <li><a href="/contact"  className=" text-gray-600 hover:text-gray-900">Contact</a></li>
                    </ul>
                </div>
                {/* <!--End Col--> */}
                <div className="lg:mx-auto text-left ">
                    <h4 className="text-lg text-gray-900 font-medium mb-7">Products</h4>
                    <ul className="text-sm  transition-all duration-500">
                        <li className="mb-6"><a href="javascript:;"  className="text-gray-600 hover:text-gray-900">Leather products</a></li>
                        <li className="mb-6"><a href="javascript:;"  className=" text-gray-600 hover:text-gray-900">Toys</a></li>
                        <li className="mb-6"><a href="javascript:;"  className=" text-gray-600 hover:text-gray-900">Jewellery</a></li>
                        <li><a href="javascript:;"  className=" text-gray-600 hover:text-gray-900">Scarves</a></li>
                    </ul>
                </div>
                {/* <!--End Col--> */}
                <div className="lg:mx-auto text-left ">
                    <h4 className="text-lg text-gray-900 font-medium mb-7">Support</h4>
                    <ul className="text-sm  transition-all duration-500">
                        <li className="mb-6"><a href="javascript:;"  className="text-gray-600 hover:text-gray-900">Customer Support</a></li>
                        <li className="mb-6"><a href="javascript:;"  className=" text-gray-600 hover:text-gray-900">Terms & Conditions</a></li>
                        <li ><a href="javascript:;"  className=" text-gray-600 hover:text-gray-900">Privacy Policy</a></li>
                    </ul>
                </div>
                {/* <!--End Col--> */}
                <div className="lg:mx-auto text-left ">
                    <h4 className="text-3xl text-gray-900 font-medium mb-7">Werken World, where art meets culture!</h4>
                    <p className="text-sm text-gray-500 leading-6 mb-7"></p>
                </div>
            </div>
            {/* <!--Grid--> */}
            <div className="py-7 border-t border-gray-200">
                <div className="flex items-center justify-center flex-col lg:justify-between lg:flex-row">
                    <span className="text-sm text-gray-500 ">©<a href="https://pagedone.io/">Werken World</a> 2024, All rights reserved.</span>
                </div>
            </div>
        </div>
    </footer> 
    </>
  )
}

export default Footer
