import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const About = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const handleLogout = () => {
        localStorage.clear();
        navigate('/login')
    }
    useEffect(()=>{
        // console.log(localStorage.getItem('token'));
        if(!localStorage.getItem('token')){
            navigate('/login')
        }else{
            const data = JSON.parse(localStorage.getItem('name'));
            setName(data);
        }
    },[])
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <div className='mg-r'>
            <Link className="navbar-brand" to={'/login'}>
              SkyGoal
            </Link>
            </div>
          </div>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <div className='mg-l'>
              <ul className="navbar-nav ml-auto ">
                <li className="nav-item">
                  <Link className="nav-link" to={'/home'}>
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/about'}>
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/contact'}>
                    Contact
                  </Link>
                </li>
                <li className="nav-item">
                  <h5 className="nav-link">{name}</h5>
                </li>
                <li className="nav-item">
                  <p className="nav-link cursor" onClick={handleLogout}>Logout</p>
                </li>
              </ul>
              </div>
            </div>
        </nav>
        <p>Hello <span>{name}</span> welcome to SkyGoal</p>
    </div>
  )
}

export default About