import React, { useRef, useEffect } from 'react';

import ChannelMessage, { Mention } from '../ChannelMessage';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messagesRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef])

  return (
    <Container>
      <Messages ref={messagesRef}>

        {Array.from(Array(15).keys()).map((n) => (
          <ChannelMessage
            key={n}
            author="Antonio Galvão"
            date="08/01/2021"
            content="Hoje é o meu aniversário!"
          />
        ))}

        <ChannelMessage
          author="Urib"
          date="08/01/2021"
          content={
            <>
              <Mention>@Antonio Galvão</Mention>, me carrega no Dota e CS de novo por favor?
            </>
          }
        />
      </Messages>

      <InputWrapper>
        <Input type="text" placeholder="Conversar em #chat-livre" />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
};

export default ChannelData;
