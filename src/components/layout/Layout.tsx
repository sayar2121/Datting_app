import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import Navbar from './Navbar'
import { Heart, Instagram, Twitter, Facebook, Mail } from 'lucide-react'
import './Layout.css'

const Layout: React.FC = () => {
  return (
    <div className="website-layout">
      <Navbar />
      <main className="main-content">
        <Outlet />
      </main>

      {/* Premium Footer */}
      <footer className="premium-footer">
        <div className="footer-wave"></div>
        <div className="container footer-content">
          <div className="footer-brand-col">
            <h2 className="footer-logo">
              <span className="brand-pink">Heart</span><span className="brand-purple">Sync</span>
            </h2>
            <p>Find Love. Create Memories. Experience More. Your premium journey starts here.</p>
            <div className="footer-socials">
              <a href="#ig" className="social-icon"><Instagram size={20} /></a>
              <a href="#tw" className="social-icon"><Twitter size={20} /></a>
              <a href="#fb" className="social-icon"><Facebook size={20} /></a>
              <a href="#mail" className="social-icon"><Mail size={20} /></a>
            </div>
          </div>

          <div className="footer-links">
            <div className="footer-group">
              <h4>Company</h4>
              <a href="#about">About Us</a>
              <a href="#careers">Careers</a>
              <a href="#press">Press</a>
              <a href="#blog">Blog</a>
            </div>
            <div className="footer-group">
              <h4>Support</h4>
              <Link to="/help">Help Center</Link>
              <Link to="/safety">Safety Tips</Link>
              <Link to="/guidelines">Community Guidelines</Link>
            </div>
            <div className="footer-group">
              <h4>Legal</h4>
              <Link to="/privacy">Privacy Policy</Link>
              <Link to="/terms">Terms of Service</Link>
              <Link to="/cookies">Cookie Policy</Link>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} HeartSync. All rights reserved. Made with <Heart size={14} fill="#FF4D8D" color="#FF4D8D" className="inline-heart" /> for you.</p>
        </div>
      </footer>
    </div>
  )
}

export default Layout
