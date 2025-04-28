<template>
  <form @submit.prevent="submitQuestion" class="space-y-4 bg-white p-6 rounded-2xl shadow-md mb-6">
    <input
      v-model="title"
      type="text"
      placeholder="Question Title"
      class="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
      required
    />
    <textarea
      v-model="body"
      placeholder="Your question..."
      rows="4"
      class="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
      required
    ></textarea>
    <button type="submit" class="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg">
      Ask Question
    </button>
  </form>
</template>

<script>
export default {
  name: 'QuestionForm',
  data() {
    return {
      title: '',
      body: ''
    }
  },
  methods: {
    submitQuestion() {
      this.$emit('submit-question', { title: this.title, body: this.body })
      this.title = ''
      this.body = ''
    }
  }
}
</script>
