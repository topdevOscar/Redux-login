import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function SignUp() {
  const [ email, setEmail ] = useState('')
  const [ pass, setPass ] = useState('')

  const dispatch = useDispatch()
  const state = useSelector(state=>state)

  useEffect(()=>{
    console.log(email, pass, state)
  }, [email, pass, state])

  useEffect(()=>{
    console.log('users storage', window.localStorage['users'])
    if (!window.users ) return
    dispatch({
      type: 'INIT_USERS',
      payload: window.users
    })
  }, [])

  const register = async (e) => {
    await e.preventDefault();
    await dispatch({
      type: 'ADD_USER',
      payload: {
        email,
        pass
      }
    })
    // window.localStorage.setItem('users', state.users)
  }

  return (
    <div className='container' style={{maxWidth: "600px"}}>
      <form>
        <br/>
        <br/>
        <br/>
        <div className="mb-5 mt-5">
          <label htmlFor ="email" className="form-label">Email:</label>
          <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" 
            value={email}
            onChange={e=>setEmail(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor ="pwd" className="form-label">Password:</label>
          <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd" 
            value={pass}
            onChange={e=>setPass(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary" onClick={register}>SignUp</button>
      </form>
    </div>
  )
}

export default SignUp