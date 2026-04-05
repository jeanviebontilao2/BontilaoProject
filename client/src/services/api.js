import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

const api = axios.create({
    baseURL: API_URL,
    headers: { 'Content-Type': 'application/json' }
});

export const authService = {
    login: (creds) => api.post('/users/login', creds),
    register: (data) => api.post('/users/register', data)
};

export const categoryService = {
    getAll: (userId) => api.get(`/categories?user_id=${userId}`),
    create: (data) => api.post('/categories', data),
    delete: (id) => api.delete(`/categories/${id}`)
};

export const taskService = {
    getAll: (userId) => api.get(`/tasks?user_id=${userId}`),
    create: (data) => api.post('/tasks', data),
    update: (id, data) => api.put(`/tasks/${id}`, data),
    delete: (id) => api.delete(`/tasks/${id}`)
};

export const statusLogService = {
    getByTaskId: (taskId) => api.get(`/status-logs?task_id=${taskId}`)
};

export default api;
