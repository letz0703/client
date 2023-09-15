import axios from "axios"

export function getPosts(options) {
  return (
    axios
      .get("http://localhost:3000/users", options)
      //.get("https://www.especialist.org/json_api/db.json", options)
      .then(res => res.data)
  )
}
