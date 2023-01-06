import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import Mainbar from './mainbar/mainbar'

function Login() {
  const [ email, setEmail ] = useState('')
  const [ pass, setPass ] = useState('')

  const dispatch = useDispatch()
  const state = useSelector(state=>state)

  useEffect(()=>{
    console.log(email, pass, state)
  }, [email, pass, state])

  const login = (e) => {
    e.preventDefault();
    dispatch({
      type: 'LOGIN_USER',
      payload: {
        email,
        pass
      }
    })
  }

  return (
    <div className='bg-dark'>
    {
      !state || !state.user ?
      <div className='container' style={{maxWidth: "600px"}}>
        <form>
          <br/>
          <br/>
          <br/>
          <div className="mb-5 mt-5">
            <label htmlFor ="email" className="form-label text-light">Email:</label>
            <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" 
              value={email}
              onChange={e=>{setEmail(e.target.value)}}
            />
          </div>
          <div className="mb-5">
            <label htmlFor ="pwd" className="form-label text-light">Password:</label>
            <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd" 
              value={pass}
              onChange={e=>{setPass(e.target.value)}}
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