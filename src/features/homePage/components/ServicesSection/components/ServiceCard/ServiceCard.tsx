import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import type { Service } from "../../constants";

export interface ServiceCardProps {
  service: Service;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const IconComponent = service.icon;

  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        transition: "transform 0.2s, box-shadow 0.2s",
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
          <IconComponent sx={{ fontSize: 48, color: "primary.main" }} />
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
            lineHeight: 1.6,
          }}
        >
          {service.description}
        </Typography>
      </CardContent>
    </Card>
  );
};
