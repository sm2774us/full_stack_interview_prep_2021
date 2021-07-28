import * as React from 'react';
import { Auth } from './App';
import {
  RSocketClient,
  JsonSerializers,
} from 'rsocket-core';
import RSocketWebSocketClient from 'rsocket-websocket-client';

interface Profile {
  id: number;
  email: string;
}

interface ProfileListProps {
  auth: Auth;
}

interface ProfileListState {
  profiles: Array<Profile>;
  isLoading: boolean;
}

// Create an instance of a client
const client = new RSocketClient({
  // send/receive objects instead of strings/buffers
  serializers: JsonSerializers,
  setup: {
    // ms btw sending keepalive to server
    keepAlive: 60000,
    // ms timeout if no keepalive response
    lifetime: 180000,
    // format of `data`
    dataMimeType: 'application/json',
    // format of `metadata`
    metadataMimeType: 'application/json',
  },
  transport: new RSocketWebSocketClient({url: 'ws://localhost:8080/ws/profiles'}),
});

class ProfileListRSocket extends React.Component<ProfileListProps, ProfileListState> {

  constructor(props: ProfileListProps) {
    super(props);

    this.state = {
      profiles: [],
      isLoading: false
    };
  }

  async componentDidMount() {
    client.connect().subscribe({
      onComplete: (socket: any) => {
        socket.requestResponse();
      },
      onError: (error: any) => console.error(error),
      onNext(payload: any) {
        console.log('onNext(%s)', payload.data);
      },
    });

    this.setState({isLoading: true});
    const response = await fetch('http://localhost:8080/profiles', {
      headers: {
        Authorization: 'Bearer ' + await this.props.auth.getAccessToken()
      }
    });
    const data = await response.json();
    this.setState({profiles: data, isLoading: false});
  }

  render() {
    const {profiles, isLoading} = this.state;

    if (isLoading) {
      return <p>Loading...</p>;
    }

    return (
      <div>
        <h2>Profile List</h2>
        {profiles.map((profile: Profile) =>
          <div key={profile.id}>
            {profile.email}<br/>
          </div>
        )}
      </div>
    );
  }
}

export default ProfileListRSocket;