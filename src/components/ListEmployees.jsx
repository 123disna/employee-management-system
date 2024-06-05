import React, { useEffect, useState } from 'react';
import EmployeeService from '../services/EmployeeService';
import { Link } from 'react-router-dom';

const ListEmployees = () => {
    const [employees, setEmployees] = useState([]);

    const getAllEmployees = () => {
        EmployeeService.getAllEmployees().then((response) => {
            setEmployees(response.data);
        }).catch((error) => {
            console.log(error);
        });
    };

    useEffect(() => {
        getAllEmployees();
    }, []);

    const deleteEmployee = (id) => {
        EmployeeService.deleteEmployee(id).then((response) => {
            getAllEmployees();
        }).catch((error) => {
            console.log(error);
        });
    };

    return (
        <div className='list_background'>
            <div className='container'>
                <Link to='/add-employee' style={{ backgroundColor: '#43033c', border: "none", marginTop: '20px' }} className="btn btn-primary">Add Employee</Link>
                <h2 className='text-center'>List Employees</h2>
                <div className='table-responsive'>
                    <table className='table' style={{ backgroundColor: 'transparent', color: '#000' }}>
                        <thead>
                            <tr style={{ backgroundColor: 'transparent' }}>
                                <th>Employee Id</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                employees.map(
                                    employee =>
                                        <tr key={employee.id} style={{ backgroundColor: 'transparent' }}>
                                            <td>{employee.id}</td>
                                            <td>{employee.firstname}</td>
                                            <td>{employee.lastname}</td>
                                            <td>{employee.email}</td>
                                            <td>
                                                <Link to={`/edit-employee/${employee.id}`} className='btn btn-info'>Update</Link>
                                                <button style={{ marginLeft: "10px" }} className='btn btn-danger' onClick={() => { deleteEmployee(employee.id) }}>Delete</button>
                                            </td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default ListEmployees;
