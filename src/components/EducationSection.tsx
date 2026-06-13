import React from "react";

export default function EducationSection() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-grid-gutter px-0 md:px-grid-margin lg:px-[8rem]">
      {/* Education */}
      <div className="glass-card p-card-padding rounded-xl relative overflow-hidden group">
        <div className="spotlight-overlay"></div>
        <div className="relative z-10">
          <h3 className="font-headline-md text-headline-md text-on-surface flex items-center gap-3 mb-6">
            <span className="material-symbols-outlined text-electric-cyan" style={{ fontVariationSettings: "'FILL' 1" }}>
              school
            </span>
            Education
          </h3>
          <div className="flex flex-col gap-2">
            <h4 className="font-body-lg text-body-lg text-on-surface font-bold">B.E. Computer Science &amp; Engineering</h4>
            <p className="font-body-md text-body-md text-slate-text">Mangalore Institute of Technology &amp; Engineering</p>
            <div className="flex justify-between items-center mt-2 border-t border-border-subtle pt-2">
              <span className="font-code-sm text-code-sm text-slate-text">2021 - 2025</span>
              <span className="font-code-sm text-code-sm text-electric-cyan bg-electric-cyan/10 px-2 py-1 rounded">CGPA: 9.25</span>
            </div>
          </div>
        </div>
      </div>
      {/* Certifications */}
      <div className="glass-card p-card-padding rounded-xl relative overflow-hidden group">
        <div className="spotlight-overlay"></div>
        <div className="relative z-10">
          <h3 className="font-headline-md text-headline-md text-on-surface flex items-center gap-3 mb-6">
            <span className="material-symbols-outlined text-hyper-indigo" style={{ fontVariationSettings: "'FILL' 1" }}>
              verified
            </span>
            Certifications
          </h3>
          <ul className="flex flex-col gap-4">
            <li className="flex items-center gap-3 font-body-md text-body-md text-slate-text pb-2 border-b border-border-subtle">
              <span className="material-symbols-outlined text-electric-cyan text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                workspace_premium
              </span>
              Flutter Development Mastery
            </li>
            <li className="flex items-center gap-3 font-body-md text-body-md text-slate-text pb-2 border-b border-border-subtle">
              <span className="material-symbols-outlined text-electric-cyan text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                workspace_premium
              </span>
              AWS Cloud Practitioner Fundamentals
            </li>
            <li className="flex items-center gap-3 font-body-md text-body-md text-slate-text pb-2 border-b border-border-subtle border-transparent">
              <span className="material-symbols-outlined text-electric-cyan text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                workspace_premium
              </span>
              Data Structures &amp; Algorithms Advanced
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
