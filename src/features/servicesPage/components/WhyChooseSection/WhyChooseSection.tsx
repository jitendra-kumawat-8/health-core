import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { Section } from "../../../../components/layout/Section";

const HIGHLIGHTS: string[] = [
  "Fast response and flexible scheduling",
  "Home comfort with hospital‑grade care",
  "Qualified, verified healthcare professionals",
  "Designed for families and elder care",
];

export interface WhyChooseSectionProps {
  title?: string;
  highlights?: string[];
}

export const WhyChooseSection: React.FC<WhyChooseSectionProps> = ({
  title = "Why choose Ashokam Homecare",
  highlights = HIGHLIGHTS,
}) => {
  return (
    <Section
      maxWidth="lg"
      sx={{
        py: { xs: 6, md: 8 },
        bgcolor: "grey.50",
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

      <Grid container spacing={3}>
        {highlights.map((item) => (
          <Grid item xs={12} sm={6} key={item}>
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-start",
                gap: 2,
              }}
            >
              <CheckCircle
                sx={{ color: "primary.main", mt: "2px", flexShrink: 0 }}
              />
              <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
                {item}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Section>
  );
};

