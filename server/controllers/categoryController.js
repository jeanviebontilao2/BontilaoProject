const pool = require('../config/db');

exports.getAllCategories = async (req, res) => {
    const { user_id } = req.query;
    try {
        const [rows] = await pool.execute('SELECT * FROM categories WHERE user_id = ?', [user_id]);
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getCategoryById = async (req, res) => {
    const { id } = req.params;
    try {
        const [rows] = await pool.execute('SELECT * FROM categories WHERE id = ?', [id]);
        res.json(rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.createCategory = async (req, res) => {
    const { user_id, name, color_hex } = req.body;
    try {
        const [result] = await pool.execute(
            'INSERT INTO categories (user_id, name, color_hex) VALUES (?, ?, ?)',
            [user_id, name, color_hex]
        );
        res.status(201).json({ id: result.insertId, user_id, name, color_hex });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.updateCategory = async (req, res) => {
    const { id } = req.params;
    const { name, color_hex } = req.body;
    try {
        await pool.execute(
            'UPDATE categories SET name = ?, color_hex = ? WHERE id = ?',
            [name, color_hex, id]
        );
        res.json({ message: 'Category updated' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.deleteCategory = async (req, res) => {
    const { id } = req.params;
    try {
        await pool.execute('DELETE FROM categories WHERE id = ?', [id]);
        res.json({ message: 'Category deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
