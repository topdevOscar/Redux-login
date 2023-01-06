import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function SignUp() {
  const [username, setUsername] = useState('')
  const [ email, setEmail ] = useState('')
  const [ pass, setPass ] = useState('')
  const [ confirmpass, setConfirmpass] = useState('')

  const dispatch = useDispatch()
  const state = useSelector(state=>state)

  useEffect(()=>{
    console.log(username, email, pass, confirmpass, state)
  }, [email, pass, state])

  useEffect(()=>{
    console.log('users storage', window.localStorage['users'])
    if (!window.users ) return
    dispatch({
      type: 'INIT_USERS',
      payload: window.users
    })
  }, [])

  const register = (e) => {
    e.preventDefault();
    dispatch({
      type: 'ADD_USER',
      payload: {
        username,
        email,
        pass,
        confirmpass
      }
    })
    // window.localStorage.setItem('users', state.users)
  }

  return (
    <div className='bg-dark' style={{maxWidth: "100%", height: '100vh'}}>
      <div className='container' style={{maxWidth: "600px" }}>
        <form>
          <br/>
          <br/>
          <br/>
          <div className="mb-5 mt-5">
            <label htmlFor ="username" className="form-label text-warning">Username:</label>
            <input type="username" className="form-control" id="email" placeholder="Enter username" name="username" 
              value={username}
              onChange={e=>setUsername(e.target.value)}
            />
          </div>
          <div className="mb-5 ">
            <label htmlFor ="email" className="form-label text-warning">Email:</label>
            <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" 
              value={email}
              onChange={e=>setEmail(e.target.value)}
            />
          </div>
          <div className="mb-5">
            <label htmlFor ="pwd" className="form-label text-warning">Password:</label>
            <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd" 
              value={pass}
              onChange={e=>setPass(e.target.value)}
            />
          </div>
          <div className="mb-5">
            <label htmlFor ="pwd" className="form-label text-warning">Confirm:</label>
            <input type="password" className="form-control" id="pwd" placeholder="Confirm password" name="confirmpswd" 
              value={confirmpass}
              onChange={e=>setConfirmpass(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary" onClick={register}>SignUp</button>
        </form>
      </div>
    </div>  
  )
}

export default SignUp