import {Link, useLoaderData} from "react-router-dom"
import {getUsers} from "../api/users.jsx"
function UserList() {
  const users = useLoaderData()
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

const loader = ({request: {signal}}) => {
  return getUsers({signal})
}

export const UserListRoute = {
  loader,
  element: <UserList />
}
