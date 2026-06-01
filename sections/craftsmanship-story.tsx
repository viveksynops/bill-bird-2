import Image from "next/image";

import { Reveal } from "@/components/motion/reveal";
import { craftsmanshipSteps } from "@/constants/site";
import { cn } from "@/lib/utils";

export function CraftsmanshipStory() {
  return (
    <section
      id="craftsmanship"
      className="bg-[#F8F6F2] px-5 py-24 text-[#111111] md:px-10 md:py-36 lg:px-16"
    >
      <div className="mx-auto max-w-[1500px]">
        <Reveal className="mb-20">
          <h2 className="max-w-[12ch] font-serif text-[clamp(3.8rem,8vw,8rem)] font-light leading-[0.9]">
            The work is quiet. The result is not.
          </h2>
        </Reveal>

        <div className="flex flex-col gap-24 md:gap-32">
          {craftsmanshipSteps.map((step, index) => (
            <article
              key={step.title}
              className={cn(
                "grid gap-10 lg:grid-cols-2 lg:items-center",
                index % 2 === 1 && "lg:[&>*:first-child]:order-2",
              )}
            >
              <Reveal className="relative aspect-[4/5] overflow-hidden md:aspect-[5/4]">
                <Image
                  src={step.image.src}
                  alt={step.image.alt}
                  fill
                  sizes="(min-width: 1024px) 46vw, 100vw"
                  className="object-cover"
                />
              </Reveal>
              <Reveal delay={0.08} className="max-w-xl">
                <p className="mb-5 text-[0.68rem] uppercase tracking-[0.3em] text-[#8B7355]">
                  {step.eyebrow}
                </p>
                <h3 className="font-serif text-5xl font-light leading-none md:text-7xl">
                  {step.title}
                </h3>
                <p className="mt-8 text-lg font-light leading-9 text-[#111111]/66 md:text-xl md:leading-10">
                  {step.body}
                </p>
              </Reveal>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
