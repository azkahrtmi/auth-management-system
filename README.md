# Auth Management System

An authentication and authorization system with **role-based access control**.  
This project provides **User** and **Admin** functionalities with a clean UI and secure backend integration.

---

## ✨ Features

**Register & Login** with PostgreSQL

- **Role-based access control**:
  - **User**: view own account (read-only)
  - **Admin**: view, create, edit, and delete accounts
- **Postman** for API testing
- **Figma** for design
- Built with **React Vite** (frontend) and **Express TypeScript** (backend)

---

## 🛠 Tech Stack

- **Frontend**: React Vite, TailwindCSS, Toaster
- **Backend**: Express (TypeScript), PostgreSQL, JWT
- **Tools**: Postman, Figma

---

## 👥 Team Members

- [**azkahrtmi**](https://github.com/azkahrtmi)

  - Backend (Express + PostgreSQL)
  - Integration with frontend

- [**RezaPahlevi1**](https://github.com/RezaPahlevi1)
  - Full Figma design
  - Majority of frontend implementation

---

## 📂 Project Structure

```bash
.
├── backend/        # Express + TypeScript + PostgreSQL
├── frontend/       # React Vite + Tailwind
└── README.md
```

---

## ⚙️ Setup & Installation

### Prerequisites

- Node.js (v18+)
- PostgreSQL installed and running

### Backend

```bash
cd backend
npm install
npm run dev
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

### Database

- Create a PostgreSQL database
- Update DB credentials in backend config

### 🔑 Usage

- Register as user or admin
- Login with your credentials
- Access is based on role:
  - User → view personal account only
  - Admin → manage all accounts (CRUD)

---

## 📸 Screenshots

- Design Figma
  <img width="810" height="473" alt="image" src="https://github.com/user-attachments/assets/7c042de2-92e9-487d-9c30-95bb0931007a" />

---

### 🌐 Live Demo

You can try the deployed project here:  
👉 [Auth Management System](https://auth-management-system.vercel.app/admin)

**Admin Test Account**

- Email: `reza@mail.com`
- Password: `reza123`

---

## 📡 API Endpoints

| Method | Endpoint              | Description           |
| ------ | --------------------- | --------------------- |
| POST   | `/auth/register`      | Register new user     |
| POST   | `/auth/login`         | Login (user/admin)    |
| GET    | `/admin/users`        | Admin: view all users |
| POST   | `/admin/users`        | Admin: create user    |
| POST   | `/admin/create-admin` | Admin: create admin   |
| PUT    | `/admin/users/{id}`   | Admin: edit user      |
| DELETE | `/admin/users/{id}`   | Admin: delete user    |
