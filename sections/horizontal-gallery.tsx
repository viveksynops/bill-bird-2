"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef } from "react";

import { galleryImages } from "@/constants/site";

gsap.registerPlugin(ScrollTrigger);

export function HorizontalGallery() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;

    if (!section || !track) {
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      return;
    }

    const context = gsap.context(() => {
      const getDistance = () => track.scrollWidth - window.innerWidth;

      gsap.to(track, {
        x: () => -getDistance(),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${getDistance()}`,
          scrub: 0.8,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    }, section);

    return () => context.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="overflow-hidden bg-[#111111] py-24 text-[#F8F6F2]"
      aria-label="Cinematic campaign gallery"
    >
      <div className="mb-10 px-5 md:px-10 lg:px-16">
        <p className="text-[0.68rem] uppercase tracking-[0.32em] text-[#8B7355]">
          Gallery
        </p>
      </div>
      <div ref={trackRef} className="flex w-max gap-5 px-5 md:gap-8 md:px-10 lg:px-16">
        {galleryImages.map((image, index) => (
          <figure
            key={`${image.src}-${index}`}
            className="relative h-[70vh] w-[78vw] shrink-0 overflow-hidden bg-[#E9E1D7] md:w-[58vw] lg:w-[42vw]"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(min-width: 1024px) 42vw, 78vw"
              className="object-cover"
            />
            <figcaption className="absolute bottom-6 left-6 text-[0.64rem] uppercase tracking-[0.28em] text-[#F8F6F2]/72">
              Study 0{index + 1}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
