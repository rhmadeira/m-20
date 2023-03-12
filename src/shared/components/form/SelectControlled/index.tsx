import {
  FormControl,
  FormControlProps,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { Controller, UseControllerProps } from "react-hook-form";

type IController<T extends object> = FormControlProps & {
  controller?: UseControllerProps<T>;
  textSelect?: string;
  arrayMenuItem?: { index: number; label: string }[];
};

export default function SelectControlled<T extends object>({
  controller,
  textSelect,
  arrayMenuItem,
  ...props
}: IController<T>) {
  return (
    <>
      {controller ? (
        <Controller
          {...controller}
          render={({ field }) => (
            <FormControl {...props} focused={false} size="small" fullWidth>
              <InputLabel>{textSelect}</InputLabel>

              <Select {...field} label="Tipo de Processo" {...field}>
                {arrayMenuItem!.map((item, index) => (
                  <MenuItem key={`${item}${index}`} value={item.index}>
                    {item.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          )}
        />
      ) : null}
    </>
  );
}
