import { Buffer } from "buffer";

let headers = new Headers();
const username = process.env.REACT_APP_API_USER;
const password = process.env.REACT_APP_API_PASSWORD;

headers.set(
  "Authorization",
  "Basic " + Buffer.from(username + ":" + password).toString("base64")
);

export const constants = {
  categoryList: ["Halloween", "Christmas", "Valentine's Day"],
  craftList: ["Knitting", "Crochet"],
  url: "https://api.ravelry.com/patterns",
  requestHeaders: {
    method: "GET",
    headers: headers,
  },
};
