import { FC, useEffect } from "react";
import { useParams } from "react-router";
import { socket } from "@/helpers";
import { TEST_EVENT, JOIN_ROOM } from "@/constants";
import { useSocketListeners } from "@/hooks";

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
    <button
      onClick={() => {
        socket.emit(TEST_EVENT, {
          hi: "HI",
        });
      }}
    >
      {roomId}
    </button>
  );
};

export { Room };
