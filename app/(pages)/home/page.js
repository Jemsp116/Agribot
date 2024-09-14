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

        

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-black p-6 rounded-lg shadow-md">
            <h3 className="text-xl text-black dark:text-white font-semibold mb-2">Automate Your Farm</h3>
            <p className="text-black dark:text-white mb-4">Boost productivity with cutting-edge robotic solutions.</p>
            <Link href="/RentRobot" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
              Explore Automation
            </Link>
          </div>
          <div className="bg-white dark:bg-black p-6 rounded-lg shadow-md">
            <h3 className="text-xl text-black dark:text-white font-semibold mb-2">Optimize Crop Management</h3>
            <p className="text-black dark:text-white mb-4">Maximize yields with precision robotic systems.</p>
            <Link href="/about-us" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
              Learn More
            </Link>
          </div>
          <div className="bg-white dark:bg-black p-6 rounded-lg shadow-md">
            <h3 className="text-xl text-black dark:text-white font-semibold mb-2">Sustainable Farming Solutions</h3>
            <p className="text-black dark:text-white mb-4">Discover eco-friendly robotics for sustainable agriculture.</p>
            <Link href="/about-us" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
              Learn More
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;