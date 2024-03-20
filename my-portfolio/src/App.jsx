// import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import MyNavBar from './component/MyNavBar'
import Landing from './component/Landing'

function App() {

  return (
    <div className='App'>
      <MyNavBar/>
      <Routes>
        <Route path='/' element={<Landing/>}/>
      </Routes>
    </div>
  )
}

export default App
