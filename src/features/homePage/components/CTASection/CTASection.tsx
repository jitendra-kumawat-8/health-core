import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { Phone, Download } from "@mui/icons-material";
import Link from "next/link";
import { Section } from "../../../../components/layout/Section";
import { CTA_CONTENT } from "./constants";
import { ROUTES } from "../../../../constants/routes";

export interface CTASectionProps {
  title?: string;
  description?: string;
  primaryButton?: string;
  secondaryButton?: string;
  phoneNumber?: string;
  onBookDoctor?: () => void;
  onContactSupport?: () => void;
  onDownloadApp?: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({
  title = CTA_CONTENT.title,
  description = CTA_CONTENT.description,
  primaryButton = CTA_CONTENT.primaryButton,
  secondaryButton = CTA_CONTENT.secondaryButton,
  phoneNumber = CTA_CONTENT.phoneNumber,
  onBookDoctor,
  onContactSupport,
  onDownloadApp,
}) => {
  return (
    <Section
      maxWidth="md"
      sx={{
        py: { xs: 6, md: 8 },
        background: "linear-gradient(135deg, rgba(31, 122, 140, 0.1) 0%, rgba(76, 175, 80, 0.1) 100%)",
      }}
    >
        <Box
          sx={{
            textAlign: "center",
          }}
        >
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
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{
              fontSize: { xs: "1rem", md: "1.125rem" },
              mb: 4,
              maxWidth: "600px",
              mx: "auto",
            }}
          >
            {description}
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: 2,
              justifyContent: "center",
              mb: 4,
            }}
          >
            <Button
              variant="contained"
              size="large"
              component={Link}
              href={ROUTES.BOOKING}
              onClick={onBookDoctor}
              sx={{
                minWidth: { xs: "100%", sm: "200px" },
                py: 1.5,
                px: 4,
                fontSize: "1rem",
                fontWeight: 600,
              }}
            >
              {primaryButton}
            </Button>
            {secondaryButton && (
              <Button
                variant="outlined"
                size="large"
                component={Link}
                href={ROUTES.CONTACT}
                onClick={onContactSupport}
                sx={{
                  minWidth: { xs: "100%", sm: "200px" },
                  py: 1.5,
                  px: 4,
                  fontSize: "1rem",
                  fontWeight: 600,
                }}
              >
                {secondaryButton}
              </Button>
            )}
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: 3,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <Phone sx={{ color: "primary.main" }} />
              <Typography variant="body1" sx={{ fontWeight: 500 }}>
                {phoneNumber}
              </Typography>
            </Box>
            <Button
              variant="text"
              startIcon={<Download />}
              onClick={onDownloadApp}
              sx={{
                fontWeight: 500,
              }}
            >
              Download App
            </Button>
          </Box>
        </Box>
    </Section>
  );
};
