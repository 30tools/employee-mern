import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { EmployeeButtons } from '../../utils/EmployeeHelper'
import axios from 'axios'

const List = () => {
    const [employees, setEmployees] = useState([])
    const [empLoading, setEmpLoading] = useState(false)
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [search, setSearch] = useState('');
    const [limit, setLimit] = useState(5); // Items per page

    useEffect(() => {
        const fetchEmployees = async () => {
            setEmpLoading(true)
            try {
                const response = await axios.get('http://localhost:5000/api/employee', {
                    headers: {
                        "Authorization": `Bearer ${localStorage.getItem('token')}`
                    },
                    params: {
                        page,
                        limit,
                        search
                    }
                })
                if (response.data.success) {
                    setEmployees(response.data.employees)
                    setTotalPages(response.data.pagination.totalPages)
                }
            } catch (error) {
                if (error.response && !error.response.data.success) {
                    alert(error.response.data.error)
                }
            } finally {
                setEmpLoading(false)
            }
        }
        fetchEmployees()
    }, [page, limit, search]) // Debounce search in real app

    const handleSearch = (e) => {
        setSearch(e.target.value)
        setPage(1) // Reset to page 1 on search
    }

    return (
        <div className='p-6'>
            <div className='text-center'>
                <h3 className='text-2xl font-bold'>Manage Employees</h3>
            </div>
            <div className='flex justify-between items-center mt-6'>
                <input type="text" placeholder='Search By Name' onChange={handleSearch} className='px-4 py-0.5 border' />
                <Link to="/admin-dashboard/add-employee" className='px-4 py-1 bg-teal-600 rounded text-white'>Add New Employee</Link>
            </div>
            <div className='mt-6 border rounded-lg overflow-hidden shadow-lg border-gray-200'>
                <table className='min-w-full text-center'>
                    <thead className='bg-gray-100 text-gray-700 uppercase'>
                        <tr>
                            <th className='py-2'>S No</th>
                            <th className='py-2'>Image</th>
                            <th className='py-2'>Name</th>
                            <th className='py-2'>DOB</th>
                            <th className='py-2'>Dep Name</th>
                            <th className='py-2'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {empLoading ? <tr><td colSpan="6" className="py-4">Loading...</td></tr> :
                            employees.map((emp, index) => (
                                <tr key={emp._id} className='bg-white border-b'>
                                    <td className='py-3 border'>{(page - 1) * limit + index + 1}</td>
                                    <td className='py-3 border flex justify-center'>
                                        <img src={`http://localhost:5000/uploads/${emp.userId.profileImage}`} alt="" className='w-10 h-10 rounded-full object-cover' />
                                    </td>
                                    <td className='py-3 border'>{emp.userId.name}</td>
                                    <td className='py-3 border'>{new Date(emp.dob).toLocaleDateString()}</td>
                                    <td className='py-3 border'>{emp.department.dep_name}</td>
                                    <td className='py-3 border'>
                                        <EmployeeButtons Id={emp._id} />
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
            {/* Pagination Controls */}
            <div className='flex justify-center mt-4 space-x-2'>
                <button
                    onClick={() => setPage(page > 1 ? page - 1 : 1)}
                    disabled={page === 1}
                    className={`px-3 py-1 rounded ${page === 1 ? 'bg-gray-300' : 'bg-teal-600 text-white'}`}
                >Prev</button>
                <span className='px-3 py-1'>{page} / {totalPages}</span>
                <button
                    onClick={() => setPage(page < totalPages ? page + 1 : totalPages)}
                    disabled={page === totalPages}
                    className={`px-3 py-1 rounded ${page === totalPages ? 'bg-gray-300' : 'bg-teal-600 text-white'}`}
                >Next</button>
            </div>
        </div>
    )
}

export default List
