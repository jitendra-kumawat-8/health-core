import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import Image from "next/image";
import {
  Favorite,
  Visibility,
  VerifiedUser,
  Cottage,
  FactCheck,
  SupportAgent,
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

const PROMISE_ICONS: Record<string, React.ReactNode> = {
  "Verified & Trusted Professionals": (
    <VerifiedUser sx={{ fontSize: 28, color: "#1F7A8C" }} />
  ),
  "Care That Comes Home": (
    <Cottage sx={{ fontSize: 28, color: "#4CAF50" }} />
  ),
  "Transparent & Hassle-Free": (
    <FactCheck sx={{ fontSize: 28, color: "#D4AF37" }} />
  ),
  "Care Beyond the Appointment": (
    <SupportAgent sx={{ fontSize: 28, color: "#D4AF37" }} />
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
          left: 0,
          bottom: 0,
          width: { xs: "100%", md: "50%" },
          pointerEvents: "none",
          opacity: { xs: 0.1, md: 0.85 },
          maskImage: {
            xs: "none",
            md: "linear-gradient(to left, transparent 0%, rgba(0,0,0,0.3) 20%, rgba(0,0,0,0.8) 50%, black 100%)",
          },
          WebkitMaskImage: {
            xs: "none",
            md: "linear-gradient(to left, transparent 0%, rgba(0,0,0,0.3) 20%, rgba(0,0,0,0.8) 50%, black 100%)",
          },
          }}
        >
          <Image
            src="/assets/about-us-what-we-believe.png"
            alt=""
            fill
            style={{ objectFit: "cover", objectPosition: "center left" }}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </Box>

        <Box sx={{ maxWidth: "600px", position: "relative", zIndex: 1, ml: { md: "auto" } }}>
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
        sx={{
          py: { xs: 4, md: 6 },
          backgroundColor: "grey.50",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Blended background image — right side */}
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
            src="/assets/about-us-because-we-care.png"
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
