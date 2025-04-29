<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-orange-100 to-orange-50 p-6">
    <div class="text-center mb-8 animate-fade-in w-full">
      <div class="mb-4 text-6xl">🎉</div>
      <h1 class="text-4xl font-bold text-orange-500">Registration Successful!</h1>
      <p class="text-gray-600 mt-2">Your account has been created successfully.</p>
    </div>
    <div class="w-full max-w-md bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-lg space-y-6 animate-slide-in-bottom">
      <p class="text-center text-gray-700">
        You can now log in with your email and password.
      </p>
      <router-link 
        to="/login" 
        class="block w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-3 rounded-full text-center shadow-lg transition-all duration-300 transform hover:scale-105"
      >
        Go to Login
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// Automatically redirect to login after 5 seconds
onMounted(() => {
  setTimeout(() => {
    router.push('/login')
  }, 5000)
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
</style> 