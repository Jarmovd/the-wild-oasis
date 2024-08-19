import { useState } from "react";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import { useLogin } from "./useLogin";
import SpinnerMini from "../../ui/SpinnerMini";
import FormRowVertical from "../../ui/FormRowVertical";

function LoginForm() {
  const [email, setEmail] = useState("jarmo.van.doorn@gmail.com");
  const [password, setPassword] = useState("jarmo123");

  const { login, isLoading, error } = useLogin();

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;

    login(
      { email, password },
      {
        onSettled: () => {
          setEmail("");
          setPassword("");
        },
      }
    );
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRowVertical label="Email address">
        <Input
          type="email"
          id="email"
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading}
        />
      </FormRowVertical>
      <FormRowVertical label="Password">
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isLoading}
        />
      </FormRowVertical>
      <FormRowVertical>
        <Button size="large" type="submit" disabled={isLoading}>
          {isLoading ? <SpinnerMini /> : "Login"}
        </Button>
      </FormRowVertical>
      {error && <div>Error: {error.message}</div>}{" "}
    </Form>
  );
}

export default LoginForm;
