import { Components, Theme } from "@mui/material/styles";

export const components = (theme: Theme): Components => ({
  MuiCssBaseline: {
    styleOverrides: {
      body: { minHeight: "100vh" },
    },
  },
  MuiButton: {
    defaultProps: { variant: "contained", size: "medium" },
    styleOverrides: {
      root: { borderRadius: 8, fontWeight: 600 },
    },
  },
  MuiPaper: {
    styleOverrides: {
      root: { borderRadius: 12 },
    },
  },
  MuiChip: {
    styleOverrides: {
      sizeSmall: { fontWeight: 600 },
    },
  },
  MuiTextField: {
    defaultProps: { size: "small", fullWidth: true },
  },
  MuiFormLabel: {
    styleOverrides: { root: { fontWeight: 600 } },
  },
});
