import { TextFieldProps } from "@mui/material";
import TextField from "@mui/material/TextField";
import { Controller, UseControllerProps } from "react-hook-form";
import ReactInputMask from "react-input-mask";

type InputBasicProps<T extends object> = TextFieldProps & {
  controller?: UseControllerProps<T>;
};

export default function InputControlledMask<T extends object>({
  controller,
  ...props
}: InputBasicProps<T>) {
  return (
    <>
      {controller ? (
        <Controller
          {...controller}
          render={({ field }) => (
            <ReactInputMask
              mask="999.999.999-99"
              inputRef={field.ref}
              {...field}
            />
          )}
        />
      ) : (
        <TextField variant="filled" {...props} />
      )}
    </>
  );
}
