"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { X, Home, User, Briefcase, Phone, FileText } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ── Desktop Navbar (pill floating, same as before) ── */}
      <div className="fixed top-6 left-0 right-0 z-50 hidden md:flex justify-center px-4">
        <nav
          className={`flex items-center justify-between w-full max-w-4xl px-6 py-3 border rounded-full transition-all ${scrolled
            ? "bg-black/90 backdrop-blur-md border-white/20"
            : "bg-[#0a0a0a] border-white/10"
            }`}
        >
          <Link href="/" className="font-display font-bold text-xl tracking-wider text-white">
            YASHWANTH.
          </Link>
          <div className="flex items-center gap-8 text-sm font-medium text-neutral-400">
            <Link href="#work" className="hover:text-white transition-colors">WORK</Link>
            <Link href="/profile" className="hover:text-white transition-colors">ABOUT</Link>
            <Link href="#contact" className="hover:text-white transition-colors">CONTACT</Link>
            <a
              href="/CV_YashwanthR.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black px-5 py-2 rounded-full hover:bg-neutral-200 transition-colors font-semibold"
            >
              RESUME
            </a>
          </div>
        </nav>
      </div>

      {/* ── Mobile Top Bar ── */}
      <div className="fixed top-4 left-0 right-0 z-50 flex md:hidden justify-center px-4 pointer-events-none">
        <div
          className={`pointer-events-auto flex items-center justify-between w-full px-5 py-3 border rounded-full transition-all ${scrolled ? "bg-black/90 backdrop-blur-md border-white/20 shadow-lg" : "bg-[#0a0a0a] border-white/10"
            }`}
        >
          <Link href="/" className="font-display font-bold text-base tracking-wider text-white">
            YASHWANTH.
          </Link>
          <button
            onClick={() => setIsOpen(true)}
            className="flex flex-col gap-[4px] p-2"
            aria-label="Open menu"
          >
            <span className="w-5 h-[2px] bg-white rounded-full block" />
            <span className="w-3 h-[2px] bg-white rounded-full block ml-auto" />
            <span className="w-5 h-[2px] bg-white rounded-full block" />
          </button>
        </div>
      </div>

      {/* ── Mobile Full-Screen Menu Overlay ── */}
      <div
        className={`fixed inset-0 z-[80] md:hidden flex flex-col bg-black transition-all duration-500 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
      >
        {/* Top bar inside menu */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
          <span className="font-display font-bold text-white text-base tracking-wider">YASHWANTH.</span>
          <button
            onClick={() => setIsOpen(false)}
            className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
            aria-label="Close menu"
          >
            <X size={18} />
          </button>
        </div>

        {/* Nav links */}
        <div className="flex flex-col px-6 pt-10 gap-2 flex-1">
          {[
            { label: "Home", href: "/", num: "01" },
            { label: "Work", href: "#work", num: "02" },
            { label: "About", href: "/profile", num: "03" },
            { label: "Contact", href: "#contact", num: "04" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="group flex items-center justify-between py-5 border-b border-white/5"
            >
              <div className="flex items-baseline gap-4">
                <span className="text-xs text-neutral-600 font-display">{item.num}</span>
                <span className="text-4xl font-display font-bold text-white group-hover:text-emerald-400 transition-colors">
                  {item.label}
                </span>
              </div>
              <svg
                className="text-neutral-600 group-hover:text-emerald-400 transition-all group-hover:translate-x-1 group-hover:-translate-y-1"
                width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              >
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </Link>
          ))}
        </div>

        {/* Resume button at bottom */}
        <div className="px-6 pb-10">
          <a
            href="/CV_YashwanthR.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center gap-2 w-full bg-white text-black py-4 rounded-full font-semibold hover:bg-emerald-400 transition-colors text-base"
          >
            <FileText size={18} />
            Download Resume
          </a>
        </div>
      </div>
    </>
  );
}
