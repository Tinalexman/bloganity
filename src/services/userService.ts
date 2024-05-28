import axios from "axios";

import { baseUrl } from "./base";

export function register(
  payload: {
    name: string;
    email: string;
    password: string;
  },
  onSuccess: (res: any) => void,
  onError: (err: any) => void
) {
  axios({
    url: `${baseUrl}/users/register`,
    method: "POST",
    data: payload,
  })
    .then(onSuccess)
    .catch(onError);
}

export function login(
  payload: {
    email: string;
    password: string;
  },
  onSuccess: (res: any) => void,
  onError: (err: any) => void
) {
  axios({
    url: `${baseUrl}/users/login`,
    data: payload,
    method: "POST",
  })
    .then(onSuccess)
    .catch(onError);
}
