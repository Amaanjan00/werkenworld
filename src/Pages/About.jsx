import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

function About() {
  return (
    <>
    <Header/>
    <div className='p-7 flex flex-col gap-4 sm:h-150 sm:px-50'>
      <h1 className='text-3xl font-bold text-center'>
        About Us
      </h1>
      <p>Werkenworld is a dedicated export company committed to bringing high-quality, handcrafted, and ethically sourced products to the global market. With a strong focus on traditional craftsmanship and sustainable trade, we collaborate with skilled artisans to create unique, high-quality goods that reflect cultural heritage and timeless artistry.</p>
      <p>At Werkenworld, we believe in fostering fair trade practices and empowering artisans by providing them with a platform to showcase their craftsmanship to international buyers. Our diverse range of products embodies authenticity, creativity, and durability, ensuring that every item tells a story of dedication and skill.</p>
      <p>With a commitment to quality, ethical sourcing, and customer satisfaction, Werkenworld continues to expand its global reach, connecting buyers with handcrafted excellence from around the world. Whether you are a retailer, wholesaler, or distributor, we invite you to explore our collection and partner with us in promoting sustainable and meaningful trade.</p>
      <h2 className='font-medium'>Discover the essence of craftsmanship with Werkenworld!</h2>
    </div>
    <Footer/>
    </>
  )
}

export default About
