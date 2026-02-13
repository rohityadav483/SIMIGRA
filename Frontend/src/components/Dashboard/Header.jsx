import React from 'react'
import logo from '../../assets/Logo.jpg'
import { Menu, X, User } from 'lucide-react'
import { useState } from 'react'
import Sidebar from './Sidebar'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const navigate = useNavigate()

  const toggleNavbar = () => {
    setMobileOpen(!mobileOpen)
  }

  return (
    <div className="sticky top-0 z-50 py-3 border-b">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          {/* Logo and Name */}
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-10 mr-2" src={logo} alt="Logo" />
            <span className="text-xl tracking-tight">Simigra</span>
          </div>

          {/* Profile Icon and Mobile Toggle */}
          <div className="flex items-center space-x-4">
            {/* Lucide React User Icon */}
            <div
              className="cursor-pointer"
              onClick={() => navigate('/profile')} // Redirect to profile page
            >
              <User size={32} color="#fff" />{' '}
              {/* Adjust size/color as needed */}
            </div>

            {/* Toggle Navbar For Mobile Screen */}
            <div className="flex flex-col justify-end">
              <button onClick={toggleNavbar}>
                {mobileOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {mobileOpen && <Sidebar />}
      </div>
    </div>
  )
}

export default Header
