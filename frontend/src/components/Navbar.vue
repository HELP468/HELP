<template>
  <header class="bg-blue-500 shadow-md rounded-b-lg">
    <nav class="container mx-auto px-4 py-3 flex items-center justify-between">
      <router-link to="/" class="text-white text-xl font-semibold">HELP</router-link>
      <div class="flex space-x-4">
        <router-link to="/login" class="text-gray-200 hover:text-white transition-colors duration-300">Login</router-link>
        <router-link to="/signup" class="text-gray-200 hover:text-white transition-colors duration-300">Signup</router-link>
        <router-link to="/admindashboard" class="text-gray-200 hover:text-white transition-colors duration-300">Admin</router-link>
        <router-link to="/userdashboard" class="text-gray-200 hover:text-white transition-colors duration-300">Questions</router-link>
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

.text-white {
  color: white;
}

.text-xl {
  font-size: 1.25rem;
  line-height: 1.75rem;
}

.font-semibold {
  font-weight: 600;
}

.text-gray-200 {
  color: #e5e7eb;
}

.hover\:text-white:hover {
  color: white;
}

.transition-colors {
  transition-property: color;
  transition-duration: 0.3s;
}

.duration-300 {
  transition-duration: 0.3s;
}

.bg-blue-500 {
  background-color: #3b82f6;
}

.shadow-md {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.rounded-b-lg {
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
}

/* Styles for router-link (if needed) */
.router-link-active {
  /* Style for the active link */
  font-weight: bold;
  color: #f5f5f5; /* Example: Change active link color */
}
</style>
