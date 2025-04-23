import React from 'react';
import { Task } from '../api';

interface Props {
    task: Task;
    onTaskUpdated: () => void;
    onTaskDeleted: () => void;
}

const TaskItem: React.FC<Props> = ({ task, onTaskUpdated, onTaskDeleted }) => {
    const handleToggleComplete = async () => {
        await fetch(`http://localhost:3000/tasks/${task.id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ completed: !task.completed }),
        });
        onTaskUpdated();
    };

    const handleDelete = async () => {
        await fetch(`http://localhost:3000/tasks/${task.id}`, {
            method: 'DELETE',
        });
        onTaskDeleted();
    };

    return (
        <li>
            <input
                type="checkbox"
                checked={task.completed}
                onChange={handleToggleComplete}
            />
            <strong>{task.title}</strong> — {task.description}
            <button onClick={handleDelete} style={{ marginLeft: '1rem' }}>
                🗑️ Delete
            </button>
        </li>
    );
};

export default TaskItem;
