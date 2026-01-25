import React from "react";
import { Box, Grid } from "@mui/material";
import { Section } from "../../../../components/layout/Section";
import { ContactMethods } from "../ContactMethods";
import { ContactForm } from "../ContactForm";
import { ReassuranceSection } from "../ReassuranceSection";

export interface ContactContentProps {
  // Props for future dynamic content
}

export const ContactContent: React.FC<ContactContentProps> = () => {
  return (
    <Section
      maxWidth="lg"
      sx={{
        py: { xs: 6, md: 8 },
      }}
    >
      <Grid container spacing={4}>
        <Grid item xs={12} md={5}>
          <ContactMethods />
          <ReassuranceSection />
        </Grid>
        <Grid item xs={12} md={7}>
          <ContactForm />
        </Grid>
      </Grid>
    </Section>
  );
};
