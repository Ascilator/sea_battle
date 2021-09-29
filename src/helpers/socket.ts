import io from "socket.io-client";

import { BASE_URL_FOR_SOCKETS } from "@/constants";

// const socket = io(BASE_URL_FOR_SOCKETS, {
//   path: `${IS_DEVELOPING_WITH_LOCAL_SERVER ? "" : "/api"}/socket.io/`,
//   transports: ["websocket"],
//   reconnection: true,
//   reconnectionAttempts: RECONNECT_ATTEMPTS,
//   reconnectionDelay: 1000,
//   reconnectionDelayMax: 5000,
//   autoConnect: false,
// });
