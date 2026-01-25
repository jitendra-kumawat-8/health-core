import React from "react";
import { Typography, Box, Grid } from "@mui/material";
import { Section } from "../../../../components/layout/Section";
import { TrustCard } from "./components/TrustCard";
import { Testimonials } from "./components/Testimonials";
import { TRUST_POINTS, TESTIMONIALS } from "./constants";

export interface TrustSectionProps {
  title?: string;
  trustPoints?: typeof TRUST_POINTS;
  testimonials?: typeof TESTIMONIALS;
}

export const TrustSection: React.FC<TrustSectionProps> = ({
  title = "Trusted Healthcare Services",
  trustPoints = TRUST_POINTS,
  testimonials = TESTIMONIALS,
}) => {
  return (
    <Section
      backgroundColor="grey.50"
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
      </Box>

      <Grid container spacing={4} sx={{ mb: 6 }}>
        {trustPoints.map((point, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <TrustCard title={point} />
          </Grid>
        ))}
      </Grid>

      <Box>
        <Typography
          variant="h4"
          component="h3"
          gutterBottom
          sx={{
            textAlign: "center",
            mb: 4,
            fontSize: { xs: "1.5rem", md: "2rem" },
            fontWeight: 600,
          }}
        >
          What Our Patients Say
        </Typography>
        <Testimonials testimonials={testimonials} />
      </Box>
    </Section>
  );
};
