import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Login from './Login'
import SignUp from './SignUp'
import Pnavbar from '../components/Navbar'
import Mainbar from './mainbar/mainbar'

const Layout = () => {
  return (
    <BrowserRouter>
      <Pnavbar />
      <Routes>
        <Route exact path='/' element={<Login/>}/>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/register' element={<SignUp/>}/>
        <Route exact path='/register' element={<Mainbar/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Layout