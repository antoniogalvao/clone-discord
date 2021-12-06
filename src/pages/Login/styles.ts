import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: var(--discord);
`;

export const Content = styled.div`
  background-color: var(--primary);
  width: 480px;
  height: 406px;
  padding: 32px;
  border-radius: 5px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Link = styled.a`
  text-decoration: none;
  color: #00aff4;
  font-weight: 500;
  line-height: 16px;
  font-size: 14px;

  &:hover {
    text-decoration: underline;
  }
`;

export const ContentHeader = styled.div`
  text-align: center;
`;

export const Form = styled.form`
  margin-top: 20px;

  h5 {
    margin-bottom: 8px;
    color: var(--header-secondary);
  }
`;

export const TextInputWrapper = styled.div`
  margin-bottom: 20px;
`;

export const TextInput = styled.input`
  width: 100%;
  height: 40px;
  padding: 10px;
  border: 1px solid #212327;
  border-radius: 3px;
  background: #303338;
`;

export const LoginButton = styled.button`
  display: block;
  width: 100%;
  height: 44px;
  border-radius: 5px;
  background-color: var(--default);
  cursor: pointer;

  font-size: 16px;
  font-weight: 500;
  color: #fff;
`;

export const FormFooter = styled.div``;

export const RegisterButton = styled.button``;
