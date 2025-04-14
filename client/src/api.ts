export interface Task {
    id: number;
    title: string;
    description?: string;
    completed: boolean;
    created_at: string;
}

const API_BASE = 'http://localhost:3000';

export async function fetchTasks(): Promise<Task[]> {
    const res = await fetch(`${API_BASE}/tasks`);
    return res.json();
}

export async function createTask(task: { title: string; description?: string }) {
    const res = await fetch(`${API_BASE}/tasks`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(task),
    });
    return res.json();
}
