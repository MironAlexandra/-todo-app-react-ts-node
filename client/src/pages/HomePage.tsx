import React from 'react';
import TaskList from '../components/TaskList';

const HomePage: React.FC = () => {
    return (
        <div style={{ padding: '2rem' }}>
            <h1>Welcome to Your To-Do App</h1>
            <TaskList />
        </div>
    );
};

export default HomePage;
