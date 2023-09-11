import {createBrowserRouter} from "react-router-dom"
import {UserList} from "./pages/UserList"
import {PostList} from "./pages/PostList"
import {TodoList} from "./pages/TodoList"
import {RootLayout} from "./layouts/RootLayout"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      //todo index page
      {path: "users", element: <UserList />},
      {path: "posts", element: <PostList />},
      {path: "todos", element: <TodoList />}
    ]
  }
])
