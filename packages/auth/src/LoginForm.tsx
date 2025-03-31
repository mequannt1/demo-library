import * as React from "react";

import { useState } from "react";
import { Input } from "@mequ-demo-library/ui";
import { Button } from "@mequ-demo-library/ui";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Logging in:", { email, password });
  };

  return (
    <div>
      <Input label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <Input label="Password" value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
      <Button label="Login" onClick={handleLogin} />
    </div>
  );
};
