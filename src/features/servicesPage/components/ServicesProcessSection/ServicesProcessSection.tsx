import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";
import { Section } from "../../../../components/layout/Section";

interface ProcessStep {
  id: string;
  number: number;
  title: string;
  description: string;
}

const PROCESS_STEPS: ProcessStep[] = [
  {
    id: "choose-service",
    number: 1,
    title: "Choose service",
    description: "Pick the healthcare service that best fits your current need.",
  },
  {
    id: "book-visit",
    number: 2,
    title: "Book visit",
    description:
      "Tell us your preferred time and basic details—no payment required here.",
  },
  {
    id: "professional-arrives",
    number: 3,
    title: "Professional arrives",
    description:
      "A qualified doctor or nurse visits your home at the scheduled time.",
  },
  {
    id: "care-follow-up",
    number: 4,
    title: "Care & follow‑up",
    description:
      "Receive treatment, advice, and coordinated follow‑up where needed.",
  },
];

export interface ServicesProcessSectionProps {
  title?: string;
  steps?: ProcessStep[];
}

export const ServicesProcessSection: React.FC<ServicesProcessSectionProps> = ({
  title = "How services work",
  steps = PROCESS_STEPS,
}) => {
  return (
    <Section
      maxWidth="lg"
      sx={{
        py: { xs: 6, md: 8 },
        backgroundColor: "grey.50",
        position: "relative",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          background: "linear-gradient(90deg, transparent 0%, rgba(31, 122, 140, 0.2) 50%, transparent 100%)",
        },
      }}
    >
      <Box sx={{ textAlign: "center", mb: 5 }}>
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
      </Box>

      <Grid container spacing={4}>
        {steps.map((step) => (
          <Grid item xs={12} sm={6} md={3} key={step.id}>
            <Paper
              elevation={2}
              sx={{
                p: 3,
                textAlign: "center",
                height: "100%",
                transition: "all 0.3s ease-in-out",
                background: "white",
                color: "text.primary",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: 4,
                  background: "linear-gradient(135deg, #1F7A8C 0%, #4CAF50 100%)",
                  color: "white",
                  "& .step-circle": {
                    background: "white",
                    color: "primary.main",
                    boxShadow: "0 4px 12px rgba(255, 255, 255, 0.3)",
                  },
                  "& .step-title": {
                    color: "white",
                  },
                  "& .step-description": {
                    color: "rgba(255, 255, 255, 0.9)",
                  },
                },
              }}
            >
              <Box
                className="step-circle"
                sx={{
                  width: 56,
                  height: 56,
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #1F7A8C 0%, #4CAF50 100%)",
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 700,
                  fontSize: "1.25rem",
                  mx: "auto",
                  mb: 2,
                  boxShadow: "0 4px 12px rgba(31, 122, 140, 0.3)",
                  transition: "all 0.3s ease-in-out",
                }}
              >
                {step.number}
              </Box>
              <Typography
                className="step-title"
                variant="h6"
                component="h3"
                gutterBottom
                sx={{
                  fontWeight: 600,
                  mb: 1,
                  color: "text.primary",
                  transition: "color 0.3s ease-in-out",
                }}
              >
                {step.title}
              </Typography>
              <Typography
                className="step-description"
                variant="body2"
                sx={{
                  lineHeight: 1.6,
                  color: "text.secondary",
                  transition: "color 0.3s ease-in-out",
                }}
              >
                {step.description}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Section>
  );
};

