import {
  DataGrid,
  GridColDef,
  GridRowsProp,
  DataGridProps,
} from "@mui/x-data-grid";
import { Paper } from "@mui/material";

type Props = {
  rows: GridRowsProp;
  columns: GridColDef[];
} & Omit<DataGridProps, "rows" | "columns">;

export function DataTable({ rows, columns, ...rest }: Props) {
  return (
    <Paper sx={{ height: 400, width: "100%", p: 1 }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSizeOptions={[5, 10, 25]}
        disableRowSelectionOnClick
        {...rest}
      />
    </Paper>
  );
}
