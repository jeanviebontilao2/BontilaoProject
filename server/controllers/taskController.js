const pool = require('../config/db');

exports.getAllTasks = async (req, res) => {
    const { user_id } = req.query;
    try {
        const [rows] = await pool.execute('SELECT * FROM tasks WHERE user_id = ?', [user_id]);
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getTaskById = async (req, res) => {
    const { id } = req.params;
    try {
        const [rows] = await pool.execute('SELECT * FROM tasks WHERE id = ?', [id]);
        res.json(rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.createTask = async (req, res) => {
    const { user_id, category_id, title, description, scheduled_at, priority, status, due_date } = req.body;
    try {
        const initialStatus = status || 'pending';
        const [result] = await pool.execute(
            'INSERT INTO tasks (user_id, category_id, title, description, scheduled_at, priority, status, due_date) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
            [user_id, category_id || null, title, description || '', scheduled_at || null, priority || 1, initialStatus, due_date || null]
        );

        // Log the initial status
        await pool.execute(
            'INSERT INTO task_status_logs (task_id, old_status, new_status) VALUES (?, ?, ?)',
            [result.insertId, null, initialStatus]
        );

        res.status(201).json({ id: result.insertId, user_id, title });
    } catch (err) {
        console.error('Error in createTask:', err);
        res.status(500).json({ error: err.message });
    }
};

exports.updateTask = async (req, res) => {
    const { id } = req.params;
    const { category_id, title, description, scheduled_at, priority, status, due_date } = req.body;
    try {
        // First, get the current task to preserve existing values if they aren't in the request
        const [rows] = await pool.execute('SELECT * FROM tasks WHERE id = ?', [id]);
        const currentTask = rows[0];

        if (!currentTask) {
            return res.status(404).json({ message: 'Task not found' });
        }

        const newStatus = status !== undefined ? status : currentTask.status;

        await pool.execute(
            'UPDATE tasks SET category_id = ?, title = ?, description = ?, scheduled_at = ?, priority = ?, status = ?, due_date = ? WHERE id = ?',
            [
                category_id !== undefined ? category_id : currentTask.category_id,
                title !== undefined ? title : currentTask.title,
                description !== undefined ? description : currentTask.description,
                scheduled_at !== undefined ? scheduled_at : currentTask.scheduled_at,
                priority !== undefined ? priority : currentTask.priority,
                newStatus,
                due_date !== undefined ? due_date : currentTask.due_date,
                id
            ]
        );

        // Log if status changed
        if (newStatus !== currentTask.status) {
            await pool.execute(
                'INSERT INTO task_status_logs (task_id, old_status, new_status) VALUES (?, ?, ?)',
                [id, currentTask.status, newStatus]
            );
        }

        res.json({ message: 'Task updated' });
    } catch (err) {
        console.error('Error in updateTask:', err);
        res.status(500).json({ error: err.message });
    }
};

exports.deleteTask = async (req, res) => {
    const { id } = req.params;
    try {
        await pool.execute('DELETE FROM tasks WHERE id = ?', [id]);
        res.json({ message: 'Task deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
