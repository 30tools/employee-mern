import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button"

export const fetchEmployees = async () => {
    let employees = [];
    try {
        const response = await axios.get("http://localhost:5000/api/employee", {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });
        if (response.data.success) {
            employees = response.data.employees;
        }
    } catch (error) {
        if (error.response && error.response.data.error) {
            alert(error.response.data.error);
        }
    }
    return employees;
};

export const getEmployees = async (id) => {
    let employee;
    try {
        const response = await axios.get(`http://localhost:5000/api/employee/${id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });
        if (response.data.success) {
            employee = response.data.employee;
        }
    } catch (error) {
        if (error.response && error.response.data.error) {
            alert(error.response.data.error);
        }
    }
    return employee;
};

export const EmployeeButtons = ({ Id }) => {
    const navigate = useNavigate();

    return (
        <div className="flex space-x-2 justify-center">
            <Button
                variant="outline"
                size="sm"
                onClick={() => navigate(`/admin-dashboard/employees/${Id}`)}
            >
                View
            </Button>
            <Button
                variant="outline"
                size="sm"
                className="bg-blue-50 text-blue-600 hover:bg-blue-100 border-blue-200"
                onClick={() => navigate(`/admin-dashboard/employees/edit/${Id}`)}
            >
                Edit
            </Button>
            <Button
                variant="outline"
                size="sm"
                className="bg-yellow-50 text-yellow-600 hover:bg-yellow-100 border-yellow-200"
            >
                Salary
            </Button>
            <Button
                variant="destructive"
                size="sm"
            >
                Leave
            </Button>
        </div>
    );
};
