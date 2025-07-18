import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { postService } from '../services/postService'
import { categoryService } from '../services/categoryService'

const CreatePost = () => {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  useState(() => {
    fetchCategories()
  }, [])

  const fetchCategories = async () => {
    try {
      const response = await categoryService.getAllCategories()
      setCategories(response.data)
    } catch (error) {
      console.error('Error fetching categories:', error)
    }
  }

  const onSubmit = async (data) => {
    setLoading(true)
    try {
      await postService.createPost(data)
      navigate('/posts')
    } catch (error) {
      console.error('Error creating post:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Create New Post</h1>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">Title</label>
          <input
            {...register('title', { required: 'Title is required' })}
            className="input"
            placeholder="Enter post title"
          />
          {errors.title && <p className="text-red-600 text-sm">{errors.title.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Content</label>
          <textarea
            {...register('content', { required: 'Content is required' })}
            className="input h-32"
            placeholder="Enter post content"
          />
          {errors.content && <p className="text-red-600 text-sm">{errors.content.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Category</label>
          <select
            {...register('category', { required: 'Category is required' })}
            className="input"
          >
            <option value="">Select a category</option>
            {categories.map((category) => (
              <option key={category._id} value={category._id}>
                {category.name}
              </option>
            ))}
          </select>
          {errors.category && <p className="text-red-600 text-sm">{errors.category.message}</p>}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="btn btn-primary w-full"
        >
          {loading ? 'Creating...' : 'Create Post'}
        </button>
      </form>
    </div>
  )
}

export default CreatePost 