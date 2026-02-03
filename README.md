#  Auth Dashboard – Full-Stack Assignment 

A modern full-stack web application built as part of a Frontend Developer Intern shortlisting assignment.  
The project demonstrates **authentication, protected routes, dashboard UI, and CRUD operations**, with clean frontend–backend integration and secure practices.

---

##  Live Overview

This application allows users to:
- Sign up and log in securely
- Access a protected dashboard
- View their profile
- Create, search, update, and delete tasks
- Log out safely

The primary focus is on **frontend quality and UX**, supported by a minimal but secure backend.

---

##  Tech Stack

### Frontend 
- **React.js** (Vite)
- **Tailwind CSS** – responsive, utility-first UI
- **React Router DOM** – routing & protected routes
- **Axios** – API communication

### Backend 
- **Node.js**
- **Express.js**
- **MongoDB + Mongoose**
- **JWT Authentication**
- **bcryptjs** – password hashing

---

##  Features

### Authentication
- User Signup & Login
- Password hashing (bcrypt)
- JWT-based authentication
- Protected routes (Dashboard accessible only after login)

### Dashboard
- Fetch & display user profile
- Task management (CRUD)
  - Create task
  - View all tasks
  - Mark task as complete
  - Delete task
- Search/filter tasks by title
- Logout flow

### UX & Code Quality
- Client-side form validation
- Clear error & success messages
- Loading states
- Modular folder structure
- Centralized API handling with JWT interceptor

---


##  Setup Instructions

### Clone Repository
```bash
git clone <your-repo-url>
cd auth-dashboard-app
```


# Backend Setup
```bash
cd backend
npm install
```

Create a .env file:
- MONGO_URI=your_mongodb_connection_string
- JWT_SECRET=your_jwt_secret

```bash
npx nodemon src/app.js
```

Backend runs on: http://localhost:4000


# Frontend Setup
- cd frontend
- npm install
- npm run dev
Frontend runs on: http://localhost:5173

## Demo Credentials
- Email: demo@test.com  
- Password: 123  



# Security Practices
- Passwords are never stored in plain text
- JWT validation on all protected routes
- Backend input validation & error handling
- Token-based auth with route protection on frontend


# Scaling for Production 
For production, the frontend and backend would be deployed separately, using a CDN for static assets. Environment variables would be managed securely via platform secrets. JWT refresh tokens would be added for better session management. Database indexes would be created on frequently queried fields. Pagination and caching would be introduced for large datasets. Rate limiting, centralized logging, and monitoring would improve reliability and security.


# Conclusion
This project demonstrates the ability to:
- Build clean, responsive frontend UIs
- Integrate frontend with a real backend
- Implement secure authentication flows
- Structure code for scalability and maintainability
It was built with a time-boxed approach (~2 hours), focusing on correctness, clarity, and real-world patterns.
