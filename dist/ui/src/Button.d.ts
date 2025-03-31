interface ButtonProps {
    label: string;
    onClick: () => void;
    variant?: "contained" | "outlined" | "text";
}
export declare const Button: ({ label, onClick, variant }: ButtonProps) => import("react/jsx-runtime").JSX.Element;
export {};
