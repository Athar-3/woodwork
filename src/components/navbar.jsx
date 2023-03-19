import React from 'react';
import { NavLink } from 'react-router-dom';
import Admin from '../services/admin';

const Navbar = (props) => {
  const user = props.user
  // console.log(user)
  return (
    <nav className="navbar navbar-expand-lg primary-color navbar-dark">
      <div className="container-fluid col-10 p-0 max-width-1600">
        <NavLink class="navbar-brand me-5" to="/">WoodWorks</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
          <div className="navbar-nav ">
            <NavLink className="nav-link" aria-current="page" to="/home">Home</NavLink>
            <NavLink className="nav-link" to="">Products</NavLink>
            <NavLink className="nav-link" to="/about">About</NavLink>
            <NavLink className="nav-link" to="/contact">Contact</NavLink>
            {
              (Admin(user))&&<NavLink className="nav-link" to="/admin">Admin</NavLink>
            }
            
          </div>
          <div className="ms-auto navbar-nav">
            {
              (!user)&&<NavLink className="nav-link" to="/login">Login</NavLink>
            }
            
            {
              (user)&&<div class="dropdown">
               <NavLink className="nav-link dropdown-toggle" to="/" data-bs-toggle="dropdown">{user.username}</NavLink>
              <ul class="dropdown-menu p-0" >
                <li><NavLink className="nav-link" to="/logout"><p className='text-black m-0'>Logout</p></NavLink></li>
              </ul>
            </div>
            }
            
            <NavLink className="nav-link" to="/cart">Cart</NavLink>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar