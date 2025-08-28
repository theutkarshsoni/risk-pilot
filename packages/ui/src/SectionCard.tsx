import { PropsWithChildren, ReactNode } from "react";
import { Paper, Stack, Typography } from "@mui/material";

type Props = PropsWithChildren<{
  title?: string;
  actions?: ReactNode;
}>;

export function SectionCard({ title, actions, children }: Props) {
  return (
    <Paper sx={{ p: 3 }}>
      {(title || actions) && (
        <Stack direction="row" sx={{ justifyContent: "space-between", mb: 2 }}>
          {title && <Typography variant="h6">{title}</Typography>}
          {actions}
        </Stack>
      )}
      {children}
    </Paper>
  );
}
