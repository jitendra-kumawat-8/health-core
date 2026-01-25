import React from "react";
import { Box, Container, BoxProps } from "@mui/material";

export interface SectionProps extends BoxProps {
  children: React.ReactNode;
  maxWidth?: "xs" | "sm" | "md" | "lg" | "xl" ;
  backgroundColor?: string;
}

export const Section: React.FC<SectionProps> = ({
  children,
  maxWidth = "lg",
  backgroundColor,
  sx,
  ...props
}) => {
  return (
    <Box
      component="section"
      sx={{
        backgroundColor: backgroundColor || "background.default",
        ...sx,
      }}
      {...props}
    >
      <Container maxWidth={maxWidth}>{children}</Container>
    </Box>
  );
};
