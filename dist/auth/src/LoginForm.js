import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Input } from "@mequ-demo-library/ui";
import { Button } from "@mequ-demo-library/ui";
export const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleLogin = () => {
        console.log("Logging in:", { email, password });
    };
    return (_jsxs("div", { children: [_jsx(Input, { label: "Email", value: email, onChange: (e) => setEmail(e.target.value) }), _jsx(Input, { label: "Password", value: password, onChange: (e) => setPassword(e.target.value), type: "password" }), _jsx(Button, { label: "Login", onClick: handleLogin })] }));
};
