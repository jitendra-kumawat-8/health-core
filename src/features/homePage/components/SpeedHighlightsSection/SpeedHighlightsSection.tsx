import React from "react";
import { Section } from "../../../../components/layout/Section";
import { StatsRow } from "./components/StatsRow";
import { STATS } from "./constants";

export interface SpeedHighlightsSectionProps {
  stats?: typeof STATS;
}

export const SpeedHighlightsSection: React.FC<SpeedHighlightsSectionProps> = ({
  stats = STATS,
}) => {
  return (
    <Section
      backgroundColor="grey.50"
      sx={{
        py: { xs: 6, md: 8 },
      }}
    >
      <StatsRow stats={stats} />
    </Section>
  );
};
