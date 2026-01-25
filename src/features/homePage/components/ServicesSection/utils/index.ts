import React from "react";

export const getServiceIcon = (
  icon: React.ComponentType<{ fontSize?: number; color?: string; sx?: any }>,
  size: number = 48
): React.ReactElement => {
  return React.createElement(icon, {
    fontSize: size,
    color: "primary.main",
  });
};
