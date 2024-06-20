"use client";

import { FC, useRef, useEffect } from "react";

interface ScrollRevealContainerProps {
  move?: string;
  children?: React.ReactNode;
}

const ScrollRevealContainer: FC<ScrollRevealContainerProps> = ({
  children,
  move = "bottom"
}) => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          section.style.transition = "opacity 1s ease, transform 1s ease, filter 1s ease";
          section.style.opacity = "1";
          section.style.transform = "translateY(0)";
          section.style.filter = "blur(0px)";
        } else {
          section.style.opacity = "0";
          section.style.filter = "blur(4px)";
          switch (move) {
            case "top":
              section.style.transform = "translateY(-20px)";
              break;
            case "left":
              section.style.transform = "translateX(-20px)";
              break;
            case "right":
              section.style.transform = "translateX(20px)";
              break;
            case "bottom":
            default:
              section.style.transform = "translateY(20px)";
              break;
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, {
      threshold: 0.15 // 要素が1％表示されたときにトリガー
    });

    observer.observe(section);

    return () => {
      observer.unobserve(section);
    };
  }, [move]);

  return (
    <section
      ref={sectionRef}
      style={{
        opacity: 0,
        filter: "blur(4px)",
        transform: move === "top" ? "translateY(-20px)" :
                  move === "left" ? "translateX(-20px)" :
                  move === "right" ? "translateX(20px)" :
                  "translateY(20px)"
      }}
    >
      {children}
    </section>
  );
};

export default ScrollRevealContainer;
