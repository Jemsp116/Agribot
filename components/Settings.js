"use client";
import React, { useState } from 'react';
import { Settings, User, Tractor, Bell, Shield, CreditCard, HelpCircle, FileQuestion } from 'lucide-react'; // Updated icon to 'Tractor' for farm-related content

const SettingsPane = ({ type }) => {
  const [activeTab, setActiveTab] = useState('account');

  const commonTabs = [
    { id: 'account', label: 'Personal Info', icon: User },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'billing', label: 'Billing', icon: CreditCard },
    { id: 'help', label: 'Help & Support', icon: HelpCircle },
    { id: 'faq', label: 'FAQ', icon: FileQuestion },
  ];

  const farmerTabs = [
    ...commonTabs,
    { id: 'farm', label: 'Farm Details', icon: Tractor }, // New tab for farm-specific details
    { id: 'drones', label: 'Drone Management', icon: Tractor }, // Drone management tab
  ];

  const tabs = farmerTabs;

  const TabContent = ({ tabId }) => {
    const [formData, setFormData] = useState({});

    const handleInputChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Form submitted:', formData);
      // Here you would typically send the data to your backend
    };

    switch (tabId) {
      case 'account':
        return (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">Full Name</label>
              <input type="text" id="name" name="name" onChange={handleInputChange} className="w-full p-2 rounded border dark:bg-gray-700 dark:border-gray-600" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
              <input type="email" id="email" name="email" onChange={handleInputChange} className="w-full p-2 rounded border dark:bg-gray-700 dark:border-gray-600" />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone Number</label>
              <input type="tel" id="phone" name="phone" onChange={handleInputChange} className="w-full p-2 rounded border dark:bg-gray-700 dark:border-gray-600" />
            </div>
            <button type="submit" className="bg-[rgb(103,232,67)] text-white px-4 py-2 rounded hover:bg-green-600 transition-colors">Save Changes</button>
          </form>
        );
      case 'farm':
        return (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="farm-name" className="block text-sm font-medium mb-1">Farm Name</label>
              <input type="text" id="farm-name" name="farmName" onChange={handleInputChange} className="w-full p-2 rounded border dark:bg-gray-700 dark:border-gray-600" />
            </div>
            <div>
              <label htmlFor="location" className="block text-sm font-medium mb-1">Farm Location</label>
              <input type="text" id="location" name="location" onChange={handleInputChange} className="w-full p-2 rounded border dark:bg-gray-700 dark:border-gray-600" />
            </div>
            <div>
              <label htmlFor="farm-size" className="block text-sm font-medium mb-1">Farm Size (in acres)</label>
              <input type="number" id="farm-size" name="farmSize" onChange={handleInputChange} className="w-full p-2 rounded border dark:bg-gray-700 dark:border-gray-600" />
            </div>
            <button type="submit" className="bg-[rgb(103,232,67)] text-white px-4 py-2 rounded hover:bg-green-600 transition-colors">Save Farm Details</button>
          </form>
        );
      case 'drones':
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold mb-2">My Drones</h3>
            <table className="w-full">
              <thead>
                <tr>
                  <th className="text-left">Drone ID</th>
                  <th className="text-left">Type</th>
                  <th className="text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>DR12345</td>
                  <td>Survey Drone</td>
                  <td>Active</td>
                </tr>
                <tr>
                  <td>DR67890</td>
                  <td>Spraying Drone</td>
                  <td>Maintenance Required</td>
                </tr>
              </tbody>
            </table>
            <button className="bg-[rgb(103,232,67)] text-white px-4 py-2 rounded hover:bg-green-600 transition-colors">Add New Drone</button>
          </div>
        );
      default:
        return <p>Content for {tabId} tab</p>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white transition-colors duration-300">
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-8 flex items-center gap-2">
          <Settings className="w-8 h-8" />
          Farmer Settings
        </h1>
        <div className="flex flex-col md:flex-row gap-6">
          <nav className="md:w-1/4">
            <ul className="space-y-2">
              {tabs.map((tab) => (
                <li key={tab.id}>
                  <button
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full text-left px-4 py-2 rounded-lg transition-all duration-300 ease-in-out flex items-center gap-2 ${
                      activeTab === tab.id
                        ? 'bg-[rgb(103,232,67)] text-white'
                        : 'hover:bg-gray-200 dark:hover:bg-gray-800'
                    }`}
                  >
                    <tab.icon className="w-5 h-5" />
                    {tab.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
          <main className="md:w-3/4 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 ease-in-out">
            <h2 className="text-2xl font-semibold mb-4">{tabs.find(tab => tab.id === activeTab)?.label}</h2>
            <TabContent tabId={activeTab} />
          </main>
        </div>
      </div>
    </div>
  );
};

export default SettingsPane;
