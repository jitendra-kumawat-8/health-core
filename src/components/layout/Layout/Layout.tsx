import React from "react";
import { Box } from "@mui/material";
import { Header } from "../Header";
import { FooterSection } from "@/src/features/homePage/components/FooterSection";
import { AppShell } from "../AppShell";

export interface LayoutProps {
  children: React.ReactNode;
  transparentHeader?: boolean;
  showFooter?: boolean;
}

export const Layout: React.FC<LayoutProps> = ({
  children,
  transparentHeader = false,
  showFooter = true,
}) => {
  return (
    <AppShell>
      <Header transparent={transparentHeader} />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {children}
      </Box>
      {showFooter && <FooterSection />}
    </AppShell>
  );
};
