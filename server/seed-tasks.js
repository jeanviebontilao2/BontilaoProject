const pool = require('./config/db');

async function seedTasks() {
    const tasks = [
        { title: 'Write weekly report', scheduled_at: '2026-04-05 09:00:00', due_date: '2026-04-05 17:00:00', description: 'Summarize weekly accomplishments and pending tasks.' },
        { title: 'Clean workspace', scheduled_at: '2026-04-06 08:00:00', due_date: '2026-04-06 10:00:00', description: 'Organize desk, remove clutter, wipe surfaces.' },
        { title: 'Grocery shopping', scheduled_at: '2026-04-06 16:00:00', due_date: '2026-04-06 18:00:00', description: 'Buy essentials for the week.' },
        { title: 'Exercise (cardio)', scheduled_at: '2026-04-07 06:30:00', due_date: '2026-04-07 07:30:00', description: '45-minute jog and stretching.' },
        { title: 'Reply to emails', scheduled_at: '2026-04-07 10:00:00', due_date: '2026-04-07 12:00:00', description: 'Clear inbox and respond to pending messages.' },
        { title: 'Study new skill', scheduled_at: '2026-04-08 14:00:00', due_date: '2026-04-08 16:00:00', description: 'Learn basics of a new topic.' },
        { title: 'Call family member', scheduled_at: '2026-04-08 19:00:00', due_date: '2026-04-08 20:00:00', description: 'Catch up and check in.' },
        { title: 'Update resume', scheduled_at: '2026-04-09 13:00:00', due_date: '2026-04-09 16:00:00', description: 'Add recent experience and skills.' },
        { title: 'Read a book chapter', scheduled_at: '2026-04-09 20:00:00', due_date: '2026-04-09 21:30:00', description: 'Read and take notes.' },
        { title: 'Prepare presentation', scheduled_at: '2026-04-10 10:00:00', due_date: '2026-04-10 15:00:00', description: 'Create slides and outline.' },
        { title: 'Laundry', scheduled_at: '2026-04-10 17:00:00', due_date: '2026-04-10 19:00:00', description: 'Wash, dry, and fold clothes.' },
        { title: 'Meal prep', scheduled_at: '2026-04-11 09:00:00', due_date: '2026-04-11 12:00:00', description: 'Cook meals for upcoming days.' },
        { title: 'Team meeting', scheduled_at: '2026-04-11 14:00:00', due_date: '2026-04-11 15:00:00', description: 'Discuss progress and blockers.' },
        { title: 'Fix minor bugs', scheduled_at: '2026-04-12 10:00:00', due_date: '2026-04-12 13:00:00', description: 'Address small technical issues.' },
        { title: 'Water plants', scheduled_at: '2026-04-12 18:00:00', due_date: '2026-04-12 18:30:00', description: 'Hydrate indoor/outdoor plants.' },
        { title: 'Plan weekend trip', scheduled_at: '2026-04-13 15:00:00', due_date: '2026-04-13 18:00:00', description: 'Research and finalize itinerary.' },
        { title: 'Backup files', scheduled_at: '2026-04-13 20:00:00', due_date: '2026-04-13 21:00:00', description: 'Save important data to cloud/external drive.' },
        { title: 'Doctor appointment', scheduled_at: '2026-04-14 09:00:00', due_date: '2026-04-14 10:30:00', description: 'Routine check-up.' },
        { title: 'Pay bills', scheduled_at: '2026-04-14 13:00:00', due_date: '2026-04-14 14:00:00', description: 'Settle monthly expenses.' },
        { title: 'Write blog post', scheduled_at: '2026-04-15 11:00:00', due_date: '2026-04-15 16:00:00', description: 'Draft and edit article.' },
        { title: 'Practice hobby', scheduled_at: '2026-04-15 19:00:00', due_date: '2026-04-15 21:00:00', description: 'Spend time improving a skill.' },
        { title: 'Organize files', scheduled_at: '2026-04-16 10:00:00', due_date: '2026-04-16 12:00:00', description: 'Sort digital documents.' },
        { title: 'Car maintenance check', scheduled_at: '2026-04-16 15:00:00', due_date: '2026-04-16 17:00:00', description: 'Inspect vehicle condition.' },
        { title: 'Meditation session', scheduled_at: '2026-04-17 06:00:00', due_date: '2026-04-17 06:30:00', description: 'Mindfulness practice.' },
        { title: 'Declutter closet', scheduled_at: '2026-04-17 16:00:00', due_date: '2026-04-17 19:00:00', description: 'Sort clothes for donation or disposal.' }
    ];

    try {
        console.log('Seeding tasks into the database...');
        for (const task of tasks) {
            await pool.execute(
                'INSERT INTO tasks (user_id, title, description, scheduled_at, due_date, status) VALUES (?, ?, ?, ?, ?, ?)',
                [1, task.title, task.description, task.scheduled_at, task.due_date, 'pending']
            );
        }
        console.log('All 25 tasks added successfully!');
    } catch (err) {
        console.error('Error seeding tasks:', err);
    } finally {
        process.exit();
    }
}

seedTasks();
