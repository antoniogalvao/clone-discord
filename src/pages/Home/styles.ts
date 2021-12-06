import styled from "styled-components";

export const Container = styled.div``;

interface Props {
  backgroundColor: string;
}

export const Section = styled.div<Props>`
  width: 100%;
  height: 650px;

  background-color: ${(props) => props.backgroundColor};
`;

export const Header = styled.header`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  margin: 0 auto;

  > div {
    width: 800px;
    text-align: center;

    a {
      padding: 10px;
      margin: 10px;
      color: #fff;
      text-decoration: none;
      font: 16px;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export const Link = styled.a``;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 120px 40px;
  max-width: 800px;
  margin: 0 auto;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 56px;
  font-weight: 800;
  text-transform: uppercase;
  color: #fff;
  text-align: center;
`;

export const Text = styled.div`
  color: #fff;
  margin: 40px 0 0;
  max-width: 780px;
  text-align: center;
  font-size: 20px;
  line-height: 1.625;
`;

export const ContentFooter = styled.div`
  display: flex;
  justify-content: center;
  margin: 24px 0;
  gap: 20px;
`;

export const ButtonSmall = styled.button`
  border-radius: 40px;
  font-size: 14px;
  padding: 7px 16px;
  line-height: 24px;
  background-color: white;

  &:hover {
    color: #5865f2;
    cursor: pointer;
    --webkit-box-shadow: 0 8px 15px rgb(0 0 0 / 20%);
    box-shadow: 0 8px 15px rgb(0 0 0 / 20%);
  }
`;

export const ButtonLarge = styled.button`
  border-radius: 28px;
  font-size: 20px;
  padding: 16px 32px;
  line-height: 24px;
  background-color: white;
  font-weight: 400;

  &:hover {
    color: #5865f2;
    cursor: pointer;
    --webkit-box-shadow: 0 8px 15px rgb(0 0 0 / 20%);
    box-shadow: 0 8px 15px rgb(0 0 0 / 20%);
  }
`;
