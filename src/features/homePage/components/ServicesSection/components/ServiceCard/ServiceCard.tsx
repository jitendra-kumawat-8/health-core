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
          "& .service-icon .icon-bg": {
            backgroundColor: "rgba(255,255,255,0.2)",
          },
          "& .service-icon .MuiSvgIcon-root": {
            color: "#FFFFFF",
          },
          "& .service-title": {
            color: "#FFFFFF",
          },
          "& .service-description": {
            color: "rgba(255,255,255,0.85)",
          },
          "& .service-pricing": {
            borderColor: "rgba(255,255,255,0.2)",
          },
          "& .pricing-label": {
            color: "rgba(255,255,255,0.75)",
          },
          "& .pricing-value": {
            color: "#FFFFFF",
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
        {service.pricing && service.pricing.length > 0 && (
          <Box
            className="service-pricing"
            sx={{
              mt: 2,
              pt: 1.5,
              borderTop: "1px solid",
              borderColor: "divider",
              transition: "border-color 0.3s ease",
            }}
          >
            {service.pricing.map((item, idx) => (
              <Box
                key={idx}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  py: 0.4,
                }}
              >
                <Typography
                  variant="caption"
                  className="pricing-label"
                  sx={{
                    color: "text.secondary",
                    fontSize: "0.75rem",
                    transition: "color 0.3s ease",
                  }}
                >
                  {item.label}
                </Typography>
                <Typography
                  variant="caption"
                  className="pricing-value"
                  sx={{
                    fontWeight: 700,
                    color: "primary.main",
                    fontSize: "0.8rem",
                    transition: "color 0.3s ease",
                  }}
                >
                  {item.price}
                </Typography>
              </Box>
            ))}
          </Box>
        )}
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
