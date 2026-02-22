import React from "react";
import {
  HeroSection,
  ServicesSection,
  TeamSection,
  SpeedHighlightsSection,
  HowItWorksSection,
  TrustSection,
  CTASection,
} from "./components";

export interface HomePageComponentProps {
  // Props can be added here for dynamic content integration later
}

export const HomePageComponent: React.FC<HomePageComponentProps> = () => {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <TeamSection />
      {/* <SpeedHighlightsSection /> */}
      <HowItWorksSection />
      <TrustSection />
      <CTASection />
    </>
  );
};
