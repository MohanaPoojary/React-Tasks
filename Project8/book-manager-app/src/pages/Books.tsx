import React, { useEffect, useState } from "react";
import axios from "../api/axios";

interface Book {
  title: string;
  author: string;
}

const Books = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
  const fetchBooks = async () => {
    try {
      const res = await axios.get("/books"); // No manual header needed
      setBooks(res.data);
    } catch (err) {
      setError("Failed to fetch books. Are you logged in?");
    }
  };

  fetchBooks();
}, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Books</h1>
      {error && <p className="text-red-500">{error}</p>}
      <ul className="list-disc pl-5">
        {books.map((book, idx) => (
          <li key={idx}>
            <strong>{book.title}</strong> by {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Books;
