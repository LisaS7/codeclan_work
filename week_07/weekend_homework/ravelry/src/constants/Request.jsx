import { Buffer } from "buffer";

let headers = new Headers();
const username = process.env.REACT_APP_API_USER;
const password = process.env.REACT_APP_API_PASSWORD;

headers.set(
  "Authorization",
  "Basic " + Buffer.from(username + ":" + password).toString("base64")
);

export const requestHeaders = {
  method: "GET",
  headers: headers,
};
