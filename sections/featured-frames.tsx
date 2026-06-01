import Image from "next/image";

import { Reveal } from "@/components/motion/reveal";
import { featuredFrames } from "@/constants/site";

export function FeaturedFrames() {
  return (
    <section className="bg-[#F8F6F2] px-5 py-24 text-[#111111] md:px-10 md:py-36 lg:px-16">
      <div className="mx-auto max-w-[1500px]">
        <Reveal className="mb-20">
          <h2 className="font-serif text-[clamp(3.6rem,8vw,8rem)] font-light leading-[0.9]">
            Frames As Objects
          </h2>
        </Reveal>

        <div className="flex flex-col gap-24">
          {featuredFrames.map((frame) => (
            <Reveal
              key={frame.name}
              className="grid gap-8 border-t border-[#111111]/14 pt-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-center"
            >
              <div>
                <p className="mb-5 text-[0.68rem] uppercase tracking-[0.3em] text-[#8B7355]">
                  {frame.material}
                </p>
                <h3 className="font-serif text-5xl font-light md:text-7xl">
                  {frame.name}
                </h3>
                <p className="mt-6 max-w-md text-lg font-light leading-9 text-[#111111]/66">
                  {frame.description}
                </p>
              </div>
              <div className="relative aspect-[16/10] overflow-hidden bg-[#E9E1D7]">
                <Image
                  src={frame.image.src}
                  alt={frame.image.alt}
                  fill
                  sizes="(min-width: 1024px) 58vw, 100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
