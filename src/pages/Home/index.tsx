import React from "react";
import { useNavigate } from "react-router";

import discordImg from "../../assets/images/discord.svg";

import {
  Container,
  Section,
  Header,
  ButtonLarge,
  ButtonSmall,
  Content,
  Text,
  ContentFooter,
  Link,
  Title,
  TextContainer,
} from "./styles";

const Home: React.FC = () => {
  const navigate = useNavigate();

  function handleRedirectLogin() {
    navigate("/channels/id_here");
  }

  return (
    <Container>
      <Section backgroundColor={"#404eed"}>
        <Header>
          <img src={discordImg} alt="Discord" />
          <div>
            <Link href="/">Download</Link>
            <Link href="/">Nitro</Link>
            <Link href="/">Discord</Link>
            <Link href="/">Safety</Link>
            <Link href="/">Support</Link>
            <Link href="/">Blog</Link>
            <Link href="/">Careers</Link>
          </div>
          <ButtonSmall onClick={handleRedirectLogin}>Login</ButtonSmall>
        </Header>
        <Content>
          <TextContainer>
            <Title>Imagine a Place...</Title>
            <Text>
              ...where you can belong to a school club, a gaming group, or a
              worldwide art community. Where just you and a handful of friends
              can spend time together. A place that makes it easy to talk every
              day and hang out more often.
            </Text>
          </TextContainer>
          <ContentFooter>
            <ButtonLarge>Download for Linux</ButtonLarge>
            <ButtonLarge>Open Discord in your browser</ButtonLarge>
          </ContentFooter>
        </Content>
      </Section>
      <Section backgroundColor={"#fff"} />
      <Section backgroundColor={"#f6f6f6"} />
    </Container>
  );
};

export default Home;
