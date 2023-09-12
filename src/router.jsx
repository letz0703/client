import {Navigate, createBrowserRouter} from "react-router-dom"
import {UserList} from "./pages/UserList"
import {PostList} from "./pages/PostList"
import {TodoList} from "./pages/TodoList"
import {RootLayout} from "./layouts/RootLayout"
import axios from "axios"

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
            loader: ({request: {signal}}) => {
              return axios
                .get(`http://jsonplaceholder.typicode.com/posts`, {
                  signal
                })
                .then(res => res.data)
            },
            element: <PostList />
          },
          {path: ":postId", element: <h1>hi</h1>}
        ]
      },
      //{path: "posts", element: <PostList />},
      {path: "todos", element: <TodoList />}
    ]
  }
])
