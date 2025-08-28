import { Chip, useTheme } from "@mui/material";

type Risk = "Low" | "Medium" | "High";

export function RiskBadge({ level }: { level: Risk }) {
  const { palette } = useTheme();
  const map = {
    High: { bg: palette.error.main, fg: "#fff", label: "High Risk" },
    Medium: { bg: palette.warning.main, fg: "#fff", label: "Medium Risk" },
    Low: { bg: palette.success.main, fg: "#fff", label: "Low Risk" },
  } as const;

  const { bg, fg, label } = map[level];
  return (
    <Chip
      label={label}
      size="small"
      sx={{ bgcolor: bg, color: fg, fontWeight: 700 }}
    />
  );
}
