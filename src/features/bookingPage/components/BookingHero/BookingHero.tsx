import React from "react";
import { Box, Typography } from "@mui/material";
import { Section } from "../../../../components/layout/Section";
import { BOOKING_HERO_CONTENT } from "./constants";

export interface BookingHeroProps {
  headline?: string;
  subtext?: string;
}

export const BookingHero: React.FC<BookingHeroProps> = ({
  headline = BOOKING_HERO_CONTENT.headline,
  subtext = BOOKING_HERO_CONTENT.subtext,
}) => {
  return (
    <Section
      maxWidth="lg"
      sx={{
        position: "relative",
        py: { xs: 6, md: 8 },
        overflow: "hidden",
        background: "linear-gradient(135deg, rgba(31, 122, 140, 0.08) 0%, rgba(76, 175, 80, 0.06) 50%, rgba(255, 255, 255, 1) 100%)",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "radial-gradient(circle at 20% 50%, rgba(31, 122, 140, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(76, 175, 80, 0.08) 0%, transparent 50%)",
          pointerEvents: "none",
        },
      }}
    >
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          textAlign: { xs: "center", md: "left" },
          maxWidth: { md: "720px" },
          mx: { xs: "auto", md: 0 },
        }}
      >
        <Typography
          variant="h1"
          component="h1"
          gutterBottom
          sx={{
            fontSize: { xs: "2.5rem", sm: "3rem", md: "3.5rem" },
            fontWeight: 700,
            mb: 3,
            color: "text.primary",
            lineHeight: 1.2,
          }}
        >
          {headline}
        </Typography>
        <Typography
          variant="h6"
          component="p"
          sx={{
            fontSize: { xs: "1.125rem", md: "1.25rem" },
            color: "text.secondary",
            maxWidth: "36rem",
            lineHeight: 1.6,
            fontWeight: 400,
          }}
        >
          {subtext}
        </Typography>
      </Box>
    </Section>
  );
};
