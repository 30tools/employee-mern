import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

const AddDepartment = () => {
    const [department, setDepartment] = useState({
        dep_name: '',
        description: ''
    })
    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDepartment({ ...department, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post('http://localhost:5001/api/department/add', department, {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem('token')}`
                }
            })
            if (response.data.success) {
                navigate('/admin-dashboard/departments')
            }
        } catch (error) {
            if (error.response && !error.response.data.success) {
                alert(error.response.data.error)
            }
        }
    }

    return (
        <div className='flex justify-center pt-10'>
            <Card className="w-full max-w-lg">
                <CardHeader>
                    <CardTitle>Add Department</CardTitle>
                    <CardDescription>Create a new department for the organization.</CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className='space-y-1.5'>
                            <Label htmlFor="dep_name">Department Name</Label>
                            <Input
                                id="dep_name"
                                name="dep_name"
                                value={department.dep_name}
                                onChange={handleChange}
                                placeholder='Enter Dep Name'
                                required
                            />
                        </div>
                        <div className='space-y-1.5'>
                            <Label htmlFor="description">Description</Label>
                            <Textarea
                                id="description"
                                name="description"
                                value={department.description}
                                placeholder='Enter Description'
                                onChange={handleChange}
                                rows={4}
                            />
                        </div>
                        <Button type="submit" className="w-full">Add Department</Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}

export default AddDepartment
