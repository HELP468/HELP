<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-orange-100 to-orange-50 p-8">
    <div class="text-center animate-fade-in">
      <h1 class="text-6xl font-extrabold text-orange-500 mb-4 drop-shadow-lg">Welcome to HELP</h1>
      <p class="text-xl text-orange-600 mb-8">Your platform to ask questions and get answers.</p>
      <div class="flex space-x-6 justify-center">
        <router-link 
          to="/login" 
          class="bg-orange-500 hover:bg-orange-600 active:scale-95 transition transform hover:scale-105 text-white font-semibold py-3 px-6 rounded-xl shadow-lg"
        >
          Login
        </router-link>
        <router-link 
          to="/signup" 
          class="bg-white hover:bg-gray-100 active:scale-95 transition transform hover:scale-105 text-orange-500 font-semibold border-2 border-orange-500 py-3 px-6 rounded-xl shadow-lg"
        >
          Sign Up
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
@keyframes fade-in {
  0% { opacity: 0; transform: translateY(-10px); }
  100% { opacity: 1; transform: translateY(0); }
}

.animate-fade-in {
  animation: fade-in 1s ease-out;
}
</style>
