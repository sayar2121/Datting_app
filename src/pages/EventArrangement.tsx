import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  CalendarCheck, CheckCircle, Users, Star, Timer, Heart,
  ShieldCheck, Gift, ArrowRight, Sparkles, Package,
  Camera, Music, Flower2, Utensils
} from 'lucide-react'
import WelcomeModal from '../components/ui/WelcomeModal'
import logoBgImg from '../assets/logo_bg.png'
import birthdayImg from '../assets/birthday.png'
import candelImg from '../assets/candel.png'
import './EventArrangement.css'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.4, 0, 0.2, 1] },
  }),
}

const eventTypes = [
  {
    title: 'Proposal Events',
    desc: 'Create the perfect moment to pop the question and start your forever story.',
    image: 'https://images.unsplash.com/photo-1509927083803-4bd519298ac4?q=80&w=2070&auto=format&fit=crop',
    icon: '💍',
    tags: ['Proposal', 'Engagement', 'Surprise'],
  },
  {
    title: 'Anniversary Celebrations',
    desc: 'Celebrate your love and beautiful journey together with a magical setup.',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop',
    icon: '❤️',
    tags: ['Anniversary', 'Milestone', 'Romantic'],
  },
  {
    title: 'Birthday Surprises',
    desc: 'Make their birthday extra special with customized themes and beautiful decorations.',
    image: birthdayImg,
    icon: '🎂',
    tags: ['Birthday', 'Surprise', 'Party'],
  },
  {
    title: 'Candlelight Dinners',
    desc: 'Enjoy a romantic dining experience under the stars with exquisite arrangements.',
    image: candelImg,
    icon: '🕯️',
    tags: ['Date Night', 'Romantic', 'Special'],
  },
  {
    title: 'Celebration Events',
    desc: 'Celebrate achievements and special occasions with style and happiness.',
    image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=2070&auto=format&fit=crop',
    icon: '🎊',
    tags: ['Achievement', 'Success', 'Party'],
  },
]

const eventIncludes = [
  { icon: '🎨', title: 'Themed Decoration', desc: 'Customized themes as per your choice' },
  { icon: '🌸', title: 'Flowers & Balloons', desc: 'Fresh flowers and premium balloons' },
  { icon: '✨', title: 'Lights & Candles', desc: 'Fairy lights, LED lights and candles' },
  { icon: '💌', title: 'Personalized Setup', desc: 'Custom messages, name boards & more' },
  { icon: '📸', title: 'Photography', desc: 'Capture every beautiful moment' },
  { icon: '🎂', title: 'Cake Arrangement', desc: 'Delicious cakes as per your choice' },
  { icon: '🎵', title: 'Music & More', desc: 'Ambient music and extra add-ons' },
]

const howItWorks = [
  { step: 1, icon: '📅', title: 'Choose Occasion', desc: 'Select the type of event you want to plan' },
  { step: 2, icon: '📝', title: 'Share Your Preferences', desc: 'Tell us your ideas, themes and special requests' },
  { step: 3, icon: '📋', title: 'Get Customized Plan', desc: 'We create a personalized plan and quote for you' },
  { step: 4, icon: '✅', title: 'Confirm & Relax', desc: 'Confirm your booking and leave the rest to us' },
  { step: 5, icon: '💖', title: 'Enjoy the Moment', desc: 'Arrive and enjoy your beautifully planned event' },
]

const EventArrangement: React.FC = () => {
  const [isWelcomeOpen, setIsWelcomeOpen] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="event-page">

      {/* ===== HERO ===== */}
      <section className="ea-hero container">
        <div className="ea-hero-content">
          <motion.div
            className="ea-badge"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <CalendarCheck size={14} />
            Event Arrangement
          </motion.div>

          <motion.h1
            className="ea-hero-title"
            custom={0} variants={fadeUp} initial="hidden" animate="visible"
          >
            We Plan. You Celebrate.<br />
            <span className="ea-gradient-text">Unforgettable Moments</span>
            <span className="ea-heart-icons"> 💕</span>
          </motion.h1>

          <motion.p
            className="ea-hero-subtitle"
            custom={1} variants={fadeUp} initial="hidden" animate="visible"
          >
            From intimate surprises to grand celebrations, we handle
            every detail so you can focus on your special moments.
          </motion.p>

          <motion.div
            className="ea-hero-ctas"
            custom={2} variants={fadeUp} initial="hidden" animate="visible"
          >
            <button className="btn btn-primary ea-cta-btn" onClick={() => setIsWelcomeOpen(true)}>
              Plan Your Event <ArrowRight size={16} />
            </button>
            <button className="btn ea-cta-outline">
              View Packages <Package size={16} />
            </button>
          </motion.div>

          <motion.div
            className="ea-trust-row"
            custom={3} variants={fadeUp} initial="hidden" animate="visible"
          >
            <div className="ea-trust-item">
              <CheckCircle className="ea-ti-icon" />
              <div>
                <strong>100%</strong>
                <span>Customized</span>
              </div>
            </div>
            <div className="ea-trust-item">
              <Users className="ea-ti-icon" />
              <div>
                <strong>Expert</strong>
                <span>Planners</span>
              </div>
            </div>
            <div className="ea-trust-item">
              <Star className="ea-ti-icon" />
              <div>
                <strong>Premium</strong>
                <span>Setups</span>
              </div>
            </div>
            <div className="ea-trust-item">
              <Timer className="ea-ti-icon" />
              <div>
                <strong>On-time</strong>
                <span>Delivery</span>
              </div>
            </div>
            <div className="ea-trust-item">
              <Heart className="ea-ti-icon" />
              <div>
                <strong>1500+</strong>
                <span>Happy Couples</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="ea-hero-visual"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        >
          <div className="ea-hero-img-wrap">
            <img
              src="https://images.unsplash.com/photo-1510076857177-7470076d4098?q=80&w=2072&auto=format&fit=crop"
              alt="Event Arrangement"
              className="ea-hero-img"
            />
          </div>
          <div className="ea-floating-card">
            <div className="ea-fc-icon">💖</div>
            <div className="ea-fc-text">
              <strong>Every Detail, Perfectly Planned</strong>
              <span>Share your idea and we'll create magic for you.</span>
            </div>
          </div>

          <div className="ea-float-el ea-el-1">🌹</div>
          <div className="ea-float-el ea-el-2">💕</div>
          <div className="ea-float-el ea-el-3">✨</div>
        </motion.div>
      </section>

      {/* ===== EXPLORE EVENT TYPES ===== */}
      <section className="ea-types container">
        <div className="ea-section-header">
          <h2>Explore Our Event Types <span>💞</span></h2>
          <p>Choose the perfect event for your special occasion</p>
        </div>

        <div className="ea-types-grid">
          {eventTypes.map((evt, i) => (
            <motion.div
              key={i}
              className="ea-type-card"
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
            >
              <div className="ea-type-img" style={{ backgroundImage: `url(${evt.image})` }}>
                <div className="ea-type-icon">{evt.icon}</div>
              </div>
              <div className="ea-type-content">
                <h3>{evt.title}</h3>
                <p>{evt.desc}</p>
                <div className="ea-perfect-for">
                  <span className="ea-pf-label">Perfect For</span>
                  <div className="ea-tags">
                    {evt.tags.map((tag, j) => (
                      <span key={j} className="ea-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== WHAT'S INCLUDED ===== */}
      <section className="ea-includes container">
        <div className="ea-section-header">
          <h2>What's Included in Our Events <span>💕</span></h2>
          <p>We take care of everything to make your event flawless</p>
        </div>

        <div className="ea-includes-grid">
          {eventIncludes.map((item, i) => (
            <motion.div
              key={i}
              className="ea-include-item"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              whileHover={{ y: -4 }}
            >
              <div className="ea-include-icon">{item.icon}</div>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="ea-how container">
        <div className="ea-section-header">
          <h2>How It Works <span>💞</span></h2>
          <p>Simple steps to plan your perfect event</p>
        </div>

        <div className="ea-how-grid">
          {howItWorks.map((step, i) => (
            <motion.div
              key={i}
              className="ea-how-step"
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {i < howItWorks.length - 1 && <div className="ea-connector" />}
              <div className="ea-step-bubble">
                <span className="ea-step-emoji">{step.icon}</span>
                <span className="ea-step-number">{step.step}</span>
              </div>
              <h4>{step.title}</h4>
              <p>{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="ea-cta container">
        <div className="ea-cta-box">
          {/* Left couple image */}
          <div className="ea-cta-img-wrap">
            <div className="ea-cta-img-glow" />
            <img src={logoBgImg} alt="HeartSync" className="ea-cta-couple-img" style={{ objectFit: 'contain' }} />
          </div>

          <div className="ea-cta-body">
            <h2>Let's Create Your Unforgettable Moment <span>💞</span></h2>
            <p>Share your special occasion with us and we'll turn it<br />into a beautiful memory you'll cherish forever.</p>
            <div className="ea-cta-buttons">
              <button className="btn ea-cta-main-btn" onClick={() => setIsWelcomeOpen(true)}>
                Plan Your Event Now <ArrowRight size={18} />
              </button>
              <button className="btn ea-cta-secondary-btn">
                View Event Packages <Gift size={16} />
              </button>
            </div>
            <div className="ea-cta-badges">
              <span><ShieldCheck size={14} /> Safe & Secure Payments</span>
              <span><Heart size={14} /> Trusted by 10,000+ Couples</span>
              <span><Sparkles size={14} /> 24/7 Customer Support</span>
            </div>
          </div>

          <Heart className="ea-cta-dec ea-cdec-1" fill="rgba(255,255,255,0.12)" color="transparent" />
          <Heart className="ea-cta-dec ea-cdec-2" fill="rgba(255,255,255,0.08)" color="transparent" />
        </div>
      </section>

      <WelcomeModal isOpen={isWelcomeOpen} onClose={() => setIsWelcomeOpen(false)} />
    </div>
  )
}

export default EventArrangement
