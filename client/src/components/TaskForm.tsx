import React, { useState } from 'react';
import { createTask } from '../api';

interface Props {
    onTaskCreated: () => void;
}

const TaskForm: React.FC<Props> = ({ onTaskCreated }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!title.trim()) return;

        try {
            await createTask({
                title,
                description,
                completed: false,
            });
            setTitle('');
            setDescription('');
            setError(null);
            onTaskCreated();
        } catch (err) {
            console.error('Failed to create task:', err);
            setError('Something went wrong while adding the task.');
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{ marginBottom: '2rem' }}>
            <input
                type="text"
                placeholder="Task title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <button type="submit">Add Task</button>
            {error && <p style={{ color: 'red', marginTop: '0.5rem' }}>{error}</p>}
        </form>
    );
};

export default TaskForm;
