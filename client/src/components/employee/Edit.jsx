import React, { useEffect, useState } from 'react'
import { fetchDepartments } from '../../utils/DepartmentHelper'
import { getEmployees } from '../../utils/EmployeeHelper'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

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
        <div className='max-w-4xl mx-auto mt-10 bg-white p-8 rounded-md shadow-md'>
            <h2 className='text-2xl font-bold mb-6'>Edit Employee</h2>
            <form onSubmit={handleSubmit}>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    {/* Name */}
                    <div>
                        <label className='block text-sm font-medium text-gray-700'>Name</label>
                        <input type="text" name="name" value={employee.name} onChange={handleChange} placeholder='Insert Name' className='mt-1 p-2 block w-full border border-gray-300 rounded-md' required />
                    </div>

                    {/* Marital Status */}
                    <div>
                        <label className='block text-sm font-medium text-gray-700'>Marital Status</label>
                        <select name="maritalStatus" value={employee.maritalStatus} onChange={handleChange} className='mt-1 p-2 block w-full border border-gray-300 rounded-md' required>
                            <option value="">Select Status</option>
                            <option value="single">Single</option>
                            <option value="married">Married</option>
                        </select>
                    </div>

                    {/* Designation */}
                    <div>
                        <label className='block text-sm font-medium text-gray-700'>Designation</label>
                        <input type="text" name="designation" value={employee.designation} onChange={handleChange} placeholder='Designation' className='mt-1 p-2 block w-full border border-gray-300 rounded-md' required />
                    </div>

                    {/* Department */}
                    <div>
                        <label className='block text-sm font-medium text-gray-700'>Department</label>
                        <select name="department" value={employee.department} onChange={handleChange} className='mt-1 p-2 block w-full border border-gray-300 rounded-md' required>
                            <option value="">Select Department</option>
                            {departments.map(dep => (
                                <option key={dep._id} value={dep._id}>{dep.dep_name}</option>
                            ))}
                        </select>
                    </div>

                    {/* Salary */}
                    <div>
                        <label className='block text-sm font-medium text-gray-700'>Salary</label>
                        <input type="number" name="salary" value={employee.salary} onChange={handleChange} placeholder='Salary' className='mt-1 p-2 block w-full border border-gray-300 rounded-md' required />
                    </div>
                </div>

                <button type="submit" className='w-full mt-6 bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded'>Edit Employee</button>
            </form>
        </div>
    )
}

export default Edit
