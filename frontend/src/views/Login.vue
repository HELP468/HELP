<template>
  <div class="login-container">
    <div class="text-center mb-8 animate-fade-in w-full">
      <h1 class="text-4xl font-bold text-orange-500">Welcome Back!</h1>
      <p class="text-gray-600 mt-2">Login to your account to continue.</p>
    </div>
    <form @submit.prevent="handleSubmit" class="w-full max-w-md bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-lg space-y-6 animate-slide-in-bottom">
      <div class="space-y-2">
        <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
        <input
          v-model="formData.email"
          type="email"
          id="email"
          placeholder="Enter your email"
          class="input-base"
          required
        />
      </div>
      <div class="space-y-2">
        <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
        <input
          v-model="formData.password"
          type="password"
          id="password"
          placeholder="Enter your password"
          class="input-base"
          required
        />
      </div>
      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <input
            id="remember-me"
            name="remember-me"
            type="checkbox"
            class="h-4 w-4 rounded border-gray-300 text-orange-500 focus:ring-orange-500"
          />
          <label for="remember-me" class="ml-2 block text-sm text-gray-900">Remember me</label>
        </div>
        <a href="#" class="text-sm font-medium text-orange-500 hover:text-orange-600 transition-colors duration-200">
          Forgot your password?
        </a>
      </div>
      <button type="submit" class="button-primary w-full">
        Login to your Account
      </button>
      <div class="mt-6 pt-6 border-t border-orange-200 text-center text-gray-600">
        <p>
          Don't have an account?
          <router-link to="/signup" class="text-orange-500 font-semibold hover:underline ml-1">
            Sign up
          </router-link>
        </p>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const router = useRouter()
const authStore = useAuthStore()

const formData = ref({
  email: '',
  password: ''
})

const handleSubmit = async () => {
  try {
    console.log('Submitting login form with data:', formData.value)
    const response = await authStore.login(formData.value)
    console.log('Login successful:', response)
    router.push('/login-success')
  } catch (error) {
    console.error('Login failed:', error)
    alert('Login failed: ' + (error.message || 'Unknown error'))
  }
}
</script>

<style scoped>
@import '../assets/shared-styles.css';

/* Login specific styles */
.login-container {
  width: 100vw;
  min-height: calc(100vh - 64px);
  background-image: linear-gradient(to bottom right, #fef3c7, #fde68a);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
  margin-top: 64px;
}

/* Additional specific styles */
.space-y-2 > * + * {
  margin-top: 0.5rem;
}

.space-y-6 > * + * {
  margin-top: 1.5rem;
}

.h-4 {
  height: 1rem;
}

.w-4 {
  width: 1rem;
}

.rounded {
  border-radius: 0.25rem;
}

.border-gray-300 {
  border-color: #d1d5db;
}

.text-gray-900 {
  color: #111827;
}

.ml-2 {
  margin-left: 0.5rem;
}

.border-t {
  border-top-width: 1px;
}

.border-orange-200 {
  border-color: #fecaca;
}

.text-4xl {
  font-size: 2.25rem;
  line-height: 2.5rem;
}

.font-bold {
  font-weight: 700;
}

.font-medium {
  font-weight: 500;
}

.font-semibold {
  font-weight: 600;
}
</style>
