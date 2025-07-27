import React, { useState } from 'react';
import axios from '../api/axios'; 
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await axios.post('/login', {
        email, 
        password: pass,
      });

      localStorage.setItem('access_token', res.data.token);
      navigate('/dashboard');
    } catch (err) {
      console.error('Login failed', err);
      alert('Invalid credentials');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type='password' placeholder='pass' value={pass} onChange={(e) => setPass(e.target.value)} />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;
