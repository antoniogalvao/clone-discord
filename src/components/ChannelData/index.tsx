import React, { useRef, useEffect } from "react";
import { useAuth } from "../../hooks/useAuth";

import ChannelMessage, { Mention } from "../ChannelMessage";

import { Container, Messages, InputWrapper, Input, InputIcon } from "./styles";

function ChannelData() {
  const { user } = useAuth();
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messagesRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef]);

  return (
    <Container>
      <Messages ref={messagesRef}>
        {Array.from(Array(15).keys()).map((n) => (
          <ChannelMessage
            key={n}
            author={user?.username}
            date="08/01/2021"
            content="Lorem ipsum dolor sit amet"
          />
        ))}

        <ChannelMessage
          author="Urib"
          date="08/01/2021"
          content={
            <>
              <Mention>@Antonio Galvão</Mention>, how are you?
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
}

export default ChannelData;
