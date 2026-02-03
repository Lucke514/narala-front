"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const SLIDES = [
  { src: "/slider-image-1.jpeg", alt: "Narala Tienda - Productos Natura y Just" },
  { src: "/slider-image-2.jpeg", alt: "Narala Tienda - Cuidado personal y belleza" },
  { src: "/slider-image-3.jpeg", alt: "Narala Tienda - Perfumería y bienestar" },
];

const AUTOPLAY_MS = 5000;

interface HeroCarouselProps {
  className?: string;
}

export function HeroCarousel({ className = "" }: HeroCarouselProps) {
  const [index, setIndex] = useState(0);

  const goTo = useCallback((next: number) => {
    setIndex((i) => (next + SLIDES.length) % SLIDES.length);
  }, []);

  useEffect(() => {
    const id = setInterval(() => goTo(index + 1), AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [index, goTo]);

  return (
    <div className={`relative h-full w-full overflow-hidden rounded-3xl ${className}`}>
      {SLIDES.map((slide, i) => (
        <div
          key={slide.src}
          className="absolute inset-0 transition-opacity duration-500 ease-out"
          style={{
            opacity: i === index ? 1 : 0,
            pointerEvents: i === index ? "auto" : "none",
          }}
          aria-hidden={i !== index}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            className="object-cover"
            priority={i === 0}
            sizes="(max-width: 768px) 100vw, 560px"
          />
        </div>
      ))}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setIndex(i)}
            className="h-2 w-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2"
            style={{
              backgroundColor: i === index ? "#ec4899" : "rgba(255,255,255,0.6)",
              width: i === index ? 24 : 8,
            }}
            aria-label={`Ir a imagen ${i + 1}`}
            aria-current={i === index ? "true" : undefined}
          />
        ))}
      </div>
    </div>
  );
}
