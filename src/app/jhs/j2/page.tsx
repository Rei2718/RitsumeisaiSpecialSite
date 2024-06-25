"use client";

import { useState } from "react";

const J2 = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <>
      {/* Tab Bar */}
      <div className="z-30 fixed top-0 w-full h-1/6 bg-white shadow-xl flex flex-col justify-between">
        <div className="flex items-center h-auto p-4 text-2xl">
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

      {/* section1 */}
      {activeTab === 1 && (
        <section className="flex items-center justify-center h-screen w-full">

          <div className="w-11/12 max-w-lg h-32 flex items-center p-4 bg-white shadow-lg rounded-lg">
            <div className="w-24 h-24 flex-shrink-0">
              <img
                src="https://via.placeholder.com/100"
                alt="Thumbnail"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="flex flex-col justify-between w-3/4 h-full pl-4">
              <h2 className="text-xl font-semibold">Class1 Project</h2>
              <div className="flex justify-between items-center text-gray-600">
                <div className="flex-1 flex flex-col justify-center items-center">
                  <span className="text-xs text-gray-500">TIME</span>
                  <span>10:00 AM</span>
                </div>
                <div className="h-full border-l border-gray-300 mx-4"></div>
                <div className="flex-1 flex flex-col justify-center items-center">
                  <span className="text-xs text-gray-500">PLACE</span>
                  <span>Arena</span>
                </div>
              </div>
              <div className="flex justify-end items-center text-blue-500 text-xs mt-2">
                <span>See More</span>
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          </div>

        </section>
      )}

      {/* section2 */}
      {activeTab === 2 && (
        <section className="flex items-center justify-center h-lvh">
          <h1 className="z-10">HELLO2</h1>
        </section>
      )}
    </>
  );
};

export default J2;
