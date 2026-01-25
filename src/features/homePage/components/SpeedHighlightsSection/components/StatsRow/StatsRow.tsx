import React from "react";
import { Grid } from "@mui/material";
import { StatCard } from "../StatCard";
import type { Stat } from "../../constants";

export interface StatsRowProps {
  stats: Stat[];
}

export const StatsRow: React.FC<StatsRowProps> = ({ stats }) => {
  return (
    <Grid container spacing={3}>
      {stats.map((stat) => (
        <Grid item xs={6} sm={6} md={3} key={stat.id}>
          <StatCard stat={stat} />
        </Grid>
      ))}
    </Grid>
  );
};
