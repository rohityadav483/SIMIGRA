import React, { useEffect, useState } from 'react'
import Lottie from 'react-lottie-player'
import Header from './Header'
import Footer from '../HomePage/Footer'
import { DashboardData } from '../../constants'
import { Link } from 'react-router-dom' // ✅ Import Link

const Dashboard = () => {
  const [userName, setUserName] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchUserData = async () => {
      const userId = localStorage.getItem('user_id') // get logged-in user id
      if (!userId) {
        setError('User not logged in')
        setLoading(false)
        return
      }

      try {
        const response = await fetch(`http://127.0.0.1:5000/api/user/${userId}`)
        const data = await response.json()

        if (response.ok) {
          setUserName(data.name) // set user name
        } else {
          setError(data.message || 'Failed to fetch user data')
        }
      } catch (err) {
        console.error(err)
        setError('Something went wrong while fetching user data')
      } finally {
        setLoading(false)
      }
    }

    fetchUserData()
  }, [])

  // ✅ Create a mapping of titles to routes
  const routeMapping = {
    'Travel Assistance': '/transport',
    'Food Assistance': '/foodservices',
    'Accomodation Finder': '/accommodations',
    'Cultural Adaptation Assistance': '/cultural',
    'Custom Job Listings': '/jobs',
  }

  return (
    <body className="relative bg-black overflow-hidden max-h-screen">
      {/* Header Navbar */}
      <Header />

      {/* Dashboard Section */}
      <main className="m-auto pt-16 max-h-screen overflow-auto text-white">
        <div className="px-6 py-8 mx-auto rounded-3xl p-8 mb-5">
          {/* Display User Name */}
          {loading ? (
            <h1 className="text-3xl font-bold mb-16 text-center">Loading...</h1>
          ) : error ? (
            <h1 className="text-3xl font-bold mb-16 text-center text-red-500">
              {error}
            </h1>
          ) : (
            <h1 className="text-3xl font-bold mb-16 text-center">
              Welcome, <span className="text-blue-500">{userName}!</span> Start
              your Migration Journey Today with Simigra
            </h1>
          )}

          <div className="flex flex-col gap-16 mb-8">
            <div className="flex flex-col items-center">
              {DashboardData.map((item, index) => (
                <div
                  key={index}
                  className={`flex flex-col sm:flex-row items-center 
                  ${index % 2 === 0 ? 'sm:flex-row-reverse' : ''} gap-36 mb-16`}
                >
                  <div className="md:w-1/2 mx-auto transform scale-140">
                    <Lottie
                      loop
                      play
                      animationData={item.animation}
                      style={{ width: 300, height: 300 }}
                    />
                  </div>

                  <div className="w-1/2 mx-auto bg-gray-700 rounded-3xl">
                    <div className="bg-darkblue bg-opacity-40 flex flex-col gap-4 p-8 py-8 w-96">
                      <h1 className="text-white text-xl">
                        {index + 1}. {item.title}
                      </h1>
                      <p className="text-gray-400">{item.description}</p>

                      {/* ✅ Added routing using Link */}
                      <Link to={routeMapping[item.title]}>
                        <button className="bg-blue-600 h-10 rounded-full hover:bg-blue-900 w-full">
                          {item.button}
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <Footer />
      </main>
    </body>
  )
}

export default Dashboard
