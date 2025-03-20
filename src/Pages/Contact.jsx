import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

function Contact() {
  return (
    <>
    <Header/>
    <div className='p-7 flex flex-col gap-4 sm:h-150 sm:px-50'>
      <h1 className='text-3xl font-bold text-center'>Contact</h1>
      <p className='text-[20px] mb-5'>We’re here to assist you! Whether you have questions about our services, need support, or want to collaborate, feel free to reach out. Our team is ready to help with any inquiries.</p>
      <div className='flex gap-3'>
        <h1 className='text-[16px] font-bold'>Email :</h1>
        <p>werkenworld@gmail.com</p>
      </div>
      <div className='flex gap-3'>
        <h1 className='text-[16px] font-bold'>Phone :</h1>
        <p>+91 90514 78481</p>
      </div>
      <div className='flex gap-3'>
        <h1 className='text-[16px] font-bold'>Phone :</h1>
        <p>2/5 Tarapada Chatterjee Lane, Howrah, West Bengal - 711103</p>
      </div>
      <p className='text-[20px] mt-5'>We look forward to hearing from you!</p>
      <p className='text-[20px] font-bold'>Werken World</p>
    </div>
    <Footer/>
    </>
  )
}

export default Contact
