import React from "react";
import {
  Autocomplete,
  TextField,
  AutocompleteProps,
  FormLabel,
} from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import classNames from "classnames";

interface OptionType {
  value: string | number;
  label: string;
}

interface HFMultiSelectAutocompleteProps<
  T extends OptionType | string,
> extends Omit<
  AutocompleteProps<T, true, false, false>,
  "name" | "defaultValue" | "renderInput"
> {
  name: string;
  label?: string;
  options: T[];
  defaultValue?: T[];
  rules?: object;
  componentProps?: Partial<
    Omit<AutocompleteProps<T, true, false, false>, "name">
  >;
  variant?: "small" | "medium";
}

const HFMultiSelectAutocomplete = <T extends OptionType | string>({
  name,
  label,
  options,
  defaultValue = [],
  rules = {},
  componentProps = {},
  variant = "small",
  ...props
}: HFMultiSelectAutocompleteProps<T>) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      rules={rules}
      render={({ field, fieldState }) => (
        <div className="flex flex-col gap-1">
          {label && (
            <FormLabel
              className={classNames(
                "font-inter text-[#374151]",
                { "text-sm font-medium": variant === "small" },
                { "text-base font-semibold": variant === "medium" }
              )}
            >
              {label}
            </FormLabel>
          )}
          <Autocomplete
            {...field}
            {...componentProps}
            {...props}
            multiple
            options={options.filter((option) => {
              if (typeof option === "object" && option !== null) {
                return !field.value?.includes(option.value);
              }
              return !field.value?.includes(option);
            })}
            renderInput={(params) => (
              <TextField
                {...params}
                error={!!fieldState.error}
                helperText={fieldState.error ? fieldState.error.message : null}
              />
            )}
            onChange={(_, data) =>
              field.onChange(
                data?.map((item: any) => {
                  if (typeof item === "object") {
                    return item.value;
                  }
                  return item;
                })
              )
            }
          />
        </div>
      )}
    />
  );
};

export default HFMultiSelectAutocomplete;
