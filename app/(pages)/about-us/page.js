"use client";

import React, { useState } from "react";
import { Modal, Button, Input, Textarea } from "@nextui-org/react";

const links = [
    { name: 'Explore Our Technology', href: '#' },
    { name: 'Customer Success Stories', href: '#' },
    { name: 'Our Mission', href: '#' },
    { name: 'Meet the Team', href: '#' },
];

const stats = [
    { name: 'Robots Deployed Worldwide', value: '150+' },
    { name: 'Drone Flights Completed', value: '5000+' },
    { name: 'Years of Combined Experience', value: '5+' },
    { name: 'Satisfied Farmers', value: '20k+' },
];

export default function About() {
    const [modalOpen, setModalOpen] = useState(false);

    const handleOpenModal = () => setModalOpen(true);
    const handleCloseModal = () => setModalOpen(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        alert("Form submitted!");
        handleCloseModal();
    };

    return (
        <>
            <div className="relative isolate bg-[url('/back3.jpg')] bg-fixed overflow-hidden bg-gray-900 py-24 sm:py-32">
                <div
                    className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
                    aria-hidden="true"
                >
                    <div
                        className="aspect-[1097/845] w-[68.5625rem] bg-fixed top-0 bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>
                <div
                    className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
                    aria-hidden="true"
                >
                    <div
                        className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Empowering Agriculture with Robotics and Drones</h2>
                        <p className="mt-6 text-lg leading-8 text-gray-300">
                            At Agribot, we are dedicated to revolutionizing the agricultural industry with cutting-edge robotics and drone technology.
                            Our mission is to enhance farming efficiency and productivity through innovative solutions. Join us on a journey to transform agriculture
                            and achieve sustainable growth with advanced technology that supports farmers in their day-to-day operations.
                        </p>
                    </div>
                    <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
                        <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
                            {links.map((link) => (
                                <a key={link.name} href={link.href}>
                                    {link.name} <span aria-hidden="true">&rarr;</span>
                                </a>
                            ))}
                        </div>
                        <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
                            {stats.map((stat) => (
                                <div key={stat.name} className="flex flex-col-reverse">
                                    <dt className="text-base leading-7 text-gray-300">{stat.name}</dt>
                                    <dd className="text-2xl font-bold leading-9 tracking-tight text-white">{stat.value}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                    <div className="text-center mt-10">
                        <Button color="primary" onClick={handleOpenModal}>Contact Us</Button>
                    </div>
                </div>
            </div>

            {/* Contact Us Modal */}
            <Modal open={modalOpen} onClose={handleCloseModal}>
                <Modal.Header>
                    <h2>Contact Us</h2>
                </Modal.Header>
                <Modal.Body>
                    {/* Ensure form id is correctly assigned */}
                    <form id="contact-form" onSubmit={handleSubmit} className="flex flex-col space-y-4">
                        <Input placeholder="Your Name" clearable required />
                        <Input type="email" placeholder="Your Email" clearable required />
                        <Input placeholder="Subject" clearable required />
                        <Textarea placeholder="Your Message" clearable required rows={4} />
                        {/* Add the submit button within the form */}
                        <Button type="submit">Send</Button>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button auto flat onClick={handleCloseModal}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
