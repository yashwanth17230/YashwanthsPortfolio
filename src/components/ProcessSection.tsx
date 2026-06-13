import React from "react";

export default function ProcessSection() {
  const steps = [
    { num: "01", title: "Discovery", desc: "Understanding your goals, target audience, and business requirements to form a solid strategic foundation." },
    { num: "02", title: "Design", desc: "Creating wireframes, prototypes, and high-fidelity mockups that align with your brand identity." },
    { num: "03", title: "Build", desc: "Translating designs into clean, scalable code using modern frameworks and best practices." },
    { num: "04", title: "Launch", desc: "Rigorous testing, deployment, and ongoing optimization to ensure peak performance." }
  ];

  return (
    <section className="px-6 md:px-16 lg:px-32 xl:px-48 py-16 md:py-32 border-t border-white/10 bg-[#050505]">
      <div className="flex flex-col mb-10 md:mb-16">
        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-4 md:mb-6">The Process</h2>
        <p className="text-neutral-400 text-base md:text-lg max-w-xl">
          A streamlined approach to turning complex problems into elegant digital solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-8">
        {steps.map((step, idx) => (
          <div key={idx} className="flex flex-col">
            <span className="text-emerald-500 font-display text-xl md:text-2xl mb-3 md:mb-4 font-bold">{step.num}</span>
            <div className="h-px w-full bg-white/10 mb-5 md:mb-8" />
            <h3 className="text-xl md:text-2xl text-white font-medium mb-3 md:mb-4">{step.title}</h3>
            <p className="text-neutral-400 leading-relaxed text-sm md:text-base">
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
