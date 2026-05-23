import { DifferentiatorSection } from "@/components/sections/DifferentiatorSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { FreeMiniReviewPromo } from "@/components/sections/FreeMiniReviewPromo";
import { FrameworkSection } from "@/components/sections/FrameworkSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { LeadMagnetSection } from "@/components/sections/LeadMagnetSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { RiskScannerSection } from "@/components/sections/RiskScannerSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { SolutionSection } from "@/components/sections/SolutionSection";
import { TrustBar } from "@/components/sections/TrustBar";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <ProblemSection />
      <SolutionSection />
      <ServicesSection />
      <DifferentiatorSection />
      <ProcessSection />
      <FreeMiniReviewPromo />
      <FrameworkSection />
      <RiskScannerSection />
      <LeadMagnetSection />
      <FAQSection />
      <FinalCTA />
    </>
  );
}
