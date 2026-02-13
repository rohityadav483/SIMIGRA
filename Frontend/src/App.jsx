import React from 'react'
import { BrowserRouter, Routes, Route, Navigate, Link } from 'react-router-dom'

import Navbar from './components/HomePage/Navbar'
import Home from './components/HomePage/Home'
import About from './components/HomePage/About'
import Section from './components/HomePage/Section'
import Features from './components/HomePage/Features'
import Footer from './components/HomePage/Footer'
import Login from './components/Auth/Login'
import SignUp from './components/Auth/SignUp'
import Dashboard from './components/Dashboard/Dashboard'
import ProfilePage from './components/Dashboard/ProfilePage'
import JobsPage from './components/Features/JobsPage'
import AccommodationPage from './components/Features/AccommodationPage'
import FoodServicesPage from './components/Features/FoodServicesPage'
import CulturalPage from './components/Features/CulturalPage'
import TransportPage from './components/Features/TransportPage'
import ContactPage from './components/Forms/ContactPage'
import ReserveTablePage from './components/Forms/ReserveTablePage'
import ApplyJobPage from './components/Forms/ApplyJobPage'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Home />
                <About />
                <Section />
                <Features />
                <Footer />
              </>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/jobs" element={<JobsPage />} />
          <Route path="/accommodations" element={<AccommodationPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/foodservices" element={<FoodServicesPage />} />
          <Route path="/reserve" element={<ReserveTablePage />} />
          <Route path="/apply" element={<ApplyJobPage />} />
          <Route path="/cultural" element={<CulturalPage />} />
          <Route path="/transport" element={<TransportPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
