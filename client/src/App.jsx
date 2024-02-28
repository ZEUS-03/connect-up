import { useEffect, useState } from 'react'


import { Route, Routes } from "react-router-dom"
import { display } from '@mui/system';

import './App.css'

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
