import { createTheme } from "@mui/material/styles";
import { palette } from "./palette";
import { typography } from "./typography";

export const healthCoreTheme = createTheme({
  palette: {
    ...palette,
    mode: "light",
  },
  typography: typography as any,
  shape: {
    borderRadius: 8,
  },
  spacing: 8,
});
