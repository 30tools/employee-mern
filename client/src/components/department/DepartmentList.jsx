import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { fetchDepartments } from '../../utils/DepartmentHelper'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

const DepartmentList = () => {
    const [departments, setDepartments] = useState([])
    const [depLoading, setDepLoading] = useState(false)
    const [filteredDepartments, setFilteredDepartments] = useState([])

    useEffect(() => {
        const getDepartments = async () => {
            setDepLoading(true)
            const data = await fetchDepartments()
            setDepartments(data)
            setFilteredDepartments(data)
            setDepLoading(false)
        }
        getDepartments()
    }, [])

    const handleFilter = (e) => {
        const records = departments.filter((dep) =>
            dep.dep_name.toLowerCase().includes(e.target.value.toLowerCase())
        )
        setFilteredDepartments(records)
    }

    const onDepartmentDelete = async (id) => {
        // Implement delete logic here
        // For now just console log as per original
        console.log("Delete department", id)
    }

    return (
        <div className='p-5 space-y-6'>
            <div className='text-center'>
                <h3 className='text-2xl font-bold tracking-tight'>Manage Departments</h3>
            </div>
            <div className='flex justify-between items-center'>
                <Input
                    type="text"
                    placeholder='Search By Dep Name'
                    className='w-[300px]'
                    onChange={handleFilter}
                />
                <Link to="/admin-dashboard/add-department">
                    <Button>Add New Department</Button>
                </Link>
            </div>
            <div className='rounded-md border'>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px] text-center">S No</TableHead>
                            <TableHead className="text-center">Dep Name</TableHead>
                            <TableHead className="text-center">Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {depLoading ? (
                            <TableRow>
                                <TableCell colSpan={3} className="h-24 text-center">
                                    Loading...
                                </TableCell>
                            </TableRow>
                        ) : (
                            filteredDepartments.map((dep, index) => (
                                <TableRow key={dep._id}>
                                    <TableCell className="font-medium text-center">{index + 1}</TableCell>
                                    <TableCell className="text-center">{dep.dep_name}</TableCell>
                                    <TableCell className="text-center flex justify-center gap-2">
                                        <Link to={`/admin-dashboard/department/${dep._id}`}>
                                            <Button variant="outline" size="sm">Edit</Button>
                                        </Link>
                                        <Button
                                            variant="destructive"
                                            size="sm"
                                            onClick={() => onDepartmentDelete(dep._id)}
                                        >
                                            Delete
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))
                        )}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}

export default DepartmentList
