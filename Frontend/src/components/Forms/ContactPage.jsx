import React, { useState } from 'react'

const ContactPage = ({ accommodationName, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    checkIn: '',
    checkOut: '',
    guests: '1',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log('Form submitted:', formData)
    setSubmitted(true)

    // Reset after 3 seconds
    setTimeout(() => {
      setSubmitted(false)
      if (onClose) onClose()
    }, 3000)
  }

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
          <h2 className="text-3xl font-bold text-white mb-2 justify-center">
            Contact Us 📞
          </h2>
          {accommodationName && (
            <div className="bg-blue-600 bg-opacity-30 rounded-2xl p-3 mt-3 border border-blue-400">
              <p className="text-sm text-gray-300 mb-1">Inquiring about:</p>
              <p className="text-lg font-semibold text-white">
                {accommodationName}
              </p>
            </div>
          )}
        </div>

        {/* Form */}
        <div className="p-8">
          {submitted ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">✓</div>
              <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
              <p className="text-gray-200">
                We've received your inquiry and will contact you shortly.
              </p>
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

              {/* Check-in & Check-out */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white font-semibold mb-2">
                    Check-in Date
                  </label>
                  <input
                    type="date"
                    name="checkIn"
                    value={formData.checkIn}
                    onChange={handleChange}
                    className="w-full bg-gray-800 bg-opacity-50 text-white border border-gray-600 rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2">
                    Check-out Date
                  </label>
                  <input
                    type="date"
                    name="checkOut"
                    value={formData.checkOut}
                    onChange={handleChange}
                    className="w-full bg-gray-800 bg-opacity-50 text-white border border-gray-600 rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  />
                </div>
              </div>

              {/* Guests */}
              <div>
                <label className="block text-white font-semibold mb-2">
                  Number of Guests
                </label>
                <select
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  className="w-full bg-gray-800 bg-opacity-50 text-white border border-gray-600 rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? 'Guest' : 'Guests'}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-white font-semibold mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full bg-gray-800 bg-opacity-50 text-white border border-gray-600 rounded-3xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
                  placeholder="Any special requirements or questions?"
                />
              </div>

              {/* Buttons */}
              <div className="flex gap-4 pt-4">
                <button
                  onClick={handleSubmit}
                  className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-full hover:bg-blue-700 transition-colors font-semibold text-lg shadow-lg hover:shadow-xl"
                >
                  Send Inquiry
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
              <span>info@accommodation.com</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl">⏰</span>
              <span>Available 24/7</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
