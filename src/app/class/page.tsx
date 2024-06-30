"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

// Define the ClassItem interface
interface ClassItem {
  id: number;
  name: string;
  time: string;
  location: string;
  img: string;
}

// Define the Tab interface
interface TabProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

// Define the TabContents interface
interface TabContentsProps {
  activeTab: string;
  classes: ClassItem[];
}

// Tab component
const Tab: React.FC<TabProps> = ({ label, isActive, onClick }) => (
  <button
    className={`relative py-2 mx-4 transition-colors duration-300 ${
      isActive ? 'text-sky-500' : 'text-white'
    }`}
    onClick={onClick}
  >
    {label}
    {isActive && (
      <motion.div
        className="absolute left-0 right-0 h-0.5 bg-sky-500 bottom-0"
        layoutId="underline"
      />
    )}
  </button>
);

// ClassList component
const ClassList: React.FC<{ classes: ClassItem[] }> = ({ classes }) => (
  <div className="space-y-4 w-full max-w-md mx-auto mt-6">
    {classes.map((classItem) => (
      <Link key={classItem.id} href={`/details?id=${classItem.id}`}>
        <motion.div 
          className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 ease-in-out"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="flex items-center p-4">
            <div className="flex-shrink-0 mr-4">
              <img 
                src={classItem.img} 
                alt={classItem.name} 
                className="w-16 h-16 rounded-full object-cover"
              />
            </div>
            <div className="flex-grow">
              <h2 className="text-lg font-semibold text-gray-800">{classItem.name}</h2>
              <p className="text-sm text-gray-600">{classItem.time}</p>
              <p className="text-sm text-gray-600">{classItem.location}</p>
            </div>
            <div className="flex-shrink-0">
              <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </motion.div>
      </Link>
    ))}
  </div>
);

// TabContents component
const TabContents: React.FC<TabContentsProps> = ({ activeTab, classes }) => {
  switch (activeTab) {
    case 'Overview':
      return <ClassList classes={classes} />;
    case 'Features':
      return <ClassList classes={classes} />;
    case 'Pricing':
      return <ClassList classes={classes} />;
    default:
      return null;
  }
};

// Main Class component
const Class: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('Overview');

  const tabs = [
    { id: 'Overview', label: 'Overview' },
    { id: 'Features', label: 'Features' },
    { id: 'Pricing', label: 'Pricing' },
  ];

  const classes: ClassItem[] = [
    { id: 1, name: 'Class1', time: "12:00", location: "Arena", img: "/img1.jpg" },
    { id: 2, name: 'Class2', time: "13:00", location: "Co-Tan", img: "/img2.jpg" },
    { id: 3, name: 'Class3', time: "14:00", location: "Arena", img: "/img3.jpg" },
    { id: 4, name: 'Class4', time: "15:00", location: "Co-Tan", img: "/img4.jpg" },
  ];

  return (
    <div className="w-screen h-screen bg-gradient-to-b from-gray-100 to-gray-300">
      <nav className="sticky top-0 bg-white w-full max-w-xl mx-auto bg-opacity-20 backdrop-filter backdrop-blur-sm shadow-md rounded-b-2xl z-20 pt-2">
        <div className="flex justify-center">
          {tabs.map((tab) => (
            <Tab
              key={tab.id}
              label={tab.label}
              isActive={activeTab === tab.id}
              onClick={() => setActiveTab(tab.id)}
            />
          ))}
        </div>
      </nav>
      <div className="relative z-10">
        <TabContents activeTab={activeTab} classes={classes} />
      </div>
    </div>
  );
};

export default Class;
