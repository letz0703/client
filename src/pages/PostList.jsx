import axios from "axios"
import {Link, useLoaderData} from "react-router-dom"
function PostList() {
  return (
    <>
      <div className="container">
        <h1 className="page-title">Posts</h1>
        <div className="card-grid">
          {posts.map(post => (
            <div className="card">
              <div className="card-header">{post.title}</div>
              <div className="card-body">
                <div className="card-preview-text">{post.body}</div>
              </div>
              <div className="card-footer">
                <Link className="btn" to="post.html">
                  View
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

const loader = async ({request: {signal}}) => {
  const res = await axios.get(`http://localhost:3000/posts`, {
    signal
  })
  return res.data
}

export const postListRoute = {
  loader,
  element: <PostList />
}
