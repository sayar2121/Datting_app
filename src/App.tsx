import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import Loader from './components/ui/Loader'
import HelpCenter from './pages/HelpCenter'
import SafetyTips from './pages/SafetyTips'
import CommunityGuidelines from './pages/CommunityGuidelines'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService'
import CookiePolicy from './pages/CookiePolicy'
import HotelBooking from './pages/HotelBooking'
import RoomDecor from './pages/RoomDecor'
import EventArrangement from './pages/EventArrangement'
import SpecialOffers from './pages/SpecialOffers'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Show loader for 2 seconds to ensure a premium entry
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <AnimatePresence>
        {loading && <Loader key="global-loader" />}
      </AnimatePresence>

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="help" element={<HelpCenter />} />
          <Route path="safety" element={<SafetyTips />} />
          <Route path="guidelines" element={<CommunityGuidelines />} />
          <Route path="privacy" element={<PrivacyPolicy />} />
          <Route path="terms" element={<TermsOfService />} />
          <Route path="cookies" element={<CookiePolicy />} />
          <Route path="hotel-booking" element={<HotelBooking />} />
          <Route path="room-decor" element={<RoomDecor />} />
          <Route path="events" element={<EventArrangement />} />
          <Route path="special-offers" element={<SpecialOffers />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
