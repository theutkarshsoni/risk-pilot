import { TextField, MenuItem } from "@mui/material";
import { Controller, Control, FieldValues, Path } from "react-hook-form";

interface Option {
  value: string;
  label: string;
}

type Props<T extends FieldValues> = {
  control: Control<T>;
  name: Path<T>;
  label: string;
  type?: "text" | "select";
  options?: Option[];
};

export function FormField<T extends FieldValues>({
  control,
  name,
  label,
  type = "text",
  options = [],
}: Props<T>) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <TextField
          {...field}
          label={label}
          select={type === "select"}
          error={!!fieldState.error}
          helperText={fieldState.error?.message}
        >
          {type === "select" &&
            options.map((opt) => (
              <MenuItem key={opt.value} value={opt.value}>
                {opt.label}
              </MenuItem>
            ))}
        </TextField>
      )}
    />
  );
}
