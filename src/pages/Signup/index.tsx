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
} from "./styles";
import { useNavigate } from "react-router";

export const Signup: React.FC = () => {
  const { user, signup } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSignup(event: FormEvent) {
    event.preventDefault();

    signup(email, password, username)
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
          <h3>Create an account</h3>
        </ContentHeader>
        <Form onSubmit={handleSignup}>
          <TextInputWrapper>
            <h5>Email</h5>
            <TextInput
              type="email"
              onChange={(event) => setEmail(event.target.value)}
              value={email}
            />
          </TextInputWrapper>
          <TextInputWrapper>
            <h5>Username</h5>
            <TextInput
              type="text"
              onChange={(event) => setUsername(event.target.value)}
              value={username}
            />
          </TextInputWrapper>

          <TextInputWrapper>
            <h5>Password</h5>
            <TextInput
              type="password"
              onChange={(event) => setPassword(event.target.value)}
              value={password}
            />
          </TextInputWrapper>
          <LoginButton type="submit">Signup</LoginButton>
        </Form>
      </Content>
    </Container>
  );
};
