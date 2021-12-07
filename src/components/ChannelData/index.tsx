import React, { useRef, useEffect, FormEvent, useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { database } from "../../services/firebase";

import ChannelMessage, { Mention } from "../ChannelMessage";

import { Container, Messages, InputWrapper, Input, InputIcon } from "./styles";

type FirebaseMessages = Record<
  string,
  {
    author: {
      name: string;
      id: string;
    };
    content: string;
  }
>;

type MessageType = {
  id: string;
  author: string;
  content: string;
};

function ChannelData() {
  const { user } = useAuth();
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState<MessageType[]>([]);

  useEffect(() => {
    const div = messagesRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef]);

  useEffect(() => {
    const messagesDatabaseRef = database.ref(`messages`);

    messagesDatabaseRef.on("value", (database) => {
      const firebaseMessages: FirebaseMessages = database.val() ?? {};

      const parsedMessages = Object.entries(firebaseMessages).map(
        ([key, value]) => {
          return {
            id: key,
            content: value.content,
            author: value.author.name,
          };
        }
      );

      setMessages(parsedMessages);
    });

    return () => {
      messagesDatabaseRef.off("value");
    };
  }, []);

  async function handleSendMessage(event: FormEvent) {
    event.preventDefault();

    if (newMessage.trim() === "") {
      return;
    }

    if (!user) {
      throw new Error("You must be logged in");
    }

    const messageRef = database.ref("messages");

    const payload = {
      content: newMessage,
      author: {
        name: user.username,
        id: user.id,
      },
    };

    await messageRef.push(payload);

    setNewMessage("");
  }

  return (
    <Container>
      <Messages ref={messagesRef}>
        <ChannelMessage
          author="Urib"
          date="08/01/2021"
          content={
            <>
              <Mention>@Antonio Galvão</Mention>, how are you?
            </>
          }
        />
        {messages.map((message) => (
          <ChannelMessage
            key={message.id}
            author={message.author}
            date="08/01/2021"
            content={message.content}
          />
        ))}
      </Messages>

      <InputWrapper onSubmit={handleSendMessage}>
        <Input
          type="text"
          placeholder="Conversar em #chat-livre"
          onChange={(event) => setNewMessage(event.target.value)}
          value={newMessage}
        />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
}

export default ChannelData;
