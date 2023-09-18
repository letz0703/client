import {baseAPI} from "./base"

export function getUsers(options) {
  return baseAPI.get("users", options).then(res => res.data)
}
