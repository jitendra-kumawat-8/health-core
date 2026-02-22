import React from "react";
import { Box, Typography } from "@mui/material";
import { Phone } from "@mui/icons-material";
import { BookingHero } from "./components/BookingHero";
import { BookingForm } from "./components/BookingForm";
import { Section } from "../../components/layout/Section";

export interface BookingPageComponentProps {
  // Placeholder for future dynamic props
}

export const BookingPageComponent: React.FC<BookingPageComponentProps> = () => {
  return (
    <>
      <BookingHero />
      <Section
        maxWidth="lg"
        sx={{
          py: { xs: 6, md: 8 },
        }}
      >
        <BookingForm />

        <Box
          sx={{
            mt: 5,
            py: 3,
            px: 4,
            borderRadius: "12px",
            backgroundColor: "grey.50",
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "center",
            justifyContent: "center",
            gap: { xs: 1, sm: 2 },
            textAlign: "center",
          }}
        >
          <Typography variant="body1" sx={{ color: "text.secondary" }}>
            Need help with your booking? Call us at
          </Typography>
          <Box
            component="a"
            href="tel:+918527723628"
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 0.75,
              color: "primary.main",
              fontWeight: 700,
              fontSize: "1.1rem",
              textDecoration: "none",
              "&:hover": { color: "primary.dark" },
            }}
          >
            <Phone sx={{ fontSize: 20 }} />
            +91 85277 23628
          </Box>
        </Box>
      </Section>
    </>
  );
};
