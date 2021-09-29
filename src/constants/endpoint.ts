export const BASE_URL: string = process.env.REACT_APP_API ?? "none";
export const BASE_URL_FOR_SOCKETS: string = BASE_URL.split("/api")[0];
