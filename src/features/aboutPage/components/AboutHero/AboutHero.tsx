import React from "react";
import { Box, Typography } from "@mui/material";
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
          variant="body1"
          component="p"
          sx={{
            fontStyle: "italic",
            fontWeight: 600,
            color: "secondary.dark",
            fontSize: { xs: "0.875rem", md: "1rem" },
            mb: 3,
          }}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
            style={{
              display: "inline-block",
              verticalAlign: "middle",
              marginRight: "6px",
              flexShrink: 0,
            }}
          >
            <path
              d="M19 8C19 4.69 16.31 2 13 2C9.69 2 7 4.69 7 8C7 9.1 5.1 10 4 10V12C5.1 12 7 12.9 7 14V16C7 18.21 8.79 20 11 20H13"
              stroke="#1F7A8C"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
            />
            <circle cx="17" cy="17" r="4" fill="#4CAF50" />
            <circle cx="17" cy="17" r="2" fill="#FFFFFF" />
          </svg>
          {ABOUT_HERO_CONTENT.subtitle}
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
          }}
        >
          {subtext}
        </Typography>
      </Box>
    </Section>
  );
};
