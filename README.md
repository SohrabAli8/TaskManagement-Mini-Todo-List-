# 📝 Task Management System (Full-Stack)

A professional, high-end Task Management application built with **.NET Core 10 (Web API + MVC)** and **Angular (v21)**. This project demonstrates a complete full-stack lifecycle with **MySQL** persistence, **DTO** patterns, and separate **Client-Side (SPA)** and **Server-Side (SSR)** views.

---

## 🚀 Quick Start

### 1. Prerequisites
- **.NET SDK 10.0+**
- **Node.js (v24+) & npm**
- **MySQL Server** (running locally on port 3306)

### 2. Database Setup (MySQL)
The application is configured to connect to MySQL with the following credentials (as requested):
- **User**: `root`
- **Password**: `810889`
- **Database**: `task_manager_db`

The database schema is managed via **EF Core Migrations**. To verify or manually update the schema:
```bash
# From the project root
dotnet ef database update --project Backend --startup-project Backend
```

### 3. Run the Servers
Open two terminal windows:

**Terminal 1: Backend (.NET)**
```bash
cd Backend
dotnet run --launch-profile https
```
- **API URL**: `https://localhost:7040/api/tasks`
- **MVC Dashboard (SSR)**: `https://localhost:7040/`

**Terminal 2: Frontend (Angular)**
```bash
cd Frontend
npm install
npm start
```
- **Angular App (SPA)**: `http://localhost:4200/`

---

## ✨ Features

### 🖥️ Angular Client SPA
- **Modern UI**: Dark theme, glassmorphism, and smooth transitions using the **Outfit** font.
- **Dedicated Routing**: Separate pages for Task List, Add Task (`/add`), and Edit Task (`/edit/:id`).
- **Form Validation**: Real-time validation for task titles (min 3 chars).
- **Zoneless Ready**: Optimized for modern Angular performance.

### 🧱 .NET Web API & MVC
- **DTO Pattern**: Uses Data Transfer Objects to decouple domain models from API contracts.
- **MVC Support**: Includes a server-side rendered (SSR) dashboard built with Razor Views.
- **Layered Architecture**: Follows Controller → Service → Repository pattern for clean separation of concerns.
- **CORS**: Securely configured for Angular integration.

### 🗄️ Persistence
- **MySQL Integrated**: Full persistence using the official Oracle MySQL provider.
- **In-Memory Ready**: Scalable architecture allow easy switching of providers.

---

## 📂 Project Structure

```text
Task/
├── Backend/                 # .NET Web API + MVC
│   ├── Controllers/         # API & MVC Controllers
│   ├── Data/                # EF Core DbContext
│   ├── Dtos/                # Data Transfer Objects (Contracts)
│   ├── Models/              # Domain Models (Database Entities)
│   ├── Repositories/        # Data Access Layer
│   ├── Services/            # Business Logic Layer
│   ├── Views/               # Razor Views for MVC (SSR)
│   └── Program.cs           # Server configuration & Routing
├── Frontend/                # Angular SPA
│   ├── src/app/
│   │   ├── components/      # TaskList & TaskForm Components
│   │   ├── models/          # TypeScript task interfaces
│   │   └── services/        # TaskService (HTTP Client)
│   └── src/styles.css       # Global design & Glassmorphism styles
└── README.md                # Project documentation
```

---

## 🛠 Troubleshooting
- **CORS Error**: Ensure the Angular app is running on `http://localhost:4200`.
- **Database Connection**: Verify your MySQL server is running and the credentials match those in `Backend/appsettings.json`.
- **Build Failures**: Run `dotnet build Backend` to see specific compiler errors if any modifications are made.

---
Built with 💙 by Antigravity AI.
