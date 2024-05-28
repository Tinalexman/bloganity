import axios from "axios";

import { baseUrl } from "./base";

export function getAllBlogs(
  onSuccess: (res: any) => void,
  onError: (err: any) => void
) {
  axios({
    url: `${baseUrl}/blogs`,
    method: "GET",
  })
    .then(onSuccess)
    .catch(onError);
}

export function getBlog(
  id: string,
  onSuccess: (res: any) => void,
  onError: (err: any) => void
) {
  axios({
    url: `${baseUrl}/blogs/${id}`,
    method: "GET",
  })
    .then(onSuccess)
    .catch(onError);
}

export function createBlog(
  payload: {
    title: string;
    content: string;
  },
  token: string,
  onSuccess: (res: any) => void,
  onError: (err: any) => void
) {
  axios({
    url: `${baseUrl}/blogs/create`,
    method: "POST",
    data: payload,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then(onSuccess)
    .catch(onError);
}

export function editBlog(
  payload: {
    title: string;
    content: string;
    _id: string;
  },
  token: string,
  onSuccess: (res: any) => void,
  onError: (err: any) => void
) {
  axios({
    url: `${baseUrl}/blogs/edit`,
    method: "PUT",
    data: payload,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then(onSuccess)
    .catch(onError);
}

export function deleteBlog(
  id: string,
  token: string,
  onSuccess: (res: any) => void,
  onError: (err: any) => void
) {
  axios({
    url: `${baseUrl}/blogs/delete/${id}`,
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then(onSuccess)
    .catch(onError);
}
