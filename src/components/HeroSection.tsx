import React from 'react';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative w-full pt-24 pb-16 px-6 md:px-16 lg:px-32 xl:px-48 flex flex-col lg:flex-row items-center justify-between min-h-[70vh]">

      {/* Left Content (Text) */}
      <div className="relative z-10 w-full lg:w-[60%] flex flex-col items-center lg:items-start text-center lg:text-left order-1 lg:order-1 mt-0 lg:pr-8">
        {/* Name Label */}
        <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
          <div className="w-12 h-[1px] bg-neutral-700"></div>
          <span className="text-neutral-400 text-xs md:text-sm tracking-[0.2em] font-medium uppercase">YASHWANTH</span>
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
          <a href="#work" className="px-8 py-4 bg-white text-black font-medium rounded-full hover:bg-neutral-200 transition-colors">
            View Selected Work
          </a>
          <a href="/profile" className="px-8 py-4 bg-transparent border border-neutral-700 text-white font-medium rounded-full hover:bg-white/5 transition-colors">
            My Profile
          </a>
        </div>
      </div>

      {/* Right Image */}
      <div className="relative w-full lg:w-[40%] flex justify-center lg:justify-end order-2 lg:order-2 mt-12 lg:mt-0">
        {/* Smoky portrait blending into background */}
        <div
          className="relative w-[300px] h-[400px] md:w-[400px] md:h-[500px] lg:w-[450px] lg:h-[550px] overflow-hidden"
          style={{
            WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)',
            maskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)'
          }}
        >
          <Image
            src="/assets/imgc3.jpeg"
            alt="YASHWANTH"
            fill
            className="object-cover object-top hover:scale-105 transition-transform duration-700"
          />
          {/* Left side fade to blend with text side */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent w-[40%] pointer-events-none" />
        </div>
      </div>

      {/* CTA Buttons (Mobile Only) */}
      <div className="flex lg:hidden flex-col sm:flex-row items-center justify-center gap-4 mt-12 order-3 w-full">
        <a href="#work" className="px-8 py-4 w-full sm:w-auto text-center bg-white text-black font-medium rounded-full hover:bg-neutral-200 transition-colors">
          View Selected Work
        </a>
        <a href="/profile" className="px-8 py-4 w-full sm:w-auto text-center bg-transparent border border-neutral-700 text-white font-medium rounded-full hover:bg-white/5 transition-colors">
          My Profile
        </a>
      </div>

    </section>
  );
}
