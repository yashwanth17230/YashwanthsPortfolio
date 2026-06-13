import React from 'react';
import { Code2, AppWindow, Database, TerminalSquare } from 'lucide-react';

const skillCategories = [
  {
    title: "Languages",
    icon: <Code2 size={20} className="text-white" />,
    skills: ["Java", "JavaScript", "TypeScript", "Dart", "PHP"]
  },
  {
    title: "Web Development",
    icon: <AppWindow size={20} className="text-white" />,
    skills: ["ReactJS", "NextJS", "HTML", "CSS", "Bootstrap", "Tailwind CSS", "Node.js", "Express.js", "REST APIs", "React Native", "Flutter", "MySQL", "MongoDB"]
  },
  {
    title: "Tools & Platforms",
    icon: <Database size={20} className="text-white" />,
    skills: ["AWS EC2", "CI/CD", "VPS Deployment", "Git", "GitHub Actions", "Postman", "Insomnia", "Render", "Visual Studio", "Android Studio", "Shopify"]
  },
  {
    title: "Soft Skills",
    icon: <TerminalSquare size={20} className="text-white" />,
    skills: ["Problem-Solving", "Team Collaboration", "Project Management", "Adaptability"]
  }
];

export default function MySkills() {
  return (
    <section className="px-6 md:px-16 lg:px-32 xl:px-48 py-16 w-full">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 tracking-tight font-display">
        My Skills
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {skillCategories.map((category, idx) => (
          <div 
            key={idx} 
            className="flex flex-col p-8 rounded-2xl bg-[#0a0a0a] border border-white/5 hover:border-white/10 transition-colors h-full min-h-[320px]"
          >
            <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center mb-8 bg-black/50">
              {category.icon}
            </div>
            
            <h3 className="text-xl font-semibold text-white mb-6">
              {category.title}
            </h3>
            
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, sIdx) => (
                <span 
                  key={sIdx} 
                  className="px-3 py-1.5 rounded-full bg-black border border-white/10 text-xs text-neutral-400 font-medium hover:text-white hover:border-white/20 transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
