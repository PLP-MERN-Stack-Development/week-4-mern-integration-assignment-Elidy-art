import api from './api'

export const authService = {
  register: async (username, email, password) => {
    const response = await api.post('/auth/register', {
      username,
      email,
      password,
    })
    return response
  },

  login: async (email, password) => {
    const response = await api.post('/auth/login', {
      email,
      password,
    })
    return response
  },

  getMe: async () => {
    const response = await api.get('/auth/me')
    return response.data
  },

  logout: async () => {
    await api.post('/auth/logout')
  },
} 