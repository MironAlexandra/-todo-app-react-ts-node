import React from 'react';
import './LandingPage.css'; // optional: for additional styling
import { useNavigate } from "react-router-dom";

const LandingPage: React.FC = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className="navbar">
                <button className="login-btn" onClick={() => navigate("/login")}>Login</button>
            </div>
            <header className="hero">
                <h1>Let’s get things done, one tick at a time!</h1>
                <p>Welcome to your minimalist task manager</p>
            </header>

            <section className="container">
                <h2>Features</h2>
                <div className="features-grid">
                    <div className="feature-card">
                        <h3>Secure Access</h3>
                        <p>Sign up and log in with ease — your to-dos are only yours.</p>
                    </div>
                    <div className="feature-card">
                        <h3>Task Management</h3>
                        <p>Create, edit, and organize tasks with ease.</p>
                    </div>
                    <div className="feature-card">
                        <h3>Progress Visualization</h3>
                        <p>See your momentum with progress bars & streaks.</p>
                    </div>
                </div>
            </section>

            <footer className="container" style={{ textAlign: 'center', marginTop: '4rem' }}>
                <p>
                    Got a project that needs love and layout?<br />
                    I’m all ears (and pixels).
                </p>
                <p>
                    <a href="mailto:alexandramiron755@gmail.com">📧 Email Me</a> |
                    <a href="https://www.linkedin.com/in/alexandra-miron-ba8b85212/" target="_blank" rel="noreferrer">
                        🔗 LinkedIn
                    </a>
                </p>
            </footer>
        </div>
    );
};

export default LandingPage;
