import React, { useState } from 'react'
import {
  Briefcase,
  Building2,
  MapPin,
  DollarSign,
  Upload,
  CheckCircle,
} from 'lucide-react'

const ApplyJobPage = ({ jobData, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    currentLocation: '',
    experience: '',
    currentSalary: '',
    expectedSalary: '',
    noticePeriod: '30',
    coverLetter: '',
    resume: null,
    linkedIn: '',
    portfolio: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setFormData({
        ...formData,
        resume: file,
      })
    }
  }

  const handleSubmit = () => {
    console.log('Application submitted:', formData)
    setSubmitted(true)

    setTimeout(() => {
      setSubmitted(false)
      if (onClose) onClose()
    }, 3000)
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center p-4 z-50 overflow-y-auto">
      <div className="bg-gradient-to-br from-cyan-900 to-blue-900 rounded-3xl shadow-2xl w-full max-w-3xl my-8">
        {/* Header */}
        <div className="bg-cyan-600 bg-opacity-40 p-6 rounded-t-3xl relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white hover:text-gray-300 text-3xl font-bold transition-colors"
            aria-label="Close"
          >
            ×
          </button>
          <h2 className="text-3xl font-bold text-white mb-2 flex items-center gap-2">
            <Briefcase className="w-8 h-8" />
            Apply for Position
          </h2>
          {jobData && (
            <div className="bg-cyan-600 bg-opacity-30 rounded-2xl p-4 mt-3 border border-cyan-400">
              <div className="flex flex-col gap-2">
                <p className="text-xl font-semibold text-white">
                  {jobData.title}
                </p>
                <div className="flex flex-wrap gap-4 text-sm text-gray-200">
                  <span className="flex items-center gap-1">
                    <Building2 className="w-4 h-4" />
                    {jobData.company_name}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {jobData.location || jobData.city}
                  </span>
                  <span className="flex items-center gap-1">
                    <DollarSign className="w-4 h-4" />₹
                    {jobData.salary_min?.toLocaleString()} - ₹
                    {jobData.salary_max?.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Form Content */}
        <div className="p-8 max-h-[60vh] overflow-y-auto">
          {submitted ? (
            <div className="text-center py-12">
              <CheckCircle className="w-20 h-20 text-green-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">
                Application Submitted!
              </h3>
              <p className="text-gray-200 mb-4">
                Thank you for applying. We've received your application
                successfully.
              </p>
              <div className="bg-cyan-600 bg-opacity-20 rounded-2xl p-4 max-w-md mx-auto">
                <p className="text-white">
                  Our HR team will review your application and get back to you
                  within 5-7 business days.
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Personal Information */}
              <div className="bg-cyan-600 bg-opacity-10 rounded-2xl p-4">
                <h3 className="text-xl font-bold text-white mb-4">
                  Personal Information
                </h3>

                <div className="space-y-4">
                  <div>
                    <label className="block text-white font-semibold mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full bg-gray-800 bg-opacity-50 text-white border border-gray-600 rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                      placeholder="Enter your full name"
                    />
                  </div>

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

                  <div>
                    <label className="block text-white font-semibold mb-2">
                      Current Location *
                    </label>
                    <input
                      type="text"
                      name="currentLocation"
                      value={formData.currentLocation}
                      onChange={handleChange}
                      className="w-full bg-gray-800 bg-opacity-50 text-white border border-gray-600 rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                      placeholder="City, State"
                    />
                  </div>
                </div>
              </div>

              {/* Professional Information */}
              <div className="bg-cyan-600 bg-opacity-10 rounded-2xl p-4">
                <h3 className="text-xl font-bold text-white mb-4">
                  Professional Details
                </h3>

                <div className="space-y-4">
                  <div>
                    <label className="block text-white font-semibold mb-2">
                      Total Experience (in years) *
                    </label>
                    <input
                      type="number"
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      min="0"
                      step="0.5"
                      className="w-full bg-gray-800 bg-opacity-50 text-white border border-gray-600 rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                      placeholder="e.g., 3.5"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white font-semibold mb-2">
                        Current Salary (₹/year)
                      </label>
                      <input
                        type="number"
                        name="currentSalary"
                        value={formData.currentSalary}
                        onChange={handleChange}
                        className="w-full bg-gray-800 bg-opacity-50 text-white border border-gray-600 rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                        placeholder="500000"
                      />
                    </div>
                    <div>
                      <label className="block text-white font-semibold mb-2">
                        Expected Salary (₹/year) *
                      </label>
                      <input
                        type="number"
                        name="expectedSalary"
                        value={formData.expectedSalary}
                        onChange={handleChange}
                        className="w-full bg-gray-800 bg-opacity-50 text-white border border-gray-600 rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                        placeholder="600000"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-2">
                      Notice Period (days) *
                    </label>
                    <select
                      name="noticePeriod"
                      value={formData.noticePeriod}
                      onChange={handleChange}
                      className="w-full bg-gray-800 bg-opacity-50 text-white border border-gray-600 rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    >
                      <option value="0">Immediate</option>
                      <option value="15">15 days</option>
                      <option value="30">30 days</option>
                      <option value="45">45 days</option>
                      <option value="60">60 days</option>
                      <option value="90">90 days</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Resume Upload */}
              <div className="bg-cyan-600 bg-opacity-10 rounded-2xl p-4">
                <h3 className="text-xl font-bold text-white mb-4">Documents</h3>

                <div className="space-y-4">
                  <div>
                    <label className="block text-white font-semibold mb-2">
                      Upload Resume * (PDF, DOC, DOCX - Max 5MB)
                    </label>
                    <div className="relative">
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        className="hidden"
                        id="resume-upload"
                      />
                      <label
                        htmlFor="resume-upload"
                        className="flex items-center justify-center gap-2 w-full bg-gray-800 bg-opacity-50 text-white border border-gray-600 rounded-full px-4 py-3 cursor-pointer hover:bg-gray-700 transition-all"
                      >
                        <Upload className="w-5 h-5" />
                        {formData.resume ? formData.resume.name : 'Choose File'}
                      </label>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white font-semibold mb-2">
                        LinkedIn Profile
                      </label>
                      <input
                        type="url"
                        name="linkedIn"
                        value={formData.linkedIn}
                        onChange={handleChange}
                        className="w-full bg-gray-800 bg-opacity-50 text-white border border-gray-600 rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                        placeholder="https://linkedin.com/in/yourprofile"
                      />
                    </div>
                    <div>
                      <label className="block text-white font-semibold mb-2">
                        Portfolio/GitHub
                      </label>
                      <input
                        type="url"
                        name="portfolio"
                        value={formData.portfolio}
                        onChange={handleChange}
                        className="w-full bg-gray-800 bg-opacity-50 text-white border border-gray-600 rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                        placeholder="https://github.com/yourusername"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Cover Letter */}
              <div>
                <label className="block text-white font-semibold mb-2">
                  Cover Letter
                </label>
                <textarea
                  name="coverLetter"
                  value={formData.coverLetter}
                  onChange={handleChange}
                  rows="5"
                  className="w-full bg-gray-800 bg-opacity-50 text-white border border-gray-600 rounded-3xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
                  placeholder="Tell us why you're a great fit for this position..."
                />
              </div>

              {/* Info Box */}
              <div className="bg-cyan-600 bg-opacity-20 border border-cyan-500 rounded-2xl p-4">
                <p className="text-cyan-100 text-sm">
                  <span className="font-semibold">💡 Note:</span> All fields
                  marked with * are mandatory. Make sure your resume is
                  up-to-date and clearly highlights your relevant skills and
                  experience.
                </p>
              </div>

              {/* Buttons */}
              <div className="flex gap-4 pt-4">
                <button
                  onClick={handleSubmit}
                  className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-full hover:bg-blue-700 transition-colors font-semibold text-lg shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  <CheckCircle className="w-5 h-5" />
                  Submit Application
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
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-200 text-sm">
            <div className="flex items-center gap-2">
              <span>📧</span>
              <span>careers@company.com</span>
            </div>
            <div className="flex items-center gap-2">
              <span>📞</span>
              <span>HR Helpline: +91 9912345678</span>
            </div>
            <div className="flex items-center gap-2">
              <span>🔒</span>
              <span>Your data is secure</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ApplyJobPage
