import React, { FormEvent, useState } from "react";
import { useAuth } from "../../hooks/useAuth";

import {
  Container,
  Content,
  ContentHeader,
  Form,
  TextInputWrapper,
  TextInput,
  LoginButton,
  FormFooter,
  Link,
} from "./styles";
import { useNavigate } from "react-router";

export const Login: React.FC = () => {
  const { user, signin } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(event: FormEvent) {
    event.preventDefault();

    signin(email, password)
      .then((user) => {
        navigate("/channels/id_here");
      })
      .catch((error) => {
        console.log(error);
        alert(error.message);
      });

    console.log(user);
  }

  return (
    <Container>
      <Content>
        <ContentHeader>
          <h3>Welcome back!</h3>
          <p>We're so excited to see you again!</p>
        </ContentHeader>
        <Form onSubmit={handleLogin}>
          <TextInputWrapper>
            <h5>Email or phone number</h5>
            <TextInput
              type="email"
              onChange={(event) => setEmail(event.target.value)}
              value={email}
            />
          </TextInputWrapper>
          <h5>Password</h5>
          <TextInput
            type="password"
            onChange={(event) => setPassword(event.target.value)}
            value={password}
          />
          <Link href="/">Forgot your password?</Link>
          <LoginButton type="submit">Login</LoginButton>
          <FormFooter>
            <span>Need an account? </span>
            <Link>Register</Link>
          </FormFooter>
        </Form>
      </Content>
    </Container>
  );
};
