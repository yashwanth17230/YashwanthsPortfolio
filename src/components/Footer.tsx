import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="px-6 md:px-16 lg:px-32 xl:px-48 pt-20 md:pt-32 pb-10 md:pb-16 border-t border-white/10 bg-[#000000]">
      <div className="flex flex-col gap-10 md:flex-row justify-between items-start md:items-center md:gap-16 mb-12 md:mb-24">

        {/* Left side: Brand + Tagline */}
        <div className="flex flex-col gap-4">
          <h2 className="font-display text-5xl sm:text-6xl md:text-[8rem] font-bold text-white tracking-tighter leading-none">
            Yashwanth.
          </h2>
          <p className="text-neutral-400 text-base md:text-xl max-w-md font-light">
            Crafting digital experiences that leave a lasting impression.
          </p>
        </div>

        {/* Right side: Socials */}
        <div className="flex flex-col gap-4">
          <h3 className="text-neutral-600 font-bold tracking-widest text-xs uppercase mb-1">Socials</h3>
          <a href="http://www.linkedin.com/in/yashwanth-r-803858253" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-neutral-300 hover:text-white transition-colors group">
            <span className="w-5 flex justify-center text-sm font-bold">in</span>
            <span className="font-medium text-base md:text-lg">LinkedIn</span>
            <ArrowUpRight size={16} className="text-neutral-600 group-hover:text-white transition-colors" />
          </a>
          <a href="https://github.com/yashwanth17230" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-neutral-300 hover:text-white transition-colors group">
            <span className="w-5 flex justify-center text-sm font-bold">GH</span>
            <span className="font-medium text-base md:text-lg">GitHub</span>
            <ArrowUpRight size={16} className="text-neutral-600 group-hover:text-white transition-colors" />
          </a>
          <a href="https://x.com/YASHWANTHR65648" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-neutral-300 hover:text-white transition-colors group">
            <span className="w-5 flex justify-center text-sm font-bold">X</span>
            <span className="font-medium text-base md:text-lg">X</span>
            <ArrowUpRight size={16} className="text-neutral-600 group-hover:text-white transition-colors" />
          </a>
          <a href="https://instagram.com/_yashwanth__27" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-neutral-300 hover:text-white transition-colors group">
            <span className="w-5 flex justify-center text-sm font-bold">IG</span>
            <span className="font-medium text-base md:text-lg">Instagram</span>
            <ArrowUpRight size={16} className="text-neutral-600 group-hover:text-white transition-colors" />
          </a>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 pt-6 border-t border-white/5 text-xs md:text-sm text-neutral-500">
        <p>© 2026 Yashwanth R. All rights reserved.</p>
        <p className="md:mt-0">Designed &amp; Built with passion.</p>
      </div>
    </footer>
  );
}
