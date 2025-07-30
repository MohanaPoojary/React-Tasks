import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-48 bg-gray-800 text-white h-full p-4">
      <h2 className="text-xl font-bold mb-4">Menu</h2>
      <nav className="space-y-2">
        <Link to="/" className="block hover:text-blue-400">Home</Link>
        <Link to="/books" className="block hover:text-blue-400">Books</Link>
        <Link to="/profile" className="block hover:text-blue-400">Profile</Link>
        <Link to="/add-book" className="block hover:text-blue-400">Add Book</Link>
        <Link to="/login" className="block hover:text-blue-400">Login</Link>
        <Link to="/register" className="block hover:text-blue-400">Register</Link>
        <Link to="/logout" className="block hover:text-red-400 text-red-500 font-semibold">Logout</Link>
      </nav>
    </div>
  );
};

export default Sidebar;
