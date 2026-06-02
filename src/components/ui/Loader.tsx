import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'
import logoImg from '../../assets/logo.png'
import './Loader.css'

const Loader: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 2400; // slightly less than App's 2500ms so it hits 100%
    const intervalTime = 30;
    const steps = duration / intervalTime;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const newProgress = Math.min((currentStep / steps) * 100, 100);
      setProgress(newProgress);
      
      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, intervalTime);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div 
      className="fullscreen-loader new-loader-bg"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, filter: 'blur(20px)', transition: { duration: 0.5, ease: 'easeInOut' } }}
    >
      {/* Background elements */}
      <div className="loader-bg-wave"></div>
      <div className="floating-bg-hearts">
        <Heart className="float-h1" size={24} fill="rgba(255, 77, 141, 0.15)" color="transparent" />
        <Heart className="float-h2" size={40} fill="rgba(123, 47, 247, 0.1)" color="transparent" />
        <Heart className="float-h3" size={16} fill="rgba(255, 77, 141, 0.2)" color="transparent" />
        <Heart className="float-h4" size={32} fill="rgba(123, 47, 247, 0.15)" color="transparent" />
        <Heart className="float-h5" size={20} fill="rgba(255, 77, 141, 0.1)" color="transparent" />
      </div>

      <div className="loader-content new-loader-content">
        <motion.div 
          className="loader-logo-wrapper"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1, y: [0, -12, 0] }}
          transition={{ 
            opacity: { duration: 0.8 },
            scale: { duration: 0.8 },
            y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.2 }
          }}
        >
          <img src={logoImg} alt="HeartSync" className="loader-main-logo no-bg-logo" />
        </motion.div>
        
        <motion.h1 
          className="loader-brand-title"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.08,
                delayChildren: 0.1
              }
            }
          }}
        >
          {Array.from("Heart").map((char, i) => (
            <motion.span 
              key={`h-${i}`} 
              className="brand-pink"
              style={{ display: 'inline-block' }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              {char}
            </motion.span>
          ))}
          {Array.from("Sync").map((char, i) => (
            <motion.span 
              key={`s-${i}`} 
              className="brand-purple"
              style={{ display: 'inline-block' }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              {char}
            </motion.span>
          ))}
        </motion.h1>
        
        <motion.p 
          className="loader-subtitle"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.02, delayChildren: 0.6 }
            }
          }}
        >
          {Array.from("Find Love. Create Memories. Experience More.").map((char, i) => (
            <motion.span 
              key={`sub-${i}`}
              style={{ display: 'inline-block', whiteSpace: 'pre' }}
              variants={{
                hidden: { opacity: 0, y: 10, filter: 'blur(4px)' },
                visible: { opacity: 1, y: 0, filter: 'blur(0px)' }
              }}
            >
              {char}
            </motion.span>
          ))}
        </motion.p>
        
        <motion.div 
          className="loader-tiny-hearts"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Heart size={16} fill="#FF4D8D" color="#FF4D8D" className="tiny-h1" />
          <Heart size={12} fill="#7B2FF7" color="#7B2FF7" className="tiny-h2" />
        </motion.div>

        <motion.div 
          className="loader-progress-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="progress-text">Finding your perfect match...</p>
          <div className="progress-bar-track">
            <div className="progress-bar-fill" style={{ width: `${progress}%` }}>
              <div className="progress-bar-thumb">
                <Heart size={10} fill="white" color="white" />
              </div>
            </div>
          </div>
          <p className="progress-percentage">{Math.round(progress)}%</p>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Loader
