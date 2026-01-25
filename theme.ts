import { createTheme } from "@mui/material/styles";

// Font families - Using distinctive font types for better hierarchy
const fontFamily = {
  primary:
    '"Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
  secondary:
    '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
  tertiary: '"Noto Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
};

// Typography variants with only primary, secondary, and tertiary font families
const typography = {
  fontFamily: fontFamily.primary,
  h1: {
    fontFamily: fontFamily.primary,
    fontSize: "3.5rem", // 56px
    fontWeight: 700,
    lineHeight: 1.2,
    letterSpacing: "-0.02em",
  },
  h2: {
    fontFamily: fontFamily.primary,
    fontSize: "3rem", // 48px
    fontWeight: 600,
    lineHeight: 1.25,
    letterSpacing: "-0.01em",
  },
  h3: {
    fontFamily: fontFamily.primary,
    fontSize: "2.25rem", // 36px
    fontWeight: 600,
    lineHeight: 1.3,
    letterSpacing: "-0.01em",
  },
  h4: {
    fontFamily: fontFamily.primary,
    fontSize: "1.875rem", // 30px
    fontWeight: 600,
    lineHeight: 1.35,
    letterSpacing: "-0.01em",
  },
  h5: {
    fontFamily: fontFamily.primary,
    fontSize: "1.5rem", // 24px
    fontWeight: 600,
    lineHeight: 1.4,
    letterSpacing: "0em",
  },
  h6: {
    fontFamily: fontFamily.primary,
    fontSize: "1.25rem", // 20px
    fontWeight: 600,
    lineHeight: 1.4,
    letterSpacing: "0em",
  },
  subtitle1: {
    fontFamily: fontFamily.secondary,
    fontSize: "1.125rem", // 18px
    fontWeight: 500,
    lineHeight: 1.5,
    letterSpacing: "0.01em",
  },
  subtitle2: {
    fontFamily: fontFamily.secondary,
    fontSize: "1rem", // 16px
    fontWeight: 500,
    lineHeight: 1.5,
    letterSpacing: "0.01em",
  },
  body1: {
    fontFamily: fontFamily.tertiary,
    fontSize: "1rem", // 16px
    fontWeight: 400,
    lineHeight: 1.6,
    letterSpacing: "0.01em",
  },
  body2: {
    fontFamily: fontFamily.tertiary,
    fontSize: "0.875rem", // 14px
    fontWeight: 400,
    lineHeight: 1.6,
    letterSpacing: "0.01em",
  },
  button: {
    fontFamily: fontFamily.primary,
    fontSize: "0.875rem", // 14px
    fontWeight: 600,
    lineHeight: 1.5,
    letterSpacing: "0.02em",
    textTransform: "none" as const,
  },
  caption: {
    fontFamily: fontFamily.secondary,
    fontSize: "0.75rem", // 12px
    fontWeight: 400,
    lineHeight: 1.5,
    letterSpacing: "0.02em",
  },
  overline: {
    fontFamily: fontFamily.secondary,
    fontSize: "0.625rem", // 10px
    fontWeight: 600,
    lineHeight: 1.5,
    letterSpacing: "0.1em",
    textTransform: "uppercase" as const,
  },
};

// Color palette - Ashokam Homecare theme
const palette = {
  primary: {
    main: "#1F7A8C", // Teal blue
    light: "#2A9DB5",
    dark: "#185A68",
    contrastText: "#FFFFFF",
  },
  secondary: {
    main: "#4CAF50", // Leaf green
    light: "#66BB6A",
    dark: "#388E3C",
    contrastText: "#FFFFFF",
  },
  success: {
    main: "#4CAF50",
    light: "#66BB6A",
    dark: "#388E3C",
    contrastText: "#FFFFFF",
  },
  warning: {
    main: "#D4AF37", // Warm gold
    light: "#E5C158",
    dark: "#B8941F",
    contrastText: "#1E2A2F",
  },
  error: {
    main: "#EF4444",
    light: "#F87171",
    dark: "#DC2626",
    contrastText: "#FFFFFF",
  },
  info: {
    main: "#1F7A8C",
    light: "#2A9DB5",
    dark: "#185A68",
    contrastText: "#FFFFFF",
  },
  grey: {
    50: "#F4F8F9", // Soft background
    100: "#E6F2F4", // Accent background
    200: "#D1E5E9",
    300: "#B8D4DA",
    400: "#8A9AA5", // Muted text
    500: "#6B7A85",
    600: "#4F5D64", // Secondary text
    700: "#3A4549",
    800: "#2A3437",
    900: "#1E2A2F", // Primary text
  },
  text: {
    primary: "#1E2A2F",
    secondary: "#4F5D64",
    disabled: "#8A9AA5",
  },
  background: {
    default: "#FFFFFF",
    paper: "#FFFFFF",
    soft: "#F4F8F9",
    accent: "#E6F2F4",
  },
  divider: "#D1E5E9",
};

const theme = createTheme({
  palette,
  typography,
  shape: {
    borderRadius: 12,
  },
  spacing: 8,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "12px",
          textTransform: "none",
          fontWeight: 600,
          fontSize: "14px",
          fontFamily: fontFamily.primary,
          padding: "8px 16px",
          boxShadow: "none",
          "&:hover": {
            boxShadow: "0 4px 12px rgba(31, 122, 140, 0.15)",
          },
        },
        containedPrimary: {
          backgroundColor: palette.primary.main,
          color: palette.primary.contrastText,
          "&:hover": {
            backgroundColor: palette.primary.dark,
          },
        },
        outlinedPrimary: {
          borderColor: palette.primary.main,
          color: palette.primary.main,
          "&:hover": {
            borderColor: palette.primary.dark,
            color: palette.primary.dark,
            backgroundColor: "rgba(31, 122, 140, 0.04)",
          },
        },
        textPrimary: {
          color: palette.primary.main,
          "&:hover": {
            backgroundColor: "rgba(31, 122, 140, 0.08)",
          },
        },
        sizeSmall: {
          fontSize: "12px",
          padding: "6px 12px",
        },
        sizeLarge: {
          fontSize: "16px",
          padding: "12px 24px",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderColor: palette.grey[300],
            fontFamily: fontFamily.primary,
            borderRadius: "12px",
            background: palette.background.paper,
            "& .MuiOutlinedInput-input": {
              padding: "12px 16px",
              fontSize: "14px",
            },
            "& fieldset": {
              borderColor: palette.grey[300],
              borderWidth: "1px",
            },
            "&:hover fieldset": {
              borderColor: palette.primary.main,
            },
            "&.Mui-focused fieldset": {
              borderColor: palette.primary.main,
              borderWidth: "2px",
            },
          },
          "& .MuiInputLabel-root": {
            color: palette.text.secondary,
            fontFamily: fontFamily.primary,
            fontSize: "14px",
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: palette.primary.main,
          },
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderColor: palette.grey[300],
            fontFamily: fontFamily.primary,
            borderRadius: "12px",
            "& .MuiOutlinedInput-input": {
              padding: "12px 16px",
              fontSize: "14px",
            },
            "& fieldset": {
              borderColor: palette.grey[300],
            },
            "&:hover fieldset": {
              borderColor: palette.primary.main,
            },
            "&.Mui-focused fieldset": {
              borderColor: palette.primary.main,
            },
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: "16px",
          fontFamily: fontFamily.primary,
          fontWeight: 500,
          fontSize: "12px",
          height: "24px",
        },
        colorPrimary: {
          backgroundColor: palette.primary.main,
          color: palette.primary.contrastText,
        },
        colorSecondary: {
          backgroundColor: palette.secondary.main,
          color: palette.secondary.contrastText,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "12px",
          boxShadow:
            "0 2px 8px rgba(31, 122, 140, 0.08), 0 1px 4px rgba(31, 122, 140, 0.06)",
          border: `1px solid ${palette.grey[200]}`,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: "12px",
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: palette.grey[400],
          "&.Mui-checked": {
            color: palette.primary.main,
          },
        },
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          color: palette.grey[400],
          "&.Mui-checked": {
            color: palette.primary.main,
          },
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        root: {
          "& .MuiSwitch-switchBase.Mui-checked": {
            color: palette.primary.main,
          },
          "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
            backgroundColor: palette.primary.main,
          },
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          "& .MuiTypography-root": {
            color: palette.text.primary,
            fontFamily: fontFamily.tertiary,
            fontSize: "14px",
            fontWeight: 400,
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          "& .MuiTab-root": {
            fontFamily: fontFamily.primary,
            fontWeight: 500,
            fontSize: "14px",
            textTransform: "none",
          },
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          fontFamily: fontFamily.primary,
          fontWeight: 500,
          fontSize: "14px",
          textTransform: "none",
          minHeight: "48px",
        },
      },
    },
    // Additional component overrides to ensure consistent font usage
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: fontFamily.primary,
        },
        body1: {
          fontFamily: fontFamily.tertiary,
        },
        body2: {
          fontFamily: fontFamily.tertiary,
        },
        caption: {
          fontFamily: fontFamily.secondary,
        },
        overline: {
          fontFamily: fontFamily.secondary,
        },
        subtitle1: {
          fontFamily: fontFamily.secondary,
        },
        subtitle2: {
          fontFamily: fontFamily.secondary,
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        primary: {
          fontFamily: fontFamily.tertiary,
        },
        secondary: {
          fontFamily: fontFamily.secondary,
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          fontFamily: fontFamily.primary,
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          fontFamily: fontFamily.primary,
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontFamily: fontFamily.primary,
        },
      },
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          fontFamily: fontFamily.primary,
        },
      },
    },
    MuiDialogContentText: {
      styleOverrides: {
        root: {
          fontFamily: fontFamily.tertiary,
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        message: {
          fontFamily: fontFamily.tertiary,
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          fontFamily: fontFamily.secondary,
        },
      },
    },
    MuiBreadcrumbs: {
      styleOverrides: {
        root: {
          "& .MuiTypography-root": {
            fontFamily: fontFamily.secondary,
          },
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          "& .MuiTableCell-head": {
            fontFamily: fontFamily.primary,
            fontWeight: 600,
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          fontFamily: fontFamily.tertiary,
        },
      },
    },
  },
});

export default theme;
