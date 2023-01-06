import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'
import Mainbar from './mainbar/mainbar'

function Login() {
  const [ username, setUsername ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')

  const dispatch = useDispatch()
  const state = useSelector(state=>state)

  useEffect(()=>{
    console.log(email, password, state)
  }, [username, email, password, state])

  const login = (e) => {
    e.preventDefault();
    dispatch({
      type: 'LOGIN_USER',
      payload: {
        username,
        email,
        password
      }
    })
  }

  return (
    <div className='bg-dark'>
    {
      !state || !state.user ?
      <div className='container' style={{maxWidth: "600px", height: '100vh'}}>
        <form>
          <br/>
          <br/>
          <br/>
          <div className="mb-5 mt-5">
            <label htmlFor ="email" className="form-label text-light">Username:</label>
            <input type="username" className="form-control" id="username" placeholder="Enter username" name="username" 
              value={username}
              onChange={e=>{setUsername(e.target.value)}}
            />
          </div>
          <div className="mb-5 ">
            <label htmlFor ="email" className="form-label text-light">Email:</label>
            <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" 
              value={email}
              onChange={e=>{setEmail(e.target.value)}}
            />
          </div>
          <div className="mb-5">
            <label htmlFor ="pwd" className="form-label text-light">passwordword:</label>
            <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pwd" 
              value={password}
              onChange={e=>{setPassword(e.target.value)}}
            />
          </div>
          <button onClick={login} className="btn btn-primary">Login</button>
          { state && state.error !== "" && <div>{state.error}</div>}
        </form>
      </div>
      :
      <Mainbar />
      // <div>
      //   Loged In
      // </div>
    }
    </div>
    
    
  )
}

export default Login