# Employee Management System - Backend

This is the backend for the Employee Management System, built with Node.js and Express.

## API Endpoints

### Authentication
- `POST /api/auth/login`: Login user
- `GET /api/auth/verify`: Verify current user

### Departments
- `GET /api/department`: List all departments
- `POST /api/department/add`: Add new department
- `GET /api/department/:id`: Get department by ID
- `PUT /api/department/:id`: Update department
- `DELETE /api/department/:id`: Delete department

### Employees
- `GET /api/employee`: List employees (supports ?page, ?limit, ?search, ?department)
- `POST /api/employee/add`: Add new employee (with image upload)
- `GET /api/employee/:id`: Get employee by ID
- `PUT /api/employee/:id`: Update employee
- `GET /api/employee/department/:id`: Get employees by department

## Setup
1. `npm install`
2. Configure `.env`
3. `node userSeed.js` to seed admin
4. `npm run dev` to start server (nodemon)
