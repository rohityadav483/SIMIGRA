import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { User, LockKeyhole } from 'lucide-react'

const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleLogin = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const response = await fetch('http://127.0.0.1:5000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      })

      const data = await response.json()

      if (response.ok) {
        alert('Login successful!')
        localStorage.setItem('user_id', data.user_id)
        navigate('/dashboard') // Redirect to Dashboard
      } else {
        setError(data.message || 'Invalid credentials')
      }
    } catch (err) {
      console.error(err)
      setError('Something went wrong. Try again later.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="w-full flex justify-center items-center lg:h-screen bg-gray-800 overflow-hidden">
      <div className="w-full lg:w-2/5 px-4 m-4">
        <div className="px-6 lg:px-20 py-12 lg:py-20 bg-gray-600 rounded-lg text-gray-800">
          <form onSubmit={handleLogin}>
            <h3 className="mb-10 text-3xl text-white font-bold text-center">
              User Login
            </h3>

            {error && (
              <p className="text-red-500 mb-4 text-center font-semibold">
                {error}
              </p>
            )}

            {/* Email Input */}
            <div className="flex items-center pl-6 mb-6 bg-white rounded-full">
              <span className="inline-block pr-3 py-2 border-r border-gray-500">
                <User />
              </span>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full pl-4 pr-6 py-4 bg-white text-black font-bold placeholder-gray-600 rounded-r-full focus:outline-none"
              />
            </div>

            {/* Password Input */}
            <div className="flex items-center pl-6 mb-3 bg-white rounded-full">
              <span className="inline-block pr-3 py-2 border-r border-gray-500">
                <LockKeyhole />
              </span>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full pl-4 pr-6 py-4 bg-white text-black font-bold placeholder-gray-600 rounded-r-full focus:outline-none"
              />
            </div>

            {/* Remember Me */}
            <div className="inline-flex mb-10">
              <input className="mr-4 mt-4" type="checkbox" />
              <p className="mt-4 text-base text-gray-200">Remember Me</p>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={loading}
              className="py-4 w-full bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-full transition duration-200"
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>

            {/* Signup Link */}
            <p className="mt-4 text-lg text-gray-200 text-center">
              Not a member?{' '}
              <Link
                to="/register"
                className="text-blue-900 hover:underline hover:text-violet-900"
              >
                SignUp
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
