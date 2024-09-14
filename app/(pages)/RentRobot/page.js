"use client";
import React, { useState } from "react";
import Payment from "@/components/Payment";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";

const RentRobot = () => {
  const [selectedRobot, setSelectedRobot] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();




  const handleOpen = () => {
    onOpen();
  }



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
                <div className="flex gap-4">

                  <>
                    <div className="flex flex-wrap gap-3">

                      <Button onPress={() => handleOpen()}>Learn More</Button>

                    </div>
                    <Modal
                      size={'4xl'}
                      isOpen={isOpen}
                      onClose={onClose}
                    >
                      <ModalContent>
                        {(onClose) => (
                          <>
                            <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
                            <ModalBody>
                              <div>
                                <Image 
                                  
                                />
                                <div>
                                  <h2></h2>
                                  <p></p>
                                  <h1></h1>
                                  <button></button>
                                </div>
                              </div>
                            </ModalBody>
                            <ModalFooter>
                              <Button color="danger" variant="light" onPress={onClose}>
                                Close
                              </Button>
                              <Button color="primary" onPress={onClose}>
                                Action
                              </Button>
                            </ModalFooter>
                          </>
                        )}
                      </ModalContent>
                    </Modal>
                  </>
                  <Payment existingName={"KANISHK"} existingEmail={"kanishkchaudhary2005@gmail.com"} existingAmount={200} btnText={'Rent a Robot'} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default RentRobot;
