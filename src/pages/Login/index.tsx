import React from "react";

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

export const Login: React.FC = () => {
  return (
    <Container>
      <Content>
        <ContentHeader>
          <h3>Welcome back!</h3>
          <p>We're so excited to see you again!</p>
        </ContentHeader>
        <Form>
          <TextInputWrapper>
            <h5>Email or phone number</h5>
            <TextInput />
          </TextInputWrapper>
          <h5>Password</h5>
          <TextInput />
          <Link href="/">Forgot your password?</Link>
          <LoginButton>Login</LoginButton>
          <FormFooter>
            <span>Need an account? </span>
            <Link>Register</Link>
          </FormFooter>
        </Form>
      </Content>
    </Container>
  );
};
