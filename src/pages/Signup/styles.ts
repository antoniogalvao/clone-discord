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
  font: 14px Helvetica;

  &:hover {
    text-decoration: underline;
  }
`;

export const ContentHeader = styled.div`
  text-align: center;

  h3 {
    color: var(--white);
    font: 24px Helvetica;
    margin-bottom: 8px;
  }

  p {
    color: var(--header-secondary);
    font: 14px Helvetica;
  }
`;

export const Form = styled.form`
  margin-top: 20px;
  width: 100%;

  h5 {
    margin-bottom: 8px;
    color: var(--header-secondary);
    font: 12px Helvetica;
    text-transform: uppercase;
    font-weight: 500;
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

  color: #dcddde;
  font-size: 16px;
  line-height: 24px;
  font-family: Whitney;

  &:focus {
    border-color: #03b0f4;
  }
`;

export const LoginButton = styled.button`
  display: block;
  width: 100%;
  height: 44px;
  border-radius: 5px;
  background-color: var(--default);
  cursor: pointer;
  margin-top: 10px;

  font-size: 16px;
  font-weight: 500;
  color: #fff;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.7);
  }
`;

export const FormFooter = styled.div`
  margin-top: 20px;
  span {
    color: var(--gray);
    font: 14px Helvetica;
  }
`;
