import React from "react";

export default function StatsBento() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-12 gap-grid-gutter px-0 md:px-grid-margin lg:px-[8rem]" id="about">
      <div className="col-span-1 md:col-span-12 mb-8">
        <h3 className="font-headline-md text-headline-md text-on-surface flex items-center gap-3">
          <span className="material-symbols-outlined text-hyper-indigo" style={{ fontVariationSettings: "'FILL' 1" }}>
            analytics
          </span>
          System Metrics
        </h3>
      </div>
      <div className="col-span-1 md:col-span-4 glass-card p-card-padding rounded-xl relative overflow-hidden group">
        <div className="spotlight-overlay"></div>
        <div className="flex flex-col gap-2 relative z-10">
          <span className="font-display-lg text-display-lg text-electric-cyan">1.5+</span>
          <span className="font-label-caps text-label-caps text-slate-text tracking-widest">Years Experience</span>
        </div>
      </div>
      <div className="col-span-1 md:col-span-4 glass-card p-card-padding rounded-xl relative overflow-hidden group">
        <div className="spotlight-overlay"></div>
        <div className="flex flex-col gap-2 relative z-10">
          <span className="font-display-lg text-display-lg text-hyper-indigo">10+</span>
          <span className="font-label-caps text-label-caps text-slate-text tracking-widest">Projects Deployed</span>
        </div>
      </div>
      <div className="col-span-1 md:col-span-4 glass-card p-card-padding rounded-xl relative overflow-hidden group">
        <div className="spotlight-overlay"></div>
        <div className="flex flex-col gap-2 relative z-10">
          <span className="font-display-lg text-display-lg text-electric-cyan">15+</span>
          <span className="font-label-caps text-label-caps text-slate-text tracking-widest">Technologies Mastered</span>
        </div>
      </div>
      <div className="col-span-1 md:col-span-12 glass-card p-card-padding rounded-xl relative overflow-hidden group mt-4">
        <div className="spotlight-overlay"></div>
        <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center justify-between">
          <div>
            <h4 className="font-body-lg text-body-lg text-on-surface mb-2">Core Competencies</h4>
            <p className="font-body-md text-body-md text-slate-text max-w-2xl">
              Specializing in building robust architectures and seamless user experiences across web and mobile platforms.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <span className="px-3 py-1 rounded-lg bg-hyper-indigo/10 border border-hyper-indigo/20 font-code-sm text-code-sm text-hyper-indigo">MERN Stack</span>
            <span className="px-3 py-1 rounded-lg bg-electric-cyan/10 border border-electric-cyan/20 font-code-sm text-code-sm text-electric-cyan">Next.js</span>
            <span className="px-3 py-1 rounded-lg bg-hyper-indigo/10 border border-hyper-indigo/20 font-code-sm text-code-sm text-hyper-indigo">React Native</span>
            <span className="px-3 py-1 rounded-lg bg-electric-cyan/10 border border-electric-cyan/20 font-code-sm text-code-sm text-electric-cyan">Node.js</span>
          </div>
        </div>
      </div>
    </section>
  );
}
