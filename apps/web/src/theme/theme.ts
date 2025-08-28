import { createTheme } from "@mui/material/styles";
import { palette } from "./palette";
import { typography } from "./typography";
import { components } from "./components";

export const theme = createTheme({
  palette,
  typography,
  spacing: 8,
  shape: { borderRadius: 12 },
});

theme.components = components(theme);
