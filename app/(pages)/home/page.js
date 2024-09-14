"use client";
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from "recharts";

const carouselData = [
  {
    image: "/card_img_04.jpg",
    description: "AgriBot: Revolutionizing Agriculture with Cutting-Edge Robotics",
  },
  {
    image: "/card_img_03.jpg",
    description: "Increase Efficiency: Rent AgriBot for Your Farm Today",
  },
  {
    image: "/card_img_02.jpg",
    description: "Sustainable Farming: AgriBot Reduces Labor Costs and Increases Yield",
  },
];

const laborShortageData = [
  { year: 2018, shortage: 45 },
  { year: 2019, shortage: 51 },
  { year: 2020, shortage: 60 },
  { year: 2021, shortage: 67 },
  { year: 2022, shortage: 72 },
  { year: 2023, shortage: 81 },
];

const productivityData = [
  { year: 2018, human: 65, robot: 80 },
  { year: 2019, human: 68, robot: 85 },
  { year: 2020, human: 70, robot: 90 },
  { year: 2021, human: 72, robot: 95 },
  { year: 2022, human: 75, robot: 100 },
  { year: 2023, human: 78, robot: 105 },
];

const serviceCards = [
  {
    title: "Precision Planting",
    description: "Our robots ensure accurate seed placement for optimal growth.",
    icon: "🌱",
    details:
      "Using advanced GPS and computer vision, AgriBot can plant seeds with millimeter precision, optimizing spacing and depth for each crop type.",
  },
  {
    title: "Automated Harvesting",
    description: "Efficiently harvest crops with minimal waste and maximum yield.",
    icon: "🚜",
    details:
      "Our harvesting robots use gentle grippers and AI-powered detection to pick only ripe produce, reducing waste and increasing overall yield.",
  },
  {
    title: "24/7 Monitoring",
    description: "Continuous field monitoring for pest control and crop health.",
    icon: "🔍",
    details:
      "AgriBot's drones and ground sensors provide real-time data on soil moisture, nutrient levels, and pest presence, allowing for immediate action when needed.",
  },
];

const HomeContent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeCard, setActiveCard] = useState(null);
  const [imagesLoaded, setImagesLoaded] = useState([]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % carouselData.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const preloadImages = async () => {
      const loadPromises = carouselData.map((slide) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = slide.image;
          img.onload = () => resolve(true);
          img.onerror = () => resolve(false);
        });
      });

      const results = await Promise.all(loadPromises);
      setImagesLoaded(results);
    };

    preloadImages();
  }, []);

  return (
    <div className="min-h-screen bg-white-300 dark:bg-gray-900 text-green-50">
      <header className="py-6 px-6 bg-green-800 text-center">
        <h1 className="text-6xl font-bold">AgriBot</h1>
      </header>

      {/* Carousel - Increased height */}
      <div className="relative w-[75vw] border-r-medium ml-28 mt-8 mb-12 h-[480px]">
        <div className="overflow-hidden h-full">
          {carouselData.map((slide, index) => (
            <div
              key={index}
              className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              {imagesLoaded[index] ? (
                <img
                  src={slide.image}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gray-800">
                  <p className="text-xl text-gray-400">Loading...</p>
                </div>
              )}
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-xl font-bold text-black dark:text-white text-center max-w-3xl px-4 text-shadow-md">
                  {slide.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <button
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-green-500 p-3 rounded-full"
          onClick={() =>
            setCurrentSlide(
              (prevSlide) => (prevSlide - 1 + carouselData.length) % carouselData.length
            )
          }
        >
          <ChevronLeft className="text-black dark:text-white w-6 h-6" />
        </button>
        <button
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-green-500 p-3 rounded-full"
          onClick={() =>
            setCurrentSlide((prevSlide) => (prevSlide + 1) % carouselData.length)
          }
        >
          <ChevronRight className="text-black dark:text-white w-6 h-6" />
        </button>
      </div>

      <main className="container mx-auto px-4">
        {/* Why AgriBot Section */}
        <section className="mb-16 text-center">
          <h2 className="text-3xl font-bold mb-8 text-green-400">
            Why should we use AgriBot?
          </h2>
          <p className="mb-12 max-w-3xl mx-auto text-black dark:text-white font-semibold">
            According to recent surveys by the Indian Council of Agricultural Research
            (ICAR), the agricultural sector in India is facing a severe labor shortage.
            This trend has been increasing over the past few years, making it crucial for
            farmers to adopt innovative solutions like AgriBot.
          </p>
          {/* Labor Shortage Chart */}
          <div className="h-64 w-full md:w-3/4 lg:w-2/3 mx-auto mb-12">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={laborShortageData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="shortage" fill="#4ADE80" name="Labor Shortage (%)" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <p className="mb-12 max-w-3xl mx-auto text-black dark:text-white font-semibold">
            The graph above illustrates the increasing labor shortage in the Indian
            agricultural sector. By adopting AgriBot's robotic solutions, farmers can
            overcome this challenge and improve their productivity.
          </p>

          {/* Productivity Comparison Chart */}
          <h3 className="text-2xl font-bold mb-6 text-green-400">
            Human vs Robot Productivity and Efficiency
          </h3>
          <div className="h-64 w-full md:w-3/4 lg:w-2/3 mx-auto">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={productivityData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="human" stroke="#82ca9d" name="Human Productivity" />
                <Line type="monotone" dataKey="robot" stroke="#8884d8" name="Robot Productivity" />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <p className="mt-6 max-w-3xl mx-auto text-black dark:text-white font-semibold">
            This chart demonstrates the increasing efficiency and productivity of robotic
            solutions compared to human labor in agriculture over the years.
          </p>
        </section>

        {/* Interactive Service Cards */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {serviceCards.map((card, index) => (
            <div
              key={index}
              className={`bg-green-800 rounded-lg p-6 shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer ${
                activeCard === index ? "ring-4 ring-green-400" : ""
              }`}
              onClick={() => setActiveCard(index === activeCard ? null : index)}
            >
              <div className="text-5xl mb-4">{card.icon}</div>
              <h3 className="text-2xl font-semibold mb-3">{card.title}</h3>
              <p className="mb-4">{card.description}</p>
              {activeCard === index && (
                <div className="mt-4 text-green-300 transition-all duration-300 ease-in-out">
                  <p className="font-semibold mb-2">Learn More:</p>
                  <p>{card.details}</p>
                </div>
              )}
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default HomeContent;