import {useLoaderData} from "react-router-dom"

function User() {
  const user = useLoaderData()
  return user.userId
}

const loader = ({request: {signal}, params}) => {
  return getUser(params.userId, {signal})
}

export const userRoute = {
  loader,
  element: <User />
}
