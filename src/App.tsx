import { useState } from 'react';
import { MotionConfig } from 'motion/react';
import { ThemeProvider } from '@/src/components/theme-provider';
import { TooltipProvider } from '@/src/components/ui/tooltip';
import { Toaster } from '@/src/components/ui/sonner';
import { Navbar } from '@/src/components/navigation/Navbar';
import { HeroSection } from '@/src/components/sections/HeroSection';
import { AboutSection } from '@/src/components/sections/AboutSection';
import { ExperienceSection } from '@/src/components/sections/ExperienceSection';
import { ProjectsSection } from '@/src/components/sections/ProjectsSection';
import { SkillsSection } from '@/src/components/sections/SkillsSection';
import { ContactSection } from '@/src/components/sections/ContactSection';
import { Footer } from '@/src/components/layout/Footer';
import { ReactionFront } from '@/src/components/ui/hero-ascii-reaction-front';
import { useActiveSection } from '@/src/hooks/useActiveSection';

const SECTION_IDS = [
  'home',
  'about',
  'experience',
  'projects',
  'skills',
  'contact',
] as const;

export default function App() {
  const activeSection = useActiveSection(SECTION_IDS);
  const [showBackground, setShowBackground] = useState(() => {
    try {
      return localStorage.getItem('portfolio-ascii-background') !== 'off';
    } catch {
      return true;
    }
  });

  const toggleBackground = () => {
    const next = !showBackground;
    setShowBackground(next);
    try {
      localStorage.setItem('portfolio-ascii-background', next ? 'on' : 'off');
    } catch {
      // The toggle still works if storage is unavailable.
    }
  };

  return (
    <MotionConfig reducedMotion="user">
      <ThemeProvider>
        <TooltipProvider delayDuration={200}>
          <div className="relative isolate min-h-screen flex flex-col bg-background text-foreground">
            {showBackground && (
              <ReactionFront
                cellSize={14}
                className="pointer-events-none fixed inset-0 opacity-30 dark:opacity-45"
              />
            )}
            <Navbar
              activeSection={activeSection}
              showBackground={showBackground}
              onToggleBackground={toggleBackground}
            />
            <main className="relative z-10 flex-1">
              <HeroSection />
              <AboutSection />
              <ExperienceSection />
              <ProjectsSection />
              <SkillsSection />
              <ContactSection />
            </main>
            <div className="relative z-10">
              <Footer />
            </div>
          </div>
          <Toaster />
        </TooltipProvider>
      </ThemeProvider>
    </MotionConfig>
  );
}
