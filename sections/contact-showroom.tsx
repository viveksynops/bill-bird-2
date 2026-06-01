import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export function ContactShowroom() {
  return (
    <section id="contact" className="bg-[#111111] px-5 py-24 text-[#F8F6F2] md:px-10 md:py-32 lg:px-16">
      <div className="mx-auto grid max-w-[1500px] gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="mb-7 text-[0.68rem] uppercase tracking-[0.32em] text-[#8B7355]">
            Contact & Showroom
          </p>
          <h2 className="font-serif text-[clamp(3.8rem,8vw,8rem)] font-light leading-[0.9]">
            Private fittings by appointment.
          </h2>
          <div className="mt-16 grid gap-8 border-t border-[#F8F6F2]/14 pt-8 md:grid-cols-2">
            <div>
              <p className="text-[0.68rem] uppercase tracking-[0.28em] text-[#F8F6F2]/46">
                Showroom
              </p>
              <p className="mt-4 text-xl font-light leading-8">
                Dubai Design District<br />Dubai, UAE
              </p>
            </div>
            <div>
              <p className="text-[0.68rem] uppercase tracking-[0.28em] text-[#F8F6F2]/46">
                Inquiries
              </p>
              <p className="mt-4 text-xl font-light leading-8">
                studio@billbird.com<br />+33 1 42 00 18 18
              </p>
            </div>
          </div>
        </div>

        <form
          className="grid gap-5"
          aria-label="Showroom inquiry form"
          action="mailto:studio@billbird.com"
          method="post"
          encType="text/plain"
        >
          <label className="sr-only" htmlFor="showroom-name">
            Name
          </label>
          <input
            id="showroom-name"
            className="h-14 border-b border-[#F8F6F2]/18 bg-transparent text-base font-light outline-none transition placeholder:text-[#F8F6F2]/38 focus:border-[#F8F6F2]/70"
            name="name"
            placeholder="Name"
            autoComplete="name"
            required
          />
          <label className="sr-only" htmlFor="showroom-email">
            Email
          </label>
          <input
            id="showroom-email"
            className="h-14 border-b border-[#F8F6F2]/18 bg-transparent text-base font-light outline-none transition placeholder:text-[#F8F6F2]/38 focus:border-[#F8F6F2]/70"
            name="email"
            type="email"
            placeholder="Email"
            autoComplete="email"
            required
          />
          <label className="sr-only" htmlFor="showroom-message">
            Inquiry
          </label>
          <textarea
            id="showroom-message"
            className="min-h-36 resize-none border-b border-[#F8F6F2]/18 bg-transparent py-4 text-base font-light outline-none transition placeholder:text-[#F8F6F2]/38 focus:border-[#F8F6F2]/70"
            name="message"
            placeholder="Inquiry"
            required
          />
          <Button type="submit" className="mt-6 w-fit bg-[#F8F6F2] text-[#111111] hover:bg-[#E9E1D7]">
            Request Appointment
            <ArrowUpRight aria-hidden="true" data-icon="inline-end" />
          </Button>
          <div className="mt-16 flex gap-6 text-[0.68rem] uppercase tracking-[0.28em] text-[#F8F6F2]/52">
            <a href="https://instagram.com" className="transition hover:text-[#F8F6F2]">Instagram</a>
            <a href="https://pinterest.com" className="transition hover:text-[#F8F6F2]">Pinterest</a>
            <a href="https://linkedin.com" className="transition hover:text-[#F8F6F2]">LinkedIn</a>
          </div>
        </form>
      </div>
    </section>
  );
}
