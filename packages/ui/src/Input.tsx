import * as React from "react";
import { TextField } from "@mui/material";

interface InputProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

export const Input = ({ label, value, onChange, type = "text" }: InputProps) => {
  return <TextField label={label} value={value} onChange={onChange} type={type} fullWidth />;
};
