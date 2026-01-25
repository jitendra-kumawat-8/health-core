import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

export interface ReassuranceSectionProps {
  messages?: string[];
}

const DEFAULT_MESSAGES = [
  "We'll get back to you shortly",
  "Your information is safe and secure",
];

export const ReassuranceSection: React.FC<ReassuranceSectionProps> = ({
  messages = DEFAULT_MESSAGES,
}) => {
  return (
    <Box
      sx={{
        mt: 4,
        pt: 4,
        borderTop: "1px solid",
        borderColor: "divider",
      }}
    >
      <Grid container spacing={2}>
        {messages.map((message, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-start",
                gap: 1.5,
              }}
            >
              <CheckCircle
                sx={{
                  color: "secondary.main",
                  fontSize: 24,
                  mt: "2px",
                  flexShrink: 0,
                }}
              />
              <Typography
                variant="body1"
                sx={{
                  color: "text.secondary",
                  lineHeight: 1.6,
                }}
              >
                {message}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
