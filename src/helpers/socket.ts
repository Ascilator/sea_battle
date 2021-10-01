import io from "socket.io-client";

import { BASE_URL_FOR_SOCKETS } from "@/constants";

const RECONNECT_ATTEMPTS: number = 2;

const socket = io(BASE_URL_FOR_SOCKETS, {
  path: `${""}/socket.io/`,
  transports: ["websocket"],
  reconnection: true,
  reconnectionAttempts: RECONNECT_ATTEMPTS,
  reconnectionDelay: 1000,
  reconnectionDelayMax: 5000,
  autoConnect: true,
});

export { socket };
