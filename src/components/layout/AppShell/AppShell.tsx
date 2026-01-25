import React from "react";
import { Box, BoxProps } from "@mui/material";

export interface AppShellProps extends BoxProps {
  children: React.ReactNode;
}

export const AppShell: React.FC<AppShellProps> = ({ children, sx, ...props }) => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        ...sx,
      }}
      {...props}
    >
      {children}
    </Box>
  );
};
