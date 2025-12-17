import React, { useEffect, useState } from 'react'
import { fetchDepartments } from '../../utils/DepartmentHelper'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
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

const Add = () => {
    const [departments, setDepartments] = useState([])
    const [formData, setFormData] = useState({})
    const navigate = useNavigate()

    useEffect(() => {
        const getDepartments = async () => {
            const data = await fetchDepartments()
            setDepartments(data)
        }
        getDepartments()
    }, [])

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === "image") {
            setFormData({ ...formData, [name]: files[0] })
        } else {
            setFormData({ ...formData, [name]: value })
        }
    }

    const handleSelectChange = (name, value) => {
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const formDataObj = new FormData()
        Object.keys(formData).forEach((key) => {
            formDataObj.append(key, formData[key])
        })

        try {
            const response = await axios.post('http://localhost:5001/api/employee/add', formDataObj, {
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
                    <CardTitle>Add New Employee</CardTitle>
                    <CardDescription>Enter details to create a new employee.</CardDescription>
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
                                    onChange={handleChange}
                                    placeholder='Insert Name'
                                    required
                                />
                            </div>

                            {/* Email */}
                            <div className='space-y-2'>
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    name="email"
                                    onChange={handleChange}
                                    placeholder='Insert Email'
                                    required
                                />
                            </div>

                            {/* Employee ID */}
                            <div className='space-y-2'>
                                <Label htmlFor="employeeId">Employee ID</Label>
                                <Input
                                    id="employeeId"
                                    type="text"
                                    name="employeeId"
                                    onChange={handleChange}
                                    placeholder='Employee ID'
                                    required
                                />
                            </div>

                            {/* Date of Birth */}
                            <div className='space-y-2'>
                                <Label htmlFor="dob">Date of Birth</Label>
                                <Input
                                    id="dob"
                                    type="date"
                                    name="dob"
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            {/* Gender */}
                            <div className='space-y-2'>
                                <Label htmlFor="gender">Gender</Label>
                                <Select onValueChange={(value) => handleSelectChange("gender", value)}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select Gender" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="male">Male</SelectItem>
                                        <SelectItem value="female">Female</SelectItem>
                                        <SelectItem value="other">Other</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            {/* Marital Status */}
                            <div className='space-y-2'>
                                <Label htmlFor="maritalStatus">Marital Status</Label>
                                <Select onValueChange={(value) => handleSelectChange("maritalStatus", value)}>
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
                                    onChange={handleChange}
                                    placeholder='Designation'
                                    required
                                />
                            </div>

                            {/* Department */}
                            <div className='space-y-2'>
                                <Label htmlFor="department">Department</Label>
                                <Select onValueChange={(value) => handleSelectChange("department", value)}>
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
                                    onChange={handleChange}
                                    placeholder='Salary'
                                    required
                                />
                            </div>

                            {/* Password */}
                            <div className='space-y-2'>
                                <Label htmlFor="password">Password</Label>
                                <Input
                                    id="password"
                                    type="password"
                                    name="password"
                                    onChange={handleChange}
                                    placeholder='******'
                                    required
                                />
                            </div>

                            {/* Role */}
                            <div className='space-y-2'>
                                <Label htmlFor="role">Role</Label>
                                <Select onValueChange={(value) => handleSelectChange("role", value)}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select Role" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="admin">Admin</SelectItem>
                                        <SelectItem value="employee">Employee</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            {/* Image Upload */}
                            <div className='space-y-2'>
                                <Label htmlFor="image">Upload Image</Label>
                                <Input
                                    id="image"
                                    type="file"
                                    name="image"
                                    onChange={handleChange}
                                    accept="image/*"
                                    className="cursor-pointer"
                                />
                            </div>
                        </div>

                        <Button type="submit" className="w-full">Add Employee</Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}

export default Add
