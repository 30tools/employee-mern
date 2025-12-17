import React, { useEffect, useState } from 'react'
import { fetchDepartments } from '../../utils/DepartmentHelper'
import { getEmployees } from '../../utils/EmployeeHelper'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

const Edit = () => {
    const [departments, setDepartments] = useState([])
    const [employee, setEmployee] = useState({
        name: '',
        maritalStatus: '',
        designation: '',
        salary: 0,
        department: ''
    })
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        const getDepartments = async () => {
            const data = await fetchDepartments()
            setDepartments(data)
        }
        getDepartments()
    }, [])

    useEffect(() => {
        const fetchEmployee = async () => {
            const data = await getEmployees(id)
            setEmployee({
                name: data.userId.name,
                maritalStatus: data.maritalStatus,
                designation: data.designation,
                salary: data.salary,
                department: data.department._id
            })
        }
        fetchEmployee()
    }, [id])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmployee({ ...employee, [name]: value })
    }

    const handleSelectChange = (name, value) => {
        setEmployee({ ...employee, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await axios.put(`http://localhost:5000/api/employee/${id}`, employee, {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem('token')}`
                }
            })
            if (response.data.success) {
                navigate('/admin-dashboard/employees')
            }
        } catch (error) {
            if (error.response && !error.response.data.success) {
                alert(error.response.data.error)
            }
        }
    }

    return (
        <div className='flex justify-center pt-8 pb-8'>
            <Card className="w-full max-w-4xl">
                <CardHeader>
                    <CardTitle>Edit Employee</CardTitle>
                    <CardDescription>Update employee details.</CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                            {/* Name */}
                            <div className='space-y-2'>
                                <Label htmlFor="name">Name</Label>
                                <Input
                                    id="name"
                                    type="text"
                                    name="name"
                                    value={employee.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            {/* Marital Status */}
                            <div className='space-y-2'>
                                <Label htmlFor="maritalStatus">Marital Status</Label>
                                <Select
                                    value={employee.maritalStatus}
                                    onValueChange={(value) => handleSelectChange("maritalStatus", value)}
                                >
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select Status" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="single">Single</SelectItem>
                                        <SelectItem value="married">Married</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            {/* Designation */}
                            <div className='space-y-2'>
                                <Label htmlFor="designation">Designation</Label>
                                <Input
                                    id="designation"
                                    type="text"
                                    name="designation"
                                    value={employee.designation}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            {/* Department */}
                            <div className='space-y-2'>
                                <Label htmlFor="department">Department</Label>
                                <Select
                                    value={employee.department}
                                    onValueChange={(value) => handleSelectChange("department", value)}
                                >
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select Department" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {departments.map(dep => (
                                            <SelectItem key={dep._id} value={dep._id}>{dep.dep_name}</SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>

                            {/* Salary */}
                            <div className='space-y-2'>
                                <Label htmlFor="salary">Salary</Label>
                                <Input
                                    id="salary"
                                    type="number"
                                    name="salary"
                                    value={employee.salary}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <Button type="submit" className="w-full">Update Employee</Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}

export default Edit
