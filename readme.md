# 📝 Task Management App

A full-stack **Task Management System** with user authentication, task CRUD operations, and a modern UI using **Node.js**, **MongoDB**, **React**, **Redux**, **Tailwind CSS**, and **JWT** authentication.

---

## 🔧 Tech Stack

### Backend:

- Node.js
- Express
- MongoDB with Mongoose
- JWT for authentication
- Bcrypt for password hashing
- Joi for validation

### Frontend:

- React
- Redux (manual dispatch, no asyncThunk)
- Axios for HTTP requests
- Tailwind CSS for styling
- LocalStorage for auth and task persistence

### Clone Project

- GitHub Link = https://github.com/naim-haider/Task-Management-App

### Check out the Project Live

- Link = https://task-management-app-frontend-nine.vercel.app/

---

## 📦 Features

### ✅ Authentication

- Register new users
- Login with JWT authentication
- Protect routes based on auth state

### ✅ Task Management

- Create, read, update, delete (CRUD) tasks
- Filter tasks by status (Pending/Completed)
- Toggle task status

### ✅ Data Persistence

- JWT stored in localStorage
- Tasks stored in Redux and also persisted in localStorage

---

## 🛠️ Setup Instructions

### Backend

1. **Install dependencies**

   ```bash
   cd backend
   npm install

   ```

2. **Environment Variables**
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   PORT=5000

3. **Start the backend**
   npm run dev

### Frontend

1. **Install dependencies**
   cd frontend
   npm install

2. **Environment Variables**
   VITE_API_URL=http://localhost:5000/api

3. **Environment Variables**
   Start the frontend

📁 Folder Structure (Frontend)

src/
├── components  
│ ├── Navbar.jsx  
│ └── TaskForm.jsx
├── Pages/
│ ├── TaskPage/  
│ └── Tasks.jsx  
│ ├── UsersPage/  
│ ├── LoginPage.jsx
│ └── RegisterPage.jsx
├── redux/
│ ├── slices
│ ├── TaskSlice.jsx
│ └── userSlice.jsx  
│ └── store/
│ └── store.js  
├── App.jsx
├── main.jsx
└── index.css # Tailwind config

🔐 API Endpoints (Backend)

Method Endpoint Description
POST - /api/register - Register a new user
POST - /api/login - Login and receive JWT
GET - /api/tasks - Get all user tasks
POST - /api/tasks - Create a new task
PUT - /api/tasks/:id - Update task (title/status)
DELETE - /api/tasks/:id - Delete task

👨‍💻 Author
Naim Haider
