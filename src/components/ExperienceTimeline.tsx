import React from "react";

export default function ExperienceTimeline() {
  return (
    <section className="px-0 md:px-grid-margin lg:px-[8rem]" id="experience">
      <h3 className="font-headline-md text-headline-md text-on-surface flex items-center gap-3 mb-12">
        <span className="material-symbols-outlined text-hyper-indigo" style={{ fontVariationSettings: "'FILL' 1" }}>
          work
        </span>
        Execution History
      </h3>
      <div className="flex flex-col gap-6 relative">
        {/* Timeline Line */}
        <div className="absolute left-[15px] top-4 bottom-4 w-[1px] bg-border-subtle hidden md:block"></div>
        {/* Exp 1 */}
        <div className="relative pl-0 md:pl-12">
          <div className="absolute left-0 top-6 w-8 h-[1px] bg-border-subtle hidden md:block"></div>
          <div className="absolute left-[-4px] top-[22px] w-[9px] h-[9px] rounded-full bg-electric-cyan shadow-[0_0_10px_#22D3EE] hidden md:block"></div>
          <div className="glass-card p-card-padding rounded-xl relative overflow-hidden group">
            <div className="spotlight-overlay"></div>
            <div className="relative z-10 flex flex-col md:flex-row justify-between items-start gap-4">
              <div>
                <h4 className="font-body-lg text-body-lg text-on-surface font-bold">OBAPS Global Technologies</h4>
                <p className="font-body-md text-body-md text-electric-cyan">Software Engineer</p>
              </div>
              <span className="font-code-sm text-code-sm text-slate-text bg-surface-container px-3 py-1 rounded-md border border-border-subtle">
                June 2025 - Present
              </span>
            </div>
            <ul className="mt-4 flex flex-col gap-2 relative z-10">
              <li className="font-body-md text-body-md text-slate-text flex gap-3 pb-2 border-b border-border-subtle">
                <span className="material-symbols-outlined text-hyper-indigo text-sm mt-1" style={{ fontVariationSettings: "'FILL' 0" }}>
                  commit
                </span>
                Architecting and developing scalable solutions for enterprise clients.
              </li>
              <li className="font-body-md text-body-md text-slate-text flex gap-3 pb-2 border-b border-border-subtle">
                <span className="material-symbols-outlined text-hyper-indigo text-sm mt-1" style={{ fontVariationSettings: "'FILL' 0" }}>
                  commit
                </span>
                Implementing full-stack features using modern frameworks.
              </li>
            </ul>
          </div>
        </div>
        {/* Previous Exp */}
        <div className="relative pl-0 md:pl-12 opacity-70 hover:opacity-100 transition-opacity">
          <div className="absolute left-0 top-6 w-8 h-[1px] bg-border-subtle hidden md:block"></div>
          <div className="absolute left-[-4px] top-[22px] w-[9px] h-[9px] rounded-full bg-surface-variant border border-border-subtle hidden md:block"></div>
          <div className="glass-card p-card-padding rounded-xl relative overflow-hidden group">
            <div className="spotlight-overlay"></div>
            <div className="relative z-10 flex flex-col md:flex-row justify-between items-start gap-4">
              <div>
                <h4 className="font-body-lg text-body-lg text-on-surface font-bold">Previous Engagements</h4>
                <p className="font-body-md text-body-md text-slate-text">Full Stack Developer</p>
              </div>
              <span className="font-code-sm text-code-sm text-slate-text bg-surface-container px-3 py-1 rounded-md border border-border-subtle">
                2023 - 2025
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
