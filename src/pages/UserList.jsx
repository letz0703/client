import axios from "axios"
import {useLoaderData} from "react-router-dom"
function UserList() {
  const posts = useLoaderData()
  return <h1>UserList</h1>
}

export const UserListRoute = {
  loader: async ({request: {signal}}) => {
    const res = await axios.get(`http://localhost:3000/users`, {
      signal
    })
    return res.data
  },
  element: <UserList />
}
