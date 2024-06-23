"use client";

import Header from "@/app/components/header";
import { useEffect, useRef, useState } from "react";

const J1 = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const items = [
    { src: "../img1.jpg", alt: "img1", class: "Class1", place: "1-A", description: "Find quickly all the class names and CSS properties with this interactive cheat sheet. The only Tailwind CheatSheet you will ever need!" },
    { src: "../img2.jpg", alt: "img2", class: "Class2", place: "1-B", description: "Find quickly all the class names and CSS properties with this interactive cheat sheet. The only Tailwind CheatSheet you will ever need!" },
    { src: "../img3.jpg", alt: "img3", class: "Class3", place: "1-C",  description: "Find quickly all the class names and CSS properties with this interactive cheat sheet. The only Tailwind CheatSheet you will ever need!" },
    { src: "../img4.jpg", alt: "img4", class: "Class4", place: "1-D", description: "Find quickly all the class names and CSS properties with this interactive cheat sheet. The only Tailwind CheatSheet you will ever need!" },
    { src: "../img1.jpg", alt: "img1", class: "Class5", place: "1-E", description: "Find quickly all the class names and CSS properties with this interactive cheat sheet. The only Tailwind CheatSheet you will ever need!" },
    { src: "../img2.jpg", alt: "img2", class: "Class6", place: "1-F", description: "Find quickly all the class names and CSS properties with this interactive cheat sheet. The only Tailwind CheatSheet you will ever need!" },
  ];

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
  };

  return (
    <>
      <Header />
      <section className="flex items-center justify-center h-lvh relative">
        <div className="relative h-full w-full flex items-center justify-center">
          {items.map((item, index) => (
            <div
              key={index}
              className={`absolute inset-0 flex flex-col justify-start transition-opacity duration-500 ${activeIndex === index ? "opacity-100" : "opacity-0"}`}
            >
              
              {/* Gradient And Img*/}
              <div className="relative h-full w-full">
                <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-b from-transparent via-black*10 to-black"></div>
                <img className="h-full w-full object-cover" src={item.src} alt={item.alt} />
              </div>
              
              {/* Class, Place And Description */}
              <div className="flex flex-col items-center justify-start absolute inset-0 text-white">
                <div className="text-5xl w-10/12 pt-20 flex flex-col items-center">
                  <div>{item.class}</div>
                  <p className="text-xl mt-3">@{item.place}</p>
                </div>
                <div className="text-base w-10/12 text-center pt-10">{item.description}</div>
              </div>

            </div>
          ))}

          {/* Carousel Right*/}
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2"  onClick={nextSlide}>
            <svg className="w-[30px] h-[30px] fill-white" viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg">
              <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"></path>
            </svg>
          </div>

          {/* Carousel Left*/}
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2" onClick={prevSlide}>
            <svg className="w-[30px] h-[30px] fill-white" viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg">
              <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"></path>
            </svg>
          </div>

        </div>
      </section>
    </>
  );
};

export default J1;
