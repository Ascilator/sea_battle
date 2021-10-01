import { useEffect } from "react";
import { useSocketListenersProp } from "@/types";
import { socket } from "@/helpers";

const useSocketListeners = (props: useSocketListenersProp[]) => {
  useEffect(() => {
    props.forEach((socketEvent: useSocketListenersProp) => {
      socket.on(socketEvent.eventName, socketEvent.callback);
    });
    return () => {
      props.forEach((socketEvent: useSocketListenersProp) => {
        socket.off(socketEvent.eventName, socketEvent.callback);
      });
    };
  }, []);
};

export { useSocketListeners };
