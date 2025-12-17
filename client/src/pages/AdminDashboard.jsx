import React from 'react'
import { useAuth } from '../context/authContext'
import { Routes, Route, useNavigate, Link, useLocation } from 'react-router-dom'
import DepartmentList from '../components/department/DepartmentList'
import AddDepartment from '../components/department/AddDepartment'
import EditDepartment from '../components/department/EditDepartment'
import Summary from '../components/dashboard/AdminSummary'
import List from '../components/employee/List'
import Add from '../components/employee/Add'
import View from '../components/employee/View'
import Edit from '../components/employee/Edit'
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { LayoutDashboard, Users, Building2, User, Settings, LogOut } from "lucide-react"
import SEO from '../components/SEO'

const AdminDashboard = () => {
    const { user, logout } = useAuth() // Assuming logout function exists in context, if not I need to add it or implement here.
    const navigate = useNavigate()
    const location = useLocation()

    const handleLogout = () => {
        // Implement logout logic if context doesn't have it, but usually context has it. 
        // Checking context definition: context/authContext.jsx has logout.
        if (logout) {
            logout()
        } else {
            // Fallback if context update hasn't propagated or I misread
            localStorage.removeItem("token")
        }
        navigate('/login')
    }

    const navItems = [
        { label: "Dashboard", href: "/admin-dashboard", icon: LayoutDashboard },
        { label: "Employees", href: "/admin-dashboard/employees", icon: Users },
        { label: "Departments", href: "/admin-dashboard/departments", icon: Building2 },
        { label: "Profile", href: "/admin-dashboard/profile", icon: User },
        { label: "Settings", href: "/admin-dashboard/settings", icon: Settings },
    ]

    return (
        <div className='flex h-screen bg-gray-50/50 dark:bg-gray-900'>
            <SEO title="Admin Dashboard - Employee Management" description="Manage employees, departments, and system settings." />
            {/* Sidebar */}
            <div className='hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40 w-[250px]'>
                <div className='flex h-full max-h-screen flex-col gap-2'>
                    <div className='flex h-[60px] items-center border-b px-6'>
                        <Link to="/" className='flex items-center gap-2 font-semibold'>
                            <span className=''>EMS</span>
                        </Link>
                    </div>
                    <div className='flex-1 py-2 overflow-y-auto w-full'>
                        <nav className='grid items-start px-4 text-sm font-medium'>
                            {navItems.map((item) => {
                                const Icon = item.icon
                                return (
                                    <Link
                                        key={item.href}
                                        to={item.href}
                                        className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary ${location.pathname === item.href ? "bg-muted text-primary" : "text-muted-foreground"}`}
                                    >
                                        <Icon className="h-4 w-4" />
                                        {item.label}
                                    </Link>
                                )
                            })}
                        </nav>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className='flex flex-col flex-1'>
                <header className='flex h-14 items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40 lg:h-[60px] justify-between'>
                    <div className='w-full flex-1'>
                        {/* Search or Breadcrumbs could go here */}
                        <h1 className='text-lg font-semibold'>
                            {navItems.find(item => item.href === location.pathname)?.label || "Dashboard"}
                        </h1>
                    </div>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                                <Avatar className="h-8 w-8">
                                    {/* Placeholder for user image if available */}
                                    <AvatarImage src={`http://localhost:5001/uploads/${user?.profileImage}`} alt={user?.name} />
                                    <AvatarFallback>{user?.name?.charAt(0)}</AvatarFallback>
                                </Avatar>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56" align="end" forceMount>
                            <DropdownMenuLabel className="font-normal">
                                <div className="flex flex-col space-y-1">
                                    <p className="text-sm font-medium leading-none">{user?.name}</p>
                                    <p className="text-xs leading-none text-muted-foreground">{user?.email || "admin@example.com"}</p>
                                </div>
                            </DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem onClick={handleLogout} className="text-red-600 cursor-pointer">
                                <LogOut className="mr-2 h-4 w-4" />
                                <span>Log out</span>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </header>

                <main className='flex-1 overflow-y-auto p-6'>
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
