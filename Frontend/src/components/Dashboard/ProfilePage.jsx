import React, { useEffect, useState } from 'react'
import {
  User,
  MapPin,
  BookOpen,
  Layers,
  Heart,
  Edit3,
  Save,
  X,
} from 'lucide-react'

const ProfilePage = () => {
  const [user, setUser] = useState(null)
  const [editMode, setEditMode] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    destination_city: '',
    skills: '',
    education: '',
    cultural_preferences: '',
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const userId = localStorage.getItem('user_id') // stored during login

  // Fetch user data
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:5000/api/user/${userId}`)
        const data = await response.json()
        if (response.ok) {
          setUser(data)
          setFormData(data)
        } else {
          setError('Failed to load user data')
        }
      } catch (error) {
        console.error('Error fetching user:', error)
        setError('Failed to load user data')
      }
    }

    if (userId) {
      fetchUser()
    }
  }, [userId])

  // Handle form changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  // Handle Save
  const handleSave = async () => {
    setError('')
    setLoading(true)

    try {
      const response = await fetch(`http://127.0.0.1:5000/api/user/${userId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      const data = await response.json()

      if (response.ok) {
        alert('Profile updated successfully!')
        setUser(formData)
        setEditMode(false)
      } else {
        setError(data.message || 'Update failed')
      }
    } catch (error) {
      console.error(error)
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (!user) {
    return (
      <section className="relative lg:h-screen bg-gray-800 overflow-hidden">
        <div className="flex items-center justify-center h-screen">
          <p className="text-2xl text-white">Loading your profile...</p>
        </div>
      </section>
    )
  }

  if (!userId) {
    return (
      <section className="relative lg:h-screen bg-gray-800 overflow-hidden">
        <div className="flex items-center justify-center h-screen">
          <p className="text-2xl text-white">
            Please log in to view your profile.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section className="relative lg:min-h-screen bg-gray-800 overflow-hidden">
      <div className="relative container px-4 py-8 mx-auto max-w-6xl">
        <div className="flex flex-wrap items-start -mx-4">
          {/* Left Section - Welcome Message */}
          <div className="w-full lg:w-1/2 px-4 mb-16 lg:mb-0">
            <div className="max-w-md pt-8">
              <span className="text-4xl text-blue-400 font-bold">
                Your Simigra Profile
              </span>
              <h2 className="mt-8 mb-12 text-5xl font-semibold text-white">
                {editMode ? 'Update your information' : 'Manage your journey'}
              </h2>
              <p className="text-lg text-gray-200 mb-8">
                {editMode
                  ? 'Keep your profile updated to get the most relevant matches and opportunities.'
                  : 'Your profile helps us connect you with the right people and opportunities for your migration journey.'}
              </p>
              <div className="bg-gray-700 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Migration Status
                </h3>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-400 rounded-full mr-3"></div>
                  <span className="text-gray-200">Profile Active</span>
                </div>
                <p className="text-sm text-gray-300 mt-2">
                  Your profile is visible to potential connections and mentors.
                </p>
              </div>
            </div>
          </div>

          {/* Right Section - Profile Form */}
          <div className="w-full lg:w-1/2 px-4">
            <div className="px-6 lg:px-20 py-12 lg:py-16 bg-gray-600 rounded-lg">
              <div className="flex items-center justify-between mb-10">
                <h3 className="text-2xl text-white font-bold">
                  Profile Information
                </h3>
                {!editMode && (
                  <button
                    onClick={() => setEditMode(true)}
                    className="flex items-center px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold transition duration-200"
                  >
                    <Edit3 className="w-4 h-4 mr-2" />
                    Edit
                  </button>
                )}
              </div>

              {error && (
                <p className="text-red-400 mb-6 text-center font-semibold bg-red-900/30 p-3 rounded-lg">
                  {error}
                </p>
              )}

              {!editMode ? (
                // Display Mode
                <div className="space-y-6">
                  {/* Name */}
                  <div className="flex items-center pl-6 py-4 bg-gray-700 rounded-lg">
                    <span className="inline-block pr-4 border-r border-gray-500">
                      <User className="text-blue-400" />
                    </span>
                    <div className="pl-4">
                      <p className="text-sm text-gray-300 font-semibold">
                        Name
                      </p>
                      <p className="text-white text-lg">{user.name}</p>
                    </div>
                  </div>

                  {/* Destination City */}
                  <div className="flex items-center pl-6 py-4 bg-gray-700 rounded-lg">
                    <span className="inline-block pr-4 border-r border-gray-500">
                      <MapPin className="text-blue-400" />
                    </span>
                    <div className="pl-4">
                      <p className="text-sm text-gray-300 font-semibold">
                        Destination City
                      </p>
                      <p className="text-white text-lg">
                        {user.destination_city || 'Not specified'}
                      </p>
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="flex items-start pl-6 py-4 bg-gray-700 rounded-lg">
                    <span className="inline-block pr-4 pt-1 border-r border-gray-500">
                      <Layers className="text-blue-400" />
                    </span>
                    <div className="pl-4">
                      <p className="text-sm text-gray-300 font-semibold">
                        Skills
                      </p>
                      <p className="text-white text-lg">
                        {user.skills || 'Not specified'}
                      </p>
                    </div>
                  </div>

                  {/* Education */}
                  <div className="flex items-start pl-6 py-4 bg-gray-700 rounded-lg">
                    <span className="inline-block pr-4 pt-1 border-r border-gray-500">
                      <BookOpen className="text-blue-400" />
                    </span>
                    <div className="pl-4">
                      <p className="text-sm text-gray-300 font-semibold">
                        Education
                      </p>
                      <p className="text-white text-lg">
                        {user.education || 'Not specified'}
                      </p>
                    </div>
                  </div>

                  {/* Cultural Preferences */}
                  <div className="flex items-start pl-6 py-4 bg-gray-700 rounded-lg">
                    <span className="inline-block pr-4 pt-1 border-r border-gray-500">
                      <Heart className="text-blue-400" />
                    </span>
                    <div className="pl-4">
                      <p className="text-sm text-gray-300 font-semibold">
                        Cultural Preferences
                      </p>
                      <p className="text-white text-lg">
                        {user.cultural_preferences || 'Not specified'}
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                // Edit Mode
                <div className="space-y-4">
                  {/* Name Input */}
                  <div className="flex items-center pl-6 bg-white rounded-full">
                    <span className="inline-block pr-3 py-2 border-r border-gray-500">
                      <User className="text-gray-600" />
                    </span>
                    <input
                      className="w-full pl-4 pr-6 py-4 bg-white font-bold placeholder-gray-600 text-black rounded-r-full focus:outline-none"
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Destination City Input */}
                  <div className="flex items-center pl-6 bg-white rounded-full">
                    <span className="inline-block pr-3 py-2 border-r border-gray-500">
                      <MapPin className="text-gray-600" />
                    </span>
                    <select
                      className="w-full pl-4 pr-6 py-4 bg-white font-bold text-black rounded-r-full focus:outline-none"
                      name="destination_city"
                      value={formData.destination_city}
                      onChange={handleChange}
                    >
                      <option value="" className="text-gray-600">
                        Select Destination City
                      </option>
                      <option value="Pune">Pune</option>
                      <option value="Mumbai">Mumbai</option>
                      <option value="New Delhi">New Delhi</option>
                      <option value="Bengaluru">Bengaluru</option>
                      <option value="Hyderabad">Hyderabad</option>
                      <option value="Chennai">Chennai</option>
                      <option value="Kolkata">Kolkata</option>
                      <option value="Ahmedabad">Ahmedabad</option>
                      <option value="Jaipur">Jaipur</option>
                      <option value="Lucknow">Lucknow</option>
                    </select>
                  </div>

                  {/* Skills Input */}
                  <div className="flex items-center pl-6 bg-white rounded-full">
                    <span className="inline-block pr-3 py-2 border-r border-gray-500">
                      <Layers className="text-gray-600" />
                    </span>
                    <input
                      className="w-full pl-4 pr-6 py-4 bg-white font-bold placeholder-gray-600 text-black rounded-r-full focus:outline-none"
                      type="text"
                      name="skills"
                      placeholder="Your Skills"
                      value={formData.skills}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Education Input */}
                  <div className="flex items-center pl-6 bg-white rounded-full">
                    <span className="inline-block pr-3 py-2 border-r border-gray-500">
                      <BookOpen className="text-gray-600" />
                    </span>
                    <input
                      className="w-full pl-4 pr-6 py-4 bg-white font-bold placeholder-gray-600 text-black rounded-r-full focus:outline-none"
                      type="text"
                      name="education"
                      placeholder="Education Background"
                      value={formData.education}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Cultural Preferences Input */}
                  <div className="flex items-center pl-6 mb-6 bg-white rounded-full">
                    <span className="inline-block pr-3 py-2 border-r border-gray-500">
                      <Heart className="text-gray-600" />
                    </span>
                    <input
                      className="w-full pl-4 pr-6 py-4 bg-white font-bold placeholder-gray-600 text-black rounded-r-full focus:outline-none"
                      type="text"
                      name="cultural_preferences"
                      placeholder="Cultural Preferences"
                      value={formData.cultural_preferences}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-4 mt-8">
                    <button
                      onClick={handleSave}
                      disabled={loading}
                      className="flex items-center justify-center py-4 px-8 bg-green-500 hover:bg-green-600 disabled:bg-green-400 text-white font-bold rounded-full transition duration-200 flex-1"
                    >
                      <Save className="w-4 h-4 mr-2" />
                      {loading ? 'Saving...' : 'Save Changes'}
                    </button>
                    <button
                      onClick={() => {
                        setEditMode(false)
                        setFormData(user) // Reset form data
                        setError('')
                      }}
                      disabled={loading}
                      className="flex items-center justify-center py-4 px-8 bg-gray-500 hover:bg-gray-600 disabled:bg-gray-400 text-white font-bold rounded-full transition duration-200 flex-1"
                    >
                      <X className="w-4 h-4 mr-2" />
                      Cancel
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProfilePage
