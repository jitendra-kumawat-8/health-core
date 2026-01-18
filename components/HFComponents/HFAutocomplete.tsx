import React from "react";
import {
  Autocomplete,
  TextField,
  AutocompleteProps,
  FormLabel,
} from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import classNames from "classnames";

interface HFAutocompleteProps<T> extends Omit<
  AutocompleteProps<T, false, false, false>,
  "name" | "defaultValue" | "renderInput"
> {
  name: string;
  label?: string;
  options: T[];
  defaultValue?: T;
  rules?: object;
  componentProps?: Partial<
    Omit<AutocompleteProps<T, false, false, false>, "name">
  >;
  placeholder?: string;
  variant?: "small" | "medium";
  labelVariant?: "small" | "medium";
}

const HFAutocomplete = <T,>({
  name,
  label,
  options,
  defaultValue = undefined,
  rules = {},
  componentProps = {},
  placeholder = "",
  variant = "small",
  labelVariant = "small",
  ...props
}: HFAutocompleteProps<T>) => {
  const { control } = useFormContext();

  const labelStyles =
    variant === "medium"
      ? "text-[#4B5563] font-inter font-semibold text-base"
      : "";

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      rules={rules}
      render={({ field, fieldState }) => (
        <Autocomplete
          {...field}
          {...componentProps}
          {...props}
          options={options}
          renderInput={(params) => (
            <div className="flex flex-col gap-1">
              {label && (
                <FormLabel
                  className={classNames(
                    "font-inter text-[#374151]",
                    { "text-sm font-medium": labelVariant === "small" },
                    { "text-base font-semibold": labelVariant === "medium" }
                  )}
                >
                  {label}
                </FormLabel>
              )}
              <TextField
                {...params}
                placeholder={placeholder}
                error={!!fieldState.error}
                helperText={fieldState.error ? fieldState.error.message : null}
              />
            </div>
          )}
          onChange={(_, data: any) => {
            if (typeof data === "object") {
              field.onChange(data?.value);
            } else {
              field.onChange(data);
            }
          }}
        />
      )}
    />
  );
};

export default HFAutocomplete;
