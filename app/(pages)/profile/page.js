"use client";
import React, { useEffect, useState } from 'react';
import { useUser } from '@/context/UserContext';
import { useSession } from 'next-auth/react';
import UserProfile from '@/components/UserProfile';

const ProfilePage = () => {
  const { data: session } = useSession();
  const { user, loading, error, fetchUserById } = useUser();
  const [activityLog, setActivityLog] = useState([]);
  const [messages, setMessages] = useState([]);

  // Accessing the user's email from the session object
  const userEmail = session?.user?.email;

  useEffect(() => {
    if (userEmail && !user) {
      fetchUserById(userEmail); // Assuming fetchUserById requires the user's ID
    }
    // Simulated fetch for activity logs and messages
    setActivityLog([
      { date: '2024-09-01', action: 'Updated profile picture' },
      { date: '2024-08-20', action: 'Changed password' },
    ]);
    setMessages([
      { date: '2024-09-01', content: 'Your profile was updated successfully.' },
      { date: '2024-08-30', content: 'New feature announcement!' },
    ]);
  }, [userEmail, user, fetchUserById]);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white">
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-8">
          {session?.user?.role === "user" ? 'User Profile' : ''}
        </h1>
        <div className="flex flex-col md:flex-row gap-6">
          <main className="md:w-3/4 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 ease-in-out">
            {session?.user?.role === "user" && <UserProfile />}
            {session?.user?.role === "recycler" && (
              <>
              </>
            )}

            {/* Profile Overview */}
            <section className="my-6">
              <h2 className="text-2xl font-semibold mb-4">Profile Overview</h2>
              <div className="bg-gray-200 dark:bg-gray-700 p-4 rounded-lg">
                <div className="flex items-center gap-4">
                  <img src={user?.profilePicture || '/default-avatar.png'} alt="Profile Picture" className="w-20 h-20 rounded-full" />
                  <div>
                    <h3 className="text-xl font-bold">{user?.name || 'User Name'}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{user?.email || 'user@example.com'}</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Account Settings */}
            <section className="my-6">
              <h2 className="text-2xl font-semibold mb-4">Account Settings</h2>
              <div className="bg-gray-200 dark:bg-gray-700 p-4 rounded-lg">
                <button className="bg-[rgb(103,232,67)] text-white px-4 py-2 rounded hover:bg-green-600 transition-colors">Edit Profile</button>
                <button className="ml-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors">Delete Account</button>
              </div>
            </section>

            {/* Activity Log */}
            <section className="my-6">
              <h2 className="text-2xl font-semibold mb-4">Activity Log</h2>
              <div className="bg-gray-200 dark:bg-gray-700 p-4 rounded-lg">
                <ul className="space-y-2">
                  {activityLog.length > 0 ? (
                    activityLog.map((activity, index) => (
                      <li key={index} className="border-b border-gray-300 dark:border-gray-600 pb-2 mb-2">
                        <p className="text-sm">{activity.date}: {activity.action}</p>
                      </li>
                    ))
                  ) : (
                    <p>No recent activities.</p>
                  )}
                </ul>
              </div>
            </section>

            {/* Messages/Notifications */}
            <section className="my-6">
              <h2 className="text-2xl font-semibold mb-4">Messages & Notifications</h2>
              <div className="bg-gray-200 dark:bg-gray-700 p-4 rounded-lg">
                <ul className="space-y-2">
                  {messages.length > 0 ? (
                    messages.map((message, index) => (
                      <li key={index} className="border-b border-gray-300 dark:border-gray-600 pb-2 mb-2">
                        <p className="text-sm">{message.date}: {message.content}</p>
                      </li>
                    ))
                  ) : (
                    <p>No new messages.</p>
                  )}
                </ul>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
