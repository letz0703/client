import {useLoaderData} from "react-router-dom"
import {getUser} from "../api/users"

function User() {
  const user = useLoaderData()
  return user.name
}

const loader = ({request: {signal}, params}) => {
  return getUser(params.userId, {signal})
}

export const userRoute = {
  loader,
  element: <User />
}
