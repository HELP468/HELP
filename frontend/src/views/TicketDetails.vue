<template>
  <div class="ticket-details">
    <div class="text-center mb-8 animate-fade-in w-full">
      <h1 class="text-4xl font-bold text-orange-500">Ticket Details</h1>
      <p class="text-gray-600 mt-2">View and manage your ticket information.</p>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-slide-in-bottom w-full max-w-6xl">
      <div class="lg:col-span-1">
        <div class="bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-lg space-y-6">
          <h2 class="text-2xl font-semibold text-orange-500">Ticket Information</h2>
          <div class="space-y-4">
            <div class="space-y-2">
              <label class="block text-sm font-medium text-gray-700">Status</label>
              <select
                v-model="ticket.status"
                class="input-base"
                :style="{ color: ticket.status === 'OPEN' ? 'black' : '' }"
              >
                <option value="OPEN">Open</option>
                <option value="IN_PROGRESS">In Progress</option>
                <option value="CLOSED">Closed</option>
              </select>
            </div>
            <div class="space-y-2">
              <label class="block text-sm font-medium text-gray-700">Priority</label>
              <select v-model="ticket.priority" class="input-base">
                <option value="LOW">Low</option>
                <option value="MEDIUM">Medium</option>
                <option value="HIGH">High</option>
              </select>
            </div>
            <div class="space-y-2">
              <label class="block text-sm font-medium text-gray-700">Category</label>
              <input type="text" v-model="ticket.category" class="input-base" />
            </div>
            <div class="space-y-2">
              <label class="block text-sm font-medium text-gray-700">Created By</label>
              <p class="text-gray-900">{{ ticket.createdBy?.email || 'Loading...' }}</p>
            </div>
            <div class="space-y-2">
              <label class="block text-sm font-medium text-gray-700">Created At</label>
              <p class="text-gray-900">{{ formatDate(ticket.createdAt) }}</p>
            </div>
            <div class="space-y-2">
              <label class="block text-sm font-medium text-gray-700">Last Updated</label>
              <p class="text-gray-900">{{ formatDate(ticket.updatedAt) }}</p>
            </div>
          </div>
          <button @click="saveChanges" class="button-primary w-full">
            Save Changes
          </button>
        </div>
      </div>
      <div class="lg:col-span-2">
        <div class="bg-white/90 backdrop-blur-md rounded-2xl shadow-lg">
          <ChatInterface :ticket-id="ticketId" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { ticketService } from '../services/api'
import ChatInterface from '../components/chat/ChatInterface.vue'

const route = useRoute()
const ticketId = route.params.id
const ticket = ref({
  id: ticketId,
  title: 'Test Ticket',
  content: 'This is a test ticket for chat functionality',
  status: 'OPEN', // Initial value - might be overwritten
  priority: 'MEDIUM',
  category: 'General',
  createdBy: { email: 'test@example.com' },
  createdAt: new Date().toISOString()
})

const formatDate = (date) => {
  return new Date(date).toLocaleString()
}

const loadTicket = async () => {
  try {
    const data = await ticketService.getById(ticketId)
    if (data) {
      ticket.value = data
    }
    // If no ticket is found, we'll use the test ticket defined above
  } catch (error) {
    console.error('Error loading ticket:', error)
    // If there's an error, we'll use the test ticket defined above
  }
}

const saveChanges = async () => {
  try {
    await ticketService.update(ticketId, {
      status: ticket.value.status,
      priority: ticket.value.priority,
      category: ticket.value.category
    })
    // Show success message or handle response
  } catch (error) {
    console.error('Error updating ticket:', error)
  }
}

onMounted(() => {
  loadTicket()
})
</script>

<style scoped>
@import '../assets/shared-styles.css';

/* Ticket details specific styles */
.ticket-details {
  width: 100%;
  min-height: 100vh;
  background-image: linear-gradient(to bottom right, #fef3c7, #fde68a);
  padding: 5rem 2rem 2rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
  box-sizing: border-box;
}

/* Animations */
@keyframes fade-in {
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
}

@keyframes slide-in-bottom {
  0% { opacity: 0; transform: translateY(50px); }
  100% { opacity: 1; transform: translateY(0); }
}

.animate-fade-in {
  animation: fade-in 0.8s ease-out;
}

.animate-slide-in-bottom {
  animation: slide-in-bottom 0.8s ease-out 0.3s;
}

/* Additional specific styles */
.space-y-2 > * + * {
  margin-top: 0.5rem;
}

.space-y-4 > * + * {
  margin-top: 1rem;
}

.space-y-6 > * + * {
  margin-top: 1.5rem;
}

.mb-8 {
  margin-bottom: 2rem;
}

.text-4xl {
  font-size: 2.25rem;
  line-height: 2.5rem;
}

.text-2xl {
  font-size: 1.5rem;
  line-height: 2rem;
}

.font-bold {
  font-weight: 700;
}

.font-semibold {
  font-weight: 600;
}

.font-medium {
  font-weight: 500;
}

.text-gray-700 {
  color: #374151;
}

.text-gray-900 {
  color: #111827;
}

.text-gray-600 {
  color: #4b5563;
}

.mt-2 {
  margin-top: 0.5rem;
}

.p-8 {
  padding: 2rem;
}

.rounded-2xl {
  border-radius: 1rem;
}

.shadow-lg {
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.05);
}

.bg-white\/90 {
  background-color: rgba(255, 255, 255, 0.9);
}

.backdrop-blur-md {
  backdrop-filter: blur(10px);
}

.max-w-6xl {
  max-width: 72rem;
}
</style>