import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Books from './pages/Books';
import Profile from './pages/Profile';
import AddBook from './pages/AddBook';
import Sidebar from './components/Sidebar';
import axios from './api/axios';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Logout from './pages/Logout';

const App = () => {
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get('/profile');
        setUser(res.data);
      } catch (err) {
        setError('Failed to load user profile');
      }
    };
    fetchProfile();
  }, []);

  return (
    <Router>
      <div className="flex h-screen">
        <Sidebar />
        <main className="flex-1 p-4 overflow-y-auto">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/books" element={<Books />} />
            <Route path="/profile" element={<Profile user={user} />} />
            <Route path="/add-book" element={<AddBook />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/logout" element={<Logout />} />
          </Routes>
          {error && <p className="text-red-500 mt-4">{error}</p>}
        </main>
      </div>
    </Router>
  );
};

export default App;
