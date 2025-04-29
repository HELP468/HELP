<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md shadow-lg">
    <nav class="container mx-auto px-4 py-3 flex items-center justify-between">
      <router-link to="/" class="text-orange-500 text-xl font-semibold hover:text-orange-400 transition-colors duration-300">HELP</router-link>
      <div class="flex space-x-4">
        <router-link to="/login" class="text-gray-300 hover:text-orange-500 transition-colors duration-300">Login</router-link>
        <router-link to="/signup" class="text-gray-300 hover:text-orange-500 transition-colors duration-300">Signup</router-link>
        <router-link to="/admindashboard" class="text-gray-300 hover:text-orange-500 transition-colors duration-300">Admin</router-link>
        <router-link to="/userdashboard" class="text-gray-300 hover:text-orange-500 transition-colors duration-300">Questions</router-link>
        <router-link to="/tickets/1" class="text-gray-300 hover:text-orange-500 transition-colors duration-300 flex items-center">
          <span class="mr-1">💬</span> Chat
        </router-link>
      </div>
    </nav>
  </header>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Navbar',
  setup() {
    return {};
  },
});
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;
}

.flex {
  display: flex;
}

.items-center {
  align-items: center;
}

.justify-between {
  justify-content: space-between;
}

.space-x-4 {
  margin-left: 1rem;
  display: flex;
  gap: 1rem;
}

.text-orange-500 {
  color: #f97316;
}

.text-orange-400 {
  color: #fb923c;
}

.text-xl {
  font-size: 1.25rem;
  line-height: 1.75rem;
}

.font-semibold {
  font-weight: 600;
}

.text-gray-300 {
  color: #d1d5db;
}

.hover\:text-orange-500:hover {
  color: #f97316;
}

.transition-colors {
  transition-property: color;
  transition-duration: 0.3s;
}

.duration-300 {
  transition-duration: 0.3s;
}

.bg-black\/80 {
  background-color: rgba(0, 0, 0, 0.8);
}

.backdrop-blur-md {
  backdrop-filter: blur(10px);
}

.shadow-lg {
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1),
    0 8px 10px -6px rgba(0, 0, 0, 0.05);
}

.fixed {
  position: fixed;
}

.top-0 {
  top: 0;
}

.left-0 {
  left: 0;
}

.right-0 {
  right: 0;
}

.z-50 {
  z-index: 50;
}

/* Styles for router-link (if needed) */
.router-link-active {
  /* Style for the active link */
  font-weight: bold;
  color: #f97316; /* Orange color for active link */
}
</style>
