"use client";

import React, { useRef, useState, useEffect } from "react";
import useMousePosition from "@/utils/useMousePosition";

type SpotlightProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Spotlight({
  children,
  className = "",
}: SpotlightProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mousePosition = useMousePosition();
  const mouse = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const containerSize = useRef<{ w: number; h: number }>({ w: 0, h: 0 });
  const [boxes, setBoxes] = useState<HTMLElement[]>([]);

  useEffect(() => {
    const initContainer = () => {
      if (containerRef.current) {
        containerSize.current.w = containerRef.current.offsetWidth;
        containerSize.current.h = containerRef.current.offsetHeight;
        setBoxes(Array.from(containerRef.current.children).map(el => el as HTMLElement));
      }
    };

    initContainer();
    window.addEventListener("resize", initContainer);

    return () => {
      window.removeEventListener("resize", initContainer);
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = () => {
      if (containerRef.current && boxes.length > 0) {
        const rect = containerRef.current.getBoundingClientRect();
        const { w, h } = containerSize.current;
        const x = mousePosition.x - rect.left;
        const y = mousePosition.y - rect.top;
        if (x >= 0 && x <= w && y >= 0 && y <= h) {
          mouse.current.x = x;
          mouse.current.y = y;

          boxes.forEach((box) => {
            const boxRect = box.getBoundingClientRect();
            const boxX = -(boxRect.left - rect.left) + mouse.current.x;
            const boxY = -(boxRect.top - rect.top) + mouse.current.y;
            box.style.setProperty("--mouse-x", `${boxX}px`);
            box.style.setProperty("--mouse-y", `${boxY}px`);
          });
        }
      }
    };

    handleMouseMove(); // Initial mouse position update
  }, [mousePosition, boxes]);

  return (
    <div className={className} ref={containerRef}>
      {children}
    </div>
  );
}
