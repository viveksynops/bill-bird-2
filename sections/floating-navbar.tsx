"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

import { navItems } from "@/constants/site";
import { cn } from "@/lib/utils";

export function FloatingNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4 md:top-6 md:px-8">
      <nav
        aria-label="Primary navigation"
        className={cn(
          "mx-auto flex max-w-[1680px] items-center justify-between rounded-full px-5 py-4 transition-all duration-500 md:px-7",
          isScrolled || isOpen
            ? "border border-[#111111]/10 bg-[#F8F6F2]/78 shadow-[0_18px_60px_rgba(17,17,17,0.08)] backdrop-blur-xl"
            : "border border-transparent bg-transparent",
        )}
      >
        <Link
          href="#top"
          className="font-serif text-lg font-light tracking-[0.22em] text-[#111111] transition hover:text-[#8B7355] md:text-xl"
          onClick={() => setIsOpen(false)}
        >
          BILL BIRD
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative text-[0.67rem] font-medium uppercase tracking-[0.24em] text-[#111111]/72 transition hover:text-[#111111]"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#8B7355] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        <button
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          className="inline-flex size-10 items-center justify-center rounded-full border border-[#111111]/10 text-[#111111] transition hover:border-[#111111]/30 lg:hidden"
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>

        <Link
          href="#contact"
          className="hidden text-[0.67rem] font-medium uppercase tracking-[0.24em] text-[#111111] transition hover:text-[#8B7355] lg:block"
        >
          Private Viewing
        </Link>
      </nav>

      <div
        className={cn(
          "mx-auto mt-2 grid max-w-[1680px] overflow-hidden rounded-[1.4rem] border border-[#111111]/10 bg-[#F8F6F2]/92 px-6 text-[#111111] shadow-[0_18px_60px_rgba(17,17,17,0.08)] backdrop-blur-xl transition-all duration-500 lg:hidden",
          isOpen ? "grid-rows-[1fr] py-5 opacity-100" : "grid-rows-[0fr] py-0 opacity-0",
        )}
      >
        <div className="flex min-h-0 flex-col gap-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-serif text-2xl font-light"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
