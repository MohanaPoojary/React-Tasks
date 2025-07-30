from fastapi import FastAPI, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordRequestForm
from sqlalchemy.orm import Session
from book_api.auth import get_current_user, get_db, verify_password, get_password_hash, create_access_token
from book_api import data, models
from book_api.schemas import UserCreate     
from book_api.data import Book               
from fastapi.middleware.cors import CORSMiddleware
from book_api.models import User

app = FastAPI()

# Allow frontend (React) to access backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5175"],  # or ["*"] to allow all origins (not safe in production)
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def root():
    return {"message": "API is running"}

@app.get("/books")
def get_books(user: str = Depends(get_current_user)):
    return data.books

@app.post("/books")
def add_book(book: Book, user: str = Depends(get_current_user)):
    data.books.append(book)
    return {"message": "Book added successfully"}

@app.get("/profile")
def get_profile(user: User = Depends(get_current_user)):
    return {
        "username": user.username
    }

@app.post("/login")
def login(form_data: OAuth2PasswordRequestForm = Depends(), db: Session = Depends(get_db)):
    user = db.query(models.User).filter(models.User.username == form_data.username).first()
    if not user or not verify_password(form_data.password, user.hashed_password):
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid credentials")

    token = create_access_token({"sub": user.username})
    return {"access_token": token, "token_type": "bearer"}

@app.post("/register")
def register(user: UserCreate, db: Session = Depends(get_db)):
    existing_user = db.query(models.User).filter(models.User.username == user.username).first()
    if existing_user:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Username already registered")

    hashed_password = get_password_hash(user.password)
    new_user = models.User(username=user.username, hashed_password=hashed_password)
    db.add(new_user)
    db.commit()
    db.refresh(new_user)

    return {"message": "User registered successfully"}
