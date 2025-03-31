import { jsx as _jsx } from "react/jsx-runtime";
import { Button as MuiButton } from "@mui/material";
export const Button = ({ label, onClick, variant = "contained" }) => {
    return _jsx(MuiButton, { variant: variant, onClick: onClick, children: label });
};
