import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Heart, Sparkles, Hotel, Flower, Calendar, Bot, ArrowRight,
  Star, Shield, ShieldCheck, Lock, Play, ChevronRight, Crown, Zap, MessageCircle,
  MapPin
} from 'lucide-react'
import girl1Img from '../assets/girl1.png'
import girl2Img from '../assets/girl2.png'
import manImg from '../assets/man image.png'
import logoImg from '../assets/logo.png'
import logoBgImg from '../assets/logo_bg.png'
import WelcomeModal from '../components/ui/WelcomeModal'
import './Home.css'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: [0.4, 0, 0.2, 1] },
  }),
}

const videoSequence = {
  hidden: { opacity: 0, x: -50, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { delay: i * 0.8, duration: 0.8, type: "spring", bounce: 0.4 },
  }),
}

const swipeProfiles = [
  {
    name: 'Ananya', age: 26, job: 'Marketing Manager', distance: '2 km away',
    tags: ['Travel', 'Coffee', 'Music'],
    image: girl1Img
  },
  {
    name: 'Rahul', age: 28, job: 'Software Engineer', distance: '5 km away',
    tags: ['Gym', 'Startups', 'Dogs'],
    image: manImg
  },
  {
    name: 'Priya', age: 24, job: 'UI Designer', distance: '1 km away',
    tags: ['Art', 'Sushi', 'Photography'],
    image: girl2Img
  }
]

const features = [
  {
    icon: Heart,
    emoji: '❤️',
    title: 'Smart Matching',
    desc: 'AI-powered compatibility scores, swipe right, super likes, and real-time matching.',
    color: 'var(--accent-pink)',
    bg: 'rgba(255, 77, 141, 0.08)',
  },
  {
    icon: MessageCircle,
    emoji: '💜',
    title: 'Instant Connect',
    desc: 'Chat, voice notes, and video calls the moment you match.',
    color: 'var(--primary)',
    bg: 'rgba(123, 47, 247, 0.08)',
  },
  {
    icon: Hotel,
    emoji: '🏨',
    title: 'Hotel Booking',
    desc: 'Couple-friendly hotels, date night packages and exclusive discounts.',
    color: '#10B981',
    bg: 'rgba(16, 185, 129, 0.08)',
  },
  {
    icon: Flower,
    emoji: '🌹',
    title: 'Room Decoration',
    desc: 'Romantic setups, anniversary decor, proposal arrangements & birthday surprises.',
    color: '#EC4899',
    bg: 'rgba(236, 72, 153, 0.08)',
  },
  {
    icon: Calendar,
    emoji: '🎉',
    title: 'Event Planning',
    desc: 'Candlelight dinners, beach dates, rooftop events & surprise experiences.',
    color: '#F59E0B',
    bg: 'rgba(245, 158, 11, 0.08)',
  },
  {
    icon: Bot,
    emoji: '🤖',
    title: 'AI Concierge',
    desc: 'Smart reminders for calls, messages, anniversaries & gift suggestions.',
    color: 'var(--primary)',
    bg: 'rgba(123, 47, 247, 0.08)',
  },
]

const plans = [
  {
    name: 'Free',
    price: '₹0',
    period: '/month',
    features: ['10 Swipes/day', 'Basic Matching', 'Chat System', '5 Profile Views'],
    cta: 'Get Started',
    popular: false,
    gradient: '',
  },
  {
    name: 'Premium',
    price: '₹499',
    period: '/month',
    features: ['Unlimited Swipes', 'See Who Liked You', 'AI Assistant', 'Voice & Video Calls', 'Super Likes'],
    cta: 'Go Premium',
    popular: true,
    gradient: 'var(--gradient-primary)',
  },
  {
    name: 'Elite',
    price: '₹999',
    period: '/month',
    features: ['Everything in Premium', 'Hotel Discounts', 'Event Booking', 'Room Decoration', 'Priority Matching', 'Concierge Service'],
    cta: 'Go Elite',
    popular: false,
    gradient: 'linear-gradient(135deg, #1E1E2F, #2D1B69)',
  },
]

const experiences = [
  {
    title: 'Hotel Booking',
    desc: 'Find the best stays for your special moments',
    btn: 'Book Now',
    icon: '🏩',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtkJYH_9KItFEqMq7XDCBRS6n7my-p0Dn4rA&s'
  },
  {
    title: 'Room Decor',
    desc: 'Beautiful decorations for birthdays, anniversaries & more',
    btn: 'Explore Decor',
    icon: '💝',
    image: 'https://plus.unsplash.com/premium_photo-1670740581237-f0e420427410?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    title: 'Event Arrangement',
    desc: 'Candle light dinners, surprise dates & unforgettable events',
    btn: 'Plan Event',
    icon: '🎉',
    image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=2070&auto=format&fit=crop'
  },
  {
    title: 'Special Offers',
    desc: 'Enjoy exclusive discounts on hotels, events & more',
    btn: 'View Offers',
    icon: '🎁',
    image: 'https://images.unsplash.com/photo-1513201099705-a9746e1e201f?q=80&w=1974&auto=format&fit=crop'
  }
]

const Home: React.FC = () => {
  const navigate = useNavigate()
  const [currentProfileIndex, setCurrentProfileIndex] = useState(0)
  const [isWelcomeOpen, setIsWelcomeOpen] = useState(false)

  // Automatically open the Welcome Modal after the initial loader finishes
  useEffect(() => {
    const welcomeTimer = setTimeout(() => {
      setIsWelcomeOpen(true)
    }, 3000)
    return () => clearTimeout(welcomeTimer)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentProfileIndex((prev) => (prev + 1) % swipeProfiles.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="home-page container" style={{ paddingTop: '100px' }}>

      {/* ===== HERO ===== */}
      <section id="home" className="hero-section">
        <div className="hero-content">
          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Sparkles size={14} />
            All-in-One Relationship & Experience Platform
          </motion.div>

          <motion.h1
            className="hero-title"
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            Find Love.<br />
            Create Memories.<br />
            <span className="gradient-text">Experience More.</span>
          </motion.h1>

          <motion.p
            className="hero-subtitle"
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            Swipe, match and connect with meaningful people.
            Plan unforgettable dates, book romantic stays,
            arrange special events and get reminders from your
            AI Relationship Assistant.
          </motion.p>

          <motion.div
            className="hero-ctas"
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            <button className="btn btn-primary hero-cta-primary">
              Start Matching
              <Sparkles size={16} />
            </button>
            <button className="btn btn-secondary hero-cta-secondary">
              Explore Features
              <Play size={14} fill="currentColor" />
            </button>
          </motion.div>

          <motion.div
            className="hero-social-proof"
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            <div className="avatar-stack">
              <img src="https://i.pravatar.cc/100?img=1" className="avatar-stack-item" alt="User" />
              <img src="https://i.pravatar.cc/100?img=2" className="avatar-stack-item" alt="User" />
              <img src="https://i.pravatar.cc/100?img=3" className="avatar-stack-item" alt="User" />
              <img src="https://i.pravatar.cc/100?img=4" className="avatar-stack-item" alt="User" />
              <div className="avatar-stack-item text-avatar">50K+</div>
            </div>
            <div className="social-text">
              <strong>50,000+ Happy Couples</strong><br />
              <span>and Growing 💜</span>
            </div>
          </motion.div>
        </div>

        {/* Hero Visual */}
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* Swipe Card Stack */}
          <div className="phone-mockup-container">
            <div className="phone-card phone-card-back-2"></div>
            <div className="phone-card phone-card-back-1"></div>
            <AnimatePresence>
              <motion.div
                key={currentProfileIndex}
                className="phone-card phone-card-front"
                initial={{ scale: 0.9, y: 20, opacity: 0, zIndex: 1 }}
                animate={{ scale: 1, y: 0, opacity: 1, x: 0, rotate: 0, zIndex: 2 }}
                exit={{ x: 350, y: 50, opacity: 0, rotate: 25, zIndex: 10 }}
                transition={{ type: 'spring', stiffness: 250, damping: 25 }}
              >
                <div className="phone-img-container">
                  <img src={swipeProfiles[currentProfileIndex].image} alt={swipeProfiles[currentProfileIndex].name} className="phone-profile-img" />
                  <div className="phone-overlay">
                    <div className="phone-profile-info">
                      <h2>
                        <span className="profile-name">{swipeProfiles[currentProfileIndex].name}</span>
                        <span className="profile-age">, {swipeProfiles[currentProfileIndex].age}</span>
                        <span className="verified-badge">✔</span>
                      </h2>
                      <p>{swipeProfiles[currentProfileIndex].job}</p>
                      <p className="location-text"><MapPin size={12} /> {swipeProfiles[currentProfileIndex].distance}</p>
                    </div>
                    <div className="swipe-tags">
                      {swipeProfiles[currentProfileIndex].tags.map(tag => (
                        <span key={tag} className="tag-dark">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="phone-actions">
                  <button className="swipe-btn-sm swipe-rewind">↺</button>
                  <button className="swipe-btn-md swipe-nope">✕</button>
                  <button className="swipe-btn-lg swipe-like">
                    <Heart fill="white" size={24} />
                  </button>
                  <button className="swipe-btn-md swipe-super">⭐</button>
                </div>
              </motion.div>
            </AnimatePresence>
            
            <div className="floating-heart-1">💖</div>
            <div className="floating-heart-2">💕</div>
            <div className="floating-icon-3">✨</div>
            <div className="floating-icon-4">💌</div>
            <div className="floating-icon-5">🌹</div>
            <div className="floating-icon-6">💘</div>
          </div>
        </motion.div>

        {/* AI Widget Right Column (Removed) */}
      </section>

      {/* ===== FEATURES STRIP ===== */}
      <section className="features-strip-section">
        <div className="features-strip card">
          <div className="strip-item">
            <div className="strip-icon-wrap" style={{ background: 'linear-gradient(135deg, #FF4D8D, #FF7FB2)' }}>
              <Heart size={24} fill="white" color="white" />
            </div>
            <h4>Swipe & Match</h4>
            <p>Find your perfect match</p>
          </div>
          <div className="strip-item">
            <div className="strip-icon-wrap" style={{ background: 'linear-gradient(135deg, #8B5CF6, #C471ED)' }}>
              <Hotel size={24} color="white" />
            </div>
            <h4>Hotel Booking</h4>
            <p>Book couple-friendly hotels at best prices</p>
          </div>
          <div className="strip-item">
            <div className="strip-icon-wrap" style={{ background: 'linear-gradient(135deg, #6366F1, #8B5CF6)' }}>
              <Flower size={24} color="white" />
            </div>
            <h4>Room Decor</h4>
            <p>Romantic room setups for special moments</p>
          </div>
          <div className="strip-item">
            <div className="strip-icon-wrap" style={{ background: 'linear-gradient(135deg, #A855F7, #D946EF)' }}>
              <Calendar size={24} color="white" />
            </div>
            <h4>Event Arrangement</h4>
            <p>Plan unforgettable events & experiences</p>
          </div>
          <div className="strip-item">
            <div className="strip-icon-wrap" style={{ background: 'linear-gradient(135deg, #3B82F6, #8B5CF6)' }}>
              <Bot size={24} color="white" />
            </div>
            <h4>AI Assistant</h4>
            <p>Smart reminders for calls, messages & important dates</p>
          </div>
          <div className="strip-item">
            <div className="strip-icon-wrap" style={{ background: 'linear-gradient(135deg, #EC4899, #F43F5E)' }}>
              <Zap size={24} fill="white" color="white" />
            </div>
            <h4>Exclusive Offers</h4>
            <p>Get exclusive discounts on bookings and more</p>
          </div>
        </div>
      </section>

      {/* ===== FEATURES ===== */}
      <section id="features" className="features-section" style={{ paddingTop: '40px', paddingBottom: '60px' }}>
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
          style={{ marginBottom: '60px' }}
        >
          <h2 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '16px', letterSpacing: '-0.02em' }}>
            Why <span style={{ color: '#FF4D8D', display: 'inline-block' }}>Heart</span><span style={{ color: '#7B2FF7', display: 'inline-block' }}>Sync</span>?
          </h2>
          <p className="subtitle" style={{ fontSize: '1.15rem', color: 'var(--text-light)', maxWidth: '650px', margin: '0 auto', lineHeight: 1.6 }}>
            Everything You Need for Every Step of Your Journey 💜
          </p>
        </motion.div>

        <div className="features-grid">
          {features.map((f, i) => (
            <motion.div
              key={i}
              className="feature-card card card-glow"
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
            >
              <div className="feature-icon-wrap" style={{ background: f.bg }}>
                <span className="feature-emoji">{f.emoji}</span>
              </div>
              <h3 className="feature-title">{f.title}</h3>
              <p className="feature-desc">{f.desc}</p>
              <button className="feature-link" style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}>
                Explore <ChevronRight size={14} />
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section id="how-it-works" className="how-section" style={{ paddingTop: '40px', paddingBottom: '40px', justifyContent: 'center' }}>
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
          style={{ marginBottom: '60px' }}
        >
          <h2 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '16px', letterSpacing: '-0.02em' }}>
            <span style={{ color: '#FF4D8D', display: 'inline-block' }}>How</span>
            <span style={{ color: '#7B2FF7', display: 'inline-block' }}> It Works</span>
          </h2>
          <p className="subtitle" style={{ fontSize: '1.15rem', color: 'var(--text-light)', maxWidth: '650px', margin: '0 auto', lineHeight: 1.6 }}>
            It's simple to find love and create beautiful memories
          </p>
        </motion.div>

        <div className="how-steps-container">
          <div className="how-dashed-line"></div>
          <div className="how-steps-grid">
            {[
              {
                id: 1,
                title: 'Create Profile',
                desc: 'Sign up, add your photos and tell us about yourself',
                icon: (
                  <div className="step-illustration">
                    <div className="phone-mock-1">
                      <div className="avatar-mock avatar-1"></div>
                      <div className="line-mock"></div>
                      <div className="line-mock short"></div>
                    </div>
                  </div>
                )
              },
              {
                id: 2,
                title: 'Swipe & Like',
                desc: 'Discover amazing people and like the ones you love',
                icon: (
                  <div className="step-illustration">
                    <div className="phone-mock-2">
                      <div className="heart-mock">❤️</div>
                    </div>
                    <div className="phone-mock-behind"></div>
                  </div>
                )
              },
              {
                id: 3,
                title: "It's a Match",
                desc: "When both of you like each other, it's a match!",
                icon: (
                  <div className="step-illustration match-illustration">
                    <div className="avatar-mock match-av-1"></div>
                    <div className="heart-match">❤️</div>
                    <div className="avatar-mock match-av-2"></div>
                  </div>
                )
              },
              {
                id: 4,
                title: 'Chat & Plan',
                desc: 'Chat, get to know each other and plan your perfect date',
                icon: (
                  <div className="step-illustration">
                    <div className="chat-bubble-1">💬</div>
                    <div className="chat-bubble-2">💌</div>
                  </div>
                )
              }
            ].map((s, i) => (
              <motion.div
                key={i}
                className="how-step-card"
                custom={i}
                variants={videoSequence}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="how-illustration-box">
                  <div className="how-badge">{s.id}</div>
                  {s.icon}
                </div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PREMIUM ===== */}
      <section id="premium" className="pricing-section" style={{ paddingTop: '60px', paddingBottom: '40px' }}>
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
          style={{ marginBottom: '60px' }}
        >
          <h2 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '16px', letterSpacing: '-0.02em' }}>
            <span style={{ color: '#FF4D8D', display: 'inline-block' }}>Pricing</span>
            <span style={{ color: '#7B2FF7', display: 'inline-block' }}> Plans</span>
          </h2>
          <p className="subtitle" style={{ fontSize: '1.15rem', color: 'var(--text-light)', maxWidth: '650px', margin: '0 auto', lineHeight: 1.6 }}>
            Choose Your Love Journey. Start free. Upgrade when you're ready for more.
          </p>
        </motion.div>

        <div className="pricing-grid">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              className={`pricing-card ${plan.popular ? 'pricing-popular' : ''}`}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              style={plan.gradient ? { background: plan.gradient } : {}}
            >
              {plan.popular && (
                <div className="popular-badge">
                  <Crown size={12} />
                  Most Popular
                </div>
              )}
              <h3 className="plan-name" style={plan.gradient ? { color: 'white' } : {}}>{plan.name}</h3>
              <div className="plan-price">
                <span className="plan-amount" style={plan.gradient ? { color: 'white' } : {}}>{plan.price}</span>
                <span className="plan-period" style={plan.gradient ? { color: 'rgba(255,255,255,0.7)' } : {}}>{plan.period}</span>
              </div>
              <ul className="plan-features">
                {plan.features.map((f, j) => (
                  <li key={j} style={plan.gradient ? { color: 'rgba(255,255,255,0.9)' } : {}}>
                    <Shield size={14} style={plan.gradient ? { color: 'rgba(255,255,255,0.8)' } : { color: 'var(--primary)' }} />
                    {f}
                  </li>
                ))}
              </ul>
              <button
                className={`btn pricing-cta ${plan.popular ? 'pricing-cta-dark' : 'btn-primary'}`}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </section>
      
      {/* ===== EXPERIENCES ===== */}
      <section id="experiences" className="experiences-section" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
          style={{ marginBottom: '60px' }}
        >
          <h2 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '16px', letterSpacing: '-0.02em' }}>
            Plan Your <span style={{ color: '#FF4D8D', display: 'inline-block' }}>Perfect</span> <span style={{ color: '#7B2FF7', display: 'inline-block' }}>Experience</span>
          </h2>
          <p className="subtitle" style={{ fontSize: '1.15rem', color: 'var(--text-light)', maxWidth: '650px', margin: '0 auto', lineHeight: 1.6 }}>
            Make every moment special with our premium services
          </p>
        </motion.div>
        
        <div className="experiences-grid">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              className="experience-card"
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="exp-image" style={{ backgroundImage: `url(${exp.image})` }}></div>
              <div className="exp-icon-wrap">
                <span className="exp-icon">{exp.icon}</span>
              </div>
              <div className="exp-content">
                <h3>{exp.title}</h3>
                <p>{exp.desc}</p>
                <button 
                  className="btn btn-primary" 
                  style={{ width: '100%', borderRadius: 'var(--radius-full)', padding: '12px' }}
                  onClick={() => {
                    if (exp.title === 'Hotel Booking') navigate('/hotel-booking')
                    else if (exp.title === 'Room Decor') navigate('/room-decor')
                    else if (exp.title === 'Event Arrangement') navigate('/events')
                    else if (exp.title === 'Special Offers') navigate('/special-offers')
                  }}
                >
                  {exp.btn}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      
      {/* ===== FINAL CTA BANNER ===== */}
      <section className="final-cta-section" style={{ padding: '80px 24px', maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
        <div className="final-cta-container">
          <div className="cta-logo-left">
            <img src={logoBgImg} alt="HeartSync Logo" className="cta-logo-img" />
          </div>

          <div className="cta-floating-hearts">
            <Heart className="cta-heart cta-heart-1" fill="#FF4D8D" color="#FF4D8D" />
            <Heart className="cta-heart cta-heart-2" fill="#7B2FF7" color="#7B2FF7" />
            <Heart className="cta-heart cta-heart-3" fill="#C471ED" color="#C471ED" />
            <Sparkles className="cta-sparkle cta-sparkle-1" color="#FF7FB2" />
            <Sparkles className="cta-sparkle cta-sparkle-2" color="#FF7FB2" />
          </div>

          <div className="final-cta-text">
            <h2>Ready to Find Your Perfect Match?</h2>
            <p>Join thousands of singles looking for meaningful connections<br/>and unforgettable experiences.</p>
          </div>

          <div className="final-cta-action">
            <button className="btn final-cta-btn" onClick={() => setIsWelcomeOpen(true)}>
              Join Now - It's Free!
              <Heart size={18} />
            </button>
            <div className="final-cta-badges">
              <span><ShieldCheck size={14} /> 100% Secure</span>
              <span><Lock size={14} /> Privacy Protected</span>
            </div>
          </div>
        </div>
      </section>
      
      <WelcomeModal isOpen={isWelcomeOpen} onClose={() => setIsWelcomeOpen(false)} />
    </div>
  )
}

export default Home
