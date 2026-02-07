import React from "react";
import { AboutHero } from "./components/AboutHero";
import { AboutContent } from "./components/AboutContent";

export interface AboutPageComponentProps {
  // Placeholder for future dynamic props
}

export const AboutPageComponent: React.FC<AboutPageComponentProps> = () => {
  return (
    <>
      <AboutHero />
      <AboutContent />
    </>
  );
};
