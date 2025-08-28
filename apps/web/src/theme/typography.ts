import type { TypographyVariantsOptions } from "@mui/material/styles";

export const typography: TypographyVariantsOptions = {
  fontFamily: `"Inter", "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`,
  h1: { 
    fontSize: "2rem", 
    fontWeight: 600, 
    lineHeight: 1.25 
  },
  h2: { 
    fontSize: "1.5rem", 
    fontWeight: 600, 
    lineHeight: 1.3 
  },
  h3: { 
    fontSize: "1.25rem", 
    fontWeight: 600, 
    lineHeight: 1.35 
  },
  subtitle1: { 
    fontSize: "1rem", 
    fontWeight: 500 
  },
  body1: { 
    fontSize: "0.95rem" 
  },
  body2: { 
    fontSize: "0.875rem", 
    color: "#475569" 
  },
  button: { 
    textTransform: "none", 
    fontWeight: 600 
  },
};
