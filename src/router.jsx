import {Navigate, createBrowserRouter} from "react-router-dom"
import {UserListRoute} from "./pages/UserList"
import {PostListRoute} from "./pages/PostList"
import {TodoList} from "./pages/TodoList"
import {RootLayout} from "./layouts/RootLayout"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {index: true, element: <h1>root</h1>},
      {
        path: "users",
        children: [
          {
            index: true,
            ...UserListRoute
          },
          {
            path: ":userId",
            element: <h1>user</h1>
          }
        ]
      },
      {
        path: "posts",
        children: [
          {
            index: true,
            ...PostListRoute
          },
          {path: ":postId", element: <h1>hi</h1>}
        ]
      },
      //{path: "posts", element: <PostList />},
      {path: "todos", element: <TodoList />}
    ]
  }
])
