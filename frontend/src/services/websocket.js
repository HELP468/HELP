import { useAuthStore } from '@/stores/auth'

// WebSocket service for real-time communication
class WebSocketService {
  constructor() {
    this.socket = null;
    this.subscribers = new Set();
    this.isConnected = false;
    this.reconnectAttempts = 0;
    this.maxReconnectAttempts = 5;
    this.reconnectDelay = 3000; // 3 seconds
  }

  connect() {
    if (this.socket && this.socket.readyState === WebSocket.OPEN) {
      console.log('WebSocket already connected');
      return;
    }

    try {
      // Connect to the WebSocket server
      this.socket = new WebSocket('ws://localhost:3034/ws');
      
      this.socket.onopen = () => {
        console.log('WebSocket connected');
        this.isConnected = true;
        this.reconnectAttempts = 0;
      };
      
      this.socket.onmessage = (event) => {
        try {
          const message = JSON.parse(event.data);
          console.log('WebSocket message received:', message);
          this.notifySubscribers(message);
        } catch (error) {
          console.error('Error parsing WebSocket message:', error);
        }
      };
      
      this.socket.onclose = () => {
        console.log('WebSocket disconnected');
        this.isConnected = false;
        this.attemptReconnect();
      };
      
      this.socket.onerror = (error) => {
        console.error('WebSocket error:', error);
      };
    } catch (error) {
      console.error('Error connecting to WebSocket:', error);
      this.attemptReconnect();
    }
  }

  attemptReconnect() {
    if (this.reconnectAttempts < this.maxReconnectAttempts) {
      this.reconnectAttempts++;
      console.log(`Attempting to reconnect (${this.reconnectAttempts}/${this.maxReconnectAttempts})...`);
      setTimeout(() => this.connect(), this.reconnectDelay);
    } else {
      console.error('Max reconnection attempts reached');
    }
  }

  subscribe(callback) {
    this.subscribers.add(callback);
    return () => this.unsubscribe(callback);
  }

  unsubscribe(callback) {
    this.subscribers.delete(callback);
  }

  notifySubscribers(message) {
    this.subscribers.forEach(callback => {
      try {
        callback(message);
      } catch (error) {
        console.error('Error in subscriber callback:', error);
      }
    });
  }

  sendMessage(message) {
    if (!this.isConnected) {
      console.warn('WebSocket not connected, attempting to connect...');
      this.connect();
      // Wait a bit for connection to establish
      setTimeout(() => this.sendMessage(message), 1000);
      return;
    }

    try {
      const messageString = JSON.stringify(message);
      this.socket.send(messageString);
      console.log('Message sent through WebSocket:', message);
    } catch (error) {
      console.error('Error sending message through WebSocket:', error);
    }
  }

  disconnect() {
    if (this.socket) {
      this.socket.close();
      this.socket = null;
      this.isConnected = false;
    }
  }
}

// Create a singleton instance
const websocketService = new WebSocketService();

export default websocketService; 