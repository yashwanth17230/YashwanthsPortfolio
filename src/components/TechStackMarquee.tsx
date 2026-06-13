"use client";
import React from "react";
import {
  SiJavascript, SiTypescript, SiPython, SiCplusplus,
  SiHtml5, SiCss, SiBootstrap, SiReact,
  SiRedux, SiTailwindcss, SiNodedotjs, SiExpress,
  SiMysql, SiMongodb, SiGit, SiGithub,
  SiVite, SiNpm, SiPostman, SiVercel, SiFigma, SiNextdotjs
} from "react-icons/si";
import { FaJava, FaAws, FaAndroid } from "react-icons/fa";
import { Bot, MousePointer2, Rocket, Blocks } from "lucide-react";

const CursorIcon = ({ size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 256 256" fill={color} xmlns="http://www.w3.org/2000/svg">
    <path d="M128 16L232 76V196L128 256L24 196V76L128 16Z" />
    <path d="M55 80L160 115L120 160L55 80Z" fill="#000" />
  </svg>
);

const AntigravityIcon = ({ size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 20L12 4L20 20" />
    <path d="M8 15C10 12 14 12 16 15" />
  </svg>
);

export default function TechStackMarquee() {
  const techs = [
    { name: "JavaScript", icon: <SiJavascript size={24} />, color: "#F7DF1E" },
    { name: "TypeScript", icon: <SiTypescript size={24} />, color: "#3178C6" },
    { name: "Python", icon: <SiPython size={24} />, color: "#3776AB" },
    { name: "C++", icon: <SiCplusplus size={24} />, color: "#00599C" },
    { name: "Java", icon: <FaJava size={24} />, color: "#007396" },
    { name: "HTML5", icon: <SiHtml5 size={24} />, color: "#E34F26" },
    { name: "CSS3", icon: <SiCss size={24} />, color: "#1572B6" },
    { name: "Bootstrap", icon: <SiBootstrap size={24} />, color: "#7952B3" },
    { name: "React", icon: <SiReact size={24} />, color: "#61DAFB" },
    { name: "Next.js", icon: <SiNextdotjs size={24} />, color: "#ffffff" },
    { name: "React Native", icon: <SiReact size={24} />, color: "#61DAFB" },
    { name: "Redux", icon: <SiRedux size={24} />, color: "#764ABC" },
    { name: "Tailwind", icon: <SiTailwindcss size={24} />, color: "#06B6D4" },
    { name: "Node.js", icon: <SiNodedotjs size={24} />, color: "#339933" },
    { name: "Express", icon: <SiExpress size={24} />, color: "#ffffff" },
    { name: "MySQL", icon: <SiMysql size={24} />, color: "#4479A1" },
    { name: "MongoDB", icon: <SiMongodb size={24} />, color: "#47A248" },
    { name: "AWS", icon: <FaAws size={24} />, color: "#FF9900" },
    { name: "Android Studio", icon: <FaAndroid size={24} />, color: "#3DDC84" },
    { name: "Git", icon: <SiGit size={24} />, color: "#F05032" },
    { name: "GitHub", icon: <SiGithub size={24} />, color: "#ffffff" },
    { name: "Vite", icon: <SiVite size={24} />, color: "#646CFF" },
    { name: "npm", icon: <SiNpm size={24} />, color: "#CB3837" },
    { name: "Postman", icon: <SiPostman size={24} />, color: "#FF6C37" },
    { name: "Vercel", icon: <SiVercel size={24} />, color: "#ffffff" },
    { name: "Figma", icon: <SiFigma size={24} />, color: "#F24E1E" },
    { name: "Claude", icon: <Bot size={24} />, color: "#D97757" },
    { name: "Cursor", icon: <CursorIcon size={24} />, color: "#ffffff" },
    { name: "Antigravity", icon: <AntigravityIcon size={24} />, color: "#9333EA" },
    { name: "MCP", icon: <Blocks size={24} />, color: "#3B82F6" },
  ];

  return (
    <section className="px-6 md:px-16 lg:px-32 xl:px-48 py-16 bg-[#020202]">
      <h2 className="text-neutral-500 font-display text-xs tracking-[0.2em] uppercase mb-12">
        Technologies I work with
      </h2>

      <div className="flex flex-wrap gap-x-6 gap-y-10 justify-center mx-auto max-w-5xl">
        {techs.map((tech, i) => (
          <div key={i} className="relative group cursor-pointer">
            {/* Tooltip */}
            <div
              className="absolute -top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none flex items-center gap-2 px-3 py-1.5 rounded-full border bg-black/80 backdrop-blur-sm z-10 whitespace-nowrap"
              style={{ borderColor: tech.color + "40" }}
            >
              <div style={{ color: tech.color }}>
                {React.cloneElement(tech.icon as any, { size: 12 })}
              </div>
              <span className="text-sm font-medium text-white">{tech.name}</span>
            </div>

            {/* Icon Container */}
            <div
              className="w-16 h-16 rounded-full border flex items-center justify-center transition-colors duration-300 bg-transparent text-neutral-600 border-white/5"
              style={{
                // We use inline styles to set custom hover colors via CSS variables
                "--hover-color": tech.color,
              } as React.CSSProperties}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = tech.color;
                e.currentTarget.style.color = tech.color;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.05)";
                e.currentTarget.style.color = "#525252"; // neutral-600
              }}
            >
              {tech.icon}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
