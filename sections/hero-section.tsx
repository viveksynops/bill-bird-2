"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

import { revealItem, staggerContainer } from "@/animations/easings";
import { campaignImages, campaignVideos } from "@/constants/site";

export function HeroSection() {
  const { scrollYProgress } = useScroll();
  const imageY = useTransform(scrollYProgress, [0, 0.45], ["0%", "16%"]);
  const textY = useTransform(scrollYProgress, [0, 0.45], ["0%", "-12%"]);
  const scale = useTransform(scrollYProgress, [0, 0.35], [1.06, 1.16]);

  return (
    <section
      id="top"
      className="relative flex min-h-screen overflow-hidden bg-[#F8F6F2] text-[#111111]"
      aria-label="Eyewear Without Compromise"
    >
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        style={{ y: imageY, scale }}
      >
        <Image
          src={campaignVideos.hero.poster}
          alt={campaignImages.hero.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <video
          className="absolute inset-0 hidden h-full w-full object-cover object-center motion-safe:block"
          poster={campaignVideos.hero.poster}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        >
          <source src={campaignVideos.hero.src} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(248,246,242,0.88)_0%,rgba(248,246,242,0.46)_42%,rgba(248,246,242,0.06)_100%)]" />
      </motion.div>

      <motion.div
        className="relative z-10 mx-auto flex w-full max-w-[1680px] flex-col justify-end px-5 pb-20 pt-32 md:px-10 md:pb-24 lg:px-16"
        style={{ y: textY }}
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={revealItem}
          className="max-w-[11ch] font-serif text-[clamp(4rem,11vw,10rem)] font-light leading-[0.86] tracking-[0.02em]"
        >
          Eyewear Without Compromise
        </motion.h1>
        <motion.p
          variants={revealItem}
          className="mt-8 max-w-md text-base font-light leading-8 tracking-[0.08em] text-[#111111]/72 md:text-xl"
        >
          Crafted with intention. Designed for decades.
        </motion.p>
        <motion.div
          variants={revealItem}
          className="mt-16 flex items-center gap-4 text-[0.66rem] uppercase tracking-[0.28em] text-[#111111]/58"
        >
          <span className="h-px w-16 bg-[#111111]/35" />
          Scroll
        </motion.div>
      </motion.div>
    </section>
  );
}
