"use client"

import React, { useState } from 'react';
import Link from 'next/link';

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
  classes_j1: ClassItem[];
  classes_j2: ClassItem[];
  classes_j3: ClassItem[];
  classes_s1: ClassItem[];
  classes_s2: ClassItem[];
  classes_s3: ClassItem[];
}

// Tab component
const Tab: React.FC<TabProps> = ({ label, isActive, onClick }) => (
  <button
    className={`relative py-2 mx-2 transition-colors duration-300 ${
      isActive ? 'text-sky-500' : 'text-white'
    }`}
    onClick={onClick}
  >
    {label}
    {isActive && (
      <div className="absolute left-0 right-0 h-0.5 bg-sky-500 bottom-0"/>
    )}
  </button>
);


const ClassList: React.FC<{ classes: ClassItem[] }> = ({ classes }) => (
  <div className="flex justify-center items-center min-h-screen">
    <div className="grid grid-cols-1 gap-4 w-10/12 max-w-xl mx-auto">
      {classes.map((classItem) => (
        <Link key={classItem.id} href={`/details?id=${classItem.id}`}>
          <div className="bg-transparent rounded-lg p-4 transition duration-300 ease-in-out cursor-pointer">
            <div className="flex items-center">
              <div className="flex-shrink-0 mr-4">
                <img 
                  src={classItem.img} 
                  alt={classItem.name} 
                  className="w-12 h-12 rounded-full object-cover"
                />
              </div>
              <div className="flex-grow text-gray-700">
                <h2 className="text-sm font-semibold break-words">{classItem.name}</h2>
                <p className="text-sm text-gray-700">{classItem.time}</p>
              </div>
              <div className="flex-shrink-0 text-green-400 text-center ml-4">
                <h2 className="text-sm font-semibold text-white">@{classItem.location}</h2>
                <p className="text-xs text-gray-700">See More</p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  </div>
);

// TabContents component
const TabContents: React.FC<TabContentsProps> = ({ activeTab, classes_j1, classes_j2, classes_j3, classes_s1, classes_s2, classes_s3 }) => {
  switch (activeTab) {
    case 'Junior':
      return (
        <>
          <h1 className="text-xl text-white my-8 text-center">中学一年生</h1>
          <ClassList classes={classes_j1} />
          <h1 className="text-xl text-white my-8 text-center">中学二年生</h1>
          <ClassList classes={classes_j2} />
          <h1 className="text-xl text-white my-8 text-center">中学三年生</h1>
          <ClassList classes={classes_j3} />
        </>
      );
    case 'Senior':
      return (
        <>
          <h1 className="text-xl text-white my-8 text-center">高校一年生</h1>
          <ClassList classes={classes_s1} />
          <h1 className="text-xl text-white my-8 text-center">高校二年生</h1>
          <ClassList classes={classes_s2} />
          <h1 className="text-xl text-white my-8 text-center">高校三年生</h1>
          <ClassList classes={classes_s3} />
        </>
      );
    default:
      return null;
  }
};

// Main Class component
const Class: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('Junior');

  const tabs = [
    { id: 'Junior', label: 'Junior' },
    { id: 'Senior', label: 'Senior' },
  ];

  const classes_j1: ClassItem[] = [
    { id: 1, name: '「血縁のトリアージ」~君が選んだ世界線~', time: "12:00", location: "Arena", img: "/img1.jpg" },
    { id: 2, name: 'Class2', time: "13:00", location: "Co-Tan", img: "/img2.jpg" },
    { id: 3, name: 'Class3', time: "14:00", location: "Arena", img: "/img3.jpg" },
    { id: 4, name: 'Class4', time: "15:00", location: "Co-Tan", img: "/img4.jpg" },
    { id: 5, name: 'Class1', time: "12:00", location: "Arena", img: "/img1.jpg" },
    { id: 6, name: 'Class2', time: "13:00", location: "Co-Tan", img: "/img2.jpg" },
    { id: 7, name: 'Class3', time: "14:00", location: "Arena", img: "/img3.jpg" },
    { id: 8, name: 'Class4', time: "15:00", location: "Co-Tan", img: "/img4.jpg" },
  ];

  const classes_j2: ClassItem[] = [
    { id: 1, name: 'Class1', time: "12:00", location: "Arena", img: "/img1.jpg" },
    { id: 2, name: 'Class2', time: "13:00", location: "Co-Tan", img: "/img2.jpg" },
    { id: 3, name: 'Class3', time: "14:00", location: "Arena", img: "/img3.jpg" },
    { id: 4, name: 'Class4', time: "15:00", location: "Co-Tan", img: "/img4.jpg" },
    { id: 5, name: 'Class1', time: "12:00", location: "Arena", img: "/img1.jpg" },
    { id: 6, name: 'Class2', time: "13:00", location: "Co-Tan", img: "/img2.jpg" },
    { id: 7, name: 'Class3', time: "14:00", location: "Arena", img: "/img3.jpg" },
    { id: 8, name: 'Class4', time: "15:00", location: "Co-Tan", img: "/img4.jpg" },
  ];

  const classes_j3: ClassItem[] = [
    { id: 1, name: 'Class1', time: "12:00", location: "Arena", img: "/img1.jpg" },
    { id: 2, name: 'Class2', time: "13:00", location: "Co-Tan", img: "/img2.jpg" },
    { id: 3, name: 'Class3', time: "14:00", location: "Arena", img: "/img3.jpg" },
    { id: 4, name: 'Class4', time: "15:00", location: "Co-Tan", img: "/img4.jpg" },
    { id: 5, name: 'Class1', time: "12:00", location: "Arena", img: "/img1.jpg" },
    { id: 6, name: 'Class2', time: "13:00", location: "Co-Tan", img: "/img2.jpg" },
    { id: 7, name: 'Class3', time: "14:00", location: "Arena", img: "/img3.jpg" },
    { id: 8, name: 'Class4', time: "15:00", location: "Co-Tan", img: "/img4.jpg" },
  ];

  const classes_s1: ClassItem[] = [
    { id: 1, name: 'もしも世界で唯一無二の韓国風プリが取れたら!?', time: "12:00~13:00", location: "Arena", img: "/img1.jpg" },
    { id: 2, name: '1-B', time: "12:00~13:00", location: "Co-Tan", img: "/img2.jpg" },
    { id: 3, name: '1-C', time: "12:00~13:00", location: "Arena", img: "/img3.jpg" },
    { id: 4, name: '1-D', time: "12:00~13:00", location: "Co-Tan", img: "/img4.jpg" },
    { id: 5, name: '1-E', time: "12:00~13:00", location: "Arena", img: "/img1.jpg" },
    { id: 6, name: '1-F', time: "12:00~13:00", location: "Co-Tan", img: "/img2.jpg" },
    { id: 7, name: '1-G', time: "12:00~13:00", location: "Arena", img: "/img3.jpg" },
    { id: 8, name: '1-H', time: "12:00~13:00", location: "Co-Tan", img: "/img4.jpg" },
    { id: 9, name: '1-I', time: "12:00~13:00", location: "Arena", img: "/img1.jpg" },
  ];

  const classes_s2: ClassItem[] = [
    { id: 1, name: 'Class1', time: "12:00", location: "Arena", img: "/img1.jpg" },
  ];

  const classes_s3: ClassItem[] = [
    { id: 1, name: 'Class1', time: "12:00", location: "Arena", img: "/img1.jpg" },
  ];

  return (
    <>
      <nav className="sticky-navbar fixed top-0 left-1/2 transform -translate-x-1/2 w-full max-w-xl mx-auto z-40 bg-white bg-opacity-30 backdrop-filter backdrop-blur-sm shadow-md rounded-b-2xl text-white flex justify-center items-center p-2">
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
      <div className="relative z-10 my-28 ">
        <TabContents 
          activeTab={activeTab} 
          classes_j1={classes_j1} 
          classes_j2={classes_j2} 
          classes_j3={classes_j3} 
          classes_s1={classes_s1} 
          classes_s2={classes_s2} 
          classes_s3={classes_s3} 
        />
      </div>
    </>
  );
};

export default Class;
