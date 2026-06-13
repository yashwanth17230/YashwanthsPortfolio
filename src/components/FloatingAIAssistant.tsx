"use client";
import React, { useState } from "react";

export default function FloatingAIAssistant() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4" id="aiAssistantContainer">
      {/* Chat Interface */}
      <div 
        className={`glass-card w-80 rounded-xl overflow-hidden border border-border-subtle shadow-2xl origin-bottom-right transition-all duration-300 transform ${isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0 hidden"}`}
      >
        <div className="p-4 border-b border-border-subtle bg-surface-container flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-electric-cyan animate-pulse"></div>
            <span className="font-code-sm text-code-sm text-on-surface font-bold">Ask Yash AI</span>
          </div>
          <button className="text-slate-text hover:text-on-surface" onClick={() => setIsOpen(false)}>
            <span className="material-symbols-outlined text-sm">close</span>
          </button>
        </div>
        <div className="p-4 h-48 bg-surface-dim overflow-y-auto flex flex-col gap-3">
          <div className="bg-surface-container p-3 rounded-lg rounded-tl-none border border-border-subtle max-w-[85%] self-start">
            <p className="font-body-md text-body-md text-slate-text text-sm">Hello! I&apos;m an AI assistant trained on Yashwanth&apos;s portfolio. What would you like to know?</p>
          </div>
        </div>
        <div className="p-3 bg-surface-container-high border-t border-border-subtle flex flex-col gap-2">
          <span className="font-label-caps text-[10px] text-slate-text">SUGGESTED QUERIES</span>
          <button className="text-left font-body-md text-xs text-electric-cyan hover:bg-white/5 p-2 rounded transition-colors border border-border-subtle">Tell me about Yashwanth</button>
          <button className="text-left font-body-md text-xs text-electric-cyan hover:bg-white/5 p-2 rounded transition-colors border border-border-subtle">Show his projects</button>
          <button className="text-left font-body-md text-xs text-electric-cyan hover:bg-white/5 p-2 rounded transition-colors border border-border-subtle">What technologies does he know?</button>
        </div>
      </div>

      {/* Floating Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="bg-surface-glass backdrop-blur-xl border border-border-subtle shadow-[0_0_20px_rgba(34,211,238,0.2)] text-electric-cyan px-4 py-3 rounded-full flex items-center gap-2 hover:bg-white/10 transition-all hover:scale-105 active:scale-95 group"
      >
        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>smart_toy</span>
        <span className="font-code-sm text-code-sm group-hover:block hidden">Ask Yash AI</span>
      </button>
    </div>
  );
}
