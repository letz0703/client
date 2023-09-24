import {Navigate, createBrowserRouter, useRouteError} from "react-router-dom"
import {UserListRoute} from "./pages/UserList"
import {PostListRoute} from "./pages/PostList"
import {todoListRoute} from "./pages/TodoList"
import {postRoute} from "./pages/Post"
import {RootLayout} from "./layouts/RootLayout"
import {userRoute} from "./pages/User"
export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {index: true, element: <Navigate to="/posts" />},
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
    ]
  }
])

function ErrorPage() {
  return (
    <>
      <h1 className={`text-gray-500 text-[18px]`}>Something Wrong</h1>
      {import.meta.env.MODE !== "production" && (
        <>
          <pre className={`text-red-500 text-2xl`}>
            {useRouteError().message}
          </pre>
          <div className={`text-[17px]`}>{useRouteError().stack}</div>
        </>
      )}
    </>
  )
}
