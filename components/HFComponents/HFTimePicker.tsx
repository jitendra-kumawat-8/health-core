import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { TextField, FormLabel } from "@mui/material";

interface HFTimePickerProps {
  name: string;
  label?: string;
  defaultValue?: string;
  rules?: object;
  variant?: "small" | "medium";
  labelVariant?: "small" | "medium";
  disabled?: boolean;
  className?: string;
}

const HFTimePicker: React.FC<HFTimePickerProps> = ({
  name,
  label,
  defaultValue = "",
  rules = {},
  variant = "small",
  labelVariant = "medium",
  disabled = false,
  className,
}) => {
  const { control } = useFormContext();

  const labelStyles =
    labelVariant === "medium"
      ? "text-[#4B5563] font-inter font-semibold text-base"
      : "";

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      rules={rules}
      render={({ field, fieldState }) => (
        <div className={`flex flex-col gap-2 ${className}`}>
          {label && <FormLabel className={labelStyles}>{label}</FormLabel>}
          <TextField
            {...field}
            type="time"
            size={variant}
            disabled={disabled}
            error={!!fieldState.error}
            helperText={fieldState.error ? fieldState.error.message : null}
            inputProps={{
              step: 300, // 5-minute increments
            }}
          />
        </div>
      )}
    />
  );
};

export default HFTimePicker;
