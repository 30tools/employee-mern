import axios from "axios";
import { useNavigate } from "react-router-dom";

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
        <div className="flex space-x-3">
            <button
                className="px-3 py-1 bg-teal-600 text-white rounded"
                onClick={() => navigate(`/admin-dashboard/employees/${Id}`)}
            >
                View
            </button>
            <button
                className="px-3 py-1 bg-blue-600 text-white rounded"
                onClick={() => navigate(`/admin-dashboard/employees/edit/${Id}`)}
            >
                Edit
            </button>
            <button
                className="px-3 py-1 bg-yellow-600 text-white rounded"
            >
                Salary
            </button>
            <button
                className="px-3 py-1 bg-red-600 text-white rounded"
            >
                Leave
            </button>
        </div>
    );
};
