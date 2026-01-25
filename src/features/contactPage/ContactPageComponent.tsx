import React from "react";
import { ContactHero } from "./components/ContactHero";
import { ContactContent } from "./components/ContactContent";

export interface ContactPageComponentProps {
  // Placeholder for future dynamic props
}

export const ContactPageComponent: React.FC<ContactPageComponentProps> = () => {
  return (
    <>
      <ContactHero />
      <ContactContent />
    </>
  );
};
