const API_URL = '/api';

// Helper function to handle API responses
const handleResponse = async (response) => {
  if (!response.ok) {
    if (response.status === 401) {
      // Handle unauthorized access
      window.location.href = '/login';
      throw new Error('Unauthorized');
    }
    const error = await response.json();
    throw new Error(error.message || 'An error occurred');
  }
  return response.json();
};

// Helper function to get headers with auth token
const getHeaders = () => {
  const token = localStorage.getItem('token');
  return {
    'Content-Type': 'application/json',
    ...(token ? { 'Authorization': `Bearer ${token}` } : {})
  };
};

// User service
export const userService = {
  async login(credentials) {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials)
    });
    return handleResponse(response);
  },

  async register(userData) {
    const response = await fetch(`${API_URL}/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData)
    });
    return handleResponse(response);
  },

  async getProfile() {
    const response = await fetch(`${API_URL}/auth/profile`, {
      headers: getHeaders()
    });
    return handleResponse(response);
  }
};

// Ticket service
export const ticketService = {
  async getAll() {
    const response = await fetch(`${API_URL}/tickets`, {
      headers: getHeaders()
    });
    return handleResponse(response);
  },

  async getById(id) {
    const response = await fetch(`${API_URL}/tickets/${id}`, {
      headers: getHeaders()
    });
    return handleResponse(response);
  },

  async create(ticketData) {
    const response = await fetch(`${API_URL}/tickets`, {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify(ticketData)
    });
    return handleResponse(response);
  },

  async update(id, ticketData) {
    const response = await fetch(`${API_URL}/tickets/${id}`, {
      method: 'PUT',
      headers: getHeaders(),
      body: JSON.stringify(ticketData)
    });
    return handleResponse(response);
  },

  async delete(id) {
    const response = await fetch(`${API_URL}/tickets/${id}`, {
      method: 'DELETE',
      headers: getHeaders()
    });
    return handleResponse(response);
  }
};

// Message service
export const messageService = {
  async getByTicketId(ticketId) {
    const response = await fetch(`${API_URL}/tickets/${ticketId}/messages`, {
      headers: getHeaders()
    });
    return handleResponse(response);
  },

  async create(ticketId, messageData) {
    const response = await fetch(`${API_URL}/tickets/${ticketId}/messages`, {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify(messageData)
    });
    return handleResponse(response);
  }
}; 