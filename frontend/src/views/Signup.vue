<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-orange-100 to-orange-50 p-6">
    <div class="text-center mb-8 animate-fade-in w-full">
      <h1 class="text-4xl font-bold text-orange-500">Join HELP</h1>
      <p class="text-gray-600 mt-2">Create an account to get started.</p>
    </div>
    <form @submit.prevent="handleSubmit" class="w-full max-w-md bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-lg space-y-6 animate-slide-in-bottom">
      <div class="space-y-2">
        <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
        <input
          v-model="formData.username"
          type="text"
          id="name"
          placeholder="Enter your name"
          class="w-full px-4 py-3 border border-orange-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-300"
          required
        />
      </div>
      <div class="space-y-2">
        <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
        <input
          v-model="formData.email"
          type="email"
          id="email"
          placeholder="Enter your email"
          class="w-full px-4 py-3 border border-orange-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-300"
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
          class="w-full px-4 py-3 border border-orange-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-300"
          required
        />
      </div>
      <div class="space-y-2">
        <label for="role" class="block text-sm font-medium text-gray-700">Role</label>
        <select
          v-model="formData.role"
          id="role"
          class="w-full px-4 py-3 border border-orange-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-300"
          required
        >
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
      </div>
      <div class="flex items-center">
        <input
          id="agree-terms"
          name="agree-terms"
          type="checkbox"
          class="h-4 w-4 rounded border-gray-300 text-orange-500 focus:ring-orange-500"
        />
        <label for="agree-terms" class="ml-2 block text-sm text-gray-900">
          I agree to the
          <a href="#" class="text-orange-500 hover:text-orange-600 transition-colors duration-200">
            Terms of Service
          </a>
          and
          <a href="#" class="text-orange-500 hover:text-orange-600 transition-colors duration-200">
            Privacy Policy
          </a>
        </label>
      </div>
      <button
        type="submit"
        class="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
      >
        Create Account
      </button>
      <div class="mt-6 pt-6 border-t border-orange-200 text-center text-gray-600">
        <p>
          Already have an account?
          <router-link to="/login" class="text-orange-500 font-semibold hover:underline ml-1">
            Log in
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
  username: '',
  email: '',
  password: '',
  role: 'user'
})

const handleSubmit = async () => {
  try {
    console.log('Submitting registration form with data:', formData.value)
    const response = await authStore.register(formData.value)
    console.log('Registration successful:', response)
    router.push('/registration-success')
  } catch (error) {
    console.error('Registration failed:', error)
    alert('Registration failed: ' + (error.message || 'Unknown error'))
  }
}
</script>

<style scoped>
/* Reset styles to ensure full-screen width */
body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

html {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

/* Animations */
@keyframes fade-in {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slide-in-bottom {
  0% {
    opacity: 0;
    transform: translateY(50px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.8s ease-out;
}

.animate-slide-in-bottom {
  animation: slide-in-bottom 0.8s ease-out 0.3s;
}

/* Custom Styles */
.bg-gradient-to-br {
  background-image: linear-gradient(to bottom right, #fef3c7, #fde68a);
  overflow-x: hidden; /* Prevent horizontal scrollbar */
  width: 100vw; /* Ensure full viewport width */
}

.text-orange-500 {
  color: #f97316;
}

.text-orange-600 {
  color: #ed8936;
}

.hover\:bg-orange-600:hover {
  background-color: #ed8936;
}

.hover\:text-orange-600:hover {
  color: #ed8936;
}

.text-white {
  color: #fff;
}

.font-bold {
  font-weight: 600;
}

.py-3 {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
}

.rounded-lg {
  border-radius: 0.5rem;
}

.space-y-4 > * + * {
  margin-top: 1rem;
}

.w-full {
  width: 100%;
  overflow-x: hidden; /* Added to ensure full width, prevent scroll */
}

.max-w-sm {
  max-width: 24rem;
}

.bg-white {
  background-color: #fff;
}

.p-6 {
  padding: 1.5rem;
}

.rounded-2xl {
  border-radius: 1.25rem;
}

.shadow-md {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.space-y-6 > * + * {
  margin-top: 1.5rem;
}

.px-4 {
  padding-left: 1rem;
  padding-right: 1rem;
}

.border {
  border-width: 1px;
}

.border-orange-300 {
  border-color: #fdba74;
}

.focus\:outline-none:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
}

.focus\:ring-2:focus {
  --tw-ring-inset: var(--tw-empty, );
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: #f97316;
  --tw-ring-offset-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}

.focus\:border-transparent:focus {
  border-color: transparent;
}

.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.duration-300 {
  transition-duration: 300ms;
}

.text-sm {
  font-size: 0.875rem;
  line-height: 1.25rem;
  overflow-x: hidden;
}

.font-medium {
  font-weight: 500;
}

.text-gray-700 {
  color: #4b5563;
}

.flex {
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
  width: 100vw; /* Ensure full viewport width */
}

.items-center {
  align-items: center;
}

.justify-between {
  justify-content: space-between;
}

.ml-2 {
  margin-left: 0.5rem;
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

.mt-6 {
  margin-top: 1.5rem;
}

.pt-6 {
  padding-top: 1.5rem;
}

.border-t {
  border-top-width: 1px;
}

.border-orange-200 {
  border-color: #fecaca;
}

.text-center {
  text-align: center;
  overflow-x: hidden;
  width: 100vw; /* Ensure full viewport width */
}

.text-gray-600 {
  color: #6b7280;
}

.font-semibold {
  font-weight: 600;
}

.hover\:underline:hover {
  text-decoration-line: underline;
}

.bg-white\/90 {
  background-color: rgba(255, 255, 255, 0.9);
}

.backdrop-blur-md {
  backdrop-filter: blur(10px);
}

.min-h-screen {
  min-height: 100vh;
  overflow-x: hidden;
  width: 100vw; /* Ensure full viewport width */
}
</style>
