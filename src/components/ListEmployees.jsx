import React, { useEffect, useState } from 'react'
import EmployeeService from '../services/EmployeeService';
import { Link } from 'react-router-dom';

const ListEmployees = () => {

    const [employees, setEmployees]=useState([]);

    const getAllEmployees=()=>{
      EmployeeService.getAllEmployees().then((response)=>{
        setEmployees(response.data)
      }).catch((error)=>{
        console.log(error);
      })
    }

    useEffect(()=>{
          getAllEmployees();
    },[]);

    const deleteEmployee=(id)=>{
       EmployeeService.deleteEmployee(id).then((response)=>{
         getAllEmployees();
       }).catch((error)=>{
        console.log(error);
       })
    }

  return (
    <div className='container'>
      <Link to='/add-employee' style={{marginTop:"20px"}} class="btn btn-primary">Add Employee</Link>
      <h2 className='text-center'>List Employees</h2>
      <table className='table table-striped table-dark'>
        <thead>
           <th>Employee Id</th>
           <th>First Name</th>
           <th>Last Name</th>
           <th>Email</th>
           <th>Action</th>
        </thead>
        <tbody>
            {
                employees.map(
                    employee=>
                        <tr key={employee.id}>
                           <td>{employee.id}</td>
                           <td>{employee.firstname}</td>
                           <td>{employee.lastname}</td>
                           <td>{employee.email}</td>
                           <td>
                            <Link to={`/edit-employee/${employee.id}`} class='btn btn-info'>Update</Link>
                            <button style={{marginLeft:"10px"}} class='btn btn-danger' onClick={()=>{deleteEmployee(employee.id)}}>Delete</button>
                           </td>
                        </tr>
                )
            }
        </tbody>
      </table>
    </div>
  )
}

export default ListEmployees
