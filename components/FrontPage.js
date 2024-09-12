import React from 'react'
import Chips from './Chips'

const FrontPage = () => {
  return (
    <>
      <div className='w-full bg-white dark:bg-black top-[65px] absolute h-screen'>
        <div className='absolute w-[24rem] h-72 bg-yellow-300 opacity-90 bottom-[20%] right-[10%] rounded-3xl blur-3xl'></div>
        <div className='absolute w-[24rem] h-72 bg-blue-300 opacity-90 top-[20%] left-[10%] rounded-3xl blur-3xl'></div>
      </div>
      <div className="h-screen flex flex-col  gap-1 justify-center items-center ">
        <Chips title={'We Provide Great Services'} />
        <h1 className='text-[3rem] mb-8 text-black dark:text-white z-20 font-bold'>
        Welcome to Agribot

        </h1>
        <p className='w-2/3 text-black dark:text-white text-center z-20'> Tired of traditional farming methods? Agribot is your high-tech solution. We offer advanced robotic and drone services to transform your agricultural practices. Enhance productivity, reduce manual labor, and embrace cutting-edge technology for a more efficient farm. Our smart solutions ensure precision and reliability, helping you to grow your crops with ease. Join us in revolutionizing agriculture, one robot at a time.</p>
      </div>
    </>
  )
}

export default FrontPage