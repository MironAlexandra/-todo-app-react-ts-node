import React, { useEffect, useState } from 'react';
import { fetchTasks, Task } from '../api';
import TaskItem from './TaskItem';
import TaskForm from './TaskForm';

const TaskList: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([]);

    const loadTasks = async () => {
        const allTasks = await fetchTasks();
        setTasks(allTasks);
    };

    useEffect(() => {
        loadTasks();
    }, []);

    return (
        <div>
            <TaskForm onTaskCreated={loadTasks} />
            <ul>
                {tasks.map(task => (
                    <TaskItem
                        key={task.id}
                        task={task}
                        onTaskUpdated={loadTasks}
                        onTaskDeleted={loadTasks}
                    />
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
