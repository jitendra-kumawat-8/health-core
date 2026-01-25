import React from "react";
import { BookingHero } from "./components/BookingHero";
import { BookingForm } from "./components/BookingForm";
import { Section } from "../../components/layout/Section";

export interface BookingPageComponentProps {
  // Placeholder for future dynamic props
}

export const BookingPageComponent: React.FC<BookingPageComponentProps> = () => {
  return (
    <>
      <BookingHero />
      <Section
        maxWidth="lg"
        sx={{
          py: { xs: 6, md: 8 },
        }}
      >
        <BookingForm />
      </Section>
    </>
  );
};
