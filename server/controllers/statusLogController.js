const pool = require('../config/db');

exports.getAllStatusLogs = async (req, res) => {
    const { task_id } = req.query;
    try {
        const [rows] = await pool.execute('SELECT * FROM task_status_logs WHERE task_id = ? ORDER BY changed_at DESC', [task_id]);
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.createStatusLog = async (req, res) => {
    const { task_id, old_status, new_status } = req.body;
    try {
        await pool.execute(
            'INSERT INTO task_status_logs (task_id, old_status, new_status) VALUES (?, ?, ?)',
            [task_id, old_status, new_status]
        );
        res.status(201).json({ message: 'Status log created' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
