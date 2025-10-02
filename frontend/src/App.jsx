import React from 'react'
import { Route, Routes } from 'react-router'
import HomePage from './pages/HomePage'
import CreatePage from './pages/CreatePage'
// import toast from 'react-hot-toast'

const App = () => {
  return (
    <div>
      {/* Test regular CSS */}
      <div className="test-class">This should be red and bold</div>
      
      {/* Test Tailwind */}
      <button className='bg-blue-500 text-white p-4 rounded-lg font-bold'>
        Tailwind Test Button
      </button>
      
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/create' element={<CreatePage/>}/>
        <Route path='/note/:id' element={<HomePage/>}/>
      </Routes>
    </div>
  )
}

export default App