import React from "react";
import { Palette, Code, Layout, Smartphone } from "lucide-react";

export default function ServicesGrid() {
  const services = [
    {
      id: "01",
      title: "Design",
      icon: <Palette size={22} className="text-neutral-500 mb-5" />,
      description: "Designing visually stunning, highly responsive, and accessible user interfaces."
    },
    {
      id: "02",
      title: "Development",
      icon: <Code size={22} className="text-neutral-500 mb-5" />,
      description: "Building secure, scalable backend systems and dynamic modern web applications."
    },
    {
      id: "03",
      title: "Strategy",
      icon: <Layout size={22} className="text-neutral-500 mb-5" />,
      description: "Architecting reliable cloud infrastructure, server deployments, and CI/CD pipelines."
    },
    {
      id: "04",
      title: "Mobile Solutions",
      icon: <Smartphone size={22} className="text-neutral-500 mb-5" />,
      description: "Crafting native-feeling, high-performance cross-platform apps using React Native."
    }
  ];

  return (
    <section className="px-6 md:px-16 lg:px-32 xl:px-48 py-16 md:py-24 border-t border-white/5 bg-[#000000]">
      <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-10 md:mb-16 text-white border-b border-white/10 pb-6 md:pb-8">
        Services
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12">
        {services.map((service) => (
          <div key={service.id} className="flex flex-col group">
            {service.icon}
            <h3 className="text-lg md:text-2xl text-white font-medium mb-3 md:mb-4 transition-colors">
              {service.title}
            </h3>
            <p className="text-neutral-400 leading-relaxed text-xs md:text-sm">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
