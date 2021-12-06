import React, { FormEvent, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../services/firebase";

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
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin(event: FormEvent) {
    event.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        navigate("/channels/id_here");
      })
      .catch((error) => {
        console.log(error);
        alert(error.message);
      });
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
