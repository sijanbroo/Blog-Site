import React from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function AnimatedWrapper({
  children,
  animation = "fadeInUp",
  delay = 0,
  duration = 900,
  className = "",
}) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const animationClasses = {
    fadeInUp: "opacity-0 translate-y-8",
    fadeInDown: "opacity-0 -translate-y-8",
    fadeInLeft: "opacity-0 -translate-x-8",
    fadeInRight: "opacity-0 translate-x-8",
    zoomIn: "opacity-0 scale-95",
    slideInLeft: "opacity-0 -translate-x-12",
    slideInRight: "opacity-0 translate-x-12",
  };

  const activeClass = isVisible
    ? "opacity-100 translate-y-0 -translate-x-0 translate-x-0 scale-100"
    : animationClasses[animation];

  return (
    <div
      ref={ref}
      className={`transition-all ease-out ${activeClass} ${className}`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: isVisible ? `${delay}ms` : "0ms",
      }}
    >
      {children}
    </div>
  );
}
