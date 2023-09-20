import {useLoaderData} from "react-router-dom"
import {getPost} from "../api/posts"

export const postRoute = {
  loader,
  element: <Post />
}
