import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../index.css';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // 简单登录逻辑（实际需对接后端）
    if (username && password) {
      localStorage.setItem('user', username);
      navigate('/channels');
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-slogan">Share yourself with everyone</h2>
      <h1 className="login-title">Come Chat</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="login-input"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="login-input"
      />
      <button onClick={handleLogin} className="login-btn">
        Log in
      </button>
    </div>
  );
};

export default Login;