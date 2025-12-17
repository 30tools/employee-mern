import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { fetchDepartments } from '../utils/DepartmentHelper'

const DepartmentList = () => {
    const [departments, setDepartments] = useState([])
    const [depLoading, setDepLoading] = useState(false)

    useEffect(() => {
        const getDepartments = async () => {
            setDepLoading(true)
            const data = await fetchDepartments()
            setDepartments(data)
            setDepLoading(false)
        }
        getDepartments()
    }, [])

    const onDepartmentDelete = async (id) => {
        // Implement delete logic here or pass as prop if needed, for now just placeholder
        console.log("Delete department", id)
    }

    return (
        <div className='p-6'>
            <div className='text-center'>
                <h3 className='text-2xl font-bold'>Manage Departments</h3>
            </div>
            <div className='flex justify-between items-center mt-5'>
                <input type="text" placeholder='Search By Dep Name' className='px-4 py-0.5 border' />
                <Link to="/admin-dashboard/add-department" className='px-4 py-1 bg-teal-600 rounded text-white'>Add New Department</Link>
            </div>
            <div className='mt-6 border rounded-lg overflow-hidden shadow-lg border-gray-200'>
                <table className='min-w-full text-center'>
                    <thead className='bg-gray-100 text-gray-700 uppercase'>
                        <tr>
                            <th className='py-2'>S No</th>
                            <th className='py-2'>Dep Name</th>
                            <th className='py-2'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {depLoading ? <tr><td colSpan="3" className="py-4">Loading...</td></tr> :
                            departments.map((dep, index) => (
                                <tr key={dep._id} className='bg-white border-b'>
                                    <td className='py-3 border'>{index + 1}</td>
                                    <td className='py-3 border'>{dep.dep_name}</td>
                                    <td className='py-3 border flex justify-center space-x-2'>
                                        <Link to={`/admin-dashboard/department/${dep._id}`} className='px-3 py-1 bg-teal-600 text-white rounded'>Edit</Link>
                                        <button onClick={() => onDepartmentDelete(dep._id)} className='px-3 py-1 bg-red-600 text-white rounded'>Delete</button>
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default DepartmentList
