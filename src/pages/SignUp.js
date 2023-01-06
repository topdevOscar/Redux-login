import { height } from '@mui/system'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import *as Yup from 'yup';

function SignUp() {
  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .required('Username is required')
      .min(6, 'Username must be at least 6 characters')
      .max(20, 'username must not exceed 20 characters'),
    email: Yup.string()
      .required('Email is required')
      .email('Email is invalid'),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters')
      .max(40, 'Password must not exceed 40 characters'),
    confirmPassword: Yup.string()
      .required('Confirm Password is required')
      .oneOf([Yup.ref('password'), null], 'Confirm Password does not match'),
  });
  
  const {
    register, 
    handleSubmit, 
    reset, 
    formState: {errors}
  } = useForm({
    resolver: yupResolver(validationSchema)
  });
  
  const onSubmit = data => {
    console.log(JSON.stringify(data, null, 2));
  };
  const [username, setUsername] = useState('')
  const [ email, setEmail ] = useState('')
  const [ pass, setPass ] = useState('')
  const [ confirmpass, setConfirmpass] = useState('')

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

  // const register = async (e) => {
  //   await e.preventDefault();
  //   await dispatch({
  //     type: 'ADD_USER',
  //     payload: {
  //       email,
  //       pass
  //     }
  //   })
  //   // window.localStorage.setItem('users', state.users)
  // }

  return (
    <div className=' register-form bg-dark' style={{maxWidth: "100%", height: '100vh'}}>
      <div className='container' style={{maxWidth: "600px" }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <br/>
          <br/>
          <br/>
          <div className="form-group mb-5 mt-5">
            <label htmlFor ="username" className="form-label text-warning">Username:</label>
            <input 
              type="username" 
              className="form-control" 
              id="email" 
              placeholder="Enter username" 
              name="username" 
              value={username}
              onChange={e=>setUsername(e.target.value)}
              {...register('fullname')}
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