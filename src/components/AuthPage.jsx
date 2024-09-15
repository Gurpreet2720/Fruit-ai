import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/AuthPage.css';

const AuthPage = () => {
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        if (user === 'sample' && pass === 'sample') {
            navigate('/home');
        } else {
            alert('Incorrect username or password');
        }
    };

    return (
        <div className="auth-wrapper">
            <form onSubmit={handleLogin} className="auth-form">
                <h2>Sign In</h2>
                <input
                    type="text"
                    placeholder="Enter sample as username"
                    value={user}
                    onChange={(e) => setUser(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Enter sample as password"
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                    required
                />
                <button type="submit">Sign In</button>
            </form>
        </div>
    );
};

export default AuthPage;
