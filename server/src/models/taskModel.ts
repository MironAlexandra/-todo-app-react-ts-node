import pool from '../utils/db';

export interface Task {
    id: number;
    title: string;
    description?: string;
    completed: boolean;
    created_at: string;
}

export const getAllTasks = async (): Promise<Task[]> => {
    const res = await pool.query('SELECT * FROM tasks ORDER BY created_at DESC');
    return res.rows;
};

export const createTask = async (title: string, description: string): Promise<Task> => {
    const res = await pool.query(
        'INSERT INTO tasks (title, description) VALUES ($1, $2) RETURNING *',
        [title, description]
    );
    return res.rows[0];
};

export const updateTask = async (id: number, updates: Partial<Task>): Promise<Task> => {
    const { title, description, completed } = updates;
    const res = await pool.query(
        'UPDATE tasks SET title = $1, description = $2, completed = $3 WHERE id = $4 RETURNING *',
        [title, description, completed, id]
    );
    return res.rows[0];
};

export const deleteTask = async (id: number): Promise<void> => {
    await pool.query('DELETE FROM tasks WHERE id = $1', [id]);
};
