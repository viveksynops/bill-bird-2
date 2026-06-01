import Image from "next/image";

import { Reveal } from "@/components/motion/reveal";
import { journalEntries } from "@/constants/site";

export function JournalPreview() {
  return (
    <section id="journal" className="bg-[#F8F6F2] px-5 py-24 text-[#111111] md:px-10 md:py-36 lg:px-16">
      <div className="mx-auto max-w-[1680px]">
        <Reveal className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <h2 className="font-serif text-[clamp(3.6rem,8vw,8rem)] font-light leading-[0.9]">
            Journal
          </h2>
          <p className="max-w-md text-lg font-light leading-8 text-[#111111]/64">
            Notes on design, materials, and the quiet rituals behind a lasting frame.
          </p>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {journalEntries.map((entry, index) => (
            <Reveal key={entry.title} delay={index * 0.05} className="group">
              <div className="relative aspect-[3/4] overflow-hidden bg-[#E9E1D7]">
                <Image
                  src={entry.image.src}
                  alt={entry.image.alt}
                  fill
                  sizes="(min-width: 1024px) 24vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <p className="mt-6 text-[0.66rem] uppercase tracking-[0.28em] text-[#8B7355]">
                {entry.topic}
              </p>
              <h3 className="mt-3 font-serif text-3xl font-light leading-tight">
                {entry.title}
              </h3>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
