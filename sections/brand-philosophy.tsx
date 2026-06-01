import Image from "next/image";

import { Reveal } from "@/components/motion/reveal";
import { campaignImages, philosophyPoints } from "@/constants/site";

export function BrandPhilosophy() {
  return (
    <section
      id="philosophy"
      className="bg-[#F8F6F2] px-5 py-24 text-[#111111] md:px-10 md:py-36 lg:px-16"
    >
      <div className="mx-auto grid max-w-[1500px] gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-start lg:gap-20">
        <Reveal className="relative aspect-[4/5] min-h-[440px] overflow-hidden md:aspect-[5/6] lg:min-h-[660px]">
          <Image
            src={campaignImages.craft.src}
            alt={campaignImages.craft.alt}
            fill
            sizes="(min-width: 1024px) 42vw, 100vw"
            className="object-cover"
          />
        </Reveal>

        <div className="grid gap-10 lg:min-h-[660px] lg:content-between lg:pt-2">
          <Reveal>
            <p className="mb-7 text-[0.68rem] uppercase tracking-[0.32em] text-[#8B7355]">
              Philosophy
            </p>
            <h2 className="max-w-[10.5ch] font-serif text-[clamp(3.6rem,8vw,8.2rem)] font-light leading-[0.88] tracking-[0.01em]">
              Fewer things. Better chosen.
            </h2>
          </Reveal>

          <div className="grid gap-10">
            <Reveal delay={0.1}>
              <p className="max-w-[34rem] text-lg font-light leading-9 text-[#111111]/68 md:text-2xl md:leading-10">
                BILL BIRD frames are built around restraint: deliberate
                silhouettes, enduring materials, and details that reward
                closeness rather than announce themselves from across the room.
              </p>
            </Reveal>
            <div className="grid gap-4 sm:grid-cols-2">
              {philosophyPoints.map((point, index) => (
                <Reveal
                  key={point}
                  delay={index * 0.05}
                  className="border-t border-[#111111]/16 py-5"
                >
                  <span className="font-serif text-3xl font-light">{point}</span>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
