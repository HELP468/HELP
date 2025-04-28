<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
    <h1 class="text-3xl font-bold text-orange-500 mb-6">Sign Up</h1>
    <form class="w-full max-w-sm bg-white p-8 rounded-2xl shadow-md space-y-4">
      <input type="text" placeholder="Name" class="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400" />
      <input type="email" placeholder="Email" class="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400" />
      <input type="password" placeholder="Password" class="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400" />
      <button type="submit" class="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg">Create Account</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Signup'
}
</script>
