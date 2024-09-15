'use client'
import React, { useState } from 'react';

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
            
        </>
    );
}