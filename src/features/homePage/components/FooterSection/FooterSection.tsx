import React from "react";
import { Box, Container, Typography, Link, Grid } from "@mui/material";
import { ROUTES } from "../../../../constants/routes";

export interface FooterSectionProps {
  companyName?: string;
  currentYear?: number;
}

export const FooterSection: React.FC<FooterSectionProps> = ({
  companyName = "Ashokam Homecare",
  currentYear = new Date().getFullYear(),
}) => {
  const footerLinks = {
    about: [
      { label: "About Us", href: ROUTES.ABOUT },
      { label: "Our Services", href: ROUTES.SERVICES },
      { label: "Contact", href: ROUTES.CONTACT },
    ],
    legal: [
      { label: "Privacy Policy", href: ROUTES.PRIVACY },
      { label: "Terms of Service", href: ROUTES.TERMS },
    ],
  };

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "grey.900",
        color: "white",
        py: { xs: 4, md: 6 },
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography
              variant="h5"
              component="h3"
              gutterBottom
              sx={{
                fontWeight: 600,
                mb: 2,
              }}
            >
              {companyName}
            </Typography>
            <Typography variant="body2" sx={{ color: "grey.400", lineHeight: 1.6 }}>
              Providing trusted healthcare services at your doorstep, 24/7.
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Typography
              variant="h6"
              component="h4"
              gutterBottom
              sx={{
                fontWeight: 600,
                mb: 2,
              }}
            >
              About
            </Typography>
            <Box
              component="nav"
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 1,
              }}
            >
              {footerLinks.about.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  color="inherit"
                  underline="hover"
                  sx={{
                    color: "grey.400",
                    "&:hover": {
                      color: "primary.light",
                    },
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Typography
              variant="h6"
              component="h4"
              gutterBottom
              sx={{
                fontWeight: 600,
                mb: 2,
              }}
            >
              Legal
            </Typography>
            <Box
              component="nav"
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 1,
              }}
            >
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  color="inherit"
                  underline="hover"
                  sx={{
                    color: "grey.400",
                    "&:hover": {
                      color: "primary.light",
                    },
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </Box>
          </Grid>
        </Grid>

        <Box
          sx={{
            borderTop: "1px solid",
            borderColor: "grey.800",
            mt: 4,
            pt: 4,
            textAlign: "center",
          }}
        >
          <Typography variant="body2" sx={{ color: "grey.400" }}>
            © {currentYear} {companyName}. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};
