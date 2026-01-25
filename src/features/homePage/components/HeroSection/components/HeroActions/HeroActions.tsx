import React from "react";
import { Button, Box } from "@mui/material";
import Link from "next/link";
import { ROUTES } from "../../../../../../constants/routes";

export interface HeroActionsProps {
  primaryCTA: string;
  secondaryCTA?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  primaryLink?: string;
  secondaryLink?: string;
}

export const HeroActions: React.FC<HeroActionsProps> = ({
  primaryCTA,
  secondaryCTA,
  onPrimaryClick,
  onSecondaryClick,
  primaryLink,
  secondaryLink,
}) => {
  const PrimaryButton = primaryLink ? (
    <Button
      variant="contained"
      size="large"
      component={Link}
      href={primaryLink}
      sx={{
        minWidth: { xs: "100%", sm: "200px" },
        py: 1.5,
        px: 4,
        fontSize: "1rem",
        fontWeight: 600,
      }}
    >
      {primaryCTA}
    </Button>
  ) : (
    <Button
      variant="contained"
      size="large"
      onClick={onPrimaryClick}
      sx={{
        minWidth: { xs: "100%", sm: "200px" },
        py: 1.5,
        px: 4,
        fontSize: "1rem",
        fontWeight: 600,
      }}
    >
      {primaryCTA}
    </Button>
  );

  const SecondaryButton = secondaryCTA && (
    secondaryLink ? (
      <Button
        variant="outlined"
        size="large"
        component={Link}
        href={secondaryLink}
        sx={{
          minWidth: { xs: "100%", sm: "200px" },
          py: 1.5,
          px: 4,
          fontSize: "1rem",
          fontWeight: 600,
        }}
      >
        {secondaryCTA}
      </Button>
    ) : (
      <Button
        variant="outlined"
        size="large"
        onClick={onSecondaryClick}
        sx={{
          minWidth: { xs: "100%", sm: "200px" },
          py: 1.5,
          px: 4,
          fontSize: "1rem",
          fontWeight: 600,
        }}
      >
        {secondaryCTA}
      </Button>
    )
  );

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        gap: 2,
        justifyContent: { xs: "center", md: "flex-start" },
      }}
    >
      {PrimaryButton}
      {SecondaryButton}
    </Box>
  );
};
