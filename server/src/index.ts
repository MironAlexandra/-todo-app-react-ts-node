import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import pool from './utils/db';
import taskRoutes from './routes/taskRoutes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors({ origin: 'http://localhost:5173' }));
app.use(bodyParser.json());

// Optional: log every request
app.use((req, res, next) => {
    console.log(`[${req.method}] ${req.url}`);
    next();
});

// Routes
app.use('/tasks', taskRoutes);

// Start server
app.listen(PORT, () => {
    console.log(`✅ Server is running at http://localhost:${PORT}`);

    pool.query('SELECT NOW()', (err, res) => {
        if (err) {
            console.error('❌ Database connection failed:', err);
        } else {
            console.log('✅ Connected to database — current time is:', res.rows[0].now);
        }
    });
});
