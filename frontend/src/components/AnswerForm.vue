<template>
  <form @submit.prevent="submitAnswer" class="space-y-4 bg-white p-6 rounded-2xl shadow-md mt-4">
    <textarea
      v-model="answer"
      placeholder="Write an answer..."
      rows="3"
      class="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
      required
    ></textarea>
    <button type="submit" class="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg">
      Submit Answer
    </button>
  </form>
</template>

<script>
export default {
  name: 'AnswerForm',
  data() {
    return {
      answer: ''
    }
  },
  methods: {
    submitAnswer() {
      this.$emit('submit-answer', this.answer)
      this.answer = ''
    }
  }
}
</script>
