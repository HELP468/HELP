<template>
  <div class="admin-dashboard">
    <div class="max-w-4xl space-y-8 w-full">
      <h1 class="text-4xl font-bold text-orange-500 text-center animate-text-focus-in">
        Questions to Answer
      </h1>
      <div class="space-y-6 animate-slide-in-bottom w-full">
        <div v-for="ticket in tickets" :key="ticket.id" 
             class="bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-orange-100 transition-all duration-300 hover:shadow-xl hover:scale-[1.01] w-full">
          <router-link :to="'/tickets/' + ticket.id" class="block">
            <div class="flex justify-between items-start mb-4">
              <h2 class="text-2xl font-semibold text-orange-500">
                {{ ticket.title }}
              </h2>
              <span :class="[
                'px-3 py-1 rounded-full text-sm font-medium',
                {
                  'bg-green-100 text-green-800': ticket.status === 'OPEN',
                  'bg-yellow-100 text-yellow-800': ticket.status === 'IN_PROGRESS',
                  'bg-red-100 text-red-800': ticket.status === 'CLOSED'
                }
              ]">
                {{ ticket.status }}
              </span>
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              {{ ticket.content }}
            </p>
            <div class="flex justify-between items-center text-sm text-gray-500">
              <span>From: {{ ticket.createdBy?.email }}</span>
              <span>{{ formatDate(ticket.createdAt) }}</span>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { ticketService } from '../services/api'

const tickets = ref([])

const formatDate = (date) => {
  return new Date(date).toLocaleString()
}

const loadTickets = async () => {
  try {
    const data = await ticketService.getAll()
    tickets.value = data
  } catch (error) {
    console.error('Error loading tickets:', error)
  }
}

onMounted(() => {
  loadTickets()
})
</script>

<style scoped>
@import '../assets/shared-styles.css';

/* Dashboard specific styles */
.admin-dashboard {
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

.font-bold {
  font-weight: 700;
}

.font-semibold {
  font-weight: 600;
}

.leading-relaxed {
  line-height: 1.625;
}

.mb-4 {
  margin-bottom: 1rem;
}

/* Status badge styles */
.bg-green-100 {
  background-color: #dcfce7;
}

.text-green-800 {
  color: #166534;
}

.bg-yellow-100 {
  background-color: #fef9c3;
}

.text-yellow-800 {
  color: #854d0e;
}

.bg-red-100 {
  background-color: #fee2e2;
}

.text-red-800 {
  color: #991b1b;
}
</style>

