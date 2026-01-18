import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2563EB",
    },
    text: {
      primary: "#111827",
      secondary: "#4B5563",
    },
  },
  typography: {
    fontFamily: ["Inter", "Roboto", "Poppins", "sans-serif"].join(","),
    h1: {
      fontFamily: "Poppins",
    },
    h2: {
      fontFamily: "Poppins",
    },
    h3: {
      fontFamily: "Poppins",
    },
    h4: {
      fontFamily: "Poppins",
    },
    h5: {
      fontFamily: "Poppins",
    },
    h6: {
      fontFamily: "Poppins",
    },
    body1: {
      fontFamily: "Roboto",
    },
    body2: {
      fontFamily: "Roboto",
    },
    subtitle1: {
      fontFamily: "Inter",
    },
    subtitle2: {
      fontFamily: "Inter",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          textTransform: "none",
          fontWeight: 400,
          fontSize: "16px",
          fontFamily: "Poppins",
          padding: "8px 16px",
        },
        containedPrimary: {
          backgroundColor: "#2563EB",
          color: "#FFFFFF",
          "&:hover": {
            backgroundColor: "#1E40AF",
          },
        },
        outlinedPrimary: {
          borderColor: "#2563EB",
          color: "#2563EB",
          "&:hover": {
            borderColor: "#1E40AF",
            color: "#1E40AF",
          },
        },
        textPrimary: {
          color: "#2563EB",
          "&:hover": {
            backgroundColor: "rgba(37, 99, 235, 0.1)",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderColor: "#E5E7EB",
            fontFamily: "Poppins",
            borderRadius: "8px",
            "& .MuiOutlinedInput-input": {
              padding: "12px",
            },
            "& fieldset": {
              borderColor: "#E5E7EB",
            },
            "&:hover fieldset": {
              borderColor: "#2563EB",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#2563EB",
            },
          },
          "& .MuiInputLabel-root": {
            color: "#4B5563",
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "#2563EB",
          },
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        root: {
          height: "fit-content",
          "& .MuiOutlinedInput-root": {
            borderColor: "#E5E7EB",
            fontFamily: "Poppins",
            borderRadius: "8px",
            padding: "0px",
            "& .MuiOutlinedInput-input": {
              padding: "12px",
            },
            "& fieldset": {
              borderColor: "#E5E7EB",
            },
            "&:hover fieldset": {
              borderColor: "#2563EB",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#2563EB",
            },
          },
          "& .MuiInputLabel-root": {
            color: "#4B5563",
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "#2563EB",
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: "20px",
          fontFamily: "Poppins",
          fontWeight: 400,
          backgroundColor: "#E5E7EB",
          color: "#111827",
          fontSize: "14px",
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: "black",
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          "& .MuiTypography-root": {
            color: "#374151",
            fontFamily: "Inter",
            fontSize: "14px",
            fontWeight: 400,
          },
        },
      },
    },
  },
});

export default theme;
