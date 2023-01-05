import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Login from './Login'
import SignUp from './SignUp'
import Navbar from '../components/Navbar'

const Layout = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Login/>}/>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/register' element={<SignUp/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Layout