import React from 'react'
import { Route, Routes } from 'react-router'
import HomePage from './pages/HomePage'
import CreatePage from './pages/CreatePage'
import toast from 'react-hot-toast'

const App = () => {
  return (
    <div>
      <button onClick={()=>toast.success("Done bitch")}>Click</button>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/create' element={<CreatePage/>}/>
        <Route path='/note/:id' element={<HomePage/>}/>
      </Routes>
    </div>
  )
}

export default App