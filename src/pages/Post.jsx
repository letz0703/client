import {useLoaderData} from "react-router-dom"
import {getPost} from "../api/posts"

function Post() {
  return <h1>hi</h1>
}

const loader = ({request: {signal}}) => {
  return <h1>hi</h1>
  //return axios.get(`http://localhost:3000/`, {signal}).then(res => res.data)
}

export const postRoute = {
  loader,
  element: <Post />
}
