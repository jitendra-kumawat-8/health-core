import React from "react";
import { Grid } from "@mui/material";
import { ServiceCard } from "../ServiceCard";
import type { Service } from "../../constants";

export interface ServicesGridProps {
  services: Service[];
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({ services }) => {
  return (
    <Grid container spacing={3}>
      {services.map((service) => (
        <Grid item xs={12} sm={6} md={4} key={service.id}>
          <ServiceCard service={service} />
        </Grid>
      ))}
    </Grid>
  );
};
