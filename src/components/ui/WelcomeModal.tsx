import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Shield, Brain, Heart, Star } from 'lucide-react';
import logoImg from '../../assets/logo.png';
import girl1Img from '../../assets/girl1.png';
import girl2Img from '../../assets/girl2.png';
import manImg from '../../assets/man image.png';
import './WelcomeModal.css';

const WelcomeModal: React.FC<{ isOpen: boolean, onClose: () => void }> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="welcome-modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div 
            className="welcome-modal-content"
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <button className="welcome-close-btn" onClick={onClose}>
              <X size={20} />
            </button>

            <div className="welcome-modal-left">
              <div className="welcome-brand">
                <img src={logoImg} alt="HeartSync" className="welcome-logo" />
                <span className="welcome-brand-text"><span className="brand-pink">Heart</span><span className="brand-purple">Sync</span></span>
              </div>

              <div className="title-wrapper" style={{ position: 'relative', display: 'inline-block' }}>
                <h2 className="welcome-title">
                  Find Your <br/>
                  <span className="gradient-text">Perfect Match</span>
                </h2>
                <div className="title-floating-heart">
                  <Heart fill="#FF4D8D" color="#FF4D8D" size={20} />
                </div>
              </div>
              
              <p className="welcome-subtitle">
                Join millions of people who are already finding meaningful connections.
              </p>

              <div className="welcome-features">
                <div className="welcome-feature">
                  <div className="wf-icon-wrap" style={{ background: 'rgba(255, 77, 141, 0.1)' }}>
                    <Shield size={18} color="#FF4D8D" />
                  </div>
                  <div className="wf-text">
                    <strong>Safe & Secure</strong>
                    <span>Your privacy is our priority</span>
                  </div>
                </div>
                <div className="welcome-feature">
                  <div className="wf-icon-wrap" style={{ background: 'rgba(123, 47, 247, 0.1)' }}>
                    <Brain size={18} color="#7B2FF7" />
                  </div>
                  <div className="wf-text">
                    <strong>AI Matching</strong>
                    <span>Smart matches just for you</span>
                  </div>
                </div>
                <div className="welcome-feature">
                  <div className="wf-icon-wrap" style={{ background: 'rgba(255, 77, 141, 0.1)' }}>
                    <Heart size={18} color="#FF4D8D" />
                  </div>
                  <div className="wf-text">
                    <strong>Real Connections</strong>
                    <span>Find love that lasts</span>
                  </div>
                </div>
              </div>

              <div className="welcome-download">
                <div className="download-text-wrap" style={{ position: 'relative' }}>
                  <h4>Download the App Now</h4>
                  <p>Available on Play Store & App Store</p>
                  
                  {/* Hand-drawn curly arrow SVG with a loop */}
                  <svg className="download-arrow" width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M 80 10 Q 80 40 55 50 C 40 55 40 35 55 35 C 70 35 65 55 55 65 Q 45 75 20 90" stroke="#C471ED" strokeWidth="4" strokeLinecap="round" fill="none" />
                    <path d="M 30 75 L 20 90 L 35 95" stroke="#C471ED" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  </svg>
                </div>
                <div className="store-buttons">
                  <button className="store-btn">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" />
                  </button>
                  <button className="store-btn">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="Download on the App Store" />
                  </button>
                </div>
              </div>
            </div>

            <div className="welcome-modal-right">
              {/* Phone Mockup 1 (Discover) */}
              <div className="wm-phone wm-phone-1">
                <div className="wm-phone-screen">
                  <div className="iphone-status-bar">
                    <span className="time">9:41</span>
                    <div className="dynamic-island"></div>
                    <div className="status-icons">
                      <svg width="12" height="10" viewBox="0 0 14 10" fill="black"><path d="M1 9h2V5H1v4zm4 0h2V3H5v6zm4 0h2V7H9v2zm4-9v9h2V0h-2z"/></svg>
                      <svg width="12" height="10" viewBox="0 0 14 10" fill="black"><path d="M7 1c-2.3 0-4.4.8-6 2.1l6 7.4 6-7.4C11.4 1.8 9.3 1 7 1z"/></svg>
                      <svg width="16" height="10" viewBox="0 0 20 10" fill="black"><path d="M17 3v4c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h13c1.1 0 2 .9 2 2zm-2 4V3H2v4h13zm3-3v2h2V4h-2z"/></svg>
                    </div>
                  </div>
                  
                  <div className="discover-header">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2"><path d="M3 12h18M3 6h18M3 18h18"/></svg>
                    <strong>Discover</strong>
                    <Heart size={16} color="#FF4D8D" />
                  </div>
                  
                  <div className="discover-card">
                    <img src={girl1Img} alt="Profile" className="wm-profile-img" />
                    <div className="wm-phone-overlay">
                      <div className="wm-phone-info">
                        <strong>Ananya, 26 <span className="verified">✔</span></strong>
                        <span>Marketing Manager</span>
                        <span>📍 New Delhi, India</span>
                      </div>
                    </div>
                    <div className="wm-phone-actions">
                      <div className="wm-action-btn skip"><X size={20} color="#ef4444" strokeWidth={3} /></div>
                      <div className="wm-action-btn like"><Heart size={24} fill="white" color="#333" strokeWidth={2.5} /></div>
                      <div className="wm-action-btn super"><Star size={20} fill="none" color="#3b82f6" strokeWidth={2.5} /></div>
                    </div>
                  </div>
                  
                  <div className="discover-tab-bar">
                    <Heart size={18} fill="#7B2FF7" color="#7B2FF7" />
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ccc" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ccc" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ccc" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                  </div>
                </div>
              </div>
              
              {/* Phone Mockup 2 (Match) */}
              <div className="wm-phone wm-phone-2">
                <div className="wm-phone-screen match-screen-iphone">
                  <div className="iphone-status-bar">
                    <span className="time">9:41</span>
                    <div className="dynamic-island"></div>
                    <div className="status-icons">
                      <svg width="12" height="10" viewBox="0 0 14 10" fill="black"><path d="M1 9h2V5H1v4zm4 0h2V3H5v6zm4 0h2V7H9v2zm4-9v9h2V0h-2z"/></svg>
                      <svg width="12" height="10" viewBox="0 0 14 10" fill="black"><path d="M7 1c-2.3 0-4.4.8-6 2.1l6 7.4 6-7.4C11.4 1.8 9.3 1 7 1z"/></svg>
                      <svg width="16" height="10" viewBox="0 0 20 10" fill="black"><path d="M17 3v4c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h13c1.1 0 2 .9 2 2zm-2 4V3H2v4h13zm3-3v2h2V4h-2z"/></svg>
                    </div>
                  </div>
                  
                  <div className="match-header">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
                  </div>
                  
                  <h4 className="match-title">It's a Match! <Heart size={14} fill="#C471ED" color="#C471ED" style={{display:'inline-block', verticalAlign:'middle', marginLeft:'2px'}}/></h4>
                  
                  <div className="match-avatars">
                    <img src={manImg} alt="You" className="match-av" />
                    <img src={girl1Img} alt="Match" className="match-av" />
                    <Heart className="match-heart" fill="#FF4D8D" color="#FF4D8D" size={24} />
                  </div>
                  
                  <p className="match-text">You and <strong>Ananya</strong> liked<br/>each other.</p>
                  
                  <div className="match-actions-wrap">
                    <button className="wm-btn-primary">Send a Message</button>
                    <button className="wm-btn-secondary">Keep Swiping</button>
                  </div>
                </div>
              </div>

              {/* Trusted Badge */}
              <div className="wm-trusted-badge">
                <div className="wm-shield"><Shield size={16} fill="white" /></div>
                <div className="wm-trusted-text">
                  <span>Trusted by Millions</span>
                  <div className="wm-stars">
                    <div className="wm-avatars">
                      <img src={girl1Img} alt="User" />
                      <img src={manImg} alt="User" />
                      <img src={girl2Img} alt="User" />
                    </div>
                    <strong>4.8/5</strong>
                    <div className="star-icons">
                      <Star size={12} fill="#F59E0B" color="#F59E0B" />
                      <Star size={12} fill="#F59E0B" color="#F59E0B" />
                      <Star size={12} fill="#F59E0B" color="#F59E0B" />
                      <Star size={12} fill="#F59E0B" color="#F59E0B" />
                      <Star size={12} fill="#F59E0B" color="#F59E0B" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Decorative elements */}
              <div className="wm-dec-1"><Heart fill="#FF4D8D" color="#FF4D8D" size={16} /></div>
              <div className="wm-dec-2"><Heart fill="#7B2FF7" color="#7B2FF7" size={24} /></div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WelcomeModal;
