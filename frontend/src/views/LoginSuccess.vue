<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-orange-100 to-orange-50 p-6">
    <div class="text-center mb-8 animate-fade-in w-full">
      <div class="mb-4 text-6xl">👋</div>
      <h1 class="text-4xl font-bold text-orange-500">Welcome Back!</h1>
      <p class="text-gray-600 mt-2">You have successfully logged in.</p>
    </div>
    <div class="w-full max-w-md bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-lg space-y-6 animate-slide-in-bottom">
      <p class="text-center text-gray-700">
        Redirecting you to your dashboard...
      </p>
      <div class="flex justify-center">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const router = useRouter()
const authStore = useAuthStore()

onMounted(() => {
  // Redirect based on user role
  setTimeout(() => {
    const user = authStore.user
    if (user?.role === 'admin') {
      router.push('/admin')
    } else {
      router.push('/dashboard')
    }
  }, 2000)
})
</script>

<style scoped>
.animate-fade-in {
  animation: fade-in 0.8s ease-out;
}

.animate-slide-in-bottom {
  animation: slide-in-bottom 0.8s ease-out 0.3s;
}

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

.animate-spin {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style> 