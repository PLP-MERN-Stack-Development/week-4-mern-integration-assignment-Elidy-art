import api from './api'

export const postService = {
  getAllPosts: async (page = 1, limit = 10, category = null) => {
    let url = `/posts?page=${page}&limit=${limit}`
    if (category) {
      url += `&category=${category}`
    }
    const response = await api.get(url)
    return response
  },

  getPost: async (id) => {
    const response = await api.get(`/posts/${id}`)
    return response
  },

  createPost: async (postData) => {
    const response = await api.post('/posts', postData)
    return response
  },

  updatePost: async (id, postData) => {
    const response = await api.put(`/posts/${id}`, postData)
    return response
  },

  deletePost: async (id) => {
    const response = await api.delete(`/posts/${id}`)
    return response
  },

  addComment: async (postId, content) => {
    const response = await api.post(`/posts/${postId}/comments`, { content })
    return response
  },
} 