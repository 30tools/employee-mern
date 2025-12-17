import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getEmployees } from '../../utils/EmployeeHelper' // Note: getEmployees fetches single employee by ID here based on previous helper code

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
        return <div>Loading...</div>
    }

    return (
        <div className='max-w-3xl mx-auto mt-10 bg-white p-8 rounded-md shadow-md'>
            <h2 className='text-2xl font-bold mb-8 text-center'>Employee Details</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div className='flex justify-center items-center'>
                    <img src={`http://localhost:5000/uploads/${employee.userId.profileImage}`} alt="" className='rounded-full border w-72 h-72 object-cover' />
                </div>
                <div>
                    <div className='flex space-x-3 mb-5'>
                        <p className='text-lg font-bold'>Name:</p>
                        <p className='text-lg'>{employee.userId.name}</p>
                    </div>
                    <div className='flex space-x-3 mb-5'>
                        <p className='text-lg font-bold'>Employee ID:</p>
                        <p className='text-lg'>{employee.employeeId}</p>
                    </div>
                    <div className='flex space-x-3 mb-5'>
                        <p className='text-lg font-bold'>Date of Birth:</p>
                        <p className='text-lg'>{new Date(employee.dob).toLocaleDateString()}</p>
                    </div>
                    <div className='flex space-x-3 mb-5'>
                        <p className='text-lg font-bold'>Gender:</p>
                        <p className='text-lg'>{employee.gender}</p>
                    </div>
                    <div className='flex space-x-3 mb-5'>
                        <p className='text-lg font-bold'>Department:</p>
                        <p className='text-lg'>{employee.department.dep_name}</p>
                    </div>
                    <div className='flex space-x-3 mb-5'>
                        <p className='text-lg font-bold'>Marital Status:</p>
                        <p className='text-lg'>{employee.maritalStatus}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default View
