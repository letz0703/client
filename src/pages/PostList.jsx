import axios from "axios"
import {Link, useLoaderData} from "react-router-dom"
function PostList() {
  const posts = useLoaderData()
  return (
    <>
      <di className="container">
        <h1 className="page-title">Posts</h1>
        <div className="card-grid">
          {posts.map(post => (
            <div key={post.id} className="card">
              <div className="card-header">{post.title}</div>
              <div className="card-body">
                <div className="card-preview-text">{post.body}</div>
              </div>
              <div className="card-footer">
                <Link className="btn" to={`/posts/${post.id}`}>
                  View
                </Link>
              </div>
            </div>
          ))}
        </div>
      </di>
    </>
  )
}

export const PostListRoute = {
  loader: async ({request: {signal}}) => {
    const res = await axios.get(`http://localhost:3000/posts`, {
      signal
    })
    return res.data
  },
  element: <PostList />
}
