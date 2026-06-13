"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const ProjectCarousel = ({ images }: { images: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setCurrentIndex(0);
  }, [images]);

  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="relative w-full h-full bg-[#0a0a0a] overflow-hidden">
      <AnimatePresence>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full flex items-center justify-center p-4 lg:p-6"
        >
          {/* Blurred Background to fill empty space elegantly */}
          <div className="absolute inset-0 overflow-hidden">
            <img
              src={images[currentIndex]}
              alt=""
              className="w-full h-full object-cover blur-2xl opacity-40 scale-125"
            />
          </div>
          {/* Main Image (Uncropped) */}
          <img
            src={images[currentIndex]}
            alt=""
            className="relative z-10 w-full h-full object-contain drop-shadow-2xl"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

const ProjectMedia = ({ project }: { project: any }) => {
  if (project.id === "03") {
    return (
      <div className="grid grid-cols-4 gap-2 lg:gap-4 w-full h-full bg-[#0a0a0a] p-4 lg:p-6 items-center">
        {project.images.map((src: string, i: number) => (
          <div key={i} className="relative w-full h-full overflow-hidden">
            <img src={src} alt="" className="absolute inset-0 w-full h-full object-contain drop-shadow-2xl" />
          </div>
        ))}
      </div>
    );
  }
  return <ProjectCarousel images={project.images} />;
};

const projects = [
  {
    id: "01",
    title: "EliteEstates",
    category: "Real Estate Management Platform",
    tags: ["MongoDB", "Express.js", "React", "Node.js"],
    period: "Recent",
    description: "EliteEstates is a real estate platform using the MERN stack, offering real-time property listings, advanced search, and user-friendly management tools to simplify your property search and manage site listings, rentals, and sales directly.",
    images: [
      "/assets/projects/p1/img1.png",
      "/assets/projects/p1/img2.png",
      "/assets/projects/p1/img3.png",
      "/assets/projects/p1/img4.png"
    ],
    liveUrl: "https://realestate-2uw3.onrender.com/",
    codeUrl: "https://github.com/yashwanth17230/RealEstate"
  },
  {
    id: "02",
    title: "Multimodal Sentiment Analysis on Digital data",
    category: "Interactive Web Application",
    tags: ["Streamlit", "Python", "TensorFlow", "OpenCV", "NLTK", "SpeechRecognition"],
    period: "Recent",
    description: "An interactive web application that analyses sentiments and emotions from text, images, audio, and video inputs using advanced machine learning technologies. It provides real-time evaluation and detection through a user-friendly interface.",
    images: [
      "/assets/projects/p2/img1.png",
      "/assets/projects/p2/img2.png",
      "/assets/projects/p2/img3.png",
      "/assets/projects/p2/img4.png"
    ],
    liveUrl: "https://github.com/yashwanth17230/Multimodal_Sentiment_Analysis",
    codeUrl: "https://github.com/yashwanth17230/Multimodal_Sentiment_Analysis"
  },
  {
    id: "03",
    title: "Movies App",
    category: "React Native Mobile App",
    tags: ["React Native", "Dynamic API Integration"],
    period: "Recent",
    description: "A mobile application built with React Native for viewing the latest and trending movies. Features dynamic API integration from third-party services to display movie listings, cast, actors, and detailed story briefs.",
    images: [
      "/assets/projects/p3/img1.jpeg",
      "/assets/projects/p3/img2.jpeg",
      "/assets/projects/p3/img3.jpeg",
      "/assets/projects/p3/img4.jpeg"
    ],
    liveUrl: "https://github.com/yashwanth17230/MOVIE_APP",
    codeUrl: "https://github.com/yashwanth17230/MOVIE_APP"
  },
  {
    id: "04",
    title: "Grocery Store Management",
    category: "Web Application",
    tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    period: "Recent",
    description: "A web application for managing groceries, featuring user authentication, product management, shopping carts, wishlists, and order tracking. It simplifies online grocery shopping and administration.",
    images: [
      "/assets/projects/p4/img1.jpg",
      "/assets/projects/p4/img2.jpg"
    ],
    liveUrl: "https://github.com/yashwanth17230/Grocery_Management_System",
    codeUrl: "https://github.com/yashwanth17230/Grocery_Management_System"
  }
];

export default function SelectedWorks() {
  const [activeProject, setActiveProject] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      // Trigger line is 60% down the screen. 
      // As soon as a project's top edge crosses this line, it becomes active.
      const triggerLine = window.innerHeight * 0.6;
      let activeIdx = 0;

      projectRefs.current.forEach((ref, index) => {
        if (!ref) return;
        const rect = ref.getBoundingClientRect();
        if (rect.top < triggerLine) {
          activeIdx = index;
        }
      });

      setActiveProject(activeIdx);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="py-32 px-6 md:px-16 lg:px-32 xl:px-48 bg-black text-white relative w-full">
      <div className="w-full mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight font-display">
          Selected Works
        </h2>
        <p className="text-neutral-400 mt-4 max-w-xl text-sm md:text-base">
          A showcase of some of my most impactful projects, featuring high-performance platforms, web apps, and dynamic digital experiences.
        </p>
      </div>

      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">

        {/* Sticky Left Column for Image */}
        <div className="hidden lg:block relative">
          <div className="sticky top-32 aspect-[16/10] w-full max-w-xl xl:max-w-2xl rounded-2xl overflow-hidden bg-neutral-900 border border-white/10 shadow-xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="w-full h-full"
              >
                <ProjectMedia project={projects[activeProject]} />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Scrolling Right Column for Details */}
        <div className="flex flex-col gap-16 pb-[50vh]">
          {projects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => { projectRefs.current[index] = el; }}
              className={`flex flex-col gap-6 transition-opacity duration-500 ${activeProject === index ? "opacity-100" : "opacity-30 lg:opacity-50"}`}
            >
              <div className="flex flex-col gap-3">
                <span className="text-emerald-400 font-display text-base font-medium tracking-wider">
                  {project.id}
                </span>
                <h3 className="font-display text-3xl md:text-4xl font-bold leading-tight">
                  {project.title}
                </h3>
              </div>

              {/* Mobile Image */}
              <div className="block lg:hidden w-full aspect-video sm:aspect-[16/10] rounded-xl overflow-hidden mt-6 mb-4 border border-white/10 shadow-lg">
                <ProjectMedia project={project} />
              </div>

              <div className="pl-6 flex flex-col gap-5">
                <h4 className="text-lg text-neutral-300 font-medium">
                  {project.category}
                </h4>

                <div className="flex justify-between items-center text-xs text-neutral-500 border-b border-white/10 pb-3">
                  <span>{project.tags[0]}</span>
                  <span className="font-display">{project.period}</span>
                </div>

                <p className="text-neutral-400 leading-relaxed text-sm md:text-base">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-neutral-300">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4 mt-6">
                  <a href={project.liveUrl || "#"} className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-emerald-500 text-black font-medium group w-fit hover:bg-emerald-400 transition-colors shadow-lg shadow-emerald-500/20">
                    <span>Live Demo</span>
                    <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                  <a href={project.codeUrl || "#"} className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white font-medium group w-fit hover:bg-white hover:text-black transition-colors">
                    <span>View Code</span>
                    <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
