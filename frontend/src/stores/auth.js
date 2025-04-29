import { defineStore } from 'pinia'
import { ref } from 'vue'
import { userService } from '@/services/api'

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null)
  const token = ref(localStorage.getItem('token'))

  const setUser = (userData) => {
    user.value = userData
  }

  const setToken = (tokenValue) => {
    token.value = tokenValue
    if (tokenValue) {
      localStorage.setItem('token', tokenValue)
    } else {
      localStorage.removeItem('token')
    }
  }

  const login = async (credentials) => {
    try {
      const response = await userService.login(credentials)
      setToken(response.token)
      setUser(response.user)
      return response
    } catch (error) {
      throw error
    }
  }

  const register = async (userData) => {
    try {
      const response = await userService.register(userData)
      setToken(response.token)
      setUser(response.user)
      return response
    } catch (error) {
      throw error
    }
  }

  const logout = () => {
    setToken(null)
    setUser(null)
  }

  const fetchProfile = async () => {
    try {
      const response = await userService.getProfile()
      setUser(response)
      return response
    } catch (error) {
      throw error
    }
  }

  return {
    user,
    token,
    login,
    register,
    logout,
    fetchProfile
  }
}) 