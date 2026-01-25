import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import { Section } from "../../../../components/layout/Section";
import {
  SERVICES_PAGE_SERVICES,
  type ServicesPageService,
} from "./constants";

export interface ServicesGridSectionProps {
  title?: string;
  subtitle?: string;
  services?: ServicesPageService[];
}

export const ServicesGridSection: React.FC<ServicesGridSectionProps> = ({
  title = "Our Services",
  subtitle = "Clear, at‑home healthcare services designed for you and your family.",
  services = SERVICES_PAGE_SERVICES,
}) => {
  return (
    <Section
      maxWidth="lg"
      sx={{
        py: { xs: 6, md: 8 },
        position: "relative",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          background: "linear-gradient(90deg, transparent 0%, rgba(76, 175, 80, 0.2) 50%, transparent 100%)",
        },
      }}
    >
      <Box sx={{ textAlign: "center", mb: 5 }}>
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
            maxWidth: "36rem",
            mx: "auto",
          }}
        >
          {subtitle}
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {services.map((service) => {
          const IconComponent = service.icon;
          return (
            <Grid item xs={12} sm={6} md={4} key={service.id}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: "transform 0.2s, box-shadow 0.2s",
                  cursor: "pointer",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: 4,
                  },
                }}
              >
                <CardContent sx={{ p: 3, flexGrow: 1 }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      mb: 2,
                    }}
                  >
                    <IconComponent sx={{ fontSize: 40, color: "primary.main" }} />
                  </Box>
                  <Typography
                    variant="h6"
                    component="h3"
                    gutterBottom
                    sx={{
                      textAlign: "center",
                      fontWeight: 600,
                      mb: 1,
                    }}
                  >
                    {service.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      textAlign: "center",
                      mb: 2,
                    }}
                  >
                    {service.description}
                  </Typography>
                  <Box
                    sx={{
                      textAlign: "center",
                    }}
                  >
                    <Typography
                      variant="button"
                      sx={{
                        color: "primary.main",
                        fontWeight: 600,
                      }}
                    >
                      Learn more
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Section>
  );
};

