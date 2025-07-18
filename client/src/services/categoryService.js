import api from './api'

export const categoryService = {
  getAllCategories: async () => {
    const response = await api.get('/categories')
    return response
  },

  getCategory: async (id) => {
    const response = await api.get(`/categories/${id}`)
    return response
  },

  createCategory: async (categoryData) => {
    const response = await api.post('/categories', categoryData)
    return response
  },

  updateCategory: async (id, categoryData) => {
    const response = await api.put(`/categories/${id}`, categoryData)
    return response
  },

  deleteCategory: async (id) => {
    const response = await api.delete(`/categories/${id}`)
    return response
  },
} 