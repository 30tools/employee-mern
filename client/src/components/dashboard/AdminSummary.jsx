import React from 'react'
import { Users, Building2, Wallet, FileText, CheckCircle, XCircle, Clock } from "lucide-react"

const AdminSummary = () => {
    return (
        <div className="p-6">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">Dashboard Overview</h3>
            
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border-l-4 border-blue-500 hover:shadow-lg transition-shadow">
                    <div className="flex items-center justify-between mb-4">
                        <h4 className="text-sm font-semibold text-gray-500 uppercase">Total Employees</h4>
                        <div className="p-2 bg-blue-100 rounded-full dark:bg-blue-900">
                            <Users className="h-5 w-5 text-blue-600 dark:text-blue-300" />
                        </div>
                    </div>
                    <div>
                        <span className="text-3xl font-bold text-gray-900 dark:text-white">128</span>
                        <p className="text-xs text-green-500 mt-1 font-medium flex items-center">
                            <span className="bg-green-100 text-green-800 px-1.5 py-0.5 rounded mr-1">↑ 12%</span> 
                            from last month
                        </p>
                    </div>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border-l-4 border-green-500 hover:shadow-lg transition-shadow">
                    <div className="flex items-center justify-between mb-4">
                        <h4 className="text-sm font-semibold text-gray-500 uppercase">Departments</h4>
                        <div className="p-2 bg-green-100 rounded-full dark:bg-green-900">
                            <Building2 className="h-5 w-5 text-green-600 dark:text-green-300" />
                        </div>
                    </div>
                    <div>
                        <span className="text-3xl font-bold text-gray-900 dark:text-white">12</span>
                        <p className="text-xs text-gray-500 mt-1">2 new added</p>
                    </div>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border-l-4 border-yellow-500 hover:shadow-lg transition-shadow">
                    <div className="flex items-center justify-between mb-4">
                        <h4 className="text-sm font-semibold text-gray-500 uppercase">Monthly Payroll</h4>
                        <div className="p-2 bg-yellow-100 rounded-full dark:bg-yellow-900">
                            <Wallet className="h-5 w-5 text-yellow-600 dark:text-yellow-300" />
                        </div>
                    </div>
                    <div>
                        <span className="text-3xl font-bold text-gray-900 dark:text-white">$45,230</span>
                        <p className="text-xs text-green-500 mt-1 font-medium flex items-center">
                            <span className="bg-green-100 text-green-800 px-1.5 py-0.5 rounded mr-1">↑ 5%</span>
                            from last month
                        </p>
                    </div>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border-l-4 border-purple-500 hover:shadow-lg transition-shadow">
                    <div className="flex items-center justify-between mb-4">
                        <h4 className="text-sm font-semibold text-gray-500 uppercase">Pending Leaves</h4>
                        <div className="p-2 bg-purple-100 rounded-full dark:bg-purple-900">
                            <FileText className="h-5 w-5 text-purple-600 dark:text-purple-300" />
                        </div>
                    </div>
                    <div>
                        <span className="text-3xl font-bold text-gray-900 dark:text-white">8</span>
                        <p className="text-xs text-red-500 mt-1 font-medium">Requires attention</p>
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Leave Status */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
                    <h4 className="text-lg font-bold text-gray-800 dark:text-white mb-4">Leave Status</h4>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                            <div className="flex items-center">
                                <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 mr-3">
                                    <FileText className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-gray-800">Casual Leave Applied</p>
                                    <p className="text-xs text-gray-500">Total 12 applications</p>
                                </div>
                            </div>
                            <span className="font-bold text-gray-700 bg-gray-100 px-3 py-1 rounded-full text-sm">12</span>
                        </div>
                        <div className="flex items-center justify-between border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                            <div className="flex items-center">
                                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3">
                                    <CheckCircle className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-gray-800">Approved Leaves</p>
                                    <p className="text-xs text-gray-500">This month</p>
                                </div>
                            </div>
                            <span className="font-bold text-gray-700 bg-gray-100 px-3 py-1 rounded-full text-sm">8</span>
                        </div>
                        <div className="flex items-center justify-between border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                            <div className="flex items-center">
                                <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600 mr-3">
                                    <Clock className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-gray-800">Pending Approvals</p>
                                    <p className="text-xs text-gray-500">Needs Review</p>
                                </div>
                            </div>
                            <span className="font-bold text-gray-700 bg-gray-100 px-3 py-1 rounded-full text-sm">3</span>
                        </div>
                        <div className="flex items-center justify-between border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                            <div className="flex items-center">
                                <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-600 mr-3">
                                    <XCircle className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-gray-800">Rejected Leaves</p>
                                    <p className="text-xs text-gray-500">This month</p>
                                </div>
                            </div>
                            <span className="font-bold text-gray-700 bg-gray-100 px-3 py-1 rounded-full text-sm">1</span>
                        </div>
                    </div>
                </div>

                {/* Recent Activity */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
                    <h4 className="text-lg font-bold text-gray-800 dark:text-white mb-4">Recent Activity</h4>
                    <div className="space-y-6">
                        <div className="flex gap-4">
                            <div className="flex flex-col items-center">
                                <div className="w-3 h-3 rounded-full bg-green-500 ring-4 ring-green-100"></div>
                                <div className="w-0.5 h-full bg-gray-200 mt-2"></div>
                            </div>
                            <div className="pb-4">
                                <p className="text-sm font-semibold text-gray-800">New Employee Registered</p>
                                <p className="text-xs text-gray-500">Sarah Smith joined Marketing Dept</p>
                                <p className="text-xs text-gray-400 mt-1">2 hours ago</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex flex-col items-center">
                                <div className="w-3 h-3 rounded-full bg-blue-500 ring-4 ring-blue-100"></div>
                                <div className="w-0.5 h-full bg-gray-200 mt-2"></div>
                            </div>
                            <div className="pb-4">
                                <p className="text-sm font-semibold text-gray-800">Department Meeting Scheduled</p>
                                <p className="text-xs text-gray-500">Engineering Team Sync</p>
                                <p className="text-xs text-gray-400 mt-1">5 hours ago</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex flex-col items-center">
                                <div className="w-3 h-3 rounded-full bg-yellow-500 ring-4 ring-yellow-100"></div>
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-gray-800">Leave Request pending</p>
                                <p className="text-xs text-gray-500">John Doe requested Sick Leave</p>
                                <p className="text-xs text-gray-400 mt-1">1 day ago</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminSummary
