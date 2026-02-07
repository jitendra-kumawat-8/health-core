import React from "react";
import { Typography, Box } from "@mui/material";

export interface HeroContentProps {
  headline: string;
  subtext: string;
}

export const HeroContent: React.FC<HeroContentProps> = ({ headline, subtext }) => {
  return (
    <Box
      sx={{
        textAlign: { xs: "center", md: "left" },
        mb: { xs: 4, md: 6 },
      }}
    >
      <Typography
        variant="h1"
        component="h1"
        gutterBottom
        sx={{
          fontSize: { xs: "2.5rem", sm: "3rem", md: "3.5rem" },
          fontWeight: 700,
          color: "primary.main",
          mb: 3,
        }}
      >
        {headline}
      </Typography>
      <Typography
        variant="h5"
        component="p"
        sx={{
          fontSize: { xs: "1.125rem", md: "1.25rem" },
          fontWeight: 400,
          color: "primary.dark",
          maxWidth: { md: "600px" },
        }}
      >
        {subtext}
      </Typography>
    </Box>
  );
};
