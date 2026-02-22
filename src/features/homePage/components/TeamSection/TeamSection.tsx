import React from "react";
import dynamic from "next/dynamic";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { Section } from "../../../../components/layout/Section";
import { TEAM_HEADING, TEAM_SUBTEXT, TEAM_MEMBERS } from "./constants";

const TeamCarousel = dynamic(() => import("./TeamCarousel"), { ssr: false });

export const TeamSection: React.FC = () => {
  return (
    <Section
      maxWidth={false}
      sx={{
        py: { xs: 6, md: 10 },
        backgroundColor: "grey.50",
        overflow: "hidden",
      }}
    >
      <Box sx={{ maxWidth: "lg", mx: "auto", px: { xs: 2, md: 3 } }}>
        <Box sx={{ textAlign: "center", mb: { xs: 4, md: 6 } }}>
          <Typography
            variant="h3"
            component="h2"
            sx={{
              fontWeight: 700,
              mb: 2,
              fontSize: { xs: "1.75rem", md: "2.25rem" },
              color: "primary.main",
            }}
          >
            {TEAM_HEADING}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              maxWidth: "640px",
              mx: "auto",
              lineHeight: 1.7,
              fontSize: { xs: "1rem", md: "1.125rem" },
            }}
          >
            {TEAM_SUBTEXT}
          </Typography>
        </Box>

        <TeamCarousel />
      </Box>
    </Section>
  );
};
