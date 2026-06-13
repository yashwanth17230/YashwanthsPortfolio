import React from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Mail,
  FileText,
  Rocket,
  Smartphone,
  Cloud,
  Handshake,
  Layers,
  Zap,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CertificationsSection from "@/components/CertificationsSection";

const EXPERIENCES = [
  {
    id: "obaps",
    shortName: "OB",
    company: "OBAPS Global Technologies Pvt Ltd",
    roles: [
      {
        role: "Software Engineer",
        period: "JUN 2025 — PRESENT",
        keypoints: [
          "Spearheading the end-to-end architecture of scalable products and services across diverse sectors, including FinTech and E-Commerce.",
          "Engineering resilient, low-latency backend services and optimizing database layers, resulting in significantly enhanced system scalability and API response times.",
          "Driving product innovation by collaborating with cross-functional teams to deliver enterprise-grade web applications using modern React & Next.js ecosystems.",
        ],
      },
      {
        role: "Web Developer Intern",
        period: "FEB 2025 — MAY 2025",
        keypoints: [
          "Developed and maintained highly responsive user interfaces, ensuring seamless performance and accessibility across diverse devices.",
          "Integrated and optimized RESTful APIs, facilitating secure and efficient data exchange between complex front-end and back-end systems.",
        ],
      },
    ],
  },
  {
    id: "inventeron",
    shortName: "IN",
    company: "Inventeron Technologies",
    roles: [
      {
        role: "Full Stack Developer Intern",
        period: "2023 OCT — 2023 NOV",
        keypoints: [
          "Developed a real-time Movies App using React Native with dynamic API integration",
          "Focused on delivering mobile-first design and enhancing user interaction with real-time data fetching.",
        ],
      },
    ],
  },
];

const HIGHLIGHTS = [
  {
    icon: <Rocket className="text-black" size={22} />,
    title: "End-to-End Product Development",
    desc: "Built and deployed scalable full-stack applications, handling everything from UI to backend architecture.",
  },
  {
    icon: <Smartphone className="text-black" size={22} />,
    title: "Cross-Platform Mobile Apps",
    desc: "Launched secure Android & iOS applications with real-time data handling and seamless API integrations.",
  },
  {
    icon: <Cloud className="text-black" size={22} />,
    title: "Cloud & Production Deployment",
    desc: "Managed automated CI/CD workflows, server configurations, and scalable database deployments.",
  },
  {
    icon: <Handshake className="text-black" size={22} />,
    title: "Product-Focused Engineering",
    desc: "Collaborated with stakeholders to translate complex business needs into high-quality software solutions.",
  },
  {
    icon: <Layers className="text-black" size={22} />,
    title: "Diverse Technology Stack",
    desc: "Hands-on expertise across the MERN stack, React Native, PHP, REST APIs, and modern cloud technologies.",
  },
  {
    icon: <Zap className="text-black" size={22} />,
    title: "Performance Optimization",
    desc: "Enhanced application speed, security, and efficiency through rigorous profiling and modern best practices.",
  },
];

export default function ProfilePage() {
  return (
    <>
      <Navbar />

      <main className="max-w-[1400px] mx-auto w-full relative z-10 pt-20 md:pt-40 px-4 sm:px-6 md:px-10 lg:px-14 pb-16 md:pb-32">

        {/* ── Page Header ── */}
        <div className="mb-10 md:mb-24">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors mb-5 md:mb-8"
          >
            <ArrowLeft size={16} />
            <span className="font-medium text-xs tracking-wider uppercase">Back to Home</span>
          </Link>
          <h1 className="font-display text-[2.2rem] sm:text-5xl md:text-7xl font-bold leading-tight">
            Profile <span className="text-neutral-600">&</span> Highlights.
          </h1>
        </div>

        <div className="flex flex-col gap-14 md:gap-32">

          {/* ── About Me ── */}
          <section className="flex flex-col md:flex-row gap-8 md:gap-16 justify-between border-b border-white/5 pb-14 md:pb-32">
            <div className="w-full md:w-1/2 flex flex-col gap-4 text-base sm:text-lg md:text-xl text-neutral-300 font-light leading-relaxed">
              <p>
                I&apos;m Yashwanth R, a Software Engineer focused on building robust, scalable,
                and high-performance digital products.
              </p>
              <p>
                My background blends rigorous engineering principles with an eye for minimalist,
                effective design. I thrive in environments where complex problems require elegant solutions.
              </p>
            </div>

            <div className="w-full md:w-5/12 flex flex-col gap-6 md:gap-10">
              <div>
                <h3 className="text-xs font-bold tracking-widest text-neutral-500 uppercase mb-3">
                  Current Focus
                </h3>
                <p className="text-neutral-400 leading-relaxed text-sm md:text-base">
                  Deep diving into advanced React Native architecture, AWS Cloud infrastructure,
                  and modern Next.js features to build seamless cross-platform experiences.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="/CV_YashwanthR.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex justify-center items-center gap-2 bg-white text-black px-6 py-3.5 rounded-full font-semibold hover:bg-neutral-200 transition-colors w-full sm:w-auto text-sm"
                >
                  <FileText size={16} />
                  Open Resume
                </a>
                <a
                  href="mailto:yashwanthr922@gmail.com"
                  className="inline-flex justify-center items-center gap-2 border border-white/20 text-white px-6 py-3.5 rounded-full font-semibold hover:bg-white/5 transition-colors w-full sm:w-auto text-sm"
                >
                  <Mail size={16} />
                  Email Me
                </a>
              </div>
            </div>
          </section>

          {/* ── Experience ── */}
          <section>
            <h2 className="text-xs font-bold tracking-widest text-neutral-500 uppercase mb-6 md:mb-12 border-b border-white/10 pb-4">
              Experience
            </h2>
            <div className="flex flex-col gap-10">
              {EXPERIENCES.map((exp) => (
                <div key={exp.id} className="flex gap-4 sm:gap-8 items-start">
                  {/* Avatar – hidden on very small mobile */}
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10 text-sm font-display font-bold text-white">
                    {exp.shortName}
                  </div>

                  <div className="flex flex-col w-full border-b border-white/5 pb-8 min-w-0">
                    <h3 className="text-lg sm:text-xl text-white font-medium mb-5">{exp.company}</h3>

                    <div className="flex flex-col gap-6 relative">
                      {/* Vertical timeline line (only when multiple roles) */}
                      {exp.roles.length > 1 && (
                        <div className="absolute left-[7px] top-3 bottom-3 w-px bg-white/10" />
                      )}

                      {exp.roles.map((role, roleIdx) => (
                        <div key={roleIdx} className="relative pl-6">
                          {exp.roles.length > 1 && (
                            <div className="absolute left-0 top-[7px] w-3.5 h-3.5 rounded-full border-2 border-emerald-400 bg-black" />
                          )}

                          {/* Role + Period */}
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-3">
                            <h4 className="text-base sm:text-lg text-neutral-200 font-medium">{role.role}</h4>
                            <span className="text-neutral-500 text-xs sm:text-sm shrink-0">{role.period}</span>
                          </div>

                          {/* Keypoints */}
                          <ul className="flex flex-col gap-2.5 text-neutral-400 text-sm leading-relaxed">
                            {role.keypoints.map((point, index) => (
                              <li key={index} className="flex items-start gap-2.5">
                                <span className="text-emerald-400 mt-1 shrink-0 text-xs">●</span>
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── Education ── */}
          <section>
            <h2 className="text-xs font-bold tracking-widest text-neutral-500 uppercase mb-6 md:mb-12 border-b border-white/10 pb-4">
              Education
            </h2>
            <div className="flex gap-4 sm:gap-8 items-start">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10 text-xs font-display font-bold text-white">
                MI
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full border-b border-white/5 pb-8 gap-2 min-w-0">
                <div>
                  <h3 className="text-lg sm:text-xl text-white font-medium mb-1">
                    B.E. Computer Science & Engineering
                  </h3>
                  <p className="text-neutral-400 text-sm sm:text-base">
                    Mangalore Institute of Technology & Engineering
                  </p>
                </div>
                <span className="text-neutral-500 text-sm shrink-0">2021 — 2025</span>
              </div>
            </div>
          </section>

          {/* ── Certifications ── */}
          <CertificationsSection />

          {/* ── Career Highlights ── */}
          <section>
            <h2 className="text-xs font-bold tracking-widest text-neutral-500 uppercase mb-6 md:mb-12 border-b border-white/10 pb-4">
              Career Highlights
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {HIGHLIGHTS.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 md:p-8 border border-white/10 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors flex flex-col gap-4"
                >
                  <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg text-white font-medium mb-2">{item.title}</h3>
                    <p className="text-neutral-400 leading-relaxed text-xs md:text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </>
  );
}
