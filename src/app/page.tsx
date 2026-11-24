import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { LiveSystemVisualizer } from "@/components/sections/LiveSystemVisualizer";
import { ParallaxShowcaseSection } from "@/components/sections/ParallaxShowcaseSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { BackToTop } from "@/components/ui/back-to-top";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground antialiased selection:bg-emerald-500/20 selection:text-emerald-500">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <LiveSystemVisualizer />
        <ParallaxShowcaseSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <EducationSection />
        <ContactSection />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
