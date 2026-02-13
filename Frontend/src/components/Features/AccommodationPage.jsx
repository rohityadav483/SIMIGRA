import React, { useEffect, useState } from 'react'

const AccommodationPage = () => {
  const [city, setCity] = useState('Pune')
  const [accommodations, setAccommodations] = useState([])

  const cities = [
    'Pune',
    'Mumbai',
    'New Delhi',
    'Bengaluru',
    'Hyderabad',
    'Chennai',
    'Kolkata',
    'Ahmedabad',
    'Jaipur',
    'Lucknow',
  ]

  useEffect(() => {
    fetch(`http://127.0.0.1:5000/api/accommodations?city=${city}`)
      .then((res) => res.json())
      .then((data) => setAccommodations(data))
      .catch((err) => console.error(err))
  }, [city])

  return (
    <div className="flex flex-col items-center p-8 bg-black min-h-screen text-white">
      <h1 className="text-3xl font-bold mb-8">Accommodations in {city}</h1>

      {/* Dropdown */}
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {accommodations.map((item) => (
          <div
            key={item.id}
            className="bg-cyan-600 bg-opacity-40 rounded-3xl shadow-lg overflow-hidden flex flex-col hover:shadow-2xl transition-shadow duration-300"
          >
            <img
              src={item.image_url}
              alt={item.name}
              className="w-full h-56 object-cover"
            />

            <div className="p-6 flex flex-col flex-grow justify-between h-full">
              <div className="flex flex-col gap-3 flex-grow">
                <h2 className="text-2xl font-bold text-white">{item.name}</h2>
                <p className="text-gray-300 text-sm">{item.type}</p>
                <p className="text-gray-200">{item.address}</p>
                <p className="text-gray-100 font-medium">
                  Price: {item.price_range}
                </p>
                <p className="text-gray-200">{item.description}</p>
                <p className="text-gray-300">
                  📍 Distance from centre: {item.distance_from_center}
                </p>
                <p className="text-yellow-300 font-semibold">
                  ⭐ {item.rating} / 10 — {item.reviews_count} reviews
                </p>
                <p className="text-gray-200">Contact: 9912345678</p>
              </div>

              {/* Button always pinned at bottom */}
              <div className="mt-4">
                <button
                  onClick={() => (window.location.href = '/contact')}
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-800 transition-colors"
                >
                  Contact Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AccommodationPage
