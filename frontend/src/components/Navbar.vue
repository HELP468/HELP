<template>
  <nav class="bg-orange-500 text-white px-6 py-4 flex justify-between items-center">
    <div class="text-2xl font-bold">
      <router-link to="/">HELP</router-link>
    </div>
    <div class="space-x-4">
      <router-link to="/user" class="hover:underline">My Questions</router-link>
      <router-link to="/admin" class="hover:underline">Admin</router-link>
      <router-link to="/login" class="hover:underline">Login</router-link>
      <router-link to="/signup" class="hover:underline">Sign Up</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>
