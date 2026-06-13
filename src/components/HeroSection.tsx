'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative w-full pt-24 pb-16 px-6 md:px-16 lg:px-32 xl:px-48 flex flex-col lg:flex-row items-center justify-between min-h-[70vh]">

      {/* Left Content (Text) */}
      <div className="relative z-10 w-full lg:w-[60%] flex flex-col items-center lg:items-start text-center lg:text-left order-1 lg:order-1 mt-0 lg:pr-8">
        {/* Status Label */}
        <div className="flex items-center justify-center lg:justify-start gap-3 mb-6 px-4 py-2 rounded-full border border-white/10 bg-white/5 w-fit mx-auto lg:mx-0">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-neutral-300 text-xs md:text-sm tracking-widest font-medium uppercase">Crafting Digital Experiences</span>
        </div>

        {/* Big Text */}
        <div className="flex flex-col items-center lg:items-start">
          <h1 className="text-[9vw] sm:text-[6vw] lg:text-[4rem] xl:text-[5rem] leading-[0.9] font-black tracking-tighter uppercase text-white m-0 font-display">
            Software<br />Engineer
          </h1>
        </div>

        {/* Paragraph */}
        <div className="relative z-30 mt-8 max-w-lg mx-auto lg:mx-0">
          <p className="text-base md:text-lg text-neutral-500 font-light leading-relaxed">
            I help brands and agencies create <span className="text-white font-medium">high-end digital experiences</span> that are performant, accessible, and designed to convert.
          </p>
        </div>

        {/* CTA Buttons (Desktop Only) */}
        <div className="hidden lg:flex flex-wrap items-center gap-4 mt-10">
          <a href="#work" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black font-bold rounded-full group hover:bg-emerald-400 transition-colors">
            <span>Explore Portfolio</span>
            <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
          <a href="/profile" className="px-8 py-4 bg-transparent border border-neutral-700 text-white font-medium rounded-full hover:bg-white/5 transition-colors">
            Read My Story
          </a>
        </div>
      </div>

      {/* Right Image */}
      <div className="relative w-full lg:w-[40%] flex justify-center lg:justify-end order-2 lg:order-2 mt-12 lg:mt-0">
        {/* Soft radial mask to remove all sharp edges */}
        <div
          className="relative w-[300px] h-[400px] md:w-[400px] md:h-[500px] lg:w-[450px] lg:h-[550px] overflow-hidden select-none"
          style={{
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent), linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)',
            WebkitMaskComposite: 'source-in',
            maskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent), linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)',
            maskComposite: 'intersect'
          }}
        >
          <Image
            src="/assets/imgc3.jpeg"
            alt="YASHWANTH"
            fill
            draggable={false}
            className="object-cover object-top hover:scale-105 transition-transform duration-700"
          />
        </div>
      </div>

      {/* CTA Buttons (Mobile Only) */}
      <div className="flex lg:hidden flex-col sm:flex-row items-center justify-center gap-4 mt-12 order-3 w-full">
        <a href="#work" className="inline-flex items-center justify-center gap-2 px-8 py-4 w-full sm:w-auto bg-white text-black font-bold rounded-full group hover:bg-emerald-400 transition-colors">
          <span>See Latest Projects</span>
          <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </a>
        <a href="/profile" className="px-8 py-4 w-full sm:w-auto text-center bg-transparent border border-neutral-700 text-white font-medium rounded-full hover:bg-white/5 transition-colors">
          Discover My Journey
        </a>
      </div>

    </section>
  );
}
