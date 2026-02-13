import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { LogOut } from 'lucide-react'
import { SidebarData } from '../../constants'

const Sidebar = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const handleLogout = () => {
    localStorage.removeItem('user_id')
    localStorage.removeItem('token') // ✅ clear token too
    navigate('/login')
  }

  return (
    <aside className="fixed bottom-0 top-16 left-0 bg-neutral-900 shadow-md w-60 animate-slide rounded-r-xl flex flex-col justify-between">
      {/* Sidebar Header */}
      <div className="flex flex-col flex-grow">
        <div className="px-4 py-6 text-center border-b border-gray-700">
          <h1 className="text-xl font-bold text-yellow-500 tracking-tight">
            Task Manager
          </h1>
        </div>

        {/* Sidebar Links */}
        <div className="flex-grow p-4">
          <ul className="space-y-2">
            {SidebarData.map((item, index) => {
              const isActive = location.pathname === item.path
              return (
                <li key={index}>
                  <button
                    onClick={() => navigate(item.path)}
                    className={`flex items-center w-full rounded-xl font-semibold text-sm py-3 px-4 transition-colors duration-200
                      ${
                        isActive
                          ? 'bg-violet-600 text-white'
                          : 'bg-gray-700 text-gray-200 hover:bg-violet-500 hover:text-white'
                      }`}
                  >
                    <span className="text-lg mr-3">{item.icon}</span>
                    {item.title}
                  </button>
                </li>
              )
            })}
          </ul>
        </div>
      </div>

      {/* Logout Button */}
      <div className="p-4 border-t border-gray-700">
        <button
          onClick={handleLogout}
          className="flex items-center w-full justify-center py-3 px-4 bg-gray-800 text-violet-500 hover:text-white rounded-xl font-semibold transition-colors duration-200"
        >
          <LogOut size={20} className="mr-2" />
          Logout
        </button>
      </div>
    </aside>
  )
}

export default Sidebar
