from pydantic import BaseModel
from typing import List

class Book(BaseModel):
    title: str
    author: str

class User(BaseModel):
    username: str
    password: str
    
# In-memory book list
books: List[Book] = [
    Book(id=1, title="The Alchemist", author="Paulo Coelho"),
    Book(id=2, title="Atomic Habits", author="James Clear"),
]
