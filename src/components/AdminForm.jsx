import React, { useState } from "react";
import UserService from "../services/UserService";

const AdminForm = () => {
    const [firstName, setFirstName]=useState('');
    const [lastName, setLastName]=useState('');
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');
    const [role, setRole]=useState('');

    const addAdmin=(e)=>{
        e.preventDefault();

        const user={firstName,lastName,email,password,role};

        UserService.addAdmin(user).then((response)=>{
            console.log(user);
        }).catch((error)=>{
            console.log(error);
        })
    }

  return ( 
    <div className="admin_background">
      <div className="container">
        <div className="row">
        <div className='card col-md-6 offset-md-3 offset-md-3' style={{backgroundColor:'rgba(255, 255, 255, 0.1)',border: "none", 
           padding: '5px',boxShadow:'0 4px 8px rgba(0, 0, 0, 0.1)',borderRadius: '8px'}}> 
            <h2 className="text-center" style={{color:"white"}}>Add Admin</h2>
            <div className="card-body">
              <form>
              <div class="form-group">
                  <label for="exampleInputFirstName" style={{color:"white"}}>First Name</label>
                  <input
                    type="text"
                    class="form-control"
                    name="firstName"
                    value={firstName}
                    style={{backgroundClip:'rgba(255, 255, 255, 0.3)',color: '#000' }}
                    onChange={(e) => {
                      setFirstName(e.target.value);
                    }}
                    id="exampleInputFirstName"
                    placeholder="Enter First Name"
                  />
                </div>
                <div class="form-group">
                  <label for="exampleInputLastName" style={{color:"white"}}>Last Name</label>
                  <input
                    type="text"
                    class="form-control"
                    name="lastName"
                    style={{backgroundClip:'rgba(255, 255, 255, 0.3)',color: '#000' }}
                    value={lastName}
                    onChange={(e) => {
                      setLastName(e.target.value);
                    }}
                    id="exampleInputLastName"
                    placeholder="Enter Last Name"
                  />
                </div>
                <div class="form-group">
                  <label for="exampleInputEmail" style={{color:"white"}}>Email</label>
                  <input
                    type="email"
                    class="form-control"
                    name="email"
                    style={{backgroundClip:'rgba(255, 255, 255, 0.3)',color: '#000' }}
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    id="exampleInputEmail"
                    placeholder="Enter Email"
                  />
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword" style={{color:"white"}}>Password</label>
                  <input
                    type="password"
                    class="form-control"
                    name="password"
                    style={{backgroundClip:'rgba(255, 255, 255, 0.3)',color: '#000' }}
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    id="exampleInputPassword"
                    placeholder="Enter Password"
                  />
                </div>
                <div class="form-group">
                  <label for="exampleInputRole" style={{color:"white"}}>Role</label>
                  <input
                    type="text"
                    class="form-control"
                    name="role"
                    style={{backgroundClip:'rgba(255, 255, 255, 0.3)',color: '#000' }}
                    value={role}
                    onChange={(e) => {
                      setRole(e.target.value);
                    }}
                    id="exampleInputRole"
                    placeholder="Enter Role"
                  />
                </div>
                <button
                  type="submit"
                  onClick={(e) => {
                    addAdmin(e);
                  }}
                  class="btn btn-primary"
                  style={{backgroundColor: '#43033c',border: "none" }}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminForm;
