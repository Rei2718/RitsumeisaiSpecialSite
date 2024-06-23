"use client";

import Header from "@/app/components/header";
import { useEffect, useRef, useState } from "react";

const J1 = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const items = [
    { src: "../img1.jpg", 
      alt: "img1", 
      class: "Class1", 
      description: "Find quickly all the class names and CSS properties with this interactive cheat sheet. The only Tailwind CheatSheet you will ever need!" 
    },
    { src: "../img2.jpg", 
      alt: "img2", 
      class: "Class2", 
      description: "Find quickly all the class names and CSS properties with this interactive cheat sheet. The only Tailwind CheatSheet you will ever need!" 
    },
    { src: "../img3.jpg", 
      alt: "img3", 
      class: "Class3", 
      description: "Find quickly all the class names and CSS properties with this interactive cheat sheet. The only Tailwind CheatSheet you will ever need!" 
    },
    { src: "../img4.jpg", 
      alt: "img4", 
      class: "Class4", 
      description: "Find quickly all the class names and CSS properties with this interactive cheat sheet. The only Tailwind CheatSheet you will ever need!" 
    },
    { src: "../img1.jpg", 
      alt: "img1", 
      class: "Class5", 
      description: "Find quickly all the class names and CSS properties with this interactive cheat sheet. The only Tailwind CheatSheet you will ever need!" 
    },
    { src: "../img2.jpg", 
      alt: "img2", 
      class: "Class6", 
      description: "Find quickly all the class names and CSS properties with this interactive cheat sheet. The only Tailwind CheatSheet you will ever need!" 
    },
  ];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    const handleScroll = () => {
      if (scrollContainer) {
        const maxScrollLeft = scrollContainer.scrollWidth / 3;
        if (scrollContainer.scrollLeft <= 0) {
          scrollContainer.scrollLeft = maxScrollLeft;
        } else if (scrollContainer.scrollLeft >= maxScrollLeft * 2) {
          scrollContainer.scrollLeft = maxScrollLeft;
        }
      }
    };
    if (scrollContainer) {
      scrollContainer.scrollLeft = scrollContainer.scrollWidth / 3;
      scrollContainer.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <>
      <Header />
      <section className="flex items-center justify-center h-lvh relative bg-black">
        {/* items */}
        {items.map((item, index) => (
          <div
            key={index}
            className={`absolute inset-0 flex flex-col justify-start transition-opacity duration-500 ${activeIndex === index ? "opacity-100" : "opacity-0"}`}
          >
            <img className="object-cover h-full w-full blur-xl" src={item.src} alt={item.alt} />
            <div className="text-white flex flex-col items-center justify-start absolute inset-0">
              <div className="text-5xl w-full">{item.class}</div>
              <div className="text-lg w-11/12 text-center">{item.description}</div>
            </div>
          </div>
        ))}

        {/* Buttons */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-center mb-4">
          <div ref={scrollRef} className="flex overflow-x-auto space-x-2 px-4 py-2">
            {[...items, ...items, ...items].map((item, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index % items.length)}
                className={`h-20 w-20 flex-shrink-0 rounded-lg bg-cover ${activeIndex === index % items.length ? "ring-2 ring-white" : "ring-0"}`}
                style={{ backgroundImage: `url(${item.src})` }}
                aria-label={`Navigate to ${item.description}`}
              ></button>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default J1;
