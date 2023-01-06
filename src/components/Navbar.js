import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Navbar = () => {
  const currentUser = {username: "bright113gene"};

  const dispatch = useDispatch()
  const state = useSelector(state=>state)

  const logOut = () => {
    dispatch({
      type: 'LOGOUT_USER'
    })
  }

  return (
    <div>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand text-warning"  href="#">Talent</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
                <ul className="navbar-nav justify-content-center">
                  <li className='nav-item d-flex'>
                    <a href="#" className="nav-link">
                      Explore
                    </a>
                    <a href="#" className="nav-link">
                      Community
                    </a>
                    <a href="#" className="nav-link">
                      Messages
                    </a>
                    <a href="#" className="nav-link">
                      Earn
                    </a>
                  </li>
                </ul>
          </div>
          {state && state.user ? (
            <div className="d-flex justify-content-center'collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
                <ul className="navbar-nav ">
                  <li className="nav-item justify-content-end">
                    <Link to={"/profile"} className="nav-link">
                      {state.user.email}
                    </Link>
                  </li>
                  <li className="nav-item ">
                    <a href="/login" className="nav-link" onClick={logOut}>
                      LogOut
                    </a>
                  </li>
                </ul>
              </div>

              ) : (
            <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
              <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to={"/login"} className="nav-link text-white">
                      Login
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link to={"/register"} className="nav-link text-white">
                      SignUp
                    </Link>
                  </li>
                </ul>
            </div>
              )                   
            }
          
        </div>
      </nav>
    </div>
  )
}

export default Navbar