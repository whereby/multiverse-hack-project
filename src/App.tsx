import { useState } from "react";
import { Box, Text } from "@chakra-ui/react";
import { useLocalMedia, VideoView } from "@whereby.com/browser-sdk/react";

function App({ roomUrl }: { roomUrl: string }) {
  const [isConnected, setIsConnected] = useState(false);
  const [displayName, setDisplayName] = useState("");
  const localMedia = useLocalMedia({ audio: true, video: true });

  const { localStream } = localMedia.state;
  const { toggleCameraEnabled, toggleMicrophoneEnabled } = localMedia.actions;

  if (!roomUrl) {
    return <Text>Missing Room URL!</Text>;
  }

  return (
    <Box h="100%">{localStream && <VideoView stream={localStream} />}</Box>
  );
}

export default App;
