import * as React from "react";
interface InputProps {
    label: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    type?: string;
}
export declare const Input: ({ label, value, onChange, type }: InputProps) => import("react/jsx-runtime").JSX.Element;
export {};
