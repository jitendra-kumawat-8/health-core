import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import type { Step } from "../../constants";

export interface StepItemProps {
  step: Step;
  isLast?: boolean;
}

export const StepItem: React.FC<StepItemProps> = ({ step, isLast = false }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: { xs: "center", md: "flex-start" },
        position: "relative",
        mb: { xs: 4, md: 0 },
      }}
    >
      <Paper
        elevation={2}
        sx={{
          width: { xs: 80, md: 100 },
          height: { xs: 80, md: 100 },
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "primary.main",
          color: "white",
          mb: { xs: 2, md: 0 },
          mr: { md: 3 },
          flexShrink: 0,
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            fontSize: { xs: "2rem", md: "2.5rem" },
          }}
        >
          {step.number}
        </Typography>
      </Paper>
      <Box
        sx={{
          flex: 1,
          textAlign: { xs: "center", md: "left" },
        }}
      >
        <Typography
          variant="h5"
          component="h3"
          gutterBottom
          sx={{
            fontWeight: 600,
            mb: 1,
            fontSize: { xs: "1.25rem", md: "1.5rem" },
          }}
        >
          {step.title}
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{
            lineHeight: 1.6,
            maxWidth: { md: "300px" },
          }}
        >
          {step.description}
        </Typography>
      </Box>
      {!isLast && (
        <Box
          sx={{
            display: { xs: "none", md: "block" },
            position: "absolute",
            right: "-20px",
            top: "50%",
            transform: "translateY(-50%)",
            width: "40px",
            height: "2px",
            bgcolor: "primary.main",
            "&::after": {
              content: '""',
              position: "absolute",
              right: "-8px",
              top: "50%",
              transform: "translateY(-50%)",
              width: 0,
              height: 0,
              borderLeft: "8px solid",
              borderLeftColor: "primary.main",
              borderTop: "4px solid transparent",
              borderBottom: "4px solid transparent",
            },
          }}
        />
      )}
    </Box>
  );
};
