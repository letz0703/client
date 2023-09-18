import axios from "axios"
import {Link, useLoaderData} from "react-router-dom"
function UserList() {
  const users = useLoaderData()
  //return <h1>UserList</h1>
  return (
    <>
      <div className="container">
        <h1 className="page-title">Users</h1>
        <div className="card">
          {users.map(user => [
            <>
              <div className="card-header">{user.name}</div>
              <div className="card-body">
                <div>{user.username}</div>
                <div>{user.email}</div>
                <div>from {user.address.city}</div>
              </div>
              <div className="card-footer">
                <Link className="btn" to={`/users/${user.id}`}>
                  View
                </Link>
              </div>
            </>
          ])}
        </div>
      </div>
    </>
  )
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
