import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedProjects from "@/components/FeaturedProjects";
import FrontendHighlights from "@/components/FrontendHighlights";
import UISystemsSection from "@/components/UISystemsSection";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import AIAssistant from "@/components/AIAssistant";
import Footer from "@/components/Footer";
import { useIsMobile } from "@/hooks/use-mobile";

const Index = () => {
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_400px] gap-8 lg:gap-12">
          <main className="min-w-0">
            <Hero />
            <FeaturedProjects />
            <FrontendHighlights />
            <UISystemsSection />
            <Experience />
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
