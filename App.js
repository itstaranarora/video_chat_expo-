import React, { useState } from "react";
import { Button } from "react-native";
import AgoraUIKit from "agora-rn-uikit";
const App = () => {
  const [videoCall, setVideoCall] = useState(true);
  const rtcProps = {
    appId: "49762b19264945e99da818909eb02cfd",
    channel: "testtest",
    token:
      "00649762b19264945e99da818909eb02cfdIACav9MC4mszgKttvf9sQ5VD3kNjo5iM/0tYW1i/ixWH9TG7aewAAAAAEACIFpSN8y7YYQEAAQDzLthh",
  };
  const callbacks = { EndCall: () => setVideoCall(false) };
  return videoCall ? (
    <AgoraUIKit
      rtcProps={{
        appId: "API_ID",
        channel: "test",
      }}
      callbacks={callbacks}
    />
  ) : (
    <Button title="Join" onPress={() => setVideoCall(true)} />
  );
};
export default App;
