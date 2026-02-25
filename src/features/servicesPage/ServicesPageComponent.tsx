import React from "react";
import { ServicesHero } from "./components/ServicesHero";
import { ServicesProcessSection } from "./components/ServicesProcessSection";
import { WhyChooseSection } from "./components/WhyChooseSection";
import { CTASection } from "@/src/features/homePage/components/CTASection";
import { ServicesSection } from "../homePage/components/ServicesSection/ServicesSection";

export interface ServicesPageComponentProps {
  // Placeholder for future dynamic props (e.g., services data from API)
}

export const ServicesPageComponent: React.FC<
  ServicesPageComponentProps
> = () => {
  return (
    <>
      <ServicesHero />
      <ServicesSection />
      <ServicesProcessSection />
      <WhyChooseSection />
      <CTASection />
    </>
  );
};

