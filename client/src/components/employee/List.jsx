import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { EmployeeButtons } from '../../utils/EmployeeHelper'
import axios from 'axios'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

const List = () => {
    const [employees, setEmployees] = useState([])
    const [empLoading, setEmpLoading] = useState(false)
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [search, setSearch] = useState('');
    const [limit, setLimit] = useState(5);

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
    }, [page, limit, search])

    const handleSearch = (e) => {
        setSearch(e.target.value)
        setPage(1)
    }

    return (
        <div className='p-6 space-y-6'>
            <div className='text-center'>
                <h3 className='text-2xl font-bold tracking-tight'>Manage Employees</h3>
            </div>
            <div className='flex justify-between items-center'>
                <Input
                    type="text"
                    placeholder='Search By Name'
                    onChange={handleSearch}
                    className='w-[300px]'
                />
                <Link to="/admin-dashboard/add-employee">
                    <Button>Add New Employee</Button>
                </Link>
            </div>
            <div className='rounded-md border'>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[80px] text-center">S No</TableHead>
                            <TableHead className="text-center">Image</TableHead>
                            <TableHead className="text-center">Name</TableHead>
                            <TableHead className="text-center">DOB</TableHead>
                            <TableHead className="text-center">Dep Name</TableHead>
                            <TableHead className="text-center">Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {empLoading ? (
                            <TableRow>
                                <TableCell colSpan={6} className="h-24 text-center">Loading...</TableCell>
                            </TableRow>
                        ) : (
                            employees.map((emp, index) => (
                                <TableRow key={emp._id}>
                                    <TableCell className="text-center">{(page - 1) * limit + index + 1}</TableCell>
                                    <TableCell className="flex justify-center">
                                        <Avatar>
                                            <AvatarImage src={`http://localhost:5000/uploads/${emp.userId.profileImage}`} alt={emp.userId.name} className="object-cover" />
                                            <AvatarFallback>{emp.userId.name.charAt(0)}</AvatarFallback>
                                        </Avatar>
                                    </TableCell>
                                    <TableCell className="text-center">{emp.userId.name}</TableCell>
                                    <TableCell className="text-center">{new Date(emp.dob).toLocaleDateString()}</TableCell>
                                    <TableCell className="text-center">{emp.department.dep_name}</TableCell>
                                    <TableCell className="text-center">
                                        <EmployeeButtons Id={emp._id} />
                                    </TableCell>
                                </TableRow>
                            ))
                        )}
                    </TableBody>
                </Table>
            </div>
            {/* Pagination Controls */}
            <div className='flex justify-center items-center space-x-2 pt-4'>
                <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setPage(page > 1 ? page - 1 : 1)}
                    disabled={page === 1}
                >Prev</Button>
                <span className='text-sm'>{page} / {totalPages}</span>
                <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setPage(page < totalPages ? page + 1 : totalPages)}
                    disabled={page === totalPages}
                >Next</Button>
            </div>
        </div>
    )
}

export default List
