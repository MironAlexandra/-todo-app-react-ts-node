import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import taskRoutes from './routes/taskRoutes';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

app.use('/tasks', taskRoutes);

app.listen(PORT, () => {
    console.log(`✅ Server is running at http://localhost:${PORT}`);
});
