import React from "react";
import { Typography, Box } from "@mui/material";
import { Section } from "../../../../components/layout/Section";
import { ServicesGrid } from "./components/ServicesGrid";
import { SERVICES } from "./constants";

export interface ServicesSectionProps {
  title?: string;
  subtitle?: string;
  services?: typeof SERVICES;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  title = "Our Services",
  subtitle = "Comprehensive healthcare services delivered to your home",
  services = SERVICES,
}) => {
  return (
    <Section
      sx={{
        py: { xs: 6, md: 8 },
      }}
    >
      <Box sx={{ mb: 5, textAlign: "center" }}>
        <Typography
          variant="h2"
          component="h2"
          gutterBottom
          sx={{
            fontSize: { xs: "2rem", md: "2.5rem" },
            fontWeight: 600,
            mb: 2,
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="h6"
          color="text.secondary"
          sx={{
            fontSize: { xs: "1rem", md: "1.125rem" },
            maxWidth: "600px",
            mx: "auto",
          }}
        >
          {subtitle}
        </Typography>
      </Box>
      <ServicesGrid services={services} />
    </Section>
  );
};
