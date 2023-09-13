import {Navigate, createBrowserRouter} from "react-router-dom"
import {UserList} from "./pages/UserList"
import {postListRoute} from "./pages/PostList"
import {TodoList} from "./pages/TodoList"
import {RootLayout} from "./layouts/RootLayout"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {index: true, element: <Navigate to="posts" />},
      {path: "users", element: <UserList />},
      {
        path: "posts",
        children: [
          {
            index: true,
            ...postListRoute
          },
          {path: ":postId", element: <h1>hi</h1>}
        ]
      },
      //{path: "posts", element: <PostList />},
      {path: "todos", element: <TodoList />}
    ]
  }
])
