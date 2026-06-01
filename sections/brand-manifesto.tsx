import { Reveal } from "@/components/motion/reveal";
import { manifestoLines } from "@/constants/site";

export function BrandManifesto() {
  return (
    <section className="flex min-h-screen items-center bg-[#E9E1D7] px-5 py-24 text-[#111111] md:px-10 lg:px-16">
      <div className="mx-auto w-full max-w-[1680px]">
        {manifestoLines.map((line, index) => (
          <Reveal
            key={line}
            delay={index * 0.06}
            className="border-b border-[#111111]/14 py-5"
          >
            <p className="font-serif text-[clamp(3.8rem,10vw,11rem)] font-light leading-[0.88] tracking-[0.01em]">
              {line}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
