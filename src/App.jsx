import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <>
      <div className='overflow-x-hidden bg-primary min-h-screen flex flex-col'>
        <Navbar />
        <div className='grow'>
          <Outlet />
        </div>
        <footer className='mt-auto'>
          <Footer />
        </footer>
      </div>
    </>
  )
}

export default App