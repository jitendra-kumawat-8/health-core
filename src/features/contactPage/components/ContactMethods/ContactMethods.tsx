import React from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";
import { CONTACT_METHODS } from "./constants";

export interface ContactMethodsProps {
  methods?: typeof CONTACT_METHODS;
}

export const ContactMethods: React.FC<ContactMethodsProps> = ({
  methods = CONTACT_METHODS,
}) => {
  return (
    <Box>
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
        Contact Information
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {methods.map((method) => {
          const IconComponent = method.icon;
          return (
            <Card
              key={method.id}
              sx={{
                transition: "transform 0.2s, box-shadow 0.2s",
                "&:hover": {
                  transform: "translateY(-2px)",
                  boxShadow: 2,
                },
              }}
            >
              <CardContent sx={{ p: 3 }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 2,
                  }}
                >
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "linear-gradient(135deg, rgba(31, 122, 140, 0.1) 0%, rgba(76, 175, 80, 0.08) 100%)",
                      flexShrink: 0,
                    }}
                  >
                    <IconComponent />
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        color: "text.secondary",
                        mb: 0.5,
                        fontWeight: 500,
                      }}
                    >
                      {method.label}
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 600,
                        mb: method.description ? 0.5 : 0,
                        fontSize: { xs: "1rem", md: "1.125rem" },
                      }}
                    >
                      {method.value}
                    </Typography>
                    {method.description && (
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ fontSize: "0.875rem" }}
                      >
                        {method.description}
                      </Typography>
                    )}
                  </Box>
                </Box>
              </CardContent>
            </Card>
          );
        })}
      </Box>
    </Box>
  );
};
