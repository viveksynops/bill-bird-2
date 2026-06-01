"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

import { campaignImages } from "@/constants/site";

export function FeaturedCampaign() {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section ref={ref} className="relative min-h-screen overflow-hidden bg-[#111111] text-[#F8F6F2]">
      <motion.div className="absolute inset-0 scale-110" style={{ y }}>
        <Image
          src={campaignImages.hero.src}
          alt={campaignImages.hero.alt}
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(17,17,17,0.8),rgba(17,17,17,0.25),rgba(17,17,17,0.05))]" />
      </motion.div>
      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1680px] flex-col justify-end px-5 py-20 md:px-10 lg:px-16">
        <p className="mb-6 text-[0.68rem] uppercase tracking-[0.32em] text-[#F8F6F2]/62">
          Featured Campaign
        </p>
        <h2 className="max-w-[10ch] font-serif text-[clamp(4rem,9vw,9rem)] font-light leading-[0.88]">
          A frame is a way of looking.
        </h2>
      </div>
    </section>
  );
}
