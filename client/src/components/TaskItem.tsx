import React from 'react';
import { Task } from '../api';

interface Props {
    task: Task;
}

const TaskItem: React.FC<Props> = ({ task }) => {
    return (
        <li>
            <strong>{task.title}</strong> — {task.description}
            <span>{task.completed ? ' ✅' : ''}</span>
        </li>
    );
};

export default TaskItem;
