import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function ProfileSnapshot() {
  return (
    <section className="px-6 md:px-16 lg:px-32 xl:px-48 py-16 md:py-32 border-t border-white/10">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16 max-w-7xl mx-auto">
        {/* Profile Image */}
        <div className="w-40 h-40 sm:w-52 sm:h-52 md:w-80 md:h-80 rounded-full overflow-hidden shrink-0 border-2 border-white/10 p-1">
          <img
            src="/assets/imgc3.jpeg"
            alt="Yashwanth Profile"
            className="w-full h-full object-cover rounded-full filter grayscale hover:grayscale-0 transition-all duration-500"
          />
        </div>

        {/* Text */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-2xl">
          <h2 className="font-display text-3xl sm:text-4xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight">
            Passionate about crafting intuitive user experiences.
          </h2>

          <p className="text-neutral-400 text-base md:text-xl mb-8 md:mb-12">
            I believe in the intersection of beautiful design and robust engineering to build digital products that leave a lasting impact.
          </p>

          <Link
            href="/profile"
            className="inline-flex items-center gap-3 bg-white text-black px-7 py-4 rounded-full font-semibold hover:bg-emerald-400 hover:scale-105 transition-all text-sm md:text-base"
          >
            <span>Get to know me better</span>
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
