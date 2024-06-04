import React from "react";
import { useState } from "react";
import UserService from "../services/UserService";
import { useNavigate } from "react-router-dom";


const LoginForm = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginHandle = (e) => {
    e.preventDefault();
    const loginRequest = { email, password };

    UserService.loginUser(loginRequest).then((response) => {
      console.log(loginRequest);
      navigate('/dashboard')
    }).catch((error) => {
      console.log(error);
    })
  }

  return (
    <div className="login_background">
      <div className='container'>
        <div className='row'>
          <div className='card col-md-6 offset-md-3 offset-md-3 login-card' style={{backgroundColor:'rgba(255, 255, 255, 0.1)',border: "none", 
           padding: '20px',boxShadow:'0 4px 8px rgba(0, 0, 0, 0.1)',borderRadius: '8px'}}> 
            <h2 className="text-center" style={{color:"white"}}>Login</h2>
            <div className='card-body'>
              <form>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail" style={{color:"white"}}>Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name='email'
                    style={{backgroundClip:'rgba(255, 255, 255, 0.3)',color: '#000' }}
                    value={email}
                    onChange={(e) => { setEmail(e.target.value) }}
                    id="exampleInputEmail"
                    placeholder="Enter Email" />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword" style={{color:"white"}}>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    name='password'
                    style={{backgroundClip:'rgba(255, 255, 255, 0.3)',color: '#000' }}
                    value={password}
                    onChange={(e) => { setPassword(e.target.value) }}
                    id="exampleInputPassword"
                    placeholder="Enter Password" />
                </div>
                <button type="submit" onClick={(e) => { loginHandle(e) }} className="btn btn-primary" style={{backgroundColor: '#43033c',border: "none" }}>Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
