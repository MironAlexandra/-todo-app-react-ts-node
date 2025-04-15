import { useState } from "react";
import "./HomePage.css";

const HomePage = () => {
    const [tasks, setTasks] = useState([
        { id: 1, title: "Task 1", completed: false },
        { id: 2, title: "Task 2", completed: true },
    ]);

    const addTask = () => {
        const newId = tasks.length + 1;
        const newTask = {
            id: newId,
            title: `Task ${newId}`,
            completed: false,
        };
        setTasks([...tasks, newTask]);
    };

    const deleteTask = (id: number) => {
        const updatedTasks = tasks.filter((task) => task.id !== id);
        setTasks(updatedTasks);
    };

    const [editingTaskId, setEditingTaskId] = useState<number | null>(null);
    const [editedTitle, setEditedTitle] = useState<string>('');
    const startEditing = (taskId: number, currentTitle: string) => {
        setEditingTaskId(taskId);
        setEditedTitle(currentTitle);
    };

    const saveEditedTitle = () => {
        if (editingTaskId === null) return;

        const updatedTasks = tasks.map((task) =>
            task.id === editingTaskId ? { ...task, title: editedTitle } : task
        );

        setTasks(updatedTasks);
        setEditingTaskId(null);
        setEditedTitle('');
    };

    const calculateProgress = () => {
        if (tasks.length === 0) return 0;
        const completed = tasks.filter((task) => task.completed).length;
        return Math.round((completed / tasks.length) * 100);
    };


    return (
        <div className="home-container">
            <div className="tasks-section">
                <h2>Tasks</h2>
                <button className="add-task-btn" onClick={addTask}>
                    + Add Task
                </button>

                <ul className="task-list">
                    {tasks.map((task) => (
                        <li key={task.id} className="task-item">
                            <input type="checkbox" defaultChecked={task.completed} />
                            {editingTaskId === task.id ? (
                                <input
                                    value={editedTitle}
                                    onChange={(e) => setEditedTitle(e.target.value)}
                                    onBlur={saveEditedTitle}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter') saveEditedTitle();
                                    }}
                                    autoFocus
                                />
                            ) : (
                                <span>{task.title}</span>
                            )}
                            <div className="actions">
                                <button onClick={() => startEditing(task.id, task.title)}>✏️</button>
                                <button onClick={() => deleteTask(task.id)}>🗑️</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="info-section">
                <div className="progress-container">
                    <div className="progress-bar">
                        <div
                            className="progress-fill"
                            style={{ width: `${calculateProgress()}%` }}
                        ></div>
                    </div>
                    <p>{calculateProgress()}%</p>
                </div>

                <div className="calendar-section">
                    <h2>Active Days</h2>
                    <img src="/calendar-mock.png" alt="Calendar" />
                </div>
            </div>
        </div>
    );
};

export default HomePage;
