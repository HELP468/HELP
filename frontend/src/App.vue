<template>
  <div class="min-h-screen flex flex-col">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style>
/* optional: make body always white */
body {
  background-color: #f9fafb;
}
</style>
