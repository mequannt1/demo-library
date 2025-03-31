import * as React from "react";

import { Button as MuiButton     } from "@mui/material";

interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: "contained" | "outlined" | "text";
}

export const Button = ({ label, onClick, variant = "contained" }: ButtonProps) => {
  return <MuiButton variant={variant} onClick={onClick}>{label}</MuiButton>;
};
