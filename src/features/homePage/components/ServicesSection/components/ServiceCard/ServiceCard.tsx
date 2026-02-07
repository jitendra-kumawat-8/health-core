import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import { useRouter } from "next/router";
import { ROUTES } from "../../../../../../constants/routes";
import type { Service } from "../../constants";

export interface ServiceCardProps {
  service: Service;
  iconSize?: number;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, iconSize }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`${ROUTES.BOOKING}?service=${encodeURIComponent(service.serviceType)}`);
  };

  return (
    <Card
      onClick={handleClick}
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        cursor: "pointer",
        transition: "all 0.3s ease",
        backgroundColor: "background.paper",
        position: "relative",
        overflow: "hidden",
        "&:hover": {
          transform: "translateY(-4px)",
          backgroundColor: "primary.main",
          boxShadow: "0 8px 24px rgba(31, 122, 140, 0.3)",
          "& .service-icon svg circle[fill]": {
            fill: "rgba(255,255,255,0.2)",
          },
          "& .service-icon svg path[fill]:not([fill='none']):not([fill='#FFFFFF'])": {
            fill: "#FFFFFF",
          },
          "& .service-icon svg path[stroke]": {
            stroke: "#FFFFFF",
          },
          "& .service-icon svg rect[fill]:not([fill='none']):not([fill='#FFFFFF'])": {
            fill: "#FFFFFF",
          },
          "& .service-icon svg rect[stroke]": {
            stroke: "rgba(255,255,255,0.7)",
          },
          "& .service-icon svg polyline": {
            stroke: "#FFFFFF",
          },
          "& .service-title": {
            color: "#FFFFFF",
          },
          "& .service-description": {
            color: "rgba(255,255,255,0.85)",
          },
          "& .book-now-ribbon": {
            opacity: 1,
            transform: "rotate(45deg) scale(1)",
          },
        },
      }}
    >
      <CardContent sx={{ p: 3, flexGrow: 1 }}>
        <Box
          className="service-icon"
          sx={{
            display: "flex",
            justifyContent: "center",
            mb: 2.5,
            transition: "all 0.3s ease",
            ...(iconSize && {
              "& > svg": {
                width: iconSize,
                height: iconSize,
              },
            }),
          }}
        >
          {service.icon}
        </Box>
        <Typography
          variant="h6"
          component="h3"
          className="service-title"
          gutterBottom
          sx={{
            textAlign: "center",
            fontWeight: 600,
            mb: 1,
            color: "primary.dark",
            transition: "color 0.3s ease",
          }}
        >
          {service.title}
        </Typography>
        <Typography
          variant="body2"
          className="service-description"
          sx={{
            textAlign: "center",
            lineHeight: 1.6,
            color: "text.secondary",
            transition: "color 0.3s ease",
          }}
        >
          {service.description}
        </Typography>
      </CardContent>
      <Box
        className="book-now-ribbon"
        sx={{
          position: "absolute",
          top: 18,
          right: -36,
          width: "140px",
          py: 0.5,
          textAlign: "center",
          backgroundColor: "secondary.main",
          opacity: 0,
          transform: "rotate(45deg) scale(0.8)",
          transition: "all 0.3s ease",
          boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
        }}
      >
        <Typography
          variant="caption"
          sx={{
            color: "#FFFFFF",
            fontWeight: 700,
            fontSize: "0.65rem",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          Book Now
        </Typography>
      </Box>
    </Card>
  );
};
