import React from "react";
import { RegisterHero } from "./components/RegisterHero";
import { RegisterForm } from "./components/RegisterForm";
import { Section } from "../../components/layout/Section";

export interface RegisterPageComponentProps {
  // Placeholder for future dynamic props
}

export const RegisterPageComponent: React.FC<RegisterPageComponentProps> = () => {
  return (
    <>
      <RegisterHero />
      <Section
        maxWidth="lg"
        sx={{
          py: { xs: 6, md: 8 },
        }}
      >
        <RegisterForm />
      </Section>
    </>
  );
};
