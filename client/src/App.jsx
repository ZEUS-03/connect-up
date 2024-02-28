import { useEffect, useState } from 'react'


import { Route, Routes } from "react-router-dom"
import { display } from '@mui/system';

import './App.css'


import  Login from "./pages/Login"
import  Signup from "./pages/Signup"
import Home from "./pages/Home"


function App() {
  const [count, setCount] = useState(0)

  return (
    <>



      <Routes>

        <Route path='/login' element={<Login />} >  </Route>
        <Route path='/sign-up' element={<Signup />} >  </Route>

        <Route path='/' element={<Home />} ></Route>




      </Routes>


    </>
  )
}

export default App
