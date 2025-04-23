import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

const LoginPage = () => {
    const navigate = useNavigate();

    return (
        <div className="login-container">
            <div className="login-card">
                <h1>Let’s make it happen.</h1>
                <p>Your to-dos are waiting — let’s check some boxes.</p>
                <div className="quote-box">
                    <strong>tomorrow <em>(noun)</em></strong>
                    <p>a mystical land where 99% of all human productivity, motivation and achievement is stored</p>
                </div>
                <form onSubmit={(e) => e.preventDefault()}>
                    <label>User Name / Email Address</label>
                    <input type="text" />
                    <label>Password</label>
                    <input type="password" />
                    <button type="button" className="login-action" onClick={() => navigate("/home")}>
                        Login
                    </button>
                    <button type="button" className="signup-action" onClick={() => navigate("/home")}>
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
