import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { postService } from '../services/postService'

const PostList = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchPosts()
  }, [])

  const fetchPosts = async () => {
    try {
      const response = await postService.getAllPosts()
      setPosts(response.data)
    } catch (error) {
      console.error('Error fetching posts:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Blog Posts</h1>
      
      <div className="grid gap-6">
        {posts.map((post) => (
          <article key={post._id} className="card p-6">
            <h2 className="text-xl font-semibold mb-2">
              <Link
                to={`/posts/${post._id}`}
                className="text-gray-900 hover:text-primary-600"
              >
                {post.title}
              </Link>
            </h2>
            <p className="text-gray-600 mb-4">
              {post.excerpt || post.content.substring(0, 200)}...
            </p>
            <div className="text-sm text-gray-500">
              By {post.author?.username} on {new Date(post.createdAt).toLocaleDateString()}
            </div>
          </article>
        ))}
      </div>
      
      {posts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No posts found.</p>
        </div>
      )}
    </div>
  )
}

export default PostList 