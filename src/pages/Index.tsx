import Header from '@/components/Header';
import Hero from '@/components/Hero';
import FrontendHighlights from '@/components/FrontendHighlights';
import UISystemsSection from '@/components/UISystemsSection';
import Footer from '@/components/Footer';
import { FeaturedProjects } from '@/presentation/components/FeaturedProjects';
import { Experience } from '@/presentation/components/Experience';
import { Education } from '@/presentation/components/Education';
import { AIAssistant } from '@/presentation/components/AIAssistant';
import { useIsMobile } from '@/hooks/use-mobile';

// Single Responsibility: This component orchestrates the main page layout
const Index = () => {
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen">
      <Header />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_400px] lg:gap-12">
          <main className="min-w-0">
            <Hero />
            <Experience />
            <FeaturedProjects />
            <FrontendHighlights />
            <UISystemsSection />
            <Education />
            <Footer />
          </main>

          {!isMobile && (
            <div className="hidden lg:block">
              <AIAssistant />
            </div>
          )}
        </div>
      </div>

      {isMobile && <AIAssistant isMobile />}
    </div>
  );
};

export default Index;
