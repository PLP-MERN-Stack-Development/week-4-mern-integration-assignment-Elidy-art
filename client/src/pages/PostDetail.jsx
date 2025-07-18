import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { postService } from '../services/postService'

const PostDetail = () => {
  const { id } = useParams()
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchPost()
  }, [id])

  const fetchPost = async () => {
    try {
      const response = await postService.getPost(id)
      setPost(response.data)
    } catch (error) {
      console.error('Error fetching post:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return <div>Loading...</div>
  }

  if (!post) {
    return <div>Post not found</div>
  }

  return (
    <div className="max-w-4xl mx-auto">
      <article className="card p-8">
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        <div className="text-gray-600 mb-6">
          By {post.author?.username} on {new Date(post.createdAt).toLocaleDateString()}
        </div>
        <div className="prose max-w-none">
          {post.content}
        </div>
      </article>
    </div>
  )
}

export default PostDetail 