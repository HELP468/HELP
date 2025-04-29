<template>
  <div class="chat-interface">
    <!-- Chat Header -->
    <div class="chat-header">
      <h2 class="text-2xl font-semibold text-orange-500">
        {{ ticket ? `Ticket #${ticket.id} - ${ticket.title || 'Untitled'}` : 'Loading ticket...' }}
      </h2>
      <p class="text-sm text-gray-600 mt-1">
        Status: <span :class="statusClass">{{ ticket?.status || 'Loading' }}</span>
      </p>
    </div>

    <!-- Loading State -->
    <div v-if="isLoading" class="loading-container">
      <div class="loading-spinner"></div>
      <p class="loading-text">Loading messages...</p>
    </div>

    <!-- Messages Container -->
    <div v-else class="messages-container" ref="messagesContainer">
      <div v-if="messages.length === 0" class="empty-state">
        <p>No messages yet. Start the conversation!</p>
      </div>
      <div v-for="message in messages" :key="message.id || message.timestamp" 
           :class="['message-wrapper', isSentByMe(message) ? 'sent' : 'received']">
        <div class="message-bubble">
          <div class="message-content">{{ message.content }}</div>
          <div class="message-timestamp">{{ formatTime(message.timestamp || message.createdAt) }}</div>
        </div>
      </div>
    </div>

    <!-- Message Input -->
    <div class="message-input-container">
      <form @submit.prevent="sendMessage" class="message-form">
        <input
          v-model="newMessage"
          type="text"
          placeholder="Type your message..."
          class="message-input"
          :disabled="!ticket || ticket.status === 'CLOSED'"
        />
        <button
          type="submit"
          class="send-button"
          :disabled="!newMessage.trim() || !ticket || ticket.status === 'CLOSED'"
        >
          Send
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed, nextTick } from 'vue'
import { messageService, ticketService } from '@/services/api'
import websocketService from '@/services/websocket'

const props = defineProps({
  ticketId: {
    type: String,
    required: true
  }
})

const currentUserId = '1' // Temporary hardcoded user ID for testing
const ticket = ref(null)
const messages = ref([
  {
    id: 1,
    content: 'Welcome to the chat! This is a test message.',
    sender: 'system',
    timestamp: new Date().toISOString()
  }
])
const newMessage = ref('')
const messagesContainer = ref(null)
const isLoading = ref(false)

const statusClass = computed(() => {
  if (!ticket.value) return ''
  return {
    'OPEN': 'text-green-600',
    'IN_PROGRESS': 'text-yellow-600',
    'CLOSED': 'text-red-600'
  }[ticket.value.status] || 'text-gray-600'
})

const formatTime = (date) => {
  return new Date(date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
}

const isSentByMe = (message) => {
  return message.sender === 'user' || message.senderId === currentUserId
}

const scrollToBottom = async () => {
  await nextTick()
  if (messagesContainer.value) {
    messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight
  }
}

const loadTicket = async () => {
  try {
    isLoading.value = true
    const response = await ticketService.getById(props.ticketId)
    ticket.value = response.data || response
    await loadMessages()
  } catch (error) {
    console.error('Error loading ticket:', error)
    ticket.value = {
      id: props.ticketId,
      title: 'Test Ticket',
      status: 'OPEN'
    }
  } finally {
    isLoading.value = false
  }
}

const loadMessages = async () => {
  try {
    isLoading.value = true
    const data = await messageService.getByTicketId(props.ticketId)
    if (data && data.length > 0) {
      messages.value = data
    }
    await scrollToBottom()
  } catch (error) {
    console.error('Error loading messages:', error)
    // If there's an error, we'll keep the test message
  } finally {
    isLoading.value = false
  }
}

const handleNewMessage = (message) => {
  console.log('Received new message:', message)
  if (message.ticketId === props.ticketId) {
    messages.value.push(message)
    scrollToBottom()
  }
}

const sendMessage = async () => {
  if (!newMessage.value.trim()) return

  const message = {
    id: Date.now().toString(),
    ticketId: props.ticketId,
    content: newMessage.value,
    sender: 'user',
    senderId: currentUserId,
    timestamp: new Date().toISOString()
  }

  try {
    // Add message to local state immediately
    messages.value.push(message)
    newMessage.value = ''
    await scrollToBottom()

    // Try to send through WebSocket
    websocketService.sendMessage(message)

    // Try to save to backend
    try {
      await messageService.create(message)
    } catch (error) {
      console.error('Error saving message:', error)
      // Continue even if saving fails
    }
  } catch (error) {
    console.error('Error sending message:', error)
  }
}

onMounted(() => {
  console.log('ChatInterface mounted')
  loadTicket()
  websocketService.connect()
  websocketService.subscribe(handleNewMessage)
  console.log('WebSocket connected and subscribed')
})

onUnmounted(() => {
  websocketService.unsubscribe(handleNewMessage)
})
</script>

<style scoped>
.chat-interface {
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: #f5f5f5;
  border-radius: 12px;
  overflow: hidden;
}

.chat-header {
  background-color: white;
  padding: 1rem;
  border-bottom: 1px solid #e5e5e5;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.loading-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 500px;
  background-color: #f5f5f5;
}

.loading-spinner {
  width: 40px;
  height: 40px;
  border: 3px solid #f3f3f3;
  border-top: 3px solid #f97316;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-bottom: 1rem;
}

.loading-text {
  color: #666;
  font-size: 0.9rem;
}

.messages-container {
  flex: 1;
  overflow-y: auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  background-color: #f5f5f5;
}

.empty-state {
  text-align: center;
  color: #666;
  padding: 2rem;
}

.message-wrapper {
  display: flex;
  margin-bottom: 0.5rem;
  max-width: 80%;
}

.message-wrapper.sent {
  margin-left: auto;
}

.message-wrapper.received {
  margin-right: auto;
}

.message-bubble {
  padding: 0.75rem 1rem;
  border-radius: 18px;
  position: relative;
  max-width: 100%;
}

.sent .message-bubble {
  background-color: #f97316;
  color: white;
  border-bottom-right-radius: 4px;
}

.received .message-bubble {
  background-color: white;
  color: #333;
  border-bottom-left-radius: 4px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

.message-content {
  margin-bottom: 0.25rem;
  word-wrap: break-word;
}

.message-timestamp {
  font-size: 0.7rem;
  opacity: 0.7;
  text-align: right;
}

.message-input-container {
  background-color: white;
  padding: 1rem;
  border-top: 1px solid #e5e5e5;
}

.message-form {
  display: flex;
  gap: 0.5rem;
}

.message-input {
  flex: 1;
  padding: 0.75rem 1rem;
  border: 1px solid #e5e5e5;
  border-radius: 24px;
  outline: none;
  font-size: 0.9rem;
  transition: border-color 0.2s;
}

.message-input:focus {
  border-color: #f97316;
}

.send-button {
  background-color: #f97316;
  color: white;
  border: none;
  border-radius: 24px;
  padding: 0.75rem 1.5rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;
}

.send-button:hover:not(:disabled) {
  background-color: #ea580c;
}

.send-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* Scrollbar styling */
.messages-container::-webkit-scrollbar {
  width: 6px;
}

.messages-container::-webkit-scrollbar-track {
  background: transparent;
}

.messages-container::-webkit-scrollbar-thumb {
  background-color: rgba(249, 115, 22, 0.3);
  border-radius: 3px;
}

.messages-container::-webkit-scrollbar-thumb:hover {
  background-color: rgba(249, 115, 22, 0.5);
}
</style> 