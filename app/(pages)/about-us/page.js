'use client'

import React, { useState } from 'react';
import { X } from 'lucide-react';

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

const ContactForm = ({ onClose }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="dark:bg-black bg-white rounded-lg p-8 max-w-md w-full relative">
                <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
                    <X size={24} />
                </button>
                <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                <form className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-white-700">Name</label>
                        <input type="text" id="name" name="name" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-white-700">Email</label>
                        <input type="email" id="email" name="email" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-white-700">Message</label>
                        <textarea id="message" name="message" rows={4} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"></textarea>
                    </div>
                    <button type="submit" className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Send Message</button>
                </form>
            </div>
        </div>
    );
};

export default function AboutContent() {
    const [showContactForm, setShowContactForm] = useState(false);

    return (
        <>
            <div className="relative isolate bg-[url('/back3.jpg')] bg-fixed overflow-hidden bg-gray-900 py-24 sm:py-32">
                {/* ... (previous background divs remain unchanged) ... */}
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
                            <button
                                onClick={() => setShowContactForm(true)}
                                className="bg-white text-gray-900 hover:bg-gray-100 py-2 px-4 rounded-md"
                            >
                                Contact Us
                            </button>
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
                </div>
            </div>
            {showContactForm && <ContactForm onClose={() => setShowContactForm(false)} />}
        </>
    );
}