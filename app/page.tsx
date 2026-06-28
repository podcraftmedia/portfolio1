import HeroSection from "@/sections/HeroSection";
import PhilosophySection from "@/sections/PhilosophySection";
import ImpactSection from "@/sections/ImpactSection";
import TimelineSection from "@/sections/TimelineSection";
import FeaturedWorkSection from "@/sections/FeaturedWorkSection";
import VideoSection from "@/sections/VideoSection";
import ApproachSection from "@/sections/ApproachSection";
import ToolkitSection from "@/sections/ToolkitSection";
import ContactSection from "@/sections/ContactSection";
import Footer from "@/components/ui/Footer";
import Background3D from "@/components/3d/Background3D";
import FloatingParticles from "@/components/3d/FloatingParticles";
import Navbar from "@/components/ui/Navbar";
import LoadingScreen from "@/components/ui/LoadingScreen";
import CursorFollow from "@/components/ui/CursorFollow";
import SectionDivider from "@/components/ui/SectionDivider";

export default function Home() {
  return (
    <>
      {/* Loading Screen */}
      <LoadingScreen />

      {/* Custom Cursor (Desktop only) */}
      <div className="hidden lg:block">
        <CursorFollow />
      </div>

      {/* Navbar */}
      <Navbar />

      <main className="relative">
        {/* 3D Animated Background */}
        <Background3D />
        <FloatingParticles />

        {/* Section 01: Hero with NOW widget */}
        <HeroSection />

        <SectionDivider />

        {/* Section 02: Philosophy/About */}
        <PhilosophySection />

        <SectionDivider />

        {/* Section 03: Impact/Numbers with diamond separators */}
        <ImpactSection />

        <SectionDivider />

        {/* Section 04: Timeline/Journey */}
        <TimelineSection />

        <SectionDivider />

        {/* Section 05: Featured Work Grid */}
        <FeaturedWorkSection />

        <SectionDivider />

        {/* Section 06: Video Showcase with embedded playback */}
        <VideoSection />

        <SectionDivider />

        {/* Section 07: Working Approach */}
        <ApproachSection />

        <SectionDivider />

        {/* Section 08: Technical Toolkit */}
        <ToolkitSection />

        <SectionDivider />

        {/* Contact Section */}
        <ContactSection />

        {/* Footer */}
        <Footer />
      </main>
    </>
  );
}
