import React, { useEffect, useState } from 'react'
import EmployeeService from '../services/EmployeeService';
import { Link, useNavigate, useParams } from 'react-router-dom';



const EmployeeForm = () => {
  const [firstname, setFirstname]=useState('');
  const [lastname, setLastname]=useState('');
  const [email, setEmail]=useState('');
  const navigate=useNavigate();
  const {id} =useParams();

  const saveOrUpdateEmployee=(e)=>{
    e.preventDefault();
    const employee={firstname,lastname,email};

    if(id){
      EmployeeService.updateEmployee(id,employee).then((response)=>{
               console.log(response.data);
               navigate('/employees');
        }).catch((error)=>{
               console.log(error);
      })
    }else{
      
      EmployeeService.createEmployee(employee).then((response)=>{
             console.log(response.data);
             navigate('/employees');
      }).catch((error)=>{
             console.log(error);
      })
    }
  }

useEffect(()=>{
    EmployeeService.getEmployeeById(id).then((response)=>{
      console.log(id)
      setFirstname(response.data.firstname);
      setLastname(response.data.lastname);
      setEmail(response.data.email);
    }).catch((error)=>{
       console.log(error);
    })
 },[])

  const title=()=>{
    if(id){
      return <h1 className='text-center' style={{color:"white"}}>Update Employee</h1>
    }else{
      return <h1 className='text-center' style={{color:"white"}}>Add New Employee</h1>
    }
  } 
  return (
    <div>
     <div className="employee_background">
     <div className='container'>
      <div className='row'>
      <div className='card col-md-6 offset-md-3 offset-md-3 ' style={{backgroundColor:'rgba(255, 255, 255, 0.1)',border: "none", 
           padding: '20px',boxShadow:'0 4px 8px rgba(0, 0, 0, 0.1)',borderRadius: '8px'}}> 
          {
            title()
          }
         <div className='card-body'>
           <form>
            <div class="form-group">
                <label for="exampleInputFirstName" style={{color:"white"}}>First Name</label>
                <input 
                          type="text" 
                          class="form-control" 
                          id="exampleInputFirstName" 
                          name='firstname'
                          value={firstname}
                          onChange={(e)=>{setFirstname(e.target.value)}}
                          placeholder="Enter First Name"/>
            </div>
           <div class="form-group">
               <label for="exampleInputLastName" style={{color:"white"}}>Last Name</label>
               <input 
                          type="text" 
                          class="form-control" 
                          name='lastname'
                          value={lastname}
                          onChange={(e)=>{setLastname(e.target.value)}}
                          id="exampleInputLastName" 
                          placeholder="Enter Last Name"/>
           </div>
           <div class="form-group">
               <label for="exampleInputEmail" style={{color:"white"}}>Email</label>
               <input 
                         type="email" 
                         class="form-control" 
                         name='email'
                         value={email}
                         onChange={(e)=>{setEmail(e.target.value)}}
                         id="exampleInputEmail" 
                         placeholder="Enter Email"/>
           </div>
               <button type="submit" onClick={(e)=>{saveOrUpdateEmployee(e)}} class="btn btn-primary" style={{backgroundColor: '#43033c',border: "none" }}>Submit</button>
               <Link to='/employees' class="btn btn-danger" style={{marginLeft:'10px'}}>Cancel</Link>
          </form>
        </div>
       </div>
      </div>
     </div>
    </div>
  </div>
  )
}

export default EmployeeForm
