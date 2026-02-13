import React, { useState } from 'react'

const ReserveTablePage = ({ restaurantName, cuisines, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    specialRequests: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = () => {
    console.log('Reservation submitted:', formData)
    setSubmitted(true)

    setTimeout(() => {
      setSubmitted(false)
      if (onClose) onClose()
    }, 3000)
  }

  const timeSlots = [
    '11:00 AM',
    '11:30 AM',
    '12:00 PM',
    '12:30 PM',
    '1:00 PM',
    '1:30 PM',
    '2:00 PM',
    '2:30 PM',
    '6:00 PM',
    '6:30 PM',
    '7:00 PM',
    '7:30 PM',
    '8:00 PM',
    '8:30 PM',
    '9:00 PM',
    '9:30 PM',
    '10:00 PM',
  ]

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center p-4 z-50">
      <div className="bg-gradient-to-br from-cyan-900 to-blue-900 rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="bg-cyan-600 bg-opacity-40 p-6 rounded-t-3xl relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white hover:text-gray-300 text-3xl font-bold transition-colors"
            aria-label="Close"
          >
            ×
          </button>
          <h2 className="text-3xl font-bold text-white mb-2">
            Reserve a Table
          </h2>
          {restaurantName && (
            <div className="bg-cyan-600 bg-opacity-30 rounded-2xl p-3 mt-3 border border-cyan-400">
              <p className="text-sm text-gray-300 mb-1">Restaurant:</p>
              <p className="text-lg font-semibold text-white">
                {restaurantName}
              </p>
              {cuisines && (
                <p className="text-sm text-gray-200 mt-1">{cuisines}</p>
              )}
            </div>
          )}
        </div>

        {/* Form Content */}
        <div className="p-8">
          {submitted ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🎉</div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Reservation Confirmed!
              </h3>
              <p className="text-gray-200 mb-4">
                Your table has been reserved successfully.
              </p>
              <div className="bg-cyan-600 bg-opacity-20 rounded-2xl p-4 max-w-md mx-auto">
                <p className="text-white">
                  A confirmation message will be sent to your email and phone
                  shortly.
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-white font-semibold mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-gray-800 bg-opacity-50 text-white border border-gray-600 rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  placeholder="Enter your name"
                />
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white font-semibold mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-gray-800 bg-opacity-50 text-white border border-gray-600 rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-gray-800 bg-opacity-50 text-white border border-gray-600 rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    placeholder="+91 9912345678"
                  />
                </div>
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white font-semibold mb-2">
                    Date *
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full bg-gray-800 bg-opacity-50 text-white border border-gray-600 rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2">
                    Time *
                  </label>
                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full bg-gray-800 bg-opacity-50 text-white border border-gray-600 rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  >
                    <option value="">Select time</option>
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Number of Guests */}
              <div>
                <label className="block text-white font-semibold mb-2">
                  Number of Guests *
                </label>
                <select
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  className="w-full bg-gray-800 bg-opacity-50 text-white border border-gray-600 rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? 'Person' : 'People'}
                    </option>
                  ))}
                </select>
              </div>

              {/* Special Requests */}
              <div>
                <label className="block text-white font-semibold mb-2">
                  Special Requests
                </label>
                <textarea
                  name="specialRequests"
                  value={formData.specialRequests}
                  onChange={handleChange}
                  rows="3"
                  className="w-full bg-gray-800 bg-opacity-50 text-white border border-gray-600 rounded-3xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
                  placeholder="Dietary restrictions, seating preferences, special occasions..."
                />
              </div>

              {/* Info Box */}
              <div className="bg-cyan-600 bg-opacity-20 border border-cyan-500 rounded-2xl p-4">
                <p className="text-cyan-100 text-sm">
                  <span className="font-semibold">💡 Note:</span> Your
                  reservation will be confirmed within 15 minutes. Please arrive
                  10 minutes before your reservation time.
                </p>
              </div>

              {/* Buttons */}
              <div className="flex gap-4 pt-4">
                <button
                  onClick={handleSubmit}
                  className="flex-1 bg-orange-600 text-white py-3 px-6 rounded-full hover:bg-orange-700 transition-colors font-semibold text-lg shadow-lg hover:shadow-xl"
                >
                  Confirm Reservation
                </button>
                <button
                  onClick={onClose}
                  className="flex-1 bg-gray-700 text-white py-3 px-6 rounded-full hover:bg-gray-600 transition-colors font-semibold text-lg"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-cyan-600 bg-opacity-20 p-6 rounded-b-3xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-200">
            <div className="flex items-center gap-2">
              <span className="text-xl">📞</span>
              <span>+91 9912345678</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl">📧</span>
              <span>reservations@restaurant.com</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl">🕐</span>
              <span>11 AM - 11 PM</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReserveTablePage
