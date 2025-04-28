<template>
  <div class="p-8 bg-gray-50 min-h-screen">
    <h1 class="text-4xl font-bold text-orange-500 mb-8">Questions to Answer</h1>

    <!-- List of Unanswered Questions -->
    <div class="space-y-6">
      <!-- Example Unanswered Question -->
      <div class="bg-white p-6 rounded-2xl shadow-md">
        <h2 class="text-xl font-bold text-orange-500">Unanswered Question Title</h2>
        <p class="mt-2 text-gray-700">Here is the content of the question...</p>

        <!-- Admin answer form -->
        <form class="mt-4 space-y-4">
          <textarea placeholder="Write your answer..." rows="3" class="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"></textarea>
          <button type="submit" class="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg">Submit Answer</button>
        </form>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'AdminDashboard'
}
</script>
