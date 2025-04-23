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

export async function createTask(task: { title: string; description: string; completed: boolean }) {
    try {
        const res = await fetch('http://localhost:3000/tasks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(task),
        });

        if (!res.ok) {
            const errorText = await res.text();
            throw new Error(`Server error (${res.status}): ${errorText}`);
        }

        return await res.json();
    } catch (error) {
        console.error("❌ API createTask error:", error);
        throw error;
    }
}

export const updateTask = async (id: number, updates: Partial<Task>) => {
    const response = await fetch(`http://localhost:3000/tasks/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(updates),
    });

    if (!response.ok) {
        throw new Error("Failed to update task");
    }

    return await response.json();
};


export async function deleteTask(id: number) {
    await fetch(`${API_BASE}/tasks/${id}`, {
        method: 'DELETE',
    });
}

