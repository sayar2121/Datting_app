import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  Flower2, CheckCircle, ShieldCheck, Timer, Star, MapPin,
  Heart, Camera, Gift, ArrowRight, Sparkles, Package
} from 'lucide-react'
import logoBgImg from '../assets/logo_bg.png'
import roomDecorHomeImg from '../assets/room_decor_home.png'
import romanticImg from '../assets/romantic.png'
import birthdayImg from '../assets/birthday.png'
import proposalDecorImg from '../assets/proposal.png'
import anniversaryImg from '../assets/aniversarry.png'
import celebrationImg from '../assets/decaration.png'
import WelcomeModal from '../components/ui/WelcomeModal'
import './RoomDecor.css'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.4, 0, 0.2, 1] },
  }),
}

const decorThemes = [
  {
    title: 'Romantic Decoration',
    desc: 'Classic romantic setup with roses, candles, and balloons.',
    image: romanticImg,
    icon: '🌹',
    tags: ['Anniversary', 'Date Night', 'Surprise'],
  },
  {
    title: 'Birthday Decoration',
    desc: 'Make their birthday extra special with beautiful decorations.',
    image: birthdayImg,
    icon: '🎂',
    tags: ['Birthday', 'Surprise', 'Celebration'],
  },
  {
    title: 'Proposal Decoration',
    desc: 'Create the perfect moment to pop the question and make it unforgettable.',
    image: proposalDecorImg,
    icon: '💍',
    tags: ['Proposal', 'Engagement', 'Surprise'],
  },
  {
    title: 'Anniversary Decoration',
    desc: 'Celebrate your love and beautiful journey together.',
    image: anniversaryImg,
    icon: '💑',
    tags: ['Anniversary', 'Surprise', 'Love'],
  },
  {
    title: 'Celebration Decoration',
    desc: 'Ideal for special occasions and memorable celebrations.',
    image: celebrationImg,
    icon: '🎊',
    tags: ['Achievement', 'Surprise', 'Party'],
  },
]

const decorIncludes = [
  { icon: '🎈', title: 'Balloons', desc: 'Helium & normal balloons' },
  { icon: '🌹', title: 'Rose Petals', desc: 'Fresh rose petals arrangements' },
  { icon: '🕯️', title: 'Candles & Lights', desc: 'LED candles, fairy lights & more' },
  { icon: '💐', title: 'Flowers', desc: 'Beautiful flower bouquets' },
  { icon: '✨', title: 'Customized Setup', desc: 'Personalized themes as per your needs' },
  { icon: '💌', title: 'Greeting Notes', desc: 'Handwritten notes from the heart' },
  { icon: '🎁', title: 'Add-ons', desc: 'Cake, chocolates, soft toys & more' },
]

const howItWorks = [
  { step: 1, icon: '📅', title: 'Select Occasion', desc: 'Choose the occasion and date' },
  { step: 2, icon: '🎨', title: 'Choose Decoration', desc: 'Pick your favorite decoration theme' },
  { step: 3, icon: '📍', title: 'Share Room Details', desc: 'Provide hotel booking details' },
  { step: 4, icon: '💖', title: 'We Decorate', desc: 'Our team will decorate before your arrival' },
  { step: 5, icon: '📸', title: 'You Celebrate', desc: 'Walk in and create beautiful memories' },
]

const RoomDecor: React.FC = () => {
  const [isWelcomeOpen, setIsWelcomeOpen] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="room-decor-page">

      {/* ===== HERO ===== */}
      <section className="rd-hero container">
        <div className="rd-hero-content">
          <motion.div
            className="rd-badge"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Flower2 size={14} />
            Room Decoration
          </motion.div>

          <motion.h1
            className="rd-hero-title"
            custom={0} variants={fadeUp} initial="hidden" animate="visible"
          >
            Decorate Your Stay,<br />
            Create Unforgettable<br />
            <span className="rd-gradient-text">Memories</span>
            <span className="rd-heart-icons"> 💕💖</span>
          </motion.h1>

          <motion.p
            className="rd-hero-subtitle"
            custom={1} variants={fadeUp} initial="hidden" animate="visible"
          >
            Surprise your loved one with a beautifully decorated room.
            We take care of everything, you just enjoy the moment!
          </motion.p>

          <motion.div
            className="rd-hero-ctas"
            custom={2} variants={fadeUp} initial="hidden" animate="visible"
          >
            <button className="btn btn-primary rd-cta-btn" onClick={() => setIsWelcomeOpen(true)}>
              Book Decoration <ArrowRight size={16} />
            </button>
            <button className="btn rd-cta-outline">
              View Packages <Package size={16} />
            </button>
          </motion.div>

          <motion.div
            className="rd-trust-row"
            custom={3} variants={fadeUp} initial="hidden" animate="visible"
          >
            <div className="rd-trust-item">
              <CheckCircle className="rd-ti-icon" />
              <div>
                <strong>100% Satisfaction</strong>
                <span>Guaranteed</span>
              </div>
            </div>
            <div className="rd-trust-item">
              <Timer className="rd-ti-icon" />
              <div>
                <strong>On-time</strong>
                <span>Delivery</span>
              </div>
            </div>
            <div className="rd-trust-item">
              <Star className="rd-ti-icon" />
              <div>
                <strong>Premium Quality</strong>
                <span>Decor</span>
              </div>
            </div>
            <div className="rd-trust-item">
              <MapPin className="rd-ti-icon" />
              <div>
                <strong>Available in 150+</strong>
                <span>Cities</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="rd-hero-visual"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        >
          <div className="rd-hero-img-wrap">
            <img
              src={roomDecorHomeImg}
              alt="Beautifully Decorated Room"
              className="rd-hero-img"
            />
          </div>
          <div className="rd-floating-card">
            <div className="rd-fc-icon">💖</div>
            <div className="rd-fc-text">
              <strong>We Decorate, You Celebrate Love</strong>
              <span>From small surprises to grand celebrations – we make it perfect for every moment.</span>
            </div>
          </div>

          {/* Floating decorative hearts */}
          <div className="rd-float-el rd-el-1">🌹</div>
          <div className="rd-float-el rd-el-2">💕</div>
          <div className="rd-float-el rd-el-3">✨</div>
        </motion.div>
      </section>

      {/* ===== CHOOSE YOUR DECORATION ===== */}
      <section className="rd-themes container">
        <div className="rd-section-header">
          <h2>Choose Your Perfect Decoration <span>💞</span></h2>
          <p>Select a theme that matches your special occasion</p>
        </div>

        <div className="rd-themes-grid">
          {decorThemes.map((theme, i) => (
            <motion.div
              key={i}
              className="rd-theme-card"
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
            >
              <div className="rd-theme-img" style={{ backgroundImage: `url(${theme.image})` }}>
                <div className="rd-theme-icon">{theme.icon}</div>
              </div>
              <div className="rd-theme-content">
                <h3>{theme.title}</h3>
                <p>{theme.desc}</p>
                <div className="rd-perfect-for">
                  <span className="rd-pf-label">Perfect For</span>
                  <div className="rd-tags">
                    {theme.tags.map((tag, j) => (
                      <span key={j} className="rd-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== OUR DECORATION INCLUDES ===== */}
      <section className="rd-includes container">
        <div className="rd-section-header">
          <h2>Our Decoration Includes <span>💕</span></h2>
          <p>High quality decor items to make every moment picture perfect</p>
        </div>

        <div className="rd-includes-grid">
          {decorIncludes.map((item, i) => (
            <motion.div
              key={i}
              className="rd-include-item"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              whileHover={{ y: -4 }}
            >
              <div className="rd-include-icon">{item.icon}</div>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="rd-how container">
        <div className="rd-section-header">
          <h2>How It Works <span>💞</span></h2>
        </div>

        <div className="rd-how-grid">
          {howItWorks.map((step, i) => (
            <motion.div
              key={i}
              className="rd-how-step"
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {/* connector line */}
              {i < howItWorks.length - 1 && <div className="rd-connector" />}
              <div className="rd-step-bubble">
                <span className="rd-step-emoji">{step.icon}</span>
                <span className="rd-step-number">{step.step}</span>
              </div>
              <h4>{step.title}</h4>
              <p>{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="rd-cta container">
        <div className="rd-cta-box">
          <div className="rd-cta-body">
            <img src={logoBgImg} alt="HeartSync" className="rd-cta-logo" />
            <h2>Ready to Surprise Your Special One?</h2>
            <p>Book a beautiful room decoration and make your moments<br />more romantic and memorable.</p>
            <div className="rd-cta-buttons">
              <button className="btn rd-cta-main-btn" onClick={() => setIsWelcomeOpen(true)}>
                Book Now <ArrowRight size={18} />
              </button>
              <button className="btn rd-cta-secondary-btn">
                View Decoration Packages <Gift size={16} />
              </button>
            </div>
            <div className="rd-cta-badges">
              <span><ShieldCheck size={14} /> Safe & Secure Payments</span>
              <span><Heart size={14} /> Trusted by 10,000+ Couples</span>
              <span><Sparkles size={14} /> 24/7 Customer Support</span>
            </div>
          </div>

          {/* Decorative hearts */}
          <Heart className="rd-cta-dec rd-cdec-1" fill="rgba(255,255,255,0.15)" color="transparent" />
          <Heart className="rd-cta-dec rd-cdec-2" fill="rgba(255,255,255,0.1)" color="transparent" />
        </div>
      </section>

      <WelcomeModal isOpen={isWelcomeOpen} onClose={() => setIsWelcomeOpen(false)} />
    </div>
  )
}

export default RoomDecor
