import React from "react";
import { Grid, Card, CardContent, Typography, Box } from "@mui/material";
import { FormatQuote } from "@mui/icons-material";
import type { Testimonial } from "../../constants";

export interface TestimonialsProps {
  testimonials: Testimonial[];
}

export const Testimonials: React.FC<TestimonialsProps> = ({ testimonials }) => {
  return (
    <Grid container spacing={3}>
      {testimonials.map((testimonial) => (
        <Grid item xs={12} md={4} key={testimonial.id}>
          <Card
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <CardContent sx={{ p: 3, flexGrow: 1, display: "flex", flexDirection: "column" }}>
              <FormatQuote
                sx={{
                  fontSize: 40,
                  color: "primary.light",
                  mb: 2,
                  opacity: 0.3,
                }}
              />
              <Typography
                variant="body1"
                sx={{
                  flexGrow: 1,
                  mb: 3,
                  fontStyle: "italic",
                  lineHeight: 1.6,
                }}
              >
                {testimonial.text}
              </Typography>
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                  {testimonial.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {testimonial.role}
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};
