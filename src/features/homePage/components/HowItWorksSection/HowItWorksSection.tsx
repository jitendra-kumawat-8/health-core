import React from "react";
import { Typography, Box } from "@mui/material";
import { Section } from "../../../../components/layout/Section";
import { StepsList } from "./components/StepsList";
import { STEPS } from "./constants";

export interface HowItWorksSectionProps {
  title?: string;
  subtitle?: string;
  steps?: typeof STEPS;
}

export const HowItWorksSection: React.FC<HowItWorksSectionProps> = ({
  title = "How It Works",
  subtitle = "Get healthcare at home in four simple steps",
  steps = STEPS,
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
      <StepsList steps={steps} />
    </Section>
  );
};
