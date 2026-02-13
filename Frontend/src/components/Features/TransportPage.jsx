import React, { useEffect, useState } from 'react'
import { MapPin, Bus, Car, Truck, Train, Info } from 'lucide-react'

const TransportPage = () => {
  const [city, setCity] = useState('Pune')
  const [options, setOptions] = useState([])
  const [loading, setLoading] = useState(true)
  const [distance, setDistance] = useState(1)

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
    fetch(`http://127.0.0.1:5000/api/transport?city=${city}`)
      .then((res) => res.json())
      .then((data) => setOptions(data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false))
  }, [city])

  const calculateFare = (baseFare, perKm) =>
    (baseFare + perKm * distance).toFixed(2)

  const modeImages = {
    Bus: 'https://img.icons8.com/fluency/48/bus.png',
    Taxi: 'https://img.icons8.com/fluency/48/taxi.png',
    Car: 'https://img.icons8.com/fluency/48/car.png',
    'Auto Rickshaw': 'https://img.icons8.com/fluency/48/auto-rickshaw.png',
    Metro: 'https://img.icons8.com/fluency/48/train.png',
  }

  const renderIcon = (mode) => {
    switch (mode) {
      case 'Bus':
        return <Bus className="w-5 h-5 text-yellow-300" />
      case 'Taxi':
      case 'Car':
        return <Car className="w-5 h-5 text-yellow-300" />
      case 'Auto Rickshaw':
        return <Truck className="w-5 h-5 text-yellow-300" />
      case 'Metro':
        return <Train className="w-5 h-5 text-green-300" />
      default:
        return <Info className="w-5 h-5 text-blue-300" />
    }
  }

  return (
    <div className="flex flex-col items-center p-8 bg-black min-h-screen text-white">
      <h1 className="text-3xl font-bold mb-8">Transport Options in {city}</h1>

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

      {/* Distance Input */}
      <div className="mb-8 flex flex-col sm:flex-row sm:items-center gap-4">
        <label className="text-lg font-semibold text-gray-200">
          Enter distance (km)
        </label>
        <input
          type="number"
          min="0"
          value={distance}
          onChange={(e) => setDistance(e.target.value)}
          className="bg-gray-800 text-white border border-gray-600 rounded-full px-4 py-2 w-24 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Loading / Empty State */}
      {loading ? (
        <p className="text-gray-400">Loading transport options...</p>
      ) : options.length === 0 ? (
        <p className="text-gray-400">No transport options found for {city}.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-5xl">
          {options.map((opt) => (
            <div
              key={opt.id}
              className="bg-blue-700 bg-opacity-40 rounded-2xl shadow-lg overflow-hidden flex flex-col hover:shadow-2xl transition-shadow duration-300 w-full"
            >
              <img
                src={modeImages[opt.mode] || modeImages['Bus']}
                alt={opt.mode}
                className="w-full h-28 object-contain bg-gray-800"
              />
              <div className="p-4 flex flex-col justify-between h-full">
                <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-2">
                  {renderIcon(opt.mode)} {opt.mode}
                </h3>
                <p className="text-gray-300 flex items-center gap-2 mb-1">
                  <MapPin className="w-5 h-5 text-pink-300" /> {opt.city}
                </p>
                <p className="text-gray-100 mb-2">{opt.description}</p>
                <p className="text-lg font-bold text-yellow-400">
                  Estimated Fare: ₹{calculateFare(opt.base_fare, opt.per_km)}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default TransportPage
