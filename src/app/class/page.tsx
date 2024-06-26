"use client"

// src/app/class/page.tsx
import Link from 'next/link';
import { useState } from 'react';

const ClassPage = () => {
  const classes = [
    { id: 1, name: 'Class1', time: "12:00", location: "Arena" , img: "./img1.jpg"},
    { id: 2, name: 'Class2', time: "13:00", location: "Co-Tan", img: "./img2.jpg"},
    // 他のクラス情報
  ];

  const [activeTab, setActiveTab] = useState(1);

  return (
    <>
      {/* Tab Bar */}
      <div className="z-30 fixed top-0 w-full  h-auto bg-white shadow-xl flex flex-col justify-between">
        <div className="flex items-center h-14 p-1 pl-5 text-2xl">
          <span>Class Projects</span>
        </div>
        <div className="flex w-full items-end h-auto">
          <button
            className={`w-full px-4 py-2 text-center ${
              activeTab === 1
                ? "text-blue-700 border-b-2 border-blue-700"
                : "text-black border-b-2 border-transparent"
            }`}
            onClick={() => setActiveTab(1)}
          >
            Junior High School
          </button>
          <button
            className={`w-full px-4 py-2 text-center ${
              activeTab === 2
                ? "text-blue-700 border-b-2 border-blue-700"
                : "text-black border-b-2 border-transparent"
            }`}
            onClick={() => setActiveTab(2)}
          >
            Senior High School
          </button>
        </div>
      </div>

      {/* JuniorHighSchool */}
      {activeTab === 1 && (
        <div className="flex items-center justify-center h-lvh">
          <div className="grid grid-cols-1 gap-4">
            {classes.map((classItem) => (
              <Link key={classItem.id} legacyBehavior href={`/details?id=${classItem.id}`}>
                <a className="block p-4 border rounded shadow hover:shadow-lg transition">
                  <div className="flex items-center">
                    <img src={classItem.img} className="w-12 h-12 bg-gray-300 rounded-full mr-4" />
                    <div>
                      <h2 className="text-lg font-semibold">{classItem.name}</h2>
                      <p className="text-gray-600">{classItem.time}</p>
                      <p className="text-gray-600">{classItem.location}</p>
                    </div>
                  </div>
                </a>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* SeniorHighSchool */}
      {activeTab === 2 && (
        <div className="flex items-center justify-center h-lvh">
          SeniorSection
        </div>
      )}

    </>
  );
};

export default ClassPage;
