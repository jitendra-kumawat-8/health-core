import React from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Card,
  CardContent,
  Grid,
  Paper,
} from "@mui/material";
import {
  Code,
  Palette,
  Speed,
  Security,
  GitHub,
  Launch,
} from "@mui/icons-material";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const features = [
    {
      icon: <Code sx={{ fontSize: 40, color: "primary.main" }} />,
      title: "TypeScript Ready",
      description:
        "Built with TypeScript for better development experience and type safety.",
    },
    {
      icon: <Palette sx={{ fontSize: 40, color: "primary.main" }} />,
      title: "Material-UI Theme",
      description:
        "Custom MUI theme with Poppins font family and comprehensive component styling.",
    },
    {
      icon: <Speed sx={{ fontSize: 40, color: "primary.main" }} />,
      title: "Performance Optimized",
      description:
        "Next.js with optimized builds, code splitting, and modern React patterns.",
    },
    {
      icon: <Security sx={{ fontSize: 40, color: "primary.main" }} />,
      title: "Authentication Ready",
      description:
        "Generic auth context with JWT support, ready to connect to your API.",
    },
  ];

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "background.default" }}>
      {/* Hero Section */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          color: "white",
          py: 8,
        }}
      >
        <Container maxWidth="lg">
          <Box textAlign="center" py={4}>
            <Typography
              variant="h2"
              component="h1"
              gutterBottom
              fontWeight="bold"
            >
              Next.js MUI Boilerplate
            </Typography>
            <Typography
              variant="h5"
              component="h2"
              gutterBottom
              sx={{ opacity: 0.9 }}
            >
              A comprehensive, production-ready boilerplate with Material-UI,
              TypeScript, and modern React patterns
            </Typography>
            <Box
              sx={{
                mt: 4,
                display: "flex",
                gap: 2,
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <Button
                variant="contained"
                size="large"
                onClick={() => router.push("/component-test")}
                startIcon={<Launch />}
                sx={{
                  bgcolor: "white",
                  color: "primary.main",
                  "&:hover": { bgcolor: "grey.100" },
                }}
              >
                View Components
              </Button>
              <Button
                variant="outlined"
                size="large"
                startIcon={<GitHub />}
                sx={{
                  borderColor: "white",
                  color: "white",
                  "&:hover": {
                    borderColor: "grey.300",
                    bgcolor: "rgba(255,255,255,0.1)",
                  },
                }}
                onClick={() => window.open("https://github.com", "_blank")}
              >
                View on GitHub
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h3" component="h2" textAlign="center" gutterBottom>
          Features
        </Typography>
        <Typography
          variant="h6"
          textAlign="center"
          color="text.secondary"
          sx={{ mb: 6 }}
        >
          Everything you need to build modern web applications
        </Typography>

        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card sx={{ height: "100%", textAlign: "center" }}>
                <CardContent sx={{ py: 4 }}>
                  <Box sx={{ mb: 2 }}>{feature.icon}</Box>
                  <Typography variant="h6" component="h3" gutterBottom>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Quick Start Section */}
      <Box sx={{ bgcolor: "grey.50", py: 8 }}>
        <Container maxWidth="lg">
          <Paper sx={{ p: 4, textAlign: "center" }}>
            <Typography variant="h4" component="h2" gutterBottom>
              Ready to Get Started?
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
              Explore all the components and features included in this
              boilerplate
            </Typography>
            <Button
              variant="contained"
              size="large"
              onClick={() => router.push("/component-test")}
              startIcon={<Launch />}
            >
              Explore Components
            </Button>
          </Paper>
        </Container>
      </Box>

      {/* Footer */}
      <Box sx={{ bgcolor: "grey.900", color: "white", py: 4 }}>
        <Container maxWidth="lg">
          <Typography variant="body2" textAlign="center">
            © 2024 Next.js MUI Boilerplate. Built with ❤️ using Next.js and
            Material-UI.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}
