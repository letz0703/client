import {useLoaderData} from "react-router-dom"
import {getUsers} from "../api/users.jsx"

function UserList() {
  const user = useLoaderData()
  return "hi"
  //const users = useLoaderData()
  //return (
  //  <>
  //    <div className="container">
  //      <h1 className="page-title">Users</h1>
  //      <div className="card">
  //        {users.map(user => [
  //          <>
  //            <div className="card-header">{user.name}</div>
  //            <div className="card-body">
  //              <div>{user.company.name}</div>
  //              <div>{user.website}</div>
  //              <div>{user.email}</div>
  //            </div>
  //            <div className="card-footer">
  //              <Link className="btn" to={user.id.toString()}>
  //                {/*<Link className="btn" to={`/users/${user.id}`}>*/}
  //                View
  //              </Link>
  //            </div>
  //          </>
  //        ])}
  //      </div>
  //    </div>
  //  </>
  //)
}

const loader = ({request: {signal}}, params) => {
  //return getUsers(params.id, {signal})
  return "hi"
}

export const UserListRoute = {
  loader,
  element: <UserList />
}
