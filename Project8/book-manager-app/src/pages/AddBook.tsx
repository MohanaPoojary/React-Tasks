import React, { useState } from 'react';
import axios from '../api/axios';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post('/books', { title, author });
      setMessage(res.data.message);
      setTitle('');
      setAuthor('');
    } catch (err) {
      setMessage('Failed to add book');
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Add a Book</h2>
      {message && <p className="mb-2 text-blue-600">{message}</p>}
      <form onSubmit={handleSubmit} className="space-y-2">
        <input
          className="border p-2 w-full"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          required
        />
        <input
          className="border p-2 w-full"
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Author"
          required
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;
