import React, { useEffect, useState } from 'react'
import { BookOpen, Globe, MapPin, Info, Link as LinkIcon } from 'lucide-react'

const CulturalPage = () => {
  const [city, setCity] = useState('Pune')
  const [resources, setResources] = useState([])
  const [loading, setLoading] = useState(true)

  const cities = [
    'Pune',
    'Mumbai',
    'New Delhi',
    'Bangalore',
    'Hyderabad',
    'Chennai',
    'Kolkata',
    'Ahmedabad',
    'Jaipur',
    'Lucknow',
  ]

  useEffect(() => {
    setLoading(true)
    fetch(`http://127.0.0.1:5000/api/culture?city=${city}`)
      .then((res) => res.json())
      .then((data) => setResources(data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false))
  }, [city])

  return (
    <div className="flex flex-col items-center p-8 bg-black min-h-screen text-white">
      <h1 className="text-3xl font-bold mb-8">Cultural Resources in {city}</h1>

      {/* City Dropdown */}
      <div className="mb-8 flex flex-col sm:flex-row sm:items-center gap-4">
        <label className="text-lg font-semibold text-gray-200">
          Select a city
        </label>
        <select
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="bg-gray-800 text-white border border-gray-600 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors text-center"
        >
          {cities.map((cityName) => (
            <option key={cityName} value={cityName}>
              {cityName}
            </option>
          ))}
        </select>
      </div>

      {/* Loading / Empty State */}
      {loading ? (
        <p className="text-gray-400">Loading resources...</p>
      ) : resources.length === 0 ? (
        <p className="text-gray-400">No cultural resources found for {city}.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
          {resources.map((item) => (
            <div
              key={item.id}
              className="bg-purple-500 bg-opacity-40 rounded-3xl shadow-lg overflow-hidden flex flex-col hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="p-6 flex flex-col justify-between h-full">
                <div className="flex flex-col gap-3 flex-grow">
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-yellow-300" />
                    {item.language
                      ? `${item.language} Resource`
                      : 'Cultural Info'}
                  </h3>
                  <p className="text-gray-300 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-pink-300" />
                    {item.city}
                  </p>
                  <p className="text-gray-200 text-sm flex items-center gap-2">
                    <Globe className="w-5 h-5 text-green-300" />
                    {item.language || 'General'}
                  </p>
                  <p className="text-gray-100 flex items-center gap-2">
                    <Info className="w-5 h-5 text-blue-300" />
                    {item.description}
                  </p>
                  {item.guide_url && (
                    <a
                      href={item.guide_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 underline flex items-center gap-2 mt-2"
                    >
                      <LinkIcon className="w-4 h-4" /> Learn More
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default CulturalPage
