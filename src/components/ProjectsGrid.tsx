import React from "react";

export default function ProjectsGrid() {
  return (
    <section className="px-0 md:px-grid-margin lg:px-[8rem]" id="work">
      <h3 className="font-headline-md text-headline-md text-on-surface flex items-center gap-3 mb-12">
        <span className="material-symbols-outlined text-hyper-indigo" style={{ fontVariationSettings: "'FILL' 1" }}>
          deployed_code
        </span>
        Project Modules
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-grid-gutter">
        {/* Project 1 (Large) */}
        <div className="col-span-1 md:col-span-8 glass-card rounded-xl relative overflow-hidden group flex flex-col">
          <div className="spotlight-overlay"></div>
          <div className="h-48 bg-surface-container-high relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-[#111111] to-transparent z-10"></div>
            {/* Project Image */}
            <div 
              className="w-full h-full opacity-50 bg-cover bg-center" 
              style={{ backgroundImage: 'url(/assets/screen_2_project5.png)' }}
            ></div>
          </div>
          <div className="p-card-padding relative z-10 flex-grow flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-4">
                <h4 className="font-body-lg text-body-lg text-on-surface font-bold text-xl">RGURU Financial Services</h4>
                <a className="text-slate-text hover:text-electric-cyan transition-colors" href="#">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>open_in_new</span>
                </a>
              </div>
              <p className="font-body-md text-body-md text-slate-text mb-6">
                A comprehensive Fintech platform built for mobile. Integrates secure transactional processing and real-time financial data visualization.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mt-auto">
              <span className="px-2 py-1 rounded bg-surface-container border border-border-subtle font-code-sm text-label-caps text-slate-text">React Native</span>
              <span className="px-2 py-1 rounded bg-surface-container border border-border-subtle font-code-sm text-label-caps text-slate-text">Node.js</span>
              <span className="px-2 py-1 rounded bg-surface-container border border-border-subtle font-code-sm text-label-caps text-slate-text">MySQL</span>
            </div>
          </div>
        </div>
        {/* Project 2 (Small) */}
        <div className="col-span-1 md:col-span-4 glass-card rounded-xl relative overflow-hidden group flex flex-col">
          <div className="spotlight-overlay"></div>
          <div className="p-card-padding relative z-10 h-full flex flex-col">
            <div className="flex justify-between items-start mb-4">
              <div className="w-10 h-10 rounded-lg bg-electric-cyan/10 border border-electric-cyan/20 flex items-center justify-center text-electric-cyan">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>shopping_cart</span>
              </div>
              <a className="text-slate-text hover:text-electric-cyan transition-colors" href="#">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>open_in_new</span>
              </a>
            </div>
            <h4 className="font-body-lg text-body-lg text-on-surface font-bold mb-2">FutureScoops</h4>
            <p className="font-body-md text-body-md text-slate-text text-sm mb-6 flex-grow">
              Next-generation E-Commerce platform with advanced filtering and optimized checkout flows.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 rounded bg-surface-container border border-border-subtle font-code-sm text-label-caps text-slate-text">Next.js</span>
              <span className="px-2 py-1 rounded bg-surface-container border border-border-subtle font-code-sm text-label-caps text-slate-text">Stripe</span>
            </div>
          </div>
        </div>
        {/* Project 3 (Small) */}
        <div className="col-span-1 md:col-span-4 glass-card rounded-xl relative overflow-hidden group flex flex-col">
          <div className="spotlight-overlay"></div>
          <div className="p-card-padding relative z-10 h-full flex flex-col">
            <div className="flex justify-between items-start mb-4">
              <div className="w-10 h-10 rounded-lg bg-hyper-indigo/10 border border-hyper-indigo/20 flex items-center justify-center text-hyper-indigo">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>psychology</span>
              </div>
              <a className="text-slate-text hover:text-electric-cyan transition-colors" href="#">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>open_in_new</span>
              </a>
            </div>
            <h4 className="font-body-lg text-body-lg text-on-surface font-bold mb-2">Multimodal Sentiment Analysis</h4>
            <p className="font-body-md text-body-md text-slate-text text-sm mb-6 flex-grow">
              AI/ML project analyzing text and visual data streams for complex emotional context extraction.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 rounded bg-surface-container border border-border-subtle font-code-sm text-label-caps text-slate-text">Python</span>
              <span className="px-2 py-1 rounded bg-surface-container border border-border-subtle font-code-sm text-label-caps text-slate-text">TensorFlow</span>
            </div>
          </div>
        </div>
        {/* Project 4 (Large) */}
        <div className="col-span-1 md:col-span-8 glass-card rounded-xl relative overflow-hidden group flex flex-col">
          <div className="spotlight-overlay"></div>
          <div className="p-card-padding relative z-10 flex flex-col md:flex-row gap-6 h-full items-center">
            <div className="w-full md:w-1/3 aspect-square rounded-lg bg-surface-container-highest border border-border-subtle flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-cover bg-center opacity-40" style={{ backgroundImage: 'url(/assets/screen_5_project3.png)' }}></div>
              <div className="absolute inset-0 bg-gradient-to-br from-electric-cyan/10 to-transparent"></div>
              <span className="material-symbols-outlined text-6xl text-slate-text opacity-50 relative z-10" style={{ fontVariationSettings: "'FILL' 0" }}>real_estate_agent</span>
            </div>
            <div className="w-full md:w-2/3 flex flex-col justify-between h-full">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-body-lg text-body-lg text-on-surface font-bold text-xl">Elite Estates</h4>
                  <a className="text-slate-text hover:text-electric-cyan transition-colors" href="#">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>open_in_new</span>
                  </a>
                </div>
                <p className="font-body-md text-body-md text-slate-text mb-4">
                  A premium real estate listing and management platform. Features robust admin controls, property mapping, and lead generation tools.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="px-2 py-1 rounded bg-surface-container border border-border-subtle font-code-sm text-label-caps text-slate-text">MongoDB</span>
                <span className="px-2 py-1 rounded bg-surface-container border border-border-subtle font-code-sm text-label-caps text-slate-text">Express</span>
                <span className="px-2 py-1 rounded bg-surface-container border border-border-subtle font-code-sm text-label-caps text-slate-text">React</span>
                <span className="px-2 py-1 rounded bg-surface-container border border-border-subtle font-code-sm text-label-caps text-slate-text">Node</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
