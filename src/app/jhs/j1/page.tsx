"use client";

import ScrollIndicator from "@/app/components/ScrollIndicator";
import ScrollRevealContainer from "@/app/components/ScrollReveal";
import Header from "@/app/components/header";
import {useRef, useState } from "react";

const J1 = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const items = [
    { src: "../img1.jpg", alt: "img1", class: "Class1", place: "1-A", description: "Find quickly all the class names and CSS properties with this interactive cheat sheet. The only Tailwind CheatSheet you will ever need!" },
    { src: "../img2.jpg", alt: "img2", class: "Class2", place: "1-B", description: "Find quickly all the class names and CSS properties with this interactive cheat sheet. The only Tailwind CheatSheet you will ever need!" },
    { src: "../img3.jpg", alt: "img3", class: "Class3", place: "1-C", description: "Find quickly all the class names and CSS properties with this interactive cheat sheet. The only Tailwind CheatSheet you will ever need!" },
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
      {/* Section1 Start */}
      <section className="flex items-center justify-center h-lvh relative">
        {/* TopCharacter */}
        <div className="absolute top-1/2 transform -translate-y-1/2 text-center z-10 mx-10">
          <ScrollRevealContainer move="bottom">
            <div className="mb-8 px-2 sm:px-5 text-4xl sm:text-5xl md:text-7xl">中学1年生</div>
            <div className="mb-1 text-base sm:text-lg md:text-xl">ー 常設展示 ー</div>
            <div className="text-xs sm:text-sm md:text-base">段ボールを使用したアートを展示しています</div>
          </ScrollRevealContainer>
        </div>

        {/* ScrollIndicator */}
        <div className="absolute bottom-[15%] left-0 right-0 flex items-center justify-center">
          <ScrollIndicator />
        </div>
      </section>
      {/* Section1 End */}

      {/* Section2 Start */}
      <section className="flex items-center justify-center h-custom relative">
        <div className="relative h-full w-full flex items-center justify-center">
          {items.map((item, index) => (
            <div
              key={index}
              className={`absolute inset-0 flex flex-col justify-start transition-opacity duration-500 ${activeIndex === index ? "opacity-100" : "opacity-0"}`}
            >
              {/* Gradient And Img */}
              <div className="relative h-full w-full image-container">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/2 to-black"></div>
                <div className="absolute inset-0">
                  <img className="h-full w-full object-cover mask_img" src={item.src} alt={item.alt} />
                </div>
              </div>

              {/* Class, Place And Description */}
              <div className="absolute flex flex-col items-center justify-center text-center text-white top-3/4 left-1/2 transform -translate-y-3/4 -translate-x-1/2 w-10/12">
                <ScrollRevealContainer move="bottom">
                  <div className="text-5xl">{item.class}</div>
                  <p className="text-xl mt-3">@{item.place}</p>
                  <div className="text-base pt-32">{item.description}</div>
                </ScrollRevealContainer>
              </div>

              {/* Carousel Right */}
              <div className="absolute text-center text-white right-0 top-2/3 transform -translate-y-2/3" onClick={nextSlide}>
                <svg className="w-8 h-8 fill-white" viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg">
                  <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"></path>
                </svg>
              </div>

              {/* Carousel Left */}
              <div className="absolute text-center text-white left-0 top-2/3 transform -translate-y-2/3" onClick={prevSlide}>
                <svg className="w-8 h-8 fill-white" viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg">
                  <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5 0-45.3l-160 160z"></path>
                </svg>
              </div>

            </div>
          ))}
        </div>
      </section>
      {/* Section2 End */}
    </>
  );
};

export default J1;
