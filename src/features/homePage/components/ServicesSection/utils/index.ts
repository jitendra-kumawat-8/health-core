export const getServiceIcon = (icon: React.ComponentType, size: number = 48) => {
  const IconComponent = icon;
  return <IconComponent sx={{ fontSize: size, color: "primary.main" }} />;
};
