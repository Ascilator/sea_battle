import { FC, useEffect } from "react";
import { useParams } from "react-router";

import { PlayerField } from "@/components/PlayerField";
import { socket } from "@/helpers";
import { TEST_EVENT, JOIN_ROOM } from "@/constants";
import { useSocketListeners } from "@/hooks";

import { StyledFieldContainer } from "./styles";

const Room: FC = () => {
  const { roomId } = useParams<{ roomId: string }>();

  const callback = () => {
    console.log("got it");
  };

  useEffect(() => {
    socket.emit(JOIN_ROOM, roomId);
  }, []);

  useSocketListeners([
    {
      eventName: TEST_EVENT,
      callback,
    },
  ]);

  return (
    <StyledFieldContainer>
      {roomId}
      <PlayerField />
    </StyledFieldContainer>
  );
};

export { Room };
