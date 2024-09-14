"use client";
import React, { useEffect, useState } from "react";
import Payment from "@/components/Payment";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import RobotImage from "@/components/RobotImages";
import axios from "axios";

const RentRobot = () => {
  // const [selectedRobot, setSelectedRobot] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [robots, setRobots] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get(`/api/robots`).then((res) => {
      setRobots(res.data);
      setLoading(false);
    })
      .catch((error) => {
        console.error("Error fetching robots:", error);
        setLoading(false);
      });
  }, []);

  const handleOpen = () => {
    onOpen();
  };

  return (
    <div className="bg-white dark:bg-gray-900">
      <section className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Robots & Drones
          </h2>
          <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
            Discover our innovative robots and drones designed for modern
            farming.
          </p>
        </div>
        <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
          {robots?.map((item, index) => (
            <div
              key={index}
              className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700"
            >
              <a href="#">
                <img
                  className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                  src={item.images[0] || "https://via.placeholder.com/300"}
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
                    <Modal size={"4xl"} isOpen={isOpen} onClose={onClose}>
                      <ModalContent>
                        {(onClose) => {

                          return (
                            <>
                              <ModalHeader className="flex flex-col gap-1 text-2xl">
                                {item.name}
                              </ModalHeader>
                              <ModalBody className="overflow-y-auto" style={{ maxHeight: '500px' }}>
                                <div>
                                  {/* Display all images in a row */}
                                  <RobotImage images={item.images} />

                                  {/* Fixed Information */}
                                  <div className="mt-4 flex flex-col gap-3">
                                    <p className="text-sm font-semibold text-justify">
                                      {item.description}
                                    </p>

                                    <h1 className="font-semibold">Key Feature: </h1>
                                    <ul className="list-disc text-sm font-semibold text-justify ml-4">
                                      {item.features.map((feature, index) => (<li key={index}>{feature}</li>))}
                                    </ul>
                                    <h1 className="font-semibold">Price: {item.price}</h1>
                                  </div>
                                </div>
                              </ModalBody>
                              <ModalFooter>
                                <Button
                                  color="danger"
                                  variant="light"
                                  onPress={onClose}
                                >
                                  Close
                                </Button>
                                <Button color="primary" onPress={onClose}>
                                  Rent Now
                                </Button>
                              </ModalFooter>
                            </>
                          );
                        }}
                      </ModalContent>
                    </Modal>

                  </>
                  <Payment
                    existingName={"KANISHK"}
                    existingEmail={"kanishkchaudhary2005@gmail.com"}
                    existingAmount={200}
                    btnText={"Rent a Robot"}
                  />
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
