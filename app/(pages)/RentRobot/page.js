"use client";
import React, { useState } from "react";

const RentRobot = () => {
  const [selectedRobot, setSelectedRobot] = useState(null);

  const robotsAndDrones = [
    {
      name: "AgriBot X1",
      type: "Robot",
      description: "The AgriBot X1 excels in automated planting with high precision.",
      image: "https://example.com/agri-bot-x1.png",
      features: "Equipped with advanced sensors and AI for optimized planting.",
      pricePoint: "Competitive pricing based on customization and usage.",
      rentPrice: "Rent for $500 per day",
      terms: "Usage requires proper training and adherence to safety guidelines.",
    },
    {
      name: "DroneTech Y2",
      type: "Drone",
      description: "The DroneTech Y2 offers high-resolution aerial imaging for crop monitoring.",
      image: "https://example.com/drone-tech-y2.png",
      features: "Features real-time imaging and GPS tracking for accurate field surveys.",
      pricePoint: "Rates vary based on flight duration and data requirements.",
      rentPrice: "Rent for $300 per day",
      terms: "All flights must be conducted within legal boundaries and with necessary permits.",
    },
    {
      name: "AgriBot Z3",
      type: "Robot",
      description: "AgriBot Z3 provides efficient harvesting with minimal human intervention.",
      image: "https://example.com/agri-bot-z3.png",
      features: "Utilizes robotics and AI to ensure high yield and quality harvest.",
      pricePoint: "Pricing is based on the size of the field and specific harvesting needs.",
      rentPrice: "Rent for $700 per day",
      terms: "Regular maintenance is required for optimal performance and longevity.",
    },
    {
      name: "SkyScan Drone 500",
      type: "Drone",
      description: "SkyScan Drone 500 delivers comprehensive crop health analysis through drone technology.",
      image: "https://example.com/sky-scan-drone-500.png",
      features: "Advanced sensors for detecting crop health issues and data analytics.",
      pricePoint: "Flexible pricing options available for various data analysis packages.",
      rentPrice: "Rent for $400 per day",
      terms: "Drone usage must comply with local aviation regulations and data privacy laws.",
    },
    {
      name: "AgriBot Y4",
      type: "Robot",
      description: "AgriBot Y4 assists in soil preparation with precision and efficiency.",
      image: "https://example.com/agri-bot-y4.png",
      features: "Features automated soil tilling and nutrient analysis for improved soil health.",
      pricePoint: "Rates depend on the extent of soil preparation and robot features.",
      rentPrice: "Rent for $600 per day",
      terms: "Proper calibration and usage training are mandatory for effective operation.",
    },
    {
      name: "AeroFarm Drone 1000",
      type: "Drone",
      description: "AeroFarm Drone 1000 provides advanced mapping and field management capabilities.",
      image: "https://example.com/aero-farm-drone-1000.png",
      features: "High-resolution cameras and GPS for detailed field mapping and analysis.",
      pricePoint: "Cost varies with the level of detail and frequency of use.",
      rentPrice: "Rent for $350 per day",
      terms: "All drone operations should be conducted by certified personnel.",
    },
  ];

  const toggleRobotInfo = (index) => {
    setSelectedRobot(selectedRobot === index ? null : index);
  };

  return (
    <div className="bg-white dark:bg-gray-900">
      <section className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Robots & Drones
          </h2>
          <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
            Discover our innovative robots and drones designed for modern farming.
          </p>
        </div>
        <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
          {robotsAndDrones.map((item, index) => (
            <div
              key={index}
              className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700"
            >
              <a href="#">
                <img
                  className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                  src={item.image}
                  alt={`${item.name} Image`}
                />
              </a>
              <div className="p-5">
                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <a href="#">{item.name}</a>
                </h3>
                <span className="text-gray-500 dark:text-gray-400">
                  {item.type}
                </span>
                <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                  {item.description}
                </p>
                <button
                  onClick={() => toggleRobotInfo(index)}
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-500 rounded-lg hover:bg--700 fgreenocus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-green-500 dark:hover:bg-green-700 dark:focus:ring-blue-800"
                >
                  Show Info
                </button>
                <button
                  onClick={() => toggleRobotInfo(index)}
                  className="ml-2 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-500 rounded-lg hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-500 dark:hover:bg-green-700 dark:focus:ring-green-800"
                >
                  Rent a Robot
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {selectedRobot !== null && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" id="my-modal">
          <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white dark:bg-gray-800">
            <div className="mt-3 text-center">
              <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
                {robotsAndDrones[selectedRobot].name}
              </h3>
              <div className="mt-2 px-7 py-3">
                <h4 className="font-bold text-gray-900 dark:text-white">Features:</h4>
                <p className="text-gray-700 dark:text-gray-300">{robotsAndDrones[selectedRobot].features}</p>
                <h4 className="font-bold text-gray-900 dark:text-white mt-2">Price Point:</h4>
                <p className="text-gray-700 dark:text-gray-300">{robotsAndDrones[selectedRobot].pricePoint}</p>
                <h4 className="font-bold text-gray-900 dark:text-white mt-2">Rent Price:</h4>
                <p className="text-gray-700 dark:text-gray-300">{robotsAndDrones[selectedRobot].rentPrice}</p>
                <h4 className="font-bold text-gray-900 dark:text-white mt-2">Terms & Conditions:</h4>
                <p className="text-gray-700 dark:text-gray-300">{robotsAndDrones[selectedRobot].terms}</p>
              </div>
              <div className="items-center px-4 py-3">
                <button
                  id="ok-btn"
                  className="px-4 py-2 bg-green-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  onClick={() => setSelectedRobot(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RentRobot;
