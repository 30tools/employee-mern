import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Building2, Wallet, FileText, CheckCircle, XCircle, Clock } from "lucide-react"

const AdminSummary = () => {
    return (
        <div className="p-6 space-y-6">
            <h3 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">Dashboard Overview</h3>

            {/* Stats Cards */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card className="shadow-lg border-l-4 border-l-blue-500">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground">Total Employees</CardTitle>
                        <Users className="h-5 w-5 text-blue-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-3xl font-bold">128</div>
                        <p className="text-xs text-muted-foreground">+12% from last month</p>
                    </CardContent>
                </Card>

                <Card className="shadow-lg border-l-4 border-l-green-500">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground">Departments</CardTitle>
                        <Building2 className="h-5 w-5 text-green-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-3xl font-bold">12</div>
                        <p className="text-xs text-muted-foreground">+2 new departments</p>
                    </CardContent>
                </Card>

                <Card className="shadow-lg border-l-4 border-l-yellow-500">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground">Monthly Payroll</CardTitle>
                        <Wallet className="h-5 w-5 text-yellow-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-3xl font-bold">$45,230</div>
                        <p className="text-xs text-muted-foreground">+5% from last month</p>
                    </CardContent>
                </Card>

                <Card className="shadow-lg border-l-4 border-l-purple-500">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground">Pending Leaves</CardTitle>
                        <FileText className="h-5 w-5 text-purple-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-3xl font-bold">8</div>
                        <p className="text-xs text-muted-foreground">Requires attention</p>
                    </CardContent>
                </Card>
            </div>

            {/* Leave Details Section */}
            <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-2">
                <Card className="col-span-1 shadow-md">
                    <CardHeader>
                        <CardTitle>Leave Status</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <div className="flex items-center">
                                <div className="flex items-center justify-center w-10 h-10 bg-teal-100 rounded-full mr-4">
                                    <FileText className="h-5 w-5 text-teal-600" />
                                </div>
                                <div className='flex-1'>
                                    <p className='text-sm font-medium'>Casual Leave Applied</p>
                                    <p className='text-xs text-muted-foreground'>Total 12 applications</p>
                                </div>
                                <span className="font-bold text-gray-700">12</span>
                            </div>
                            <div className="flex items-center">
                                <div className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full mr-4">
                                    <CheckCircle className="h-5 w-5 text-blue-600" />
                                </div>
                                <div className='flex-1'>
                                    <p className='text-sm font-medium'>Approved Leaves</p>
                                    <p className='text-xs text-muted-foreground'>This month</p>
                                </div>
                                <span className="font-bold text-gray-700">8</span>
                            </div>
                            <div className="flex items-center">
                                <div className="flex items-center justify-center w-10 h-10 bg-yellow-100 rounded-full mr-4">
                                    <Clock className="h-5 w-5 text-yellow-600" />
                                </div>
                                <div className='flex-1'>
                                    <p className='text-sm font-medium'>Pending Approvals</p>
                                    <p className='text-xs text-muted-foreground'>Needs Review</p>
                                </div>
                                <span className="font-bold text-gray-700">3</span>
                            </div>
                            <div className="flex items-center">
                                <div className="flex items-center justify-center w-10 h-10 bg-red-100 rounded-full mr-4">
                                    <XCircle className="h-5 w-5 text-red-600" />
                                </div>
                                <div className='flex-1'>
                                    <p className='text-sm font-medium'>Rejected Leaves</p>
                                    <p className='text-xs text-muted-foreground'>This month</p>
                                </div>
                                <span className="font-bold text-gray-700">1</span>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card className="col-span-1 shadow-md">
                    <CardHeader>
                        <CardTitle>Recent Activity</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="w-2 h-2 mt-2 rounded-full bg-green-500" />
                                <div>
                                    <p className="text-sm font-medium">New Employee Registered</p>
                                    <p className="text-xs text-muted-foreground">Sarah Smith joined Marketing Dept</p>
                                    <p className="text-xs text-gray-400 mt-1">2 hours ago</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-2 h-2 mt-2 rounded-full bg-blue-500" />
                                <div>
                                    <p className="text-sm font-medium">Department Meeting Scheduled</p>
                                    <p className="text-xs text-muted-foreground">Engineering Team Sync</p>
                                    <p className="text-xs text-gray-400 mt-1">5 hours ago</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-2 h-2 mt-2 rounded-full bg-yellow-500" />
                                <div>
                                    <p className="text-sm font-medium">Leave Request pending</p>
                                    <p className="text-xs text-muted-foreground">John Doe requested Sick Leave</p>
                                    <p className="text-xs text-gray-400 mt-1">1 day ago</p>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
