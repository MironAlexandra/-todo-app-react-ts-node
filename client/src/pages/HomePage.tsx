import { useEffect, useState } from "react";
import "./HomePage.css";
import {
    fetchTasks,
    updateTask,
    deleteTask as deleteTaskFromApi,
    createTask,
    Task,
} from "../api";

const HomePage = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [editingTaskId, setEditingTaskId] = useState<number | null>(null);
    const [editedTitle, setEditedTitle] = useState<string>("");

    useEffect(() => {
        const loadTasks = async () => {
            try {
                const allTasks = await fetchTasks();
                setTasks(allTasks);
            } catch (error) {
                console.error("Failed to fetch tasks:", error);
            }
        };

        loadTasks();
    }, []);

    const addTask = async () => {
        console.log("Attempting to create task...");

        try {
            const newTask = await createTask({
                title: `Task ${tasks.length + 1}`,
                description: '',
                completed: false,
            });
            console.log("Task created", newTask);
            setTasks((prev) => [...prev, newTask]);
        } catch (err) {
            console.error("Error adding task", err);
        }
    };



    const deleteTask = async (id: number) => {
        try {
            await deleteTaskFromApi(id);
            setTasks((prev) => prev.filter((task) => task.id !== id));
        } catch (err) {
            console.error("Error deleting task", err);
        }
    };

    const toggleTaskCompleted = async (taskId: number) => {
        const currentTask = tasks.find((t) => t.id === taskId);
        if (!currentTask) return;

        const updated = { ...currentTask, completed: !currentTask.completed };

        try {
            const updatedFromServer = await updateTask(taskId, {
                completed: updated.completed,
            });
            setTasks((prev) =>
                prev.map((t) => (t.id === taskId ? updatedFromServer : t))
            );
        } catch (err) {
            console.error("Error updating task", err);
        }
    };

    const startEditing = (taskId: number, currentTitle: string) => {
        setEditingTaskId(taskId);
        setEditedTitle(currentTitle);
    };

    const saveEditedTitle = async () => {
        if (editingTaskId === null) return;

        try {
            const updatedTask = await updateTask(editingTaskId, {
                title: editedTitle,
            });

            setTasks((prev) =>
                prev.map((task) =>
                    task.id === editingTaskId ? updatedTask : task
                )
            );
        } catch (err) {
            console.error("Error saving edited title", err);
        }

        setEditingTaskId(null);
        setEditedTitle("");
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
                            <input
                                type="checkbox"
                                checked={task.completed}
                                onChange={() => toggleTaskCompleted(task.id)}
                            />
                            {editingTaskId === task.id ? (
                                <input
                                    value={editedTitle}
                                    onChange={(e) => setEditedTitle(e.target.value)}
                                    onBlur={saveEditedTitle}
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter") saveEditedTitle();
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
