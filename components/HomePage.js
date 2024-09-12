"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardFooter, Image, Button, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@nextui-org/react";
import DivWrapper from "./DivWrapper";
import { useRouter } from 'next/navigation';

// Feature Card Component
const FeatureCard = ({ title, description, icon }) => {
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-green-500"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="text-4xl mb-4 text-green-600 dark:text-green-400">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </motion.div>
  )
};

// Statistics Component
const StatItem = ({ value, label }) => (
  <motion.div
    className="text-center"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="text-4xl font-bold text-green-600 dark:text-green-400">{value}</div>
    <div className="text-gray-600 dark:text-gray-300">{label}</div>
  </motion.div>
);

// CTA Component
const CTA = () => {
  const router = useRouter();
  return (
    <motion.div
      className="bg-gradient-to-r from-green-600 to-yellow-500 p-12 rounded-lg text-white text-center"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Farm?</h2>
      <p className="mb-6">Join Agribot and revolutionize your farming experience with our advanced robotics and drone technology!</p>
      <motion.button
        onClick={() => router.push('/register')}
        className="bg-white text-green-600 px-6 py-2 rounded-full font-semibold"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Get Started
      </motion.button>
    </motion.div>
  );
}

const CardModal = ({ isOpen, onClose, card }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalContent>
        <ModalHeader>{card.title}</ModalHeader>
        <ModalBody>
          <Image
            alt={card.title}
            src={card.imgUrl}
            width={300}
            height={200}
            className="object-cover w-full"
          />
          <p>{card.description}</p>
          <p>{card.additionalInfo}</p>
        </ModalBody>
        <ModalFooter>
          <Button color="danger" variant="light" onPress={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

const cardData = [
  {
    "title": "Efficient Farming",
    "description": "Optimize your farming practices with our advanced robotics.",
    "imgUrl": "/card_img_03.jpg",
    "additionalInfo": "Our robotics solutions help automate various farming tasks, improving efficiency and reducing manual labor. Experience smarter farming with our state-of-the-art technology."
  },
  {
    "title": "Precision Agriculture",
    "description": "Use drones and robots for accurate and efficient farming.",
    "imgUrl": "/card_img_02.jpg",
    "additionalInfo": "Leverage our drones and robots for precise planting, monitoring, and harvesting. Our technology ensures optimal crop growth and resource usage, boosting your farm's productivity."
  },
  {
    "title": "Sustainable Practices",
    "description": "Implement eco-friendly and sustainable farming solutions.",
    "imgUrl": "/card_img_05.jpg",
    "additionalInfo": "Our solutions are designed to minimize environmental impact while maximizing farm output. We focus on sustainable practices that promote a healthier planet and more productive farming."
  },
  {
    "title": "Expert Guidance",
    "description": "Receive support from our experts to enhance your farming operations.",
    "imgUrl": "/card_img_04.jpg",
    "additionalInfo": "Our team of experts provides personalized guidance on using our robotics and drone technology. Get the support you need to integrate our solutions into your farming practices."
  }
];

const FrontPage = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleReadMore = (card) => {
    setSelectedCard(card);
    onOpen();
  };

  return (
    <>
      {/* What We Offer Section */}
      <section className="py-20 px-4 dark:bg-gray-900 bg-white text-white">
        <div className="container mx-auto flex flex-col gap-1 justify-center items-center">
          <h2 className="text-3xl font-bold text-center mb-12 text-black dark:text-white">Our Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              title="Advanced Robotics"
              description="Integrate cutting-edge robotics into your farm."
              icon="🤖"
            />
            <FeatureCard
              title="Drone Technology"
              description="Utilize drones for precise and efficient farming."
              icon="🚁"
            />
            <FeatureCard
              title="Eco-Friendly Solutions"
              description="Adopt sustainable practices for a greener farm."
              icon="🌍"
            />
          </div>
        </div>
      </section>

      {/* Our Cards Section */}
      <DivWrapper title={'Our Solutions'}>
        <div className="flex flex-nowrap justify-center gap-4 overflow-x-auto pb-4">
          {cardData.map((card, index) => (
            <Card
              key={index}
              isFooterBlurred
              radius="lg"
              className="border-none h-[400px] w-[300px] flex-shrink-0"
            >
              <Image
                alt={card.title}
                className="object-cover"
                height={500}
                src={card.imgUrl}
                width={300}
              />
              <CardFooter className="flex flex-col justify-center items-center before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl gap-3 rounded-large bottom-1 w-[98%] mx-[2px] h-[150px] shadow-small z-10">
                <h2 className="text-xl font-semibold">{card.title}</h2>
                <p className="text-tiny text-white/80">{card.description}</p>
                <Button
                  className="text-tiny text-white bg-black/20"
                  variant="flat"
                  color="default"
                  radius="lg"
                  size="sm"
                  onPress={() => handleReadMore(card)}
                >
                  Read More
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </DivWrapper>

      <AnimatePresence>
        {selectedCard && (
          <CardModal
            isOpen={isOpen}
            onClose={() => {
              onClose();
              setSelectedCard(null);
            }}
            card={selectedCard}
          />
        )}
      </AnimatePresence>

      {/* Making a Difference Section */}
      <section className="py-20 px-4 bg-white dark:bg-gray-900">
        <div className="container mx-auto flex flex-col gap-1 justify-center items-center">
          <h2 className="text-3xl font-bold text-center mb-12 text-black dark:text-white">Making an Impact</h2>
          <div className="flex flex-wrap justify-center gap-12">
            <StatItem value="1,000+" label="Farms Served" />
            <StatItem value="2,000+" label="Robots Deployed" />
            <StatItem value="300+" label="Drones in Action" />
          </div>
        </div>
      </section>

      {/* Ready to Transform Section */}
      <section className="py-20 px-4 bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto max-w-4xl">
          <CTA />
        </div>
      </section>
    </>
  )
}

export default FrontPage;