import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getEmployees } from '../../utils/EmployeeHelper'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

const View = () => {
    const { id } = useParams()
    const [employee, setEmployee] = useState(null)

    useEffect(() => {
        const fetchEmployee = async () => {
            const data = await getEmployees(id)
            setEmployee(data)
        }
        fetchEmployee()
    }, [id])

    if (!employee) {
        return <div className="text-center mt-10">Loading...</div>
    }

    return (
        <div className='flex justify-center pt-10'>
            <Card className="w-full max-w-4xl p-6">
                <CardHeader>
                    <CardTitle className="text-3xl font-bold text-center">Employee Details</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                        <div className='flex justify-center items-center'>
                            <Avatar className="w-72 h-72 rounded-full border-4 border-gray-100">
                                <AvatarImage src={`http://localhost:5000/uploads/${employee.userId.profileImage}`} alt={employee.userId.name} className="object-cover" />
                                <AvatarFallback className="text-6xl">{employee.userId.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                        </div>
                        <div className="space-y-4">
                            <div className='flex space-x-3 border-b pb-2'>
                                <p className='text-lg font-bold w-32'>Name:</p>
                                <p className='text-lg'>{employee.userId.name}</p>
                            </div>
                            <div className='flex space-x-3 border-b pb-2'>
                                <p className='text-lg font-bold w-32'>Employee ID:</p>
                                <p className='text-lg'>{employee.employeeId}</p>
                            </div>
                            <div className='flex space-x-3 border-b pb-2'>
                                <p className='text-lg font-bold w-32'>DOB:</p>
                                <p className='text-lg'>{new Date(employee.dob).toLocaleDateString()}</p>
                            </div>
                            <div className='flex space-x-3 border-b pb-2'>
                                <p className='text-lg font-bold w-32'>Gender:</p>
                                <p className='text-lg capitalize'>{employee.gender}</p>
                            </div>
                            <div className='flex space-x-3 border-b pb-2'>
                                <p className='text-lg font-bold w-32'>Department:</p>
                                <p className='text-lg'>{employee.department.dep_name}</p>
                            </div>
                            <div className='flex space-x-3 border-b pb-2'>
                                <p className='text-lg font-bold w-32'>Marital Status:</p>
                                <p className='text-lg capitalize'>{employee.maritalStatus}</p>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default View
