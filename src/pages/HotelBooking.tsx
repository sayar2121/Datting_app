import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Hotel, CheckCircle, ShieldCheck, Headphones, 
  MapPin, Star, Heart, Camera, Gift, Car, Bot, ArrowRight,
  Coffee, Wine, Utensils
} from 'lucide-react'
import hotel1Img from '../assets/hotel1.png'
import luxuryHotelImg from '../assets/luxuryhotel.png'
import proposalImg from '../assets/proposal.jpg'
import logoBgImg from '../assets/logo_bg.png'
import WelcomeModal from '../components/ui/WelcomeModal'
import './HotelBooking.css'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.4, 0, 0.2, 1] },
  }),
}

const experiences = [
  {
    title: 'Romantic Suites',
    desc: 'Luxurious rooms with beautiful decor, city views & premium amenities.',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop',
    icon: '🌹',
    tags: ['First Date', 'Anniversary', 'Weekend Stay']
  },
  {
    title: 'Beach Resorts',
    desc: 'Beachfront resorts with private dinners, sunset views and relaxing experiences.',
    image: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=2062&auto=format&fit=crop',
    icon: '🌴',
    tags: ['Vacation', 'Proposal', 'Honeymoon']
  },
  {
    title: 'Mountain Retreats',
    desc: 'Cozy hill resorts surrounded by nature for peaceful and memorable moments.',
    image: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=1587&auto=format&fit=crop',
    icon: '⛰️',
    tags: ['Weekend Escape', 'Relaxation', 'Couple Trips']
  },
  {
    title: 'Luxury Hotels',
    desc: '5-Star premium stays with spa access, fine dining and VIP services.',
    image: luxuryHotelImg,
    icon: '👑',
    tags: ['Anniversaries', 'Luxury', 'Celebrations']
  },
  {
    title: 'Candlelight Dinner Hotels',
    desc: 'Romantic dining setups, rooftop dinners and private dining experiences.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop',
    icon: '🕯️',
    tags: ['Date Night', 'Proposal', 'Surprise']
  },
  {
    title: 'Proposal Destinations',
    desc: 'Exclusive locations and setups designed for the perfect marriage proposal.',
    image: proposalImg,
    icon: '💍',
    tags: ['Engagement', 'Proposal Planning']
  },
  {
    title: 'Celebration Hotels',
    desc: 'Special decoration packages for birthdays, anniversaries and other celebrations.',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop',
    icon: '🎂',
    tags: ['Balloons', 'Cake', 'Flower Decor', 'More']
  },
  {
    title: 'Private Pool Villas',
    desc: 'Luxury villas with private pools and complete privacy for couples.',
    image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=2070&auto=format&fit=crop',
    icon: '🏊',
    tags: ['Staycation', 'Honeymoon', 'Premium']
  }
]

const specialServices = [
  { icon: Hotel, title: 'Room Decoration', color: '#7B2FF7' },
  { icon: Gift, title: 'Cake Arrangement', color: '#FF4D8D' },
  { icon: Heart, title: 'Flower Decoration', color: '#FF7FB2' },
  { icon: Wine, title: 'Candlelight Dinner', color: '#C471ED' },
  { icon: Camera, title: 'Professional Photography', color: '#6366F1' },
  { icon: Car, title: 'Pickup & Drop', color: '#8B5CF6' },
  { icon: Gift, title: 'Surprise Gift Arrangement', color: '#A855F7' },
  { icon: Bot, title: 'AI Date Planner', color: '#3B82F6' },
]

const HotelBooking: React.FC = () => {
  const [isWelcomeOpen, setIsWelcomeOpen] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="hotel-booking-page">
      {/* HERO SECTION */}
      <section className="hb-hero container">
        <div className="hb-hero-content">
          <motion.div 
            className="hb-badge"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Hotel size={14} />
            Hotel Booking
          </motion.div>

          <motion.h1 
            className="hb-hero-title"
            custom={0} variants={fadeUp} initial="hidden" animate="visible"
          >
            Find the Perfect Stay<br />
            for Every <span className="gradient-text">Special Moment</span>
            <span className="floating-heart-icon">💖</span>
          </motion.h1>

          <motion.p 
            className="hb-hero-subtitle"
            custom={1} variants={fadeUp} initial="hidden" animate="visible"
          >
            Discover handpicked couple-friendly hotels, luxury resorts,
            romantic suites, and unforgettable getaway experiences.
          </motion.p>

          <motion.div 
            className="hb-hero-ctas"
            custom={2} variants={fadeUp} initial="hidden" animate="visible"
          >
            <button className="btn btn-primary hb-cta-primary">
              Explore Hotels <ArrowRight size={16} />
            </button>
            <button className="btn btn-secondary hb-cta-secondary">
              View Packages <Gift size={16} />
            </button>
          </motion.div>

          <motion.div 
            className="hb-trust-badges"
            custom={3} variants={fadeUp} initial="hidden" animate="visible"
          >
            <div className="trust-badge">
              <CheckCircle className="tb-icon" />
              <div>
                <strong>Couple Friendly</strong>
                <span>100% Verified</span>
              </div>
            </div>
            <div className="trust-badge">
              <Star className="tb-icon" />
              <div>
                <strong>Best Price</strong>
                <span>Guaranteed</span>
              </div>
            </div>
            <div className="trust-badge">
              <ShieldCheck className="tb-icon" />
              <div>
                <strong>Safe & Secure</strong>
                <span>Payments</span>
              </div>
            </div>
            <div className="trust-badge">
              <Headphones className="tb-icon" />
              <div>
                <strong>24x7</strong>
                <span>Support</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="hb-hero-visual"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        >
          <div className="hb-hero-img-wrap">
            <img src={hotel1Img} alt="Romantic Hotel Room" className="hb-hero-img" />
            <div className="hb-floating-card">
              <div className="hb-fc-icon">💖</div>
              <div className="hb-fc-text">
                <strong>Handpicked with Love</strong>
                <span>Only the best stays for you<br/>and your special one.</span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* BROWSE BY EXPERIENCE */}
      <section className="hb-experiences container">
        <div className="hb-section-header">
          <h2>Browse by Experience <span className="title-icon">💞</span></h2>
          <p>Choose the perfect type of stay for your special moments</p>
        </div>

        <div className="hb-exp-grid">
          {experiences.map((exp, i) => (
            <motion.div 
              key={i}
              className="hb-exp-card card"
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
            >
              <div className="hb-exp-img" style={{ backgroundImage: `url(${exp.image})` }}>
                <div className="hb-exp-icon-wrap">{exp.icon}</div>
              </div>
              <div className="hb-exp-content">
                <h3>{exp.title}</h3>
                <p>{exp.desc}</p>
                <div className="hb-exp-perfect-for">
                  <span>Perfect For</span>
                  <div className="hb-tags">
                    {exp.tags.map((tag, j) => (
                      <span key={j} className="hb-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* EXTRA SPECIAL SERVICES */}
      <section className="hb-special container">
        <div className="hb-section-header">
          <h2>Make Every Stay Extra Special <span className="title-icon">💕</span></h2>
        </div>
        
        <div className="hb-special-grid">
          {specialServices.map((service, i) => (
            <motion.div 
              key={i} 
              className="hb-special-item"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <div className="hb-special-icon" style={{ color: service.color }}>
                <service.icon size={32} />
              </div>
              <h4>{service.title}</h4>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="hb-cta container">
        <div className="hb-cta-box">
          <div className="hb-cta-content">
            <img src={logoBgImg} alt="HeartSync Logo" style={{ height: '40px', marginBottom: '16px', objectFit: 'contain' }} />
            <h2>Ready for Your Next Romantic Experience?</h2>
            <p>Create unforgettable memories with exclusive stays,<br/>romantic decor and personalized experiences.</p>
            <div className="hb-cta-footer">
              <span className="hb-cta-offer"><ShieldCheck size={16}/> Get best deals & offers only on HeartSync</span>
            </div>
          </div>
          <div className="hb-cta-action">
            <button className="btn btn-light hb-cta-btn" onClick={() => setIsWelcomeOpen(true)}>
              Book Your Stay Now <ArrowRight size={18} />
            </button>
          </div>
          
          {/* Decorative elements */}
          <Heart className="hb-cta-dec hb-dec-1" fill="#fff" />
          <Heart className="hb-cta-dec hb-dec-2" fill="#fff" />
        </div>
      </section>

      <WelcomeModal isOpen={isWelcomeOpen} onClose={() => setIsWelcomeOpen(false)} />
    </div>
  )
}

export default HotelBooking
