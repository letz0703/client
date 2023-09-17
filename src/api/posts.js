import axios from "axios"

export function getPosts(options) {
  return axios.get("/posts", options).then(res => res.data)
}
axios
