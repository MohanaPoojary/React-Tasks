import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/axios'; // ✅ use custom axios instance

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await api.post('/login', new URLSearchParams({ username, password })); // ✅ updated line
      localStorage.setItem('token', res.data.access_token);
      navigate('/books');
    } catch (err) {
      setError('❌ Invalid login credentials.');
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Login</h2>
      {error && <p className="text-red-500">{error}</p>}
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="border p-2 w-full mb-2"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border p-2 w-full mb-4"
      />
      <button onClick={handleLogin} className="bg-blue-600 text-white px-4 py-2 rounded w-full">
        Login
      </button>
    </div>
  );
};

export default Login;
