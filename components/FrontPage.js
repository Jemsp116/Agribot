import React from 'react'
import Chips from './Chips'
import Link from 'next/link';


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
        <p className='w-2/3 text-black dark:text-white text-center z-20 text-xl'> Tired of traditional farming methods? Agribot is your high-tech solution. We offer advanced robotic and drone services to transform your agricultural practices. Enhance productivity, reduce manual labor, and embrace cutting-edge technology for a more efficient farm. Our smart solutions ensure precision and reliability, helping you to grow your crops with ease. Join us in revolutionizing agriculture, one robot at a time.</p>
      </div>
      <div className="min-h-screen dark:bg-black bg-white">
          <main className="container mx-auto mt-12 p-4 w-[1000px] ml-12">
            <section className="dark:bg-gray-900 bg-white h-64 rounded-xl shadow-2xl mb-2 overflow-hidden">
              <div className="md:flex">
                <div className="md:flex-shrink-0">
                  <img className="h-64 w-full object-cover md:w-48" src="/h-bg01.jpg" alt="Agribot robot in field" />
                </div>
                <div className="p-8">
                  <h3 className="mt-1 text-2xl font-semibold text-black dark:text-white">Revolutionizing Farming with Robotics</h3>
                  <p className="mt-2 text-black dark:text-white">
                  Agribot provides cutting-edge robotic and drone solutions to transform farming operations. From planting to harvesting, our robots and drones automate and optimize essential processes with precision. Farmers benefit from increased productivity, reduced labor costs, and improved efficiency. Embrace sustainable agriculture with Agribot for healthier yields and greater profitability.
                  </p>
                  <div className="mt-4 flex space-x-4">
                    <Link href="/about-us" className="inline-block bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition duration-300">
                      Learn More
                    </Link>
                    <Link href="/RentRobot" className="inline-block border border-green-500 text-green-500 px-4 py-2 rounded-full hover:bg-green-50 transition duration-300">
                      Our Services
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          </main>

          <main className="container mx-auto mt-12 p-4 w-[1000px] animate mr-12">
            <section className="dark:bg-gray-900 bg-white h-64 rounded-xl shadow-2xl mb-2 overflow-hidden">
              <div className="md:flex">
                <div className="p-8">
                  <h3 className="mt-1 text-2xl font-semibold text-black dark:text-white">Empowering Sustainable Agriculture</h3>
                  <p className="mt-2 text-black dark:text-white">
                  Our robots revolutionize farming by reducing labor and boosting yields. They streamline essential tasks and enhance overall efficiency. By integrating advanced technology, we promote sustainable agricultural practices. Join us in fostering a greener, more productive future.
                  </p>
                  <div className="mt-4 flex space-x-4">
                    <Link href="/about-us" className="inline-block bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition duration-300">
                      Learn More
                    </Link>
                    <Link href="/RentRobot" className="inline-block border border-green-500 text-green-500 px-4 py-2 rounded-full hover:bg-green-50 transition duration-300">
                      Our Services
                    </Link>
                  </div>
                </div>
                <div className="md:flex-shrink-0">
                  <img className="h-64 w-full object-cover md:w-48" src="/h-bg02.jpg" alt="Robotic farming equipment" />
                </div>
              </div>
            </section>
          </main>
        </div>
    </>
  )
}

export default FrontPage