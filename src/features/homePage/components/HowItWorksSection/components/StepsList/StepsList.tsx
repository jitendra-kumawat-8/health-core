import React from "react";

import { Grid } from "@mui/material";
import { StepItem } from "../StepItem";
import type { Step } from "../../constants";

export interface StepsListProps {
  steps: Step[];
}

export const StepsList: React.FC<StepsListProps> = ({ steps }) => {
  return (
    <Grid container spacing={4}>
      {steps.map((step, index) => (
        <Grid item xs={12} md={3} key={step.id}>
          <StepItem step={step} isLast={index === steps.length - 1} />
        </Grid>
      ))}
    </Grid>
  );
};
