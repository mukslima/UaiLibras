"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Slide = {
  title: string;
  description: string;
  href: string;
  image: string;
  alt: string;
};

type HomeCarouselProps = {
  slides: Slide[];
};

export function HomeCarousel({ slides }: HomeCarouselProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrent((index) => (index + 1) % slides.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, [slides.length]);

  const showPrevious = () => {
    setCurrent((index) => (index - 1 + slides.length) % slides.length);
  };

  const showNext = () => {
    setCurrent((index) => (index + 1) % slides.length);
  };

  return (
    <section className="hero">
      <div className="carousel">
        <button className="prev" type="button" aria-label="Slide anterior" onClick={showPrevious}>
          &#10094;
        </button>
        <div className="carousel-images">
          {slides.map((slide, index) => (
            <div className={`slide${index === current ? " active" : ""}`} key={slide.href}>
              <img src={slide.image} alt={slide.alt} />
              <div className="slide-content">
                <h2>{slide.title}</h2>
                <p>{slide.description}</p>
                <Link href={slide.href} className="btn-leia-mais">
                  Leia mais
                </Link>
              </div>
            </div>
          ))}
        </div>
        <button className="next" type="button" aria-label="Próximo slide" onClick={showNext}>
          &#10095;
        </button>
      </div>
    </section>
  );
}
