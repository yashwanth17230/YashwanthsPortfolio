import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MySkills from "@/components/MySkills";
import TechnologiesMarquee from "@/components/TechStackMarquee";
import ServicesGrid from "@/components/ServicesGrid";
import SelectedWorks from "@/components/SelectedWorks";
import ProcessSection from "@/components/ProcessSection";
import ProfileSnapshot from "@/components/ProfileSnapshot";
import ContactAndFooter from "@/components/ContactAndFooter";

import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="max-w-[1600px] mx-auto w-full relative z-10 pt-8">
        <HeroSection />
        <MySkills />
        <TechnologiesMarquee />
        <ServicesGrid />
        <SelectedWorks />
        <ProcessSection />
        <ProfileSnapshot />
        <ContactAndFooter />
      </main>
      <Footer />
    </>
  );
}
