import React from 'react'
import { useAuth } from '../context/authContext'
import { Outlet } from 'react-router-dom'

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
                    <a href="#" className='block px-4 py-2 rounded hover:bg-gray-700'>Dashboard</a>
                    <a href="#" className='block px-4 py-2 rounded hover:bg-gray-700'>Employees</a>
                    <a href="#" className='block px-4 py-2 rounded hover:bg-gray-700'>Departments</a>
                    <a href="#" className='block px-4 py-2 rounded hover:bg-gray-700'>Profile</a>
                    <a href="#" className='block px-4 py-2 rounded hover:bg-gray-700'>Settings</a>
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
                    <Outlet />
                    <div className='text-center mt-10'>Dashboard Overview (Charts/Stats Placeholder)</div>
                </main>
            </div>
        </div>
    )
}

export default AdminDashboard
