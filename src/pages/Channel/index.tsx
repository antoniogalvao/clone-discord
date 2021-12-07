import { Grid } from "./styles";

import ServerList from "../../components/ServerList";
import ServerName from "../../components/ServerName";
import ChannelInfo from "../../components/ChannelInfo";
import ChannelList from "../../components/ChannelList";
import UserInfo from "../../components/UserInfo";
import UserList from "../../components/UserList";
import ChannelData from "../../components/ChannelData";

import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router";

export function Channel() {
  const { user } = useAuth();
  const navigate = useNavigate();

  if (!user) {
    navigate("/");
  }

  return (
    <Grid>
      <ServerList />
      <ServerName />
      <ChannelInfo />
      <ChannelList />
      <UserInfo />
      <ChannelData />
      <UserList />
    </Grid>
  );
}
