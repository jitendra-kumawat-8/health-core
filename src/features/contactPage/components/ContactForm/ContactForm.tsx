import React from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
} from "@mui/material";
import { Send } from "@mui/icons-material";
import Link from "next/link";
import { ROUTES } from "../../../../constants/routes";

export interface ContactFormProps {
  onSubmit?: (data: { name: string; contact: string; message: string }) => void;
}

export const ContactForm: React.FC<ContactFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = React.useState({
    name: "",
    contact: "",
    message: "",
  });

  const handleChange = (field: string) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(formData);
    } else {
      // Placeholder for future form submission
      console.log("Form submitted:", formData);
    }
  };

  return (
    <Paper
      elevation={2}
      sx={{
        p: { xs: 3, md: 4 },
        borderRadius: "12px",
      }}
    >
      <Typography
        variant="h4"
        component="h2"
        gutterBottom
        sx={{
          fontWeight: 600,
          mb: 3,
          fontSize: { xs: "1.5rem", md: "2rem" },
        }}
      >
        Send us a Message
      </Typography>

      <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
        <TextField
          label="Name"
          required
          fullWidth
          value={formData.name}
          onChange={handleChange("name")}
          placeholder="Enter your full name"
          sx={{
            "& .MuiOutlinedInput-root": {
              fontSize: "1rem",
            },
          }}
        />

        <TextField
          label="Phone or Email"
          required
          fullWidth
          type="text"
          value={formData.contact}
          onChange={handleChange("contact")}
          placeholder="Enter your phone number or email"
          sx={{
            "& .MuiOutlinedInput-root": {
              fontSize: "1rem",
            },
          }}
        />

        <TextField
          label="Message"
          required
          fullWidth
          multiline
          rows={5}
          value={formData.message}
          onChange={handleChange("message")}
          placeholder="Tell us how we can help you..."
          sx={{
            "& .MuiOutlinedInput-root": {
              fontSize: "1rem",
            },
          }}
        />

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            mt: 1,
          }}
        >
          <Button
            type="submit"
            variant="contained"
            size="large"
            startIcon={<Send />}
            sx={{
              py: 1.5,
              fontSize: "1rem",
              fontWeight: 600,
              minHeight: "48px",
            }}
          >
            Send Message
          </Button>

          <Button
            component={Link}
            href={ROUTES.SERVICES}
            variant="outlined"
            size="large"
            sx={{
              py: 1.5,
              fontSize: "1rem",
              fontWeight: 600,
              minHeight: "48px",
            }}
          >
            Explore Services
          </Button>
        </Box>
      </Box>
    </Paper>
  );
};
