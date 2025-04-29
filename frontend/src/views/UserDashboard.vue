<template>
  <div class="user-dashboard">
    <div class="max-w-4xl mx-auto space-y-8 w-full">
      <h1 class="text-4xl font-bold text-orange-500 text-center animate-text-focus-in">
        My Questions
      </h1>
      <p class="text-gray-600 text-lg text-center animate-fade-in">
        View your questions and their answers. Ask a new question below.
      </p>

      <div class="bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-orange-100 animate-slide-in-bottom">
        <h2 class="text-2xl font-semibold text-orange-500 mb-4">Ask a New Question</h2>
        <form @submit.prevent="createTicket" class="space-y-6">
          <div class="w-full">
            <label for="title" class="block text-sm font-medium text-gray-700 mb-2">Question Title</label>
            <input
              v-model="newTicket.title"
              type="text"
              id="title"
              placeholder="Enter your question title"
              class="input-base w-full"
              required
            />
          </div>
          <div class="w-full">
            <label for="question-body" class="block text-sm font-medium text-gray-700 mb-2">Your Question</label>
            <textarea
              v-model="newTicket.content"
              id="question-body"
              placeholder="Enter your question details..."
              rows="4"
              class="input-base w-full"
              required
            ></textarea>
          </div>
          <div class="flex justify-end mt-4">
            <button type="submit" class="button-primary">
              Submit Question
            </button>
          </div>
        </form>
      </div>

      <div class="space-y-6">
        <div v-for="ticket in tickets" :key="ticket.id" 
        
             class="bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-orange-100 transition-all duration-300 hover:shadow-xl hover:scale-[1.01]">
          <router-link :to="'/tickets/' + ticket.id" class="block">
            <h2 class="text-xl font-semibold text-orange-500 mb-2">{{ ticket.title }}</h2>
            <p class="text-gray-700 leading-relaxed mb-4">
              {{ ticket.content }}
            </p>

            <div class="mt-4 bg-green-50/50 border border-green-200 p-4 rounded-xl" v-if="ticket.status === 'CLOSED'">
              <h3 class="font-semibold text-green-600">Answer:</h3>
              <p class="text-gray-700">{{ ticket.answer }}</p>
            </div>
            <div class="mt-4 bg-blue-50/50 border border-blue-200 p-4 rounded-xl" v-else>
              <h3 class="font-semibold text-blue-600">Status:</h3>
              <p class="text-gray-700">{{ ticket.status === 'OPEN' ? 'Waiting for an answer' : 'In progress' }}</p>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { ticketService } from '@/services/api'

const router = useRouter()
const tickets = ref([])
const newTicket = ref({
  title: '',
  content: ''
})

const loadTickets = async () => {
  try {
    const response = await ticketService.getAll()
    tickets.value = response.data
  } catch (error) {
    console.error('Error loading tickets:', error)
  }
}

const createTicket = async () => {
  try {
    const response = await ticketService.create(newTicket.value)
    tickets.value.unshift(response.data)
    newTicket.value = { title: '', content: '' }
  } catch (error) {
    console.error('Error creating ticket:', error)
  }
}

onMounted(() => {
  loadTickets()
})
</script>

<style scoped>
@import '../assets/shared-styles.css';

/* Dashboard specific styles */
.user-dashboard {
  width: 100vw;
  min-height: calc(100vh - 64px);
  background-image: linear-gradient(to bottom right, #fef3c7, #fde68a);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
  margin-top: 64px;
}

/* Additional specific styles */
.space-y-6 > * + * {
  margin-top: 1.5rem;
}

.space-y-8 > * + * {
  margin-top: 2rem;
}

.border-orange-100 {
  border-color: #ffe5b4;
}

.hover\:scale-\[1\.01\]:hover {
  transform: scale(1.01);
}

.text-4xl {
  font-size: 2.25rem;
  line-height: 2.5rem;
}

.text-2xl {
  font-size: 1.5rem;
  line-height: 2rem;
}

.text-xl {
  font-size: 1.25rem;
  line-height: 1.75rem;
}

.text-lg {
  font-size: 1.125rem;
  line-height: 1.75rem;
}

.font-bold {
  font-weight: 700;
}

.font-semibold {
  font-weight: 600;
}

.leading-relaxed {
  line-height: 1.625;
}

.mb-2 {
  margin-bottom: 0.5rem;
}

.mb-4 {
  margin-bottom: 1rem;
}

.mt-4 {
  margin-top: 1rem;
}

.bg-green-50\/50 {
  background-color: rgba(220, 252, 231, 0.5);
}

.border-green-200 {
  border-color: #bbf7d0;
}

.text-green-600 {
  color: #16a34a;
}

.bg-blue-50\/50 {
  background-color: rgba(224, 242, 254, 0.5);
}

.border-blue-200 {
  border-color: #bfdbfe;
}

.text-blue-600 {
  color: #0369a1;
}
</style>
