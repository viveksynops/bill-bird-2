import Image from "next/image";

import { Reveal } from "@/components/motion/reveal";
import { collections } from "@/constants/site";

export function SignatureCollections() {
  return (
    <section
      id="collections"
      className="bg-[#111111] px-5 py-24 text-[#F8F6F2] md:px-10 md:py-36 lg:px-16"
    >
      <div className="mx-auto max-w-[1680px]">
        <Reveal className="mb-16 flex flex-col justify-between gap-8 md:mb-24 md:flex-row md:items-end">
          <h2 className="font-serif text-[clamp(3.6rem,8vw,8.8rem)] font-light leading-[0.88]">
            Signature Collections
          </h2>
          <p className="max-w-sm text-sm uppercase leading-7 tracking-[0.22em] text-[#F8F6F2]/58">
            Four studies in proportion, weight, shadow, and permanence.
          </p>
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-2">
          {collections.map((collection, index) => (
            <Reveal
              key={collection.name}
              delay={index * 0.05}
              className="group relative min-h-[520px] overflow-hidden bg-[#E9E1D7]"
            >
              <Image
                src={collection.image.src}
                alt={collection.image.alt}
                fill
                sizes="(min-width: 1024px) 48vw, 100vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,17,17,0.05)_0%,rgba(17,17,17,0.66)_100%)]" />
              <div className="absolute inset-x-0 bottom-0 p-7 md:p-10">
                <p className="mb-3 text-[0.65rem] uppercase tracking-[0.3em] text-[#F8F6F2]/62">
                  0{index + 1}
                </p>
                <h3 className="font-serif text-5xl font-light md:text-7xl">
                  {collection.name}
                </h3>
                <p className="mt-4 max-w-md text-lg font-light leading-8 text-[#F8F6F2]/76">
                  {collection.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
