import React, { useEffect, useState } from 'react'
import {
  Briefcase,
  Building2,
  MapPin,
  DollarSign,
  BadgeCheck,
} from 'lucide-react'

const JobsPage = () => {
  const [city, setCity] = useState('Pune')
  const [jobs, setJobs] = useState([])

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
    fetch(`http://127.0.0.1:5000/api/jobs?city=${city}`)
      .then((res) => res.json())
      .then((data) => setJobs(data))
      .catch((err) => console.error(err))
  }, [city])

  const renderJobs = (title, jobsList) => (
    <>
      <h2 className="text-2xl font-bold text-white mt-12 mb-4">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {jobsList.map((job) => (
          <div
            key={job.id}
            className="bg-cyan-600 bg-opacity-40 rounded-3xl shadow-lg overflow-hidden flex flex-col hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="p-6 flex flex-col justify-between h-full">
              <div className="flex flex-col gap-3 flex-grow">
                <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                  <Briefcase className="w-6 h-6 text-yellow-300" /> {job.title}
                </h3>
                <p className="text-gray-300 flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-blue-300" />
                  {job.company_name}
                </p>
                <p className="text-gray-200 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-pink-300" />
                  {job.location || job.city}
                </p>
                <p className="text-gray-100 font-medium flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-green-300" />₹
                  {job.salary_min?.toLocaleString()} - ₹
                  {job.salary_max?.toLocaleString()}
                </p>
                <p className="text-gray-200 text-sm">
                  <b>Job Type:</b> {job.job_type}
                </p>
                <p className="text-gray-200">
                  <b>Skills:</b> {job.skills}
                </p>
                <p className="text-gray-300 text-sm">{job.description}</p>
              </div>

              <div className="mt-4">
                <button
                  onClick={() => (window.location.href = '/apply')}
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-800 transition-colors flex justify-center items-center gap-2"
                >
                  <BadgeCheck className="w-5 h-5" /> Apply Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )

  return (
    <div className="flex flex-col items-center p-8 bg-black min-h-screen text-white">
      <h1 className="text-3xl font-bold mb-8">Job Listings in {city}</h1>

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

      {/* Job Categories */}
      {renderJobs('💻 Tech Jobs', jobs.slice(0, 20))}
      {renderJobs('⚙️ Core Engineering Jobs', jobs.slice(20, 35))}
      {renderJobs('📊 Finance & Marketing Jobs', jobs.slice(35, 50))}
    </div>
  )
}

export default JobsPage
