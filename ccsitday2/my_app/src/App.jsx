import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Signup from './components/Signup'
import Login from './components/Login'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'

import Name from './components/Name'
import Counters from './components/Counters'
import States from './components/States'

import Apiii from './components/Apiii'
import Pokecard from './components/Pokecard'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   
    <Navbar/>
    <Routes>
      <Route path='/'element={<Signup/>}/>
      <Route path='/login'element={<Login/>}/>
      <Route path='/s' element={<States/>}/>
      <Route path='/C' element={<Counters/>}/>
      <Route path='/N'element={<Name/>}/>
      <Route path='/F'element={<Apiii/>}/>
      <Route path='/D'element={<Pokecard/>}/>
    </Routes>
    

    {/* <h1>Welcome</h1>*/}
      
      
     
     
      
    
    </>
  )
}

export default App
