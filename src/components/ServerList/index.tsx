import React from 'react';

import ServerButton from '../ServerButton';

import { Container, Separator } from './styles';

const ServerList: React.FC = () => {
  return (
    <Container>
      <ServerButton isHome />

      <Separator />

      <ServerButton />
      <ServerButton hasNotifications/>
      <ServerButton hasNotifications mentions={3}/>
      <ServerButton />
      <ServerButton hasNotifications />
      <ServerButton />
      <ServerButton mentions={382} />
      <ServerButton />
      <ServerButton />
    </Container>
  )
};

export default ServerList;
