import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// const baseURL = 'http://localhost:5000';
const baseURL = 'https://backend-skygoal-znpq.onrender.com';

const Signup = () => {

  const navigate = useNavigate();
  const [firstname, setFirstName] = useState();
  const [lastname, setLastName] = useState();
  const [email, setEmail] = useState();
  const [mobile, setMobile] = useState();
  const [password, setPassword] = useState();

  const handleLogout = async (e) => {
    e.preventDefault();

    window.alert("Registered Successfully");
    await axios.post(`${baseURL}/api/user/register`,{
      firstname,
      lastname,
      email,
      mobile,
      password
    })
    .then(response => {
      console.log(response.data);
      navigate('/login');

    })
    .catch(err => {
      console.log(err);
    })
  }


  return (
    <div className='form-container'>
      <form>
        <h3>Sign Up</h3>

        <div className="mb-3">
          <label>First Name</label>
          <input
            onChange={(e)=>setFirstName(e.target.value)}
            type="text"
            className="form-control"
            placeholder="First name"
          />
        </div>

        <div className="mb-3">
          <label>Last Name</label>
          <input onChange={(e)=>setLastName(e.target.value)} type="text" className="form-control" placeholder="Last name" />
        </div>

        <div className="mb-3">
          <label>Email Address</label>
          <input
            onChange={(e)=>setEmail(e.target.value)}
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>

        <div className="mb-3">
          <label>Mobile Number</label>
          <input
            onChange={(e)=>setMobile(e.target.value)}
            type="text"
            className="form-control"
            placeholder="Enter mobile"
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

        <div className="d-grid">
          <button onClick={handleLogout} type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/login">sign in?</a>
        </p>
      </form>
    </div>
  )
}

export default Signup