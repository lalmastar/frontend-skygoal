import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// const baseURL = 'http://localhost:5000';
const baseURL = 'https://backend-skygoal-znpq.onrender.com';

const Login = () => {

  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleLogin = async (e) => {
    e.preventDefault();

    window.alert("Login Success");
    await axios.post(`${baseURL}/api/user/login`,{
      email,
      password
    })
    .then(response => {
      // console.log(response.data);
      localStorage.setItem('token', JSON.stringify(response.data.token));
      localStorage.setItem('name', JSON.stringify(response.data.firstname));
      const token = JSON.stringify(response.data.success);
      if(token){
        navigate('/home');
      }else{
        window.alert('Records not found')
      }
    })
    .catch(err => {
      console.log(err);
    })
  }

  return (
    <div className='form-container'>
    <form>
        <h3>Sign In</h3>

        <div className="mb-3">
          <label>Email address</label>
          <input
            onChange={(e)=>setEmail(e.target.value)}
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            onChange={(e)=>setPassword(e.target.value)}
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>

        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>

        <div className="d-grid">
          <button onClick={handleLogin} type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
        <p className="forgot-password text-right">
         For new user <a href="/signup">sign up?</a>
        </p>
      </form>
      </div>
  )
}

export default Login