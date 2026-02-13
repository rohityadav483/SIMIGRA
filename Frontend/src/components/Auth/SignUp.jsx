import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { User, LockKeyhole, Mail } from 'lucide-react'

const Register = () => {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [agreeTerms, setAgreeTerms] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleRegister = async (e) => {
    e.preventDefault()
    setError('')

    if (!agreeTerms) {
      setError('You must agree to the terms to register.')
      return
    }

    setLoading(true)
    try {
      const response = await fetch('http://127.0.0.1:5000/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          password,
          destination_city: '',
          skills: '',
          education: '',
          cultural_preferences: '',
        }),
      })

      const data = await response.json()

      if (response.ok) {
        alert('Signup successful! Please login.')
        navigate('/login') // redirect to login page
      } else {
        setError(data.message || 'Signup failed. Try again.')
      }
    } catch (err) {
      console.error(err)
      setError('Something went wrong. Try again later.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="relative lg:h-screen bg-gray-800 overflow-hidden">
      <div className="relative container px-4 mt-5 mx-auto max-w-5xl">
        <div className="flex flex-wrap items-center -mx-4">
          {/* Left Section */}
          <div className="w-full lg:w-1/2 px-4 mb-16 lg:mb-0">
            <div className="max-w-md">
              <span className="text-4xl text-blue-400 font-bold">
                Welcome to Simigra
              </span>
              <h2 className="mt-8 mb-12 text-5xl font-semibold text-white">
                Start your new journey by creating an account.
              </h2>
              <p className="text-lg text-gray-200">
                <span>"SIMIGRA: Simplify. Settle. Succeed."</span>
              </p>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full lg:w-1/2 px-4 mb-4">
            <div className="px-6 lg:px-20 py-12 lg:py-16 bg-gray-600 rounded-lg text-gray-800">
              <form onSubmit={handleRegister}>
                <h3 className="mb-10 text-2xl text-white font-bold text-center">
                  Register Account
                </h3>

                {error && (
                  <p className="text-red-500 mb-4 text-center font-semibold">
                    {error}
                  </p>
                )}

                {/* Username */}
                <div className="flex items-center pl-6 mb-4 bg-white rounded-full">
                  <span className="inline-block pr-3 py-2 border-r border-gray-500">
                    <User />
                  </span>
                  <input
                    className="w-full pl-4 pr-6 py-4 bg-white font-bold placeholder-gray-600 rounded-r-full focus:outline-none"
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>

                {/* Email */}
                <div className="flex items-center pl-6 mb-4 bg-white rounded-full">
                  <span className="inline-block pr-3 py-2 border-r border-gray-500">
                    <Mail />
                  </span>
                  <input
                    className="w-full pl-4 pr-6 py-4 bg-white font-bold placeholder-gray-600 rounded-r-full focus:outline-none"
                    type="email"
                    placeholder="example@simigra.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                {/* Password */}
                <div className="flex items-center pl-6 mb-4 bg-white rounded-full">
                  <span className="inline-block pr-3 py-2 border-r border-gray-500">
                    <LockKeyhole />
                  </span>
                  <input
                    className="w-full pl-4 pr-6 py-4 bg-white font-bold placeholder-gray-600 rounded-r-full focus:outline-none"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>

                {/* Terms */}
                <div className="inline-flex mb-10">
                  <input
                    className="mr-4 mt-2"
                    type="checkbox"
                    checked={agreeTerms}
                    onChange={(e) => setAgreeTerms(e.target.checked)}
                  />
                  <p className="mt-2 text-sm text-gray-200">
                    By signing up, you agree to our Terms, Data Policy and
                    Cookies
                  </p>
                </div>

                {/* Signup Button */}
                <button
                  type="submit"
                  className="py-4 w-full bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-full transition duration-200"
                  disabled={loading}
                >
                  {loading ? 'Creating Account...' : 'Get Started'}
                </button>

                {/* Login Link */}
                <p className="mt-4 text-lg text-gray-200 text-center">
                  Already have an account?{' '}
                  <Link
                    to="/login"
                    className="text-blue-900 hover:underline hover:text-violet-900"
                  >
                    Login
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Register
