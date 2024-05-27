import axios from "axios";


const token = "";
const baseUrl = "";


export function getAllBlogs(
    
  onSuccess: (res: any) => void,
  onError: (err: any) => void
) {
  axios({
    url: `${baseUrl}`,
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
      url: `${baseUrl}`,
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(onSuccess)
      .catch(onError);
  }
  


export function createBlog(
    
    onSuccess: (res: any) => void,
    onError: (err: any) => void
  ) {
    axios({
      url: `${baseUrl}`,
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(onSuccess)
      .catch(onError);
  }

  export function editBlog(
    
    onSuccess: (res: any) => void,
    onError: (err: any) => void
  ) {
    axios({
      url: `${baseUrl}`,
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(onSuccess)
      .catch(onError);
  }
  

  export function deleteBlog(
    
    onSuccess: (res: any) => void,
    onError: (err: any) => void
  ) {
    axios({
      url: `${baseUrl}`,
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(onSuccess)
      .catch(onError);
  }
  
  