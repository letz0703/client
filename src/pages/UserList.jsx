import axios from "axios"

function UserList() {
  return <h1>UserList</h1>
}
//export const loader = ({request: {signal}}) => {
//  return axios.get(`http://localhost:3000/users`, {signal})
//  element: <UserList />
//}

export const userListRoute = {
  loader: ({request: {signal}}) => {
    return axios.get(`http://localhost:3000/users`, {signal})
  },
  element: <UserList />
}
