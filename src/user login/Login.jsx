import React, { useState } from 'react';
import "./Login.css";

const Login = ({ onLogin }) => {
    const [username, setuserName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(""); // State for error messages

    const handleSubmit = (e) => {
        e.preventDefault();

        // Clear any previous errors before new submission
        setError("");

        // Validation checks
        if (!username || !password) {
            setError("Both username and password are required!");
            return; // Early return if validation fails
        }

        // Simple login check (you can replace with a real API in the future)
        if (username === "sumit" && password === `password_${username}`) {
            onLogin(); // Notify parent component of successful login
        } else {
            setError("Invalid username or password. Please try again.");
        }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setuserName(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <br />
                {error && <p id='error' className="error-message">{error}</p>} {/* Display error message if exists */}
                <button id='btn' type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;

