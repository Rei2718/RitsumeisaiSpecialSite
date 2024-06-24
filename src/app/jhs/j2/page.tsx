"use client";

import ScrollIndicator from "@/app/components/ScrollIndicator";
import ScrollRevealContainer from "@/app/components/ScrollReveal";
import Header from "@/app/components/header";
import { useRef, useState } from "react";

const J2 = () => {
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
      <div className="container relative">
        <h1 className="neonText z-10">HELLO</h1>
      </div>
    </>
  );

  
};

export default J2;
