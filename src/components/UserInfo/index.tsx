import React from "react";
import { useNavigate } from "react-router";

import {
  Container,
  Profile,
  Avatar,
  UserData,
  Icons,
  MicIcon,
  HeadphoneIcon,
  SettingsIcon,
} from "./styles";

const UserInfo: React.FC = () => {
  const navigate = useNavigate();

  function handleLogout() {
    navigate("/login");
  }

  return (
    <Container>
      <Profile>
        <Avatar />
        <UserData>
          <strong>Antonio Galvão</strong>
          <span>#3540</span>
        </UserData>
      </Profile>

      <Icons>
        <MicIcon />
        <HeadphoneIcon />
        <SettingsIcon onClick={handleLogout} />
      </Icons>
    </Container>
  );
};

export default UserInfo;
