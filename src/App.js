import React from 'react'
import './App.css';
import Navbar  from './Components/Navbar/Index'
import Home  from './Components/Home/Index'
import Distination from './Components/Distination/index'
import Trip from './Components/Trip/index'


const App = () => {
  return (
    <div>
      
      <Navbar/>
       <Home/> 
     <Distination/>
     <Trip/> 
    </div>
  )
}

export default App
