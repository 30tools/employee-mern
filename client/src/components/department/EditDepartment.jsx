import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
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

const EditDepartment = () => {
    const { id } = useParams()
    const [department, setDepartment] = useState({
        dep_name: '',
        description: ''
    })
    const [depLoading, setDepLoading] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        const fetchDepartment = async () => {
            setDepLoading(true)
            try {
                const response = await axios.get(`http://localhost:5001/api/department/${id}`, {
                    headers: {
                        "Authorization": `Bearer ${localStorage.getItem('token')}`
                    }
                })
                if (response.data.success) {
                    setDepartment(response.data.department)
                }
            } catch (error) {
                if (error.response && !error.response.data.success) {
                    alert(error.response.data.error)
                }
            } finally {
                setDepLoading(false)
            }
        }
        fetchDepartment()
    }, [id])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDepartment({ ...department, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.put(`http://localhost:5001/api/department/${id}`, department, {
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
            {depLoading ? <div className='text-center'>Loading...</div> :
                <Card className="w-full max-w-lg">
                    <CardHeader>
                        <CardTitle>Edit Department</CardTitle>
                        <CardDescription>Update department details.</CardDescription>
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
                                    required
                                />
                            </div>
                            <div className='space-y-1.5'>
                                <Label htmlFor="description">Description</Label>
                                <Textarea
                                    id="description"
                                    name="description"
                                    value={department.description}
                                    onChange={handleChange}
                                    rows={4}
                                />
                            </div>
                            <Button type="submit" className="w-full">Update Department</Button>
                        </form>
                    </CardContent>
                </Card>
            }
        </div>
    )
}

export default EditDepartment
