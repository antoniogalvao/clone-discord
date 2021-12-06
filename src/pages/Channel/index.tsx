import { Grid } from "./styles";

import ServerList from "../../components/ServerList";
import ServerName from "../../components/ServerName";
import ChannelInfo from "../../components/ChannelInfo";
import ChannelList from "../../components/ChannelList";
import UserInfo from "../../components/UserInfo";
import UserList from "../../components/UserList";
import ChannelData from "../../components/ChannelData";

import { useAuth } from "../../hooks/useAuth";

export function Channel() {
  const { user } = useAuth();

  return (
    <Grid>
      <ServerList />
      <ServerName />
      <ChannelInfo />
      <ChannelList />
      <UserInfo />
      <ChannelData email={user?.email} />
      <UserList />
    </Grid>
  );
}
