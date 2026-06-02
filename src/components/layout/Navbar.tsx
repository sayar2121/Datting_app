import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
// @ts-ignore - Vite handles static image imports
import logoImg from '../../assets/logo.png'
import WelcomeModal from '../ui/WelcomeModal'
import './Navbar.css'

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [isWelcomeOpen, setIsWelcomeOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
      
      const sections = ['home', 'features', 'how-it-works', 'premium', 'experiences']
      const scrollPosition = window.scrollY + 200

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i])
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i])
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    setActiveSection(id)
    setMobileMenuOpen(false)

    if (id === 'hotel-booking') {
      navigate('/hotel-booking')
      return
    }

    if (location.pathname !== '/') {
      navigate('/#' + id)
      // Small timeout to allow page load before scroll
      setTimeout(() => {
        const element = document.getElementById(id)
        if (element) {
          const offset = 80
          const bodyRect = document.body.getBoundingClientRect().top
          const elementRect = element.getBoundingClientRect().top
          const offsetPosition = (elementRect - bodyRect) - offset
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
        }
      }, 100)
      return
    }

    const element = document.getElementById(id)
    if (element) {
      const offset = 80 // Navbar height
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = element.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'Features', id: 'features' },
    { label: 'How It Works', id: 'how-it-works' },
    { label: 'Pricing', id: 'premium' },
    { label: 'Events', id: 'experiences' }
  ]

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-container">
        <Link to="/" className="navbar-brand" onClick={() => window.scrollTo(0, 0)}>
          <img src={logoImg} alt="HeartSync Logo" className="navbar-logo" />
          <span>HeartSync</span>
        </Link>

        {/* Desktop Nav */}
        <div className="navbar-links desktop-only">
          {navLinks.map(link => {
            const isActive = 
              (link.id === 'hotel-booking' && location.pathname === '/hotel-booking') ||
              (activeSection === link.id && location.pathname === '/')

            return (
              <button 
                key={link.label} 
                className={`nav-link ${isActive ? 'active' : ''}`} 
                onClick={() => scrollToSection(link.id)}
              >
                {link.label}
              </button>
            )
          })}
        </div>

        <div className="navbar-actions desktop-only">
          <button className="btn btn-ghost login-btn" onClick={() => setIsWelcomeOpen(true)}>Log In</button>
          <button className="btn btn-primary signup-btn" onClick={() => setIsWelcomeOpen(true)}>Sign Up</button>
        </div>

        {/* Mobile Toggle */}
        <button className="mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'mobile-menu-open' : ''}`}>
        <div className="mobile-menu-links">
          {navLinks.map(link => (
            <button key={link.label} className="mobile-nav-link" onClick={() => scrollToSection(link.id)}>
              {link.label}
            </button>
          ))}
          <div className="mobile-menu-actions">
            <button className="btn btn-ghost login-btn" style={{ width: '100%', justifyContent: 'center' }} onClick={() => { setMobileMenuOpen(false); setIsWelcomeOpen(true); }}>Log In</button>
            <button className="btn btn-primary signup-btn" style={{ width: '100%', justifyContent: 'center' }} onClick={() => { setMobileMenuOpen(false); setIsWelcomeOpen(true); }}>Sign Up</button>
          </div>
        </div>
      </div>

      <WelcomeModal isOpen={isWelcomeOpen} onClose={() => setIsWelcomeOpen(false)} />
    </nav>
  )
}

export default Navbar
