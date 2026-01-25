import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  useScrollTrigger,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { ROUTES } from "../../../constants/routes";

export interface HeaderProps {
  transparent?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ transparent = false }) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return (
    <AppBar
      position="sticky"
      elevation={trigger ? 4 : 0}
      sx={{
        bgcolor: transparent && !trigger ? "transparent" : "white",
        color: transparent && !trigger ? "text.primary" : "text.primary",
        boxShadow: trigger
          ? "0 2px 8px rgba(0,0,0,0.1)"
          : transparent
            ? "none"
            : "0 1px 3px rgba(0,0,0,0.05)",
        transition: "all 0.3s ease-in-out",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          disableGutters
          sx={{
            py: 1,
            minHeight: { xs: 64, md: 72 },
          }}
        >
          <Box
            component={Link}
            href={ROUTES.HOME}
            sx={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              color: "inherit",

            }}

          >
            <Image
              src="/assets/logo.png"
              alt="Ashokam Homecare Logo"
              width={54}
              height={72}
              priority
            />
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              gap: 1,
            }}
          >
            <Button
              component={Link}
              href={ROUTES.HOME}
              sx={{
                color: "text.primary",
                fontWeight: 500,
                "&:hover": {
                  bgcolor: "grey.50",
                },
              }}
            >
              Home
            </Button>
            <Button
              component={Link}
              href={ROUTES.SERVICES}
              sx={{
                color: "text.primary",
                fontWeight: 500,
                "&:hover": {
                  bgcolor: "grey.50",
                },
              }}
            >
              Services
            </Button>
            <Button
              component={Link}
              href={ROUTES.ABOUT}
              sx={{
                color: "text.primary",
                fontWeight: 500,
                "&:hover": {
                  bgcolor: "grey.50",
                },
              }}
            >
              About
            </Button>
            <Button
              component={Link}
              href={ROUTES.CONTACT}
              sx={{
                color: "text.primary",
                fontWeight: 500,
                "&:hover": {
                  bgcolor: "grey.50",
                },
              }}
            >
              Contact
            </Button>
          </Box>

          <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
            <Button
              variant="contained"
              component={Link}
              href={ROUTES.BOOKING}
              sx={{
                fontWeight: 600,
                px: { xs: 2, md: 3 },
                fontSize: { xs: "0.875rem", md: "1rem" },
              }}
            >
              Book a Doctor
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
