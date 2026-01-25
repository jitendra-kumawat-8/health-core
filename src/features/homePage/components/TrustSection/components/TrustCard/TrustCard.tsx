import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import { VerifiedUser } from "@mui/icons-material";

export interface TrustCardProps {
  title: string;
  description?: string;
}

export const TrustCard: React.FC<TrustCardProps> = ({ title, description }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-start",
        gap: 2,
        p: 2,
      }}
    >
      <VerifiedUser sx={{ fontSize: 32, color: "primary.main", flexShrink: 0 }} />
      <Box>
        <Typography variant="h6" component="h3" sx={{ fontWeight: 600, mb: 0.5 }}>
          {title}
        </Typography>
        {description && (
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        )}
      </Box>
    </Box>
  );
};
