import React from "react";
import { Box } from "@mui/material";
import { Section } from "../../../../components/layout/Section";
import { HeroContent } from "./components/HeroContent";
import { HeroActions } from "./components/HeroActions";
import { HERO_CONTENT } from "./constants";
import { handleBookDoctor, handleTalkToUs } from "./utils";
import { ROUTES } from "../../../../constants/routes";
import type { HeroSectionProps } from "./types";

export const HeroSection: React.FC<HeroSectionProps> = ({
  headline = HERO_CONTENT.headline,
  subtext = HERO_CONTENT.subtext,
  primaryCTA = HERO_CONTENT.primaryCTA,
  secondaryCTA = HERO_CONTENT.secondaryCTA,
  onBookDoctor = handleBookDoctor,
  onTalkToUs = handleTalkToUs,
}) => {
  return (
    <Section
      backgroundColor="grey.50"
      maxWidth="lg"
      sx={{
        py: { xs: 6, md: 10 },
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(135deg, rgba(31, 122, 140, 0.08) 0%, rgba(76, 175, 80, 0.06) 25%, rgba(212, 175, 55, 0.04) 50%, rgba(255, 255, 255, 1) 100%)",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "radial-gradient(circle at 20% 30%, rgba(31, 122, 140, 0.12) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(76, 175, 80, 0.1) 0%, transparent 50%), radial-gradient(circle at 50% 50%, rgba(212, 175, 55, 0.08) 0%, transparent 60%)",
          pointerEvents: "none",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: { xs: "center", md: "flex-start" },
          maxWidth: { md: "800px" },
        }}
      >
        <HeroContent headline={headline} subtext={subtext} />
          <HeroActions
            primaryCTA={primaryCTA}
            secondaryCTA={secondaryCTA}
            primaryLink={ROUTES.BOOKING}
            secondaryLink={ROUTES.CONTACT}
            onPrimaryClick={onBookDoctor}
            onSecondaryClick={onTalkToUs}
          />
      </Box>
    </Section>
  );
};
