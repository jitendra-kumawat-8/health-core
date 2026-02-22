import React from "react";
import { Box, Typography } from "@mui/material";
import { MedicalServices } from "@mui/icons-material";
import Image from "next/image";
import { Section } from "../../../../components/layout/Section";
import { ABOUT_HERO_CONTENT } from "./constants";

export interface AboutHeroProps {
  headline?: string;
  subtext?: string;
}

export const AboutHero: React.FC<AboutHeroProps> = ({
  headline = ABOUT_HERO_CONTENT.headline,
  subtext = ABOUT_HERO_CONTENT.subtext,
}) => {
  return (
    <Section
      maxWidth="lg"
      sx={{
        position: "relative",
        py: { xs: 6, md: 8 },
        overflow: "hidden",
        background:
          "linear-gradient(135deg, rgba(31, 122, 140, 0.08) 0%, rgba(76, 175, 80, 0.06) 50%, rgba(255, 255, 255, 1) 100%)",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            "radial-gradient(circle at 20% 50%, rgba(31, 122, 140, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(76, 175, 80, 0.08) 0%, transparent 50%)",
          pointerEvents: "none",
        },
      }}
    >
      {/* Background hero image — blended into the section */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          width: { xs: "100%", md: "55%" },
          pointerEvents: "none",
          opacity: { xs: 0.15, md: 0.9 },
          maskImage: {
            xs: "none",
            md: "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.3) 10%, rgba(0,0,0,0.8) 50%, black 100%)",
          },
          WebkitMaskImage: {
            xs: "none",
            md: "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.3) 10%, rgba(0,0,0,0.8) 50%, black 100%)",
          },
        }}
      >
        <Image
          src="/assets/about-us-hero.png"
          alt=""
          fill
          priority
          style={{ objectFit: "cover", objectPosition: "center right" }}
          sizes="(max-width: 768px) 100vw, 55vw"
        />
      </Box>

      {/* Content — sits above the image */}
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          textAlign: { xs: "center", md: "left" },
          maxWidth: { md: "560px" },
          mx: { xs: "auto", md: 0 },
        }}
      >
        <Typography
          variant="overline"
          component="span"
          sx={{
            color: "primary.main",
            fontWeight: 700,
            letterSpacing: 2,
            fontSize: { xs: "0.75rem", md: "0.875rem" },
            mb: 1,
            display: "block",
          }}
        >
          {ABOUT_HERO_CONTENT.label}
        </Typography>
        <Typography
          variant="h1"
          component="h1"
          gutterBottom
          sx={{
            fontSize: { xs: "2.5rem", sm: "3rem", md: "3.5rem" },
            fontWeight: 700,
            mb: 3,
            color: "primary.main",
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
            color: "primary.dark",
            maxWidth: "36rem",
            lineHeight: 1.6,
            fontWeight: 400,
            mb: 2,
          }}
        >
          {subtext}
        </Typography>
        <Typography
          variant="body1"
          component="p"
          sx={{
            fontWeight: 600,
            fontStyle: "italic",
            color: "secondary.dark",
            fontSize: { xs: "1rem", md: "1.1rem" },
            mb: 3,
          }}
        >
          {ABOUT_HERO_CONTENT.beliefLine}
        </Typography>
        <Typography
          variant="body2"
          component="p"
          sx={{
            fontStyle: "italic",
            fontWeight: 500,
            color: "text.secondary",
            fontSize: { xs: "0.875rem", md: "0.95rem" },
          }}
        >
          <MedicalServices
            sx={{
              fontSize: 18,
              color: "#1F7A8C",
              verticalAlign: "middle",
              mr: 0.75,
              flexShrink: 0,
            }}
          />
          {ABOUT_HERO_CONTENT.subtitle}
        </Typography>
      </Box>
    </Section>
  );
};
