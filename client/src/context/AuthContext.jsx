import { createContext, useContext, useState, useEffect } from 'react'
import { authService } from '../services/authService'
import toast from 'react-hot-toast'

const AuthContext = createContext()

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      authService.getMe()
        .then(userData => {
          setUser(userData)
        })
        .catch(() => {
          localStorage.removeItem('token')
        })
        .finally(() => {
          setLoading(false)
        })
    } else {
      setLoading(false)
    }
  }, [])

  const login = async (email, password) => {
    try {
      const { token, user: userData } = await authService.login(email, password)
      localStorage.setItem('token', token)
      setUser(userData)
      toast.success('Login successful!')
      return userData
    } catch (error) {
      toast.error(error.message || 'Login failed')
      throw error
    }
  }

  const register = async (username, email, password) => {
    try {
      const { token, user: userData } = await authService.register(username, email, password)
      localStorage.setItem('token', token)
      setUser(userData)
      toast.success('Registration successful!')
      return userData
    } catch (error) {
      toast.error(error.message || 'Registration failed')
      throw error
    }
  }

  const logout = () => {
    localStorage.removeItem('token')
    setUser(null)
    toast.success('Logged out successfully')
  }

  const value = {
    user,
    loading,
    login,
    register,
    logout,
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
} 