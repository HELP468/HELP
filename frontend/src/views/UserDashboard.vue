<template>
  <div class="p-8 bg-gray-50 min-h-screen">
    <h1 class="text-4xl font-bold text-orange-500 mb-8">My Questions</h1>

    <!-- Submit a New Question -->
    <div class="bg-white p-6 rounded-2xl shadow-md mb-8">
      <h2 class="text-2xl font-semibold mb-4">Ask a New Question</h2>
      <form class="space-y-4">
        <input type="text" placeholder="Title" class="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400" />
        <textarea placeholder="Your question..." rows="4" class="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"></textarea>
        <button type="submit" class="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg">Submit</button>
      </form>
    </div>

    <!-- List of Questions -->
    <div class="space-y-6">
      <!-- Example Question Card -->
      <div class="bg-white p-6 rounded-2xl shadow-md">
        <h2 class="text-xl font-bold text-orange-500">Example Question Title</h2>
        <p class="mt-2 text-gray-700">This is the body of the question...</p>

        <div class="mt-4 bg-green-100 p-4 rounded-lg" v-if="true">
          <h3 class="font-semibold">Answer:</h3>
          <p>This is the admin's answer to your question.</p>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'UserDashboard'
}
</script>
