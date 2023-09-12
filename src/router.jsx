import {Navigate, createBrowserRouter} from "react-router-dom"
import {UserList} from "./pages/UserList"
import {PostList} from "./pages/PostList"
import {TodoList} from "./pages/TodoList"
import {RootLayout} from "./layouts/RootLayout"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {index: true, element: <Navigate to="posts" />},
      {path: "users", element: <UserList />},
      {path: "posts", element: <PostList />},
      //todo: children
      {path: "todos", element: <TodoList />}
    ]
  }
])
