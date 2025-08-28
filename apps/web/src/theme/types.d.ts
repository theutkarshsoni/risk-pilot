import { PaletteColor, PaletteColorOptions } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    risk: {
      low: PaletteColor;
      medium: PaletteColor;
      high: PaletteColor;
    };
  }
  interface PaletteOptions {
    risk?: {
      low?: PaletteColorOptions;
      medium?: PaletteColorOptions;
      high?: PaletteColorOptions;
    };
  }
}
