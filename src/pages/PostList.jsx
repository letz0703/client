import axios from "axios"
import {getPosts} from "../api/posts"
import {Link, useLoaderData} from "react-router-dom"
function PostList() {
  const posts = useLoaderData()
  return (
    <>
      <div className="container">
        <h1 className="page-title">Posts- {posts.length}</h1>
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
      </div>
    </>
  )
}

const loader = ({request: {signal}}) => {
  return getPosts({signal})
}

export const PostListRoute = {
  loader,
  element: <PostList />
}
