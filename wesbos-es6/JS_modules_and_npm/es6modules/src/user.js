// import slug from "slug"; // performance issues with webpack
import base64 from "base-64";
import { url } from "./config";

// default
export default function User(name, email, website) {
  return { name, email, website };
}

// named exports
export function createURL(name) {
  return `${url}/users/${slug(name)}`;
}

export function gravatar(email) {
  const hash = base64.encode(email);
  const photoURL = `https://www.gravatar.com/avatar/${hash}`;
  return photoURL;
}
