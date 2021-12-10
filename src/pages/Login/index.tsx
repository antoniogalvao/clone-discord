import React, { FormEvent, useState } from 'react';
import { useAuth } from '../../hooks/useAuth';

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
} from './styles';
import { useNavigate } from 'react-router';

export const Login: React.FC = () => {
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSignIn(event: FormEvent) {
    event.preventDefault();

    try {
      await signIn(email, password);
      navigate('/channels/id_here');
    } catch (error) {
      alert(error);
    }
  }

  return (
    <Container>
      <Content>
        <ContentHeader>
          <h3>Welcome back!</h3>
          <p>We're so excited to see you again!</p>
        </ContentHeader>
        <Form onSubmit={handleSignIn}>
          <TextInputWrapper>
            <h5>Email or phone number</h5>
            <TextInput
              type='email'
              onChange={(event) => setEmail(event.target.value)}
              value={email}
            />
          </TextInputWrapper>
          <h5>Password</h5>
          <TextInput
            type='password'
            onChange={(event) => setPassword(event.target.value)}
            value={password}
          />
          <Link href='/'>Forgot your password?</Link>
          <LoginButton type='submit'>Login</LoginButton>
          <FormFooter>
            <span>Need an account? </span>
            <Link href='/register'>Register</Link>
          </FormFooter>
        </Form>
      </Content>
    </Container>
  );
};
