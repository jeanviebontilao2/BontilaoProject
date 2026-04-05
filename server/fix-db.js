const mysql = require('mysql2/promise');
require('dotenv').config();

async function fixDatabase() {
    let connection;
    try {
        connection = await mysql.createConnection({
            host: process.env.DB_HOST || 'localhost',
            user: process.env.DB_USER || 'root',
            password: process.env.DB_PASSWORD || '',
            database: process.env.DB_NAME || 'personal_task_organizer'
        });

        console.log('Checking database table structure...');
        const [columns] = await connection.query('SHOW COLUMNS FROM tasks');
        const hasScheduledAt = columns.some(col => col.Field === 'scheduled_at');

        if (!hasScheduledAt) {
            console.log('Adding scheduled_at column...');
            await connection.query('ALTER TABLE tasks ADD COLUMN scheduled_at TIMESTAMP NULL AFTER description');
            console.log('Column added successfully.');
        } else {
            console.log('Column scheduled_at already exists.');
        }
    } catch (err) {
        console.error('Error fixing database:', err);
    } finally {
        if (connection) await connection.end();
    }
}

fixDatabase();
