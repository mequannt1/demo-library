import { jsx as _jsx } from "react/jsx-runtime";
import { TextField } from "@mui/material";
export const Input = ({ label, value, onChange, type = "text" }) => {
    return _jsx(TextField, { label: label, value: value, onChange: onChange, type: type, fullWidth: true });
};
