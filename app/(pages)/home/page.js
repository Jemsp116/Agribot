"use client";
import React from 'react';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div className="min-h-screen dark:bg-black bg-white">
      <main className="container mx-auto mt-8 p-4">
        <section className="text-center mb-12">
          <h2 className="text-4xl font-bold dark:bg-black bg-white mb-4">Welcome to Agribot</h2>
          <p className="text-xl text-gray-600">Robots and Drones for Smarter, Sustainable Farming</p>
        </section>

        <div className="min-h-screen dark:bg-black bg-white">
          <main className="container mx-auto mt-12 p-4 w-[1000px] ml-12">
            <section className="dark:bg-gray-900 bg-white h-64 rounded-xl shadow-2xl mb-2 overflow-hidden">
              <div className="md:flex">
                <div className="md:flex-shrink-0">
                  <img className="h-64 w-full object-cover md:w-48" src="/robot_farm_img.jpg" alt="Agribot robot in field" />
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
                  <img className="h-64 w-full object-cover md:w-48" src="/robot_agriculture.jpg" alt="Robotic farming equipment" />
                </div>
              </div>
            </section>
          </main>
        </div>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-black p-6 rounded-lg shadow-md">
            <h3 className="text-xl text-black dark:text-white font-semibold mb-2">Automate Your Farm</h3>
            <p className="text-black dark:text-white mb-4">Boost productivity with cutting-edge robotic solutions.</p>
            <Link href="/automation" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
              Explore Automation
            </Link>
          </div>
          <div className="bg-white dark:bg-black p-6 rounded-lg shadow-md">
            <h3 className="text-xl text-black dark:text-white font-semibold mb-2">Optimize Crop Management</h3>
            <p className="text-black dark:text-white mb-4">Maximize yields with precision robotic systems.</p>
            <Link href="/crop-management" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
              Learn More
            </Link>
          </div>
          <div className="bg-white dark:bg-black p-6 rounded-lg shadow-md">
            <h3 className="text-xl text-black dark:text-white font-semibold mb-2">Sustainable Farming Solutions</h3>
            <p className="text-black dark:text-white mb-4">Discover eco-friendly robotics for sustainable agriculture.</p>
            <Link href="/sustainability" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
              Learn More
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;