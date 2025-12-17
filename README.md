# Employee Management System (MERN)

A web-based system to manage company employees, departments, and roles using the MERN stack (MongoDB, Express.js, React.js, Node.js).
This project allows Admin users to manage departments, employees, and view summary statistics.

## Features
- **Authentication**: Secure Login for Admins.
- **Employee Management**: CRUD operations, Search, Filter by Department, Pagination.
- **Department Management**: Create, Read, Update, Delete Departments.
- **File Upload**: Profile photo upload for employees.
- **Role-based Access**: Admin role implemented.

## Tech Stack
- **Frontend**: React.js, Tailwind CSS, Vite
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Security**: JWT, Bcrypt

## Installation & Setup

### Prerequisites
- Node.js installed
- MongoDB installed and running locally or Atlas URI

### 1. Clone the Repository
```bash
git clone https://github.com/30tools/employee-mern.git
cd employee-mern
```

### 2. Backend Setup
Navigate to the server directory:
```bash
cd server
```

Install dependencies:
```bash
npm install
```

Create a `.env` file based on `.env.example`:
```bash
cp .env.example .env
```
Update `.env` with your MongoDB URI and Secret Keys.

Run the User Seed (to create Admin account):
```bash
node userSeed.js
```
*Note: Default Admin credentials will be logged to console or specified in seed file (admin@gmail.com / admin)*

Start the server:
```bash
npm run dev
```

### 3. Frontend Setup
Navigate to the client directory:
```bash
cd ../client
```

Install dependencies:
```bash
npm install
```

Start the React app:
```bash
npm run dev
```
Access the app at `http://localhost:5173`.

## Folder Structure
- `client/`: React Frontend
- `server/`: Express Backend
