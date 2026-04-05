import React, { useState, useEffect } from 'react';
import { authService, categoryService, taskService } from './services/api';
import './App.css';

function App() {
  const [user, setUser] = useState({ id: 1, username: 'Admin', email: 'admin@example.com' });
  const [tasks, setTasks] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editingTask, setEditingTask] = useState(null);
  const [newTask, setNewTask] = useState({ title: '', description: '', scheduled_at: '', due_date: '' });
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    loadData();
    // Update 'now' every minute to refresh statuses automatically
    const timer = setInterval(() => setNow(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  const loadData = async () => {
    try {
      const tasksRes = await taskService.getAll(user.id);
      setTasks(tasksRes.data);
    } catch (err) {
      console.error('Error loading data:', err);
    }
  };

  const handleDeleteTask = async (id) => {
    if (window.confirm('Delete task?')) {
      await taskService.delete(id);
      loadData();
    }
  };

  const handleEditClick = (task) => {
    setEditingTask(task);
    setNewTask({
      title: task.title,
      description: task.description,
      scheduled_at: task.scheduled_at ? new Date(task.scheduled_at).toISOString().slice(0, 16) : '',
      due_date: task.due_date ? new Date(task.due_date).toISOString().slice(0, 16) : ''
    });
    setShowModal(true);
  };

  const handleSaveTask = async (e) => {
    e.preventDefault();
    try {
      if (editingTask) {
        await taskService.update(editingTask.id, {
          ...newTask,
          user_id: user.id
        });
      } else {
        await taskService.create({
          ...newTask,
          user_id: user.id
        });
      }
      setShowModal(false);
      setEditingTask(null);
      setNewTask({ title: '', description: '', scheduled_at: '', due_date: '' });
      loadData();
    } catch (err) {
      alert(err.response?.data?.error || err.message);
    }
  };

  const handleCompleteTask = async (task) => {
    try {
      await taskService.update(task.id, {
        status: 'completed'
      });
      loadData();
    } catch (err) {
      alert(err.response?.data?.error || err.message);
    }
  };

  const getTaskStatus = (task) => {
    if (task.status === 'completed') return 'Completed';
    if (task.due_date && new Date(task.due_date) < now) return 'Missed';
    return 'On-going';
  };

  const formatDateTime = (dateStr) => {
    if (!dateStr) return 'Not set';
    const date = new Date(dateStr);
    return date.toLocaleString([], { month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' });
  };

  // Sort tasks by scheduled_at (empty dates at the end)
  const sortedTasks = [...tasks].sort((a, b) => {
    if (!a.scheduled_at) return 1;
    if (!b.scheduled_at) return -1;
    return new Date(a.scheduled_at) - new Date(b.scheduled_at);
  });

  return (
    <div className="dashboard-container no-sidebar">
      <header>
        <h1><i className="fas fa-check-double"></i> Task Organizer</h1>
        <div className="user-info">
          <span>Hello, {user.username}</span>
        </div>
      </header>

      <main>
        <section className="tasks-area">
          <div className="task-header">
            <h2>My Tasks</h2>
            <button className="btn-primary" onClick={() => { setEditingTask(null); setNewTask({title:'', description:'', scheduled_at: '', due_date:''}); setShowModal(true); }}>+ Add Task</button>
          </div>
          <div className="task-list">
            {sortedTasks.map(task => {
              const status = getTaskStatus(task);
              return (
                <div key={task.id} className={`task-item status-${status.toLowerCase()}`}>
                  <div className="task-info">
                    <h4>{task.title}</h4>
                    <p>{task.description}</p>
                    <div className="task-meta">
                        <small className="scheduled">
                            <i className="far fa-calendar-alt"></i> Scheduled: {formatDateTime(task.scheduled_at)}
                        </small>
                        <small className="deadline">
                            <i className="far fa-clock"></i> Deadline: {formatDateTime(task.due_date)}
                        </small>
                    </div>
                    <span className={`status-badge badge-${status.toLowerCase()}`}>{status}</span>
                  </div>
                  <div className="task-actions">
                      {status !== 'Completed' && (
                        <button className="btn-complete" title="Mark as Complete" onClick={() => handleCompleteTask(task)}>✔</button>
                      )}
                      <button className="btn-edit" onClick={() => handleEditClick(task)}>Edit</button>
                      <button className="btn-danger" onClick={() => handleDeleteTask(task.id)}>Delete</button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </main>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>{editingTask ? 'Edit Task' : 'Add Task'}</h2>
            <form onSubmit={handleSaveTask}>
              <div className="form-group">
                <label>Title</label>
                <input type="text" placeholder="Task Title" value={newTask.title} onChange={e => setNewTask({...newTask, title: e.target.value})} required />
              </div>
              <div className="form-group">
                <label>Description</label>
                <textarea placeholder="Task Description" value={newTask.description} onChange={e => setNewTask({...newTask, description: e.target.value})} />
              </div>
              <div className="form-group">
                <label>When I will do the task (Scheduled)</label>
                <input type="datetime-local" value={newTask.scheduled_at} onChange={e => setNewTask({...newTask, scheduled_at: e.target.value})} />
              </div>
              <div className="form-group">
                <label>Deadline (Month, Day, Time)</label>
                <input type="datetime-local" value={newTask.due_date} onChange={e => setNewTask({...newTask, due_date: e.target.value})} />
              </div>
              <div className="modal-actions">
                <button type="button" onClick={() => setShowModal(false)}>Cancel</button>
                <button type="submit" className="btn-primary">Save</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
