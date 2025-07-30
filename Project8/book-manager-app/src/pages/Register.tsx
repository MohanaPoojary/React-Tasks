import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/axios'; // ✅ correct import

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      await api.post('/register', { username, password }); // ✅ using custom axios instance
      setMessage('🎉 Registered successfully! You can now login.');
      setError('');
      setTimeout(() => navigate('/login'), 2000);
    } catch (err) {
      console.error('Register API error:', err); 
      setError('⚠️ User already registered.');
      setMessage('');
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Register</h2>
      {message && <p className="text-green-500">{message}</p>}
      {error && <p className="text-red-500">{error}</p>}
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} className="border p-2 w-full mb-2" />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="border p-2 w-full mb-4" />
      <button onClick={handleRegister} className="bg-green-600 text-white px-4 py-2 rounded w-full">Register</button>
    </div>
  );
};

export default Register;
