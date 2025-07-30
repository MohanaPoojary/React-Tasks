# 📚 Book Manager App

A full-stack web application to manage books. Built with:

- 🔥 **FastAPI** (Python) for backend APIs and JWT authentication
- ⚛️ **React** (Vite) for the frontend interface
- 🔐 User registration, login (JWT-based), logout
- 📘 Add and view books
- 👤 Profile page to show logged-in user's info

---

## 🚀 Features

- Register and Login with JWT Authentication
- View user profile after login
- Add and list books (title + author)
- Logout functionality
- Protected routes using tokens

---

## 📦 Backend (FastAPI)

### ▶️ Run Backend

1. Create a virtual environment:

```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

Install dependencies:
pip install fastapi uvicorn[standard] sqlalchemy passlib[bcrypt] python-jose

Run the server:
uvicorn book_api.main:app --reload



