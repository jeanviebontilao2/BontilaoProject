const fs = require('fs');
const path = require('path');
const mysql = require('mysql2/promise');
require('dotenv').config();

async function initDB() {
    let connection;
    try {
        connection = await mysql.createConnection({
            host: process.env.DB_HOST || 'localhost',
            user: process.env.DB_USER || 'root',
            password: process.env.DB_PASSWORD || '',
            multipleStatements: true
        });

        console.log('Connecting to MySQL...');
        const sql = fs.readFileSync(path.join(__dirname, 'schema.sql'), 'utf8');
        console.log('Executing schema.sql...');
        await connection.query(sql);
        console.log('Database schema executed.');

        const tasks = [
            ['Write weekly report', 'Summarize weekly accomplishments and pending tasks.', '2026-04-05 09:00:00', '2026-04-05 17:00:00'],
            ['Clean workspace', 'Organize desk, remove clutter, wipe surfaces.', '2026-04-06 08:00:00', '2026-04-06 10:00:00'],
            ['Grocery shopping', 'Buy essentials for the week.', '2026-04-06 16:00:00', '2026-04-06 18:00:00'],
            ['Exercise (cardio)', '45-minute jog and stretching.', '2026-04-07 06:30:00', '2026-04-07 07:30:00'],
            ['Reply to emails', 'Clear inbox and respond to pending messages.', '2026-04-07 10:00:00', '2026-04-07 12:00:00'],
            ['Study new skill', 'Learn basics of a new topic.', '2026-04-08 14:00:00', '2026-04-08 16:00:00'],
            ['Call family member', 'Catch up and check in.', '2026-04-08 19:00:00', '2026-04-08 20:00:00'],
            ['Update resume', 'Add recent experience and skills.', '2026-04-09 13:00:00', '2026-04-09 16:00:00'],
            ['Read a book chapter', 'Read and take notes.', '2026-04-09 20:00:00', '2026-04-09 21:30:00'],
            ['Prepare presentation', 'Create slides and outline.', '2026-04-10 10:00:00', '2026-04-10 15:00:00'],
            ['Laundry', 'Wash, dry, and fold clothes.', '2026-04-10 17:00:00', '2026-04-10 19:00:00'],
            ['Meal prep', 'Cook meals for upcoming days.', '2026-04-11 09:00:00', '2026-04-11 12:00:00'],
            ['Team meeting', 'Discuss progress and blockers.', '2026-04-11 14:00:00', '2026-04-11 15:00:00'],
            ['Fix minor bugs', 'Address small technical issues.', '2026-04-12 10:00:00', '2026-04-12 13:00:00'],
            ['Water plants', 'Hydrate indoor/outdoor plants.', '2026-04-12 18:00:00', '2026-04-12 18:30:00'],
            ['Plan weekend trip', 'Research and finalize itinerary.', '2026-04-13 15:00:00', '2026-04-13 18:00:00'],
            ['Backup files', 'Save important data to cloud/external drive.', '2026-04-13 20:00:00', '2026-04-13 21:00:00'],
            ['Doctor appointment', 'Routine check-up.', '2026-04-14 09:00:00', '2026-04-14 10:30:00'],
            ['Pay bills', 'Settle monthly expenses.', '2026-04-14 13:00:00', '2026-04-14 14:00:00'],
            ['Write blog post', 'Draft and edit article.', '2026-04-15 11:00:00', '2026-04-15 16:00:00'],
            ['Practice hobby', 'Spend time improving a skill.', '2026-04-15 19:00:00', '2026-04-15 21:00:00'],
            ['Organize files', 'Sort digital documents.', '2026-04-16 10:00:00', '2026-04-16 12:00:00'],
            ['Car maintenance check', 'Inspect vehicle condition.', '2026-04-16 15:00:00', '2026-04-16 17:00:00'],
            ['Meditation session', 'Mindfulness practice.', '2026-04-17 06:00:00', '2026-04-17 06:30:00'],
            ['Declutter closet', 'Sort clothes for donation or disposal.', '2026-04-17 16:00:00', '2026-04-17 19:00:00'],
            ['Review project plan', 'Analyze goals and milestones.', '2026-04-18 09:00:00', '2026-04-18 11:00:00'],
            ['Update calendar', 'Schedule upcoming events and status logs.', '2026-04-18 13:00:00', '2026-04-18 14:00:00'],
            ['Walk 5,000 steps', 'Daily physical activity goal.', '2026-04-18 17:00:00', '2026-04-18 18:30:00'],
            ['Watch tutorial', 'Enhance technical skills.', '2026-04-19 10:00:00', '2026-04-19 12:00:00'],
            ['Brainstorm ideas', 'Creative thinking session.', '2026-04-19 14:00:00', '2026-04-19 16:00:00'],
            ['Clean kitchen', 'Deep clean surfaces and appliances.', '2026-04-19 18:00:00', '2026-04-19 20:00:00'],
            ['Practice typing', 'Improve words per minute.', '2026-04-20 09:00:00', '2026-04-20 10:00:00'],
            ['Draft email proposal', 'Write formal project request.', '2026-04-20 11:00:00', '2026-04-20 13:00:00'],
            ['Review notes', 'Consolidate learning and highlights.', '2026-04-20 15:00:00', '2026-04-20 17:00:00'],
            ['Stretching routine', 'Improve flexibility and posture.', '2026-04-20 19:00:00', '2026-04-20 20:00:00'],
            ['Budget tracking', 'Log expenses and income.', '2026-04-21 10:00:00', '2026-04-21 11:30:00'],
            ['Watch documentary', 'Educational entertainment.', '2026-04-21 13:00:00', '2026-04-21 15:00:00'],
            ['Clean bathroom', 'Full sanitization.', '2026-04-21 16:00:00', '2026-04-21 18:00:00'],
            ['Plan meals', 'Weekly nutritional strategy.', '2026-04-22 09:00:00', '2026-04-22 10:30:00'],
            ['Read articles', 'Stay updated on industry trends.', '2026-04-22 11:00:00', '2026-04-22 13:00:00'],
            ['Practice presentation', 'Rehearse speech and slides.', '2026-04-22 14:00:00', '2026-04-22 16:00:00'],
            ['Evening walk', 'Wind down and relax.', '2026-04-22 18:00:00', '2026-04-22 19:00:00'],
            ['Learn new app', 'Explore productivity tools.', '2026-04-23 10:00:00', '2026-04-23 12:00:00'],
            ['Sort emails', 'Organize inbox folders.', '2026-04-23 13:00:00', '2026-04-23 15:00:00'],
            ['Call client', 'Business follow-up.', '2026-04-23 16:00:00', '2026-04-23 17:00:00'],
            ['Fix schedule conflicts', 'Adjust meetings and tasks.', '2026-04-24 09:00:00', '2026-04-24 11:00:00'],
            ['Practice writing', 'Journaling or creative drafting.', '2026-04-24 13:00:00', '2026-04-24 15:00:00'],
            ['Review finances', 'Analyze monthly savings.', '2026-04-24 16:00:00', '2026-04-24 18:00:00'],
            ['Clean desktop files', 'Organize digital workspace.', '2026-04-25 10:00:00', '2026-04-25 12:00:00'],
            ['Reflect & plan next week', 'Goal setting and strategy.', '2026-04-25 19:00:00', '2026-04-25 20:30:00']
        ];

        console.log('Inserting seed tasks...');
        for (const t of tasks) {
            await connection.query(
                'INSERT INTO tasks (user_id, title, description, scheduled_at, due_date) VALUES (?, ?, ?, ?, ?)',
                [1, t[0], t[1], t[2], t[3]]
            );
        }

        console.log('Database initialized and tasks seeded successfully.');
    } catch (err) {
        console.error('Error initializing database:', err);
    } finally {
        if (connection) await connection.end();
    }
}

initDB();
