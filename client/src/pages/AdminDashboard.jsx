import React from 'react'
import { useAuth } from '../context/authContext'
import { Routes, Route, useNavigate, Link } from 'react-router-dom'
import DepartmentList from '../components/department/DepartmentList'
import AddDepartment from '../components/department/AddDepartment'
import EditDepartment from '../components/department/EditDepartment'
import Summary from '../components/dashboard/AdminSummary'  // Placeholder for now
import List from '../components/employee/List' // Placeholder 
import Add from '../components/employee/Add' // Placeholder 
import View from '../components/employee/View' // Placeholder 
import Edit from '../components/employee/Edit' // Placeholder

const AdminDashboard = () => {
    const { user } = useAuth()

    return (
        <div className='flex h-screen bg-gray-100'>
            {/* Sidebar Placeholder */}
            <div className='w-64 bg-gray-800 text-white flex flex-col'>
                <div className='h-16 flex items-center justify-center text-xl font-bold border-b border-gray-700'>
                    Admin Panel
                </div>
                <nav className='flex-1 px-2 py-4 space-y-2'>
                    <Link to="/admin-dashboard" className='block px-4 py-2 rounded hover:bg-gray-700'>Dashboard</Link>
                    <Link to="/admin-dashboard/employees" className='block px-4 py-2 rounded hover:bg-gray-700'>Employees</Link>
                    <Link to="/admin-dashboard/departments" className='block px-4 py-2 rounded hover:bg-gray-700'>Departments</Link>
                    <Link to="/admin-dashboard/profile" className='block px-4 py-2 rounded hover:bg-gray-700'>Profile</Link>
                    <Link to="/admin-dashboard/settings" className='block px-4 py-2 rounded hover:bg-gray-700'>Settings</Link>
                </nav>
            </div>

            {/* Main Content */}
            <div className='flex-1 flex flex-col'>
                {/* Header */}
                <header className='h-16 bg-white shadow flex items-center justify-between px-6'>
                    <h1 className='text-xl font-bold'>Welcome {user && user.name}</h1>
                    <button className='bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700'>Logout</button>
                </header>

                {/* Content */}
                <main className='flex-1 overflow-auto p-6'>
                    <Routes>
                        <Route path="/" element={<Summary />} />
                        <Route path="/departments" element={<DepartmentList />} />
                        <Route path="/add-department" element={<AddDepartment />} />
                        <Route path="/department/:id" element={<EditDepartment />} />
                        <Route path="/employees" element={<List />} />
                        <Route path="/add-employee" element={<Add />} />
                        <Route path="/employees/:id" element={<View />} />
                        <Route path="/employees/edit/:id" element={<Edit />} />
                    </Routes>
                </main>
            </div>
        </div>
    )
}

export default AdminDashboard
