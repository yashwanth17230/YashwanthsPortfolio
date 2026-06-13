"use client";

import React, { useState } from "react";
import { ArrowUpRight, X } from "lucide-react";
import Image from "next/image";

const CERTIFICATIONS = [
  {
    title: "HTML, CSS & JavaScript for Web Developers",
    issuer: "Issued by Coursera",
    image: "/assets/certificate/hcj.png"
  },
  {
    title: "The Complete Flutter Development with Dart",
    issuer: "Issued by Udemy",
    image: "/assets/certificate/flutter.png"
  },
  {
    title: "Data Structures and Algorithm",
    issuer: "Issued by Udemy",
    image: null
  },
  {
    title: "Amazon Web Service as Beginner",
    issuer: "Issued by Udemy",
    image: "/assets/certificate/aws.png"
  },
  {
    title: "Bootstrap 5",
    issuer: "Issued by Udemy",
    image: "/assets/certificate/bootstrap.png"
  },
  {
    title: "Hack Heist Participant",
    issuer: "Organized by MITE",
    image: "/assets/certificate/HH.jpeg"
  }
];

export default function CertificationsSection() {
  const [selectedCert, setSelectedCert] = useState<string | null>(null);

  return (
    <>
      <section>
        <h2 className="text-sm font-bold tracking-widest text-neutral-500 uppercase mb-8 md:mb-12 border-b border-white/10 pb-4">Certifications</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {CERTIFICATIONS.map((cert, idx) => (
            <div 
              key={idx} 
              onClick={() => cert.image && setSelectedCert(cert.image)}
              className={`p-8 md:p-10 border border-white/10 rounded-2xl bg-white/5 transition-colors flex flex-col justify-between min-h-[250px] group ${cert.image ? 'cursor-pointer hover:bg-white/10' : 'opacity-70'}`}
            >
              <div className="flex justify-end mb-8">
                {cert.image && <ArrowUpRight className="text-neutral-600 group-hover:text-white transition-colors" />}
              </div>
              <div>
                <h3 className={`text-lg md:text-xl text-white font-medium transition-colors mb-2 ${cert.image ? 'group-hover:text-emerald-400' : ''}`}>{cert.title}</h3>
                <span className="text-neutral-400 text-xs md:text-sm">{cert.issuer}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal */}
      {selectedCert && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 bg-black/80 backdrop-blur-sm" onClick={() => setSelectedCert(null)}>
          <div className="relative max-w-3xl w-full max-h-[75vh] rounded-lg overflow-hidden flex items-center justify-center bg-black/50 border border-white/10 shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <button 
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 right-4 text-white/70 hover:text-white bg-black/50 hover:bg-black/70 p-2 md:p-3 rounded-full transition-all z-10 backdrop-blur-sm"
            >
              <X size={24} />
            </button>
            <img 
              src={selectedCert} 
              alt="Certificate" 
              className="w-full h-auto max-h-[75vh] object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </>
  );
}
