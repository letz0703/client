import {baseAPI} from "./base"

export function getPosts(options) {
  return baseAPI.get("posts", options).then(res => res.data)
}
