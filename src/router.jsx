import {Navigate, createBrowserRouter} from "react-router-dom"
import {UserListRoute} from "./pages/UserList"
import {PostListRoute} from "./pages/PostList"
import {todoListRoute} from "./pages/TodoList"
import {postRoute} from "./pages/Post"
import {RootLayout} from "./layouts/RootLayout"
import {userRoute} from "./pages/User"
//todo : error element
export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {index: true, element: <h1>root</h1>},
      {
        path: "posts",
        children: [
          {
            index: true,
            ...PostListRoute
          },
          {path: ":postId", ...postRoute}
        ]
      },
      {
        path: "users",
        children: [
          {
            index: true,
            ...UserListRoute
          },
          {path: ":userId", ...userRoute}
        ]
      },
      {path: "todos", ...todoListRoute},
      {path: "*", element: <h1>404-page Not Found</h1>}
    ]
  }
])
