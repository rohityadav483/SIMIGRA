# 🚀 SIMIGRA – Migration Support Platform

**SIMIGRA** is a full-stack web application designed to assist individuals relocating to a new city. The platform consolidates essential migration resources such as jobs, accommodations, food services, transport options, and cultural guidance into one unified system.

> **SIMIGRA: Simplify. Settle. Succeed.**

---

## 📌 Project Purpose

Relocating to a new city often requires using multiple platforms to gather information about employment, housing, living expenses, and local adaptation. This fragmentation creates confusion and stress.

SIMIGRA solves this problem by providing a **centralized migration assistance platform**.

---

## ✨ Core Features

### 👤 User Management

- Secure signup & login (email/password authentication)
- Passwords stored using hashed encryption
- User profile stores:
  - Name & email
  - Destination city
  - Skills & education
  - Cultural preferences
- Users can update profile information

---

### 💼 Job Listings

- City-based job filtering
- Job details include:
  - Job title & company
  - Salary range
  - Required skills
  - Job type & description
  - Posting metadata

---

### 🏠 Accommodation Finder

- Housing options filtered by city
- Displays:
  - Property name & type
  - Price range
  - Address & contact
  - Ratings & reviews
  - Distance from center
  - Images & descriptions

---

### 🍽 Food & Living Services

- Local food providers / eateries
- Information includes:
  - Cuisine types
  - Pricing details
  - Ratings & offers
  - Distance indicators
  - Images

---

### 🚕 Transport Options

- Compare transport modes by city
- Data provided:
  - Base fare
  - Cost per km
  - Mode description

---

### 🌏 Cultural Adaptation Resources

- Language information
- Cultural guides & resources
- Helps users adapt to local environment

---

## 🛠 Technology Stack

### Frontend

- React.js
- HTML / CSS / JavaScript

### Backend

- Python
- Flask
- Flask-SQLAlchemy
- Flask-CORS
- Werkzeug Security

### Database

- PostgreSQL

---

## ⚙️ Backend Setup

Update database configuration inside `Backend/app.py`:

```python
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://username:password@localhost/simigra_db'
```

Ensure PostgreSQL is running before starting the backend server.

---

## ▶️ Running the Application

### ✅ Prerequisites

Make sure you have installed:

- Python 3.x
- Node.js & npm
- PostgreSQL / pgAdmin

---

### 1️⃣ Start PostgreSQL

Launch PostgreSQL service using pgAdmin or system services.

---

### 2️⃣ Run Backend Server

```bash
cd Backend
python app.py
```

Backend runs at:

```
http://127.0.0.1:5000/
```

---

### 3️⃣ Run Frontend (React)

Open a new terminal:

```bash
cd Frontend
npm run start
```

Frontend runs at:

```
http://localhost:3000/
```

---

## 🔌 API Endpoints

| Endpoint                       | Method | Description              |
| ------------------------------ | ------ | ------------------------ |
| `/api/signup`                  | POST   | Create user account      |
| `/api/login`                   | POST   | Authenticate user        |
| `/api/user/<id>`               | GET    | Retrieve user profile    |
| `/api/user/<id>`               | PUT    | Update user profile      |
| `/api/jobs?city=XYZ`           | GET    | Fetch jobs by city       |
| `/api/accommodations?city=XYZ` | GET    | Fetch accommodations     |
| `/api/food?city=XYZ`           | GET    | Fetch food services      |
| `/api/transport?city=XYZ`      | GET    | Fetch transport options  |
| `/api/culture?city=XYZ`        | GET    | Fetch cultural resources |

---

## 🔐 Security

- Password hashing using Werkzeug
- Unique email constraint
- ORM-based database queries
- CORS enabled for frontend communication

---

## ❤️ Acknowledgement

SIMIGRA aims to simplify migration planning and reduce uncertainty for individuals relocating to new cities.

---
