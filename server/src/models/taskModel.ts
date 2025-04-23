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

export const createTask = async (title: string, description: string, completed: boolean) => {
    const result = await pool.query(
        `INSERT INTO tasks (title, description, completed, created_at)
         VALUES ($1, $2, $3, NOW())
         RETURNING *`,
        [title, description, completed]
    );
    return result.rows[0];
};

export const updateTask = async (id: number, updates: Partial<Task>): Promise<Task> => {
    const fields = [];
    const values = [];
    let index = 1;

    for (const key in updates) {
        fields.push(`${key} = $${index}`);
        values.push((updates as any)[key]);
        index++;
    }

    values.push(id);
    const query = `UPDATE tasks SET ${fields.join(', ')} WHERE id = $${index} RETURNING *`;

    const res = await pool.query(query, values);
    return res.rows[0];
};


export const deleteTask = async (id: number): Promise<void> => {
    await pool.query('DELETE FROM tasks WHERE id = $1', [id]);
};
