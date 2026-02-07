import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import Image from "next/image";
import {
  Favorite,
  Visibility,
} from "@mui/icons-material";
import { Section } from "../../../../components/layout/Section";
import {
  ABOUT_INTRO,
  ABOUT_INTRO_CLOSING,
  BELIEFS,
  PROMISES,
  WHY_WE_CARE,
  VISION,
} from "./constants";

// Unique SVG icons for each promise card
const PROMISE_ICONS: Record<string, React.ReactNode> = {
  "Verified & Trusted Professionals": (
    // Shield with checkmark
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M12 2L3 7v5c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5z" fill="#1F7A8C" />
      <path d="M10 15.5l-3.5-3.5 1.41-1.41L10 12.67l5.59-5.59L17 8.5l-7 7z" fill="#FFFFFF" />
    </svg>
  ),
  "Care That Comes Home": (
    // House with heart
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z" fill="#4CAF50" />
      <path
        d="M12 13.5c-.55-.55-2-1.5-2-2.5a1.5 1.5 0 013 0 1.5 1.5 0 013 0c0 1-.95 1.95-2 2.5L12 15l-2-1.5z"
        fill="#FFFFFF"
      />
    </svg>
  ),
  "Transparent & Hassle-Free": (
    // Clipboard with lines
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="5" y="3" width="14" height="18" rx="2" fill="#D4AF37" />
      <rect x="8" y="2" width="8" height="3" rx="1.5" fill="#B8941F" />
      <rect x="8" y="9" width="8" height="1.5" rx="0.75" fill="#FFFFFF" />
      <rect x="8" y="12.5" width="6" height="1.5" rx="0.75" fill="#FFFFFF" />
      <rect x="8" y="16" width="5" height="1.5" rx="0.75" fill="#FFFFFF" />
    </svg>
  ),
  "Care Beyond the Appointment": (
    // Handshake / connected hearts
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="10" fill="#1F7A8C" opacity="0.15" />
      <path
        d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
        fill="#D4AF37"
      />
      <path
        d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
        fill="none"
        stroke="#B8941F"
        strokeWidth="0.5"
      />
    </svg>
  ),
};

export const AboutContent: React.FC = () => {
  return (
    <>
      {/* Intro */}
      <Section maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
        <Box sx={{ maxWidth: "800px" }}>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "1rem", md: "1.125rem" },
              color: "text.secondary",
              lineHeight: 1.8,
              mb: 3,
            }}
          >
            {ABOUT_INTRO}
          </Typography>
          <Typography
            variant="h6"
            component="p"
            sx={{
              fontWeight: 500,
              fontStyle: "italic",
              color: "primary.main",
              lineHeight: 1.6,
            }}
          >
            {ABOUT_INTRO_CLOSING}
          </Typography>
        </Box>
      </Section>

      {/* What We Believe */}
      <Section
        maxWidth="lg"
        sx={{
          py: { xs: 4, md: 6 },
          backgroundColor: "grey.50",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Blended background image */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            width: { xs: "100%", md: "50%" },
            pointerEvents: "none",
            opacity: { xs: 0.1, md: 0.85 },
            maskImage: {
              xs: "none",
              md: "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.3) 20%, rgba(0,0,0,0.8) 50%, black 100%)",
            },
            WebkitMaskImage: {
              xs: "none",
              md: "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.3) 20%, rgba(0,0,0,0.8) 50%, black 100%)",
            },
          }}
        >
          <Image
            src="/assets/about-us-what-we-believe.png"
            alt=""
            fill
            style={{ objectFit: "cover", objectPosition: "center right" }}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </Box>

        <Box sx={{ maxWidth: "600px", position: "relative", zIndex: 1 }}>
          <Typography
            variant="h3"
            component="h2"
            sx={{
              fontWeight: 600,
              mb: 2,
              fontSize: { xs: "1.75rem", md: "2.25rem" },
              color: "secondary.dark",
            }}
          >
            {BELIEFS.heading}
          </Typography>
          <Typography
            variant="h6"
            component="p"
            sx={{
              fontWeight: 500,
              fontStyle: "italic",
              color: "primary.main",
              mb: 3,
            }}
          >
            {BELIEFS.tagline}
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "text.secondary", mb: 2, lineHeight: 1.8 }}
          >
            {BELIEFS.intro}
          </Typography>
          <Box component="ul" sx={{ pl: 2, mb: 3 }}>
            {BELIEFS.items.map((item) => (
              <Box
                component="li"
                key={item}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                  mb: 1.5,
                }}
              >
                <Favorite
                  sx={{ fontSize: 18, color: "secondary.main", flexShrink: 0 }}
                />
                <Typography
                  variant="body1"
                  sx={{ fontWeight: 500, color: "text.primary" }}
                >
                  {item}
                </Typography>
              </Box>
            ))}
          </Box>
          <Typography
            variant="body1"
            sx={{ color: "text.secondary", lineHeight: 1.8 }}
          >
            {BELIEFS.closing}
          </Typography>
        </Box>
      </Section>

      {/* Our Promise */}
      <Section maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
        <Typography
          variant="h3"
          component="h2"
          sx={{
            fontWeight: 600,
            mb: 4,
            fontSize: { xs: "1.75rem", md: "2.25rem" },
            color: "primary.main",
          }}
        >
          {PROMISES.heading}
        </Typography>
        <Grid container spacing={3}>
          {PROMISES.items.map((promise) => (
            <Grid item xs={12} sm={6} key={promise.title}>
              <Box
                sx={{
                  p: 3,
                  height: "100%",
                  borderRadius: "12px",
                  border: "1px solid",
                  borderColor: "grey.200",
                  backgroundColor: "background.paper",
                  transition: "box-shadow 0.2s ease",
                  "&:hover": {
                    boxShadow:
                      "0 4px 16px rgba(31, 122, 140, 0.1)",
                  },
                }}
              >
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2 }}
                >
                  {PROMISE_ICONS[promise.title] || null}
                  <Typography
                    variant="h6"
                    component="h3"
                    sx={{ fontWeight: 600, fontSize: "1.1rem" }}
                  >
                    {promise.title}
                  </Typography>
                </Box>
                <Typography
                  variant="body2"
                  sx={{ color: "text.secondary", lineHeight: 1.7 }}
                >
                  {promise.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Section>

      {/* Why "Because We Care" */}
      <Section
        maxWidth="lg"
        sx={{ py: { xs: 4, md: 6 }, backgroundColor: "grey.50" }}
      >
        <Box sx={{ maxWidth: "800px" }}>
          <Typography
            variant="h3"
            component="h2"
            sx={{
              fontWeight: 600,
              mb: 2,
              fontSize: { xs: "1.75rem", md: "2.25rem" },
              color: "primary.dark",
            }}
          >
            {WHY_WE_CARE.heading}
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "text.secondary", mb: 3, lineHeight: 1.8 }}
          >
            {WHY_WE_CARE.intro}
          </Typography>
          <Box component="ul" sx={{ pl: 2, mb: 3 }}>
            {WHY_WE_CARE.items.map((item) => (
              <Box
                component="li"
                key={item}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                  mb: 1.5,
                }}
              >
                <Favorite
                  sx={{ fontSize: 18, color: "primary.main", flexShrink: 0 }}
                />
                <Typography
                  variant="body1"
                  sx={{ fontWeight: 500, color: "text.primary" }}
                >
                  {item}
                </Typography>
              </Box>
            ))}
          </Box>
          <Typography
            variant="body1"
            sx={{
              fontWeight: 500,
              fontStyle: "italic",
              color: "text.secondary",
              lineHeight: 1.8,
            }}
          >
            {WHY_WE_CARE.closing}
          </Typography>
        </Box>
      </Section>

      {/* Our Vision */}
      <Section maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
        <Box
          sx={{
            maxWidth: "720px",
            mx: "auto",
            textAlign: "center",
          }}
        >
          <Visibility
            sx={{ fontSize: 40, color: "primary.main", mb: 2 }}
          />
          <Typography
            variant="h3"
            component="h2"
            sx={{
              fontWeight: 600,
              mb: 3,
              fontSize: { xs: "1.75rem", md: "2.25rem" },
              color: "primary.light",
            }}
          >
            {VISION.heading}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "1rem", md: "1.125rem" },
              color: "text.secondary",
              lineHeight: 1.8,
              mb: 3,
            }}
          >
            {VISION.text}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              mb: 2,
              fontStyle: "italic",
            }}
          >
            {VISION.closing}
          </Typography>
          <Typography
            variant="h5"
            component="p"
            sx={{
              fontWeight: 700,
              color: "primary.main",
              mt: 2,
            }}
          >
            {VISION.tagline}
          </Typography>
        </Box>
      </Section>
    </>
  );
};
