import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import type { Stat } from "../../constants";

export interface StatCardProps {
  stat: Stat;
}

export const StatCard: React.FC<StatCardProps> = ({ stat }) => {
  const IconComponent = stat.icon;

  return (
    <Card
      sx={{
        textAlign: "center",
        height: "100%",
        transition: "transform 0.2s",
        "&:hover": {
          transform: "translateY(-4px)",
        },
      }}
    >
      <CardContent sx={{ p: 3 }}>
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
          variant="h3"
          component="div"
          sx={{
            fontWeight: 700,
            color: "primary.main",
            mb: 1,
            fontSize: { xs: "2rem", md: "2.5rem" },
          }}
        >
          {stat.value}
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{
            fontWeight: 500,
          }}
        >
          {stat.label}
        </Typography>
      </CardContent>
    </Card>
  );
};
