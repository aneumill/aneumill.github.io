import React from 'react'
import { Outlet, Link } from "react-router-dom";
function Navigation() {
  return (
      <>
      <nav className="flex justify-between items-center h-20 bg-white text-black shadow-lg font-mono ">
          <p className="font-sans text-xl p-10"> Adam's Personal Website</p>
          <div className='text-xl p-10'>
              <Link className="p-10 " to="/Home">Home</Link>
              <Link className="p-10 " to="/Resume">Resume</Link>
              <Link className="p-10" to="/Stockdashboard">Dashboard</Link>
          </div>
      </nav>
      <Outlet />
      </>
  )
}

export default Navigation