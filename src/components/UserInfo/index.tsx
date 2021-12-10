import React from 'react';
import { useNavigate } from 'react-router';
import { useAuth } from '../../hooks/useAuth';

import {
  Container,
  Profile,
  Avatar,
  UserData,
  Icons,
  MicIcon,
  HeadphoneIcon,
  SettingsIcon,
} from './styles';

const UserInfo: React.FC = () => {
  const navigate = useNavigate();
  const { user, signOut } = useAuth();

  function handleLogout() {
    signOut();
    navigate('/login');
  }

  return (
    <Container>
      <Profile>
        <Avatar />
        <UserData>
          <strong>{user?.username}</strong>
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
