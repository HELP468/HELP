<template>
  <div class="bg-white p-6 rounded-2xl shadow-md mb-4">
    <h2 class="text-xl font-bold text-orange-500">{{ question.title }}</h2>
    <p class="mt-2 text-gray-700">{{ question.body }}</p>

    <div v-if="question.answers?.length" class="mt-4">
      <h3 class="font-semibold text-gray-800">Answers:</h3>
      <ul class="list-disc list-inside text-gray-600">
        <li v-for="(answer, index) in question.answers" :key="index">{{ answer }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'QuestionCard',
  props: {
    question: {
      type: Object,
      required: true
    }
  }
}
</script>
