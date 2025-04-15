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
                            <span>{task.title}</span>
                            <div className="actions">
                                <button>✏️</button>
                                <button>🗑️</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="info-section">
                <div className="progress-bar-container">
                    <h2>Progress</h2>
                    <div className="progress-bar">
                        <div className="progress-fill" style={{ width: "25%" }}></div>
                    </div>
                    <span className="percentage">25%</span>
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
