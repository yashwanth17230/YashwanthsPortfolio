"use client";

import React, { useState } from "react";
import { ArrowRight, Mail } from "lucide-react";

// Custom SVGs since older lucide-react versions don't bundle brand icons
const GithubIcon = ({ size = 20, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path>
  </svg>
);

const LinkedinIcon = ({ size = 20, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const XIcon = ({ size = 20, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M4 4l11.733 16h4.267l-11.733 -16z"></path>
    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path>
  </svg>
);

const InstagramIcon = ({ size = 20, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export default function ContactAndFooter() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formsubmit.co/ajax/yashwanthr922@gmail.com", {
        method: "POST",
        headers: {
          'Accept': 'application/json'
        },
        body: formData
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="pt-32 border-t border-white/10 bg-[#020202]" id="contact">
      <div className="px-6 md:px-16 lg:px-32 xl:px-48 flex flex-col md:flex-row gap-16 mb-32 overflow-hidden">
        <div className="w-full md:w-1/2 flex flex-col justify-between">
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Let's build <br /> something <span className="text-neutral-600">great.</span>
            </h2>
            <p className="text-neutral-400 text-base max-w-sm mb-12">
              Currently available for freelance opportunities. Let's discuss your next project.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <a href="mailto:yashwanthr922@gmail.com" className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-neutral-400 hover:bg-emerald-400 hover:text-black hover:border-emerald-400 transition-all shrink-0" title="Email">
              <Mail size={20} />
            </a>
            <a href="http://www.linkedin.com/in/yashwanth-r-803858253" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-neutral-400 hover:bg-emerald-400 hover:text-black hover:border-emerald-400 transition-all shrink-0" title="LinkedIn">
              <LinkedinIcon size={20} />
            </a>
            <a href="https://github.com/yashwanth17230" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-neutral-400 hover:bg-emerald-400 hover:text-black hover:border-emerald-400 transition-all shrink-0" title="GitHub">
              <GithubIcon size={20} />
            </a>
            <a href="https://x.com/YASHWANTHR65648" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-neutral-400 hover:bg-emerald-400 hover:text-black hover:border-emerald-400 transition-all shrink-0" title="X">
              <XIcon size={20} />
            </a>
            <a href="https://instagram.com/_yashwanth__27" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-neutral-400 hover:bg-emerald-400 hover:text-black hover:border-emerald-400 transition-all shrink-0" title="Instagram">
              <InstagramIcon size={20} />
            </a>
          </div>
        </div>

        <div className="w-full md:w-1/2">
          {isSubmitted ? (
            <div className="flex flex-col items-center justify-center h-full bg-white/5 border border-white/10 rounded-2xl p-10 text-center animate-in fade-in duration-500">
              <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
              </div>
              <h3 className="text-3xl text-white font-display font-bold mb-4">Thank You!</h3>
              <p className="text-neutral-400 text-lg">Your message has been sent successfully. I'll get back to you as soon as possible.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <input type="hidden" name="_subject" value="New message from portfolio!" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />

              <div className="flex flex-col gap-2">
                <label className="text-neutral-500 font-display text-xs tracking-widest uppercase ml-1">What's your name?</label>
                <input name="name" required suppressHydrationWarning type="text" placeholder="John Doe" className="bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-base text-white focus:outline-none focus:border-emerald-500 focus:bg-white/10 transition-all placeholder:text-neutral-600" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-neutral-500 font-display text-xs tracking-widest uppercase ml-1">What's your email?</label>
                <input name="email" required suppressHydrationWarning type="email" placeholder="john@example.com" className="bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-base text-white focus:outline-none focus:border-emerald-500 focus:bg-white/10 transition-all placeholder:text-neutral-600" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-neutral-500 font-display text-xs tracking-widest uppercase ml-1">Tell me what brings you here</label>
                <textarea name="message" required suppressHydrationWarning placeholder="Hi Yashwanth, I'd like to talk about..." rows={4} className="bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-base text-white focus:outline-none focus:border-emerald-500 focus:bg-white/10 transition-all placeholder:text-neutral-600 resize-none"></textarea>
              </div>
              <button disabled={isSubmitting} suppressHydrationWarning type="submit" className="mt-4 flex items-center justify-between w-full px-6 py-5 rounded-xl bg-white text-black hover:bg-emerald-400 transition-colors font-display text-lg font-bold group disabled:opacity-50 disabled:cursor-not-allowed">
                <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                <div className="flex items-center justify-center transition-transform group-hover:translate-x-2">
                  <ArrowRight size={20} />
                </div>
              </button>
            </form>
          )}
        </div>
      </div>

    </section>
  );
}
