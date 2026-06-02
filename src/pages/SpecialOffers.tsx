import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  Tag, CheckCircle, Star, Clock, Heart,
  ShieldCheck, Gift, ArrowRight, Sparkles, Package,
  Percent, Zap, Crown, Flame
} from 'lucide-react'
import WelcomeModal from '../components/ui/WelcomeModal'
import logoBgImg from '../assets/logo_bg.png'
import offerMainImg from '../assets/offer_main.png'
import romanticOfferImg from '../assets/romantic_offer.png'
import roomDecorHomeImg from '../assets/room_decor_home.png'
import dreamRoomImg from '../assets/dream_room.png'
import birthdayImg from '../assets/birthday.png'
import './SpecialOffers.css'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.4, 0, 0.2, 1] },
  }),
}

const deals = [
  {
    badge: '🔥 HOT DEAL',
    title: 'Romantic Hotel Stay',
    desc: 'Luxury 2-night stay with breakfast, rose decoration, and candlelight dinner for couples.',
    image: romanticOfferImg,
    originalPrice: '₹8,999',
    offerPrice: '₹4,999',
    discount: '44% OFF',
    validTill: 'Valid till 30 June',
    tags: ['Hotel', 'Couples', 'Dinner'],
    color: '#FF4D8D',
  },
  {
    badge: '⭐ BESTSELLER',
    title: 'Room Decor Package',
    desc: 'Complete romantic room decoration with balloons, roses, fairy lights and personalized setup.',
    image: roomDecorHomeImg,
    originalPrice: '₹3,499',
    offerPrice: '₹1,999',
    discount: '43% OFF',
    validTill: 'Valid till 15 July',
    tags: ['Room Decor', 'Surprise', 'Romantic'],
    color: '#7B2FF7',
  },
  {
    badge: '💍 PROPOSAL',
    title: 'Dream Proposal Setup',
    desc: 'Perfect proposal arrangement with flowers, candles, photographer and a personalized message board.',
    image: dreamRoomImg,
    originalPrice: '₹6,499',
    offerPrice: '₹3,999',
    discount: '38% OFF',
    validTill: 'Valid till 31 July',
    tags: ['Proposal', 'Photography', 'Special'],
    color: '#C471ED',
  },
  {
    badge: '🎂 BIRTHDAY',
    title: 'Birthday Surprise Special',
    desc: 'Surprise birthday decoration with custom theme, cake arrangement and photography package.',
    image: birthdayImg,
    originalPrice: '₹4,999',
    offerPrice: '₹2,799',
    discount: '44% OFF',
    validTill: 'Valid till 20 July',
    tags: ['Birthday', 'Cake', 'Surprise'],
    color: '#FF7F50',
  },
]

const whyChoose = [
  { icon: '💰', title: 'Best Price Guarantee', desc: 'We match the lowest prices, always' },
  { icon: '✅', title: 'Verified Partners', desc: 'Only handpicked, trusted service providers' },
  { icon: '🔒', title: 'Secure Payments', desc: '100% safe & encrypted transactions' },
  { icon: '📞', title: '24/7 Support', desc: 'Round-the-clock customer assistance' },
  { icon: '🎁', title: 'Exclusive Deals', desc: 'Members-only offers and flash sales' },
  { icon: '⚡', title: 'Instant Confirmation', desc: 'Book and get confirmed in minutes' },
]

const howToRedeem = [
  { step: 1, icon: '🔍', title: 'Browse Offers', desc: 'Explore our exclusive deals and packages' },
  { step: 2, icon: '✅', title: 'Choose a Deal', desc: 'Select the perfect offer for your occasion' },
  { step: 3, icon: '📝', title: 'Fill Details', desc: 'Provide your event preferences and dates' },
  { step: 4, icon: '💳', title: 'Make Payment', desc: 'Pay securely using any payment method' },
  { step: 5, icon: '🎉', title: 'Enjoy the Moment', desc: 'Sit back and let us create magic for you' },
]

const SpecialOffers: React.FC = () => {
  const [isWelcomeOpen, setIsWelcomeOpen] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="special-offers-page">

      {/* ===== HERO BANNER ===== */}
      <section className="so-hero container">
        <div
          className="so-hero-banner"
          style={{ backgroundImage: `url(${offerMainImg})` }}
        >
          {/* Left Text — sits over the naturally dark purple left area */}
          <div className="so-hero-left">
            <motion.div
              className="so-badge"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Tag size={13} />
              Special Offers
            </motion.div>

            <motion.h1
              className="so-hero-title"
              custom={0} variants={fadeUp} initial="hidden" animate="visible"
            >
              Love More,{' '}
              <span className="so-gradient-text">Spend Less</span>
              <span className="so-heart-icon"> 💕</span>
            </motion.h1>

            <motion.p
              className="so-hero-subtitle"
              custom={1} variants={fadeUp} initial="hidden" animate="visible"
            >
              Exclusive deals, amazing discounts and romantic<br />
              experiences – only for HeartSync couples.
            </motion.p>

            <motion.div
              custom={2} variants={fadeUp} initial="hidden" animate="visible"
            >
              <button className="btn so-hero-cta" onClick={() => setIsWelcomeOpen(true)}>
                Explore All Offers <ArrowRight size={16} />
              </button>
            </motion.div>

            <motion.div
              className="so-hero-badges"
              custom={3} variants={fadeUp} initial="hidden" animate="visible"
            >
              <div className="so-hb-item"><CheckCircle size={16} /><span>Best Price<br />Guaranteed</span></div>
              <div className="so-hb-item"><Star size={16} /><span>Exclusive<br />Member Deals</span></div>
              <div className="so-hb-item"><Clock size={16} /><span>Limited Time<br />Offers</span></div>
              <div className="so-hb-item"><ShieldCheck size={16} /><span>100% Safe<br />Payments</span></div>
            </motion.div>
          </div>

          {/* Discount card — floats over the couple area */}
          <div className="so-hero-right">
            <div className="so-discount-card">
              <span className="so-dc-up">UP TO</span>
              <div className="so-dc-main">
                <span className="so-dc-percent">40%</span>
                <span className="so-dc-off">OFF</span>
              </div>
              <p className="so-dc-desc">On Romantic Stays &amp; Experiences</p>
              <div className="so-dc-icon"><Heart size={16} fill="#FF4D8D" color="#FF4D8D" /></div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FEATURED DEALS ===== */}
      <section className="so-deals container">
        <div className="so-section-header">
          <h2>Our Exclusive Deals <span>🎁</span></h2>
          <p>Handpicked offers to make your special moments even more affordable</p>
        </div>

        <div className="so-deals-grid">
          {deals.map((deal, i) => (
            <motion.div
              key={i}
              className="so-deal-card"
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
            >
              <div className="so-deal-img" style={{ backgroundImage: `url(${deal.image})` }}>
                <div className="so-deal-badge">{deal.badge}</div>
                <div className="so-deal-discount" style={{ background: deal.color }}>{deal.discount}</div>
              </div>
              <div className="so-deal-content">
                <h3>{deal.title}</h3>
                <p>{deal.desc}</p>
                <div className="so-deal-price-row">
                  <span className="so-original-price">{deal.originalPrice}</span>
                  <span className="so-offer-price">{deal.offerPrice}</span>
                </div>
                <div className="so-deal-footer">
                  <span className="so-valid"><Clock size={12} /> {deal.validTill}</span>
                  <div className="so-deal-tags">
                    {deal.tags.map((tag, j) => <span key={j} className="so-tag">{tag}</span>)}
                  </div>
                </div>
                <button className="btn btn-primary so-book-btn" onClick={() => setIsWelcomeOpen(true)}>
                  Grab This Deal <ArrowRight size={14} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== WHY CHOOSE ===== */}
      <section className="so-why container">
        <div className="so-section-header">
          <h2>Why Choose HeartSync Offers <span>💕</span></h2>
          <p>We make every deal worth it</p>
        </div>

        <div className="so-why-grid">
          {whyChoose.map((item, i) => (
            <motion.div
              key={i}
              className="so-why-item"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              whileHover={{ y: -4 }}
            >
              <div className="so-why-icon">{item.icon}</div>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== HOW TO REDEEM ===== */}
      <section className="so-how container">
        <div className="so-section-header">
          <h2>How to Redeem <span>💞</span></h2>
          <p>Simple steps to grab your deal</p>
        </div>

        <div className="so-how-grid">
          {howToRedeem.map((step, i) => (
            <motion.div
              key={i}
              className="so-how-step"
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {i < howToRedeem.length - 1 && <div className="so-connector" />}
              <div className="so-step-bubble">
                <span className="so-step-emoji">{step.icon}</span>
                <span className="so-step-number">{step.step}</span>
              </div>
              <h4>{step.title}</h4>
              <p>{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="so-cta container">
        <div className="so-cta-box">
          <div className="so-cta-body">
            <img src={logoBgImg} alt="HeartSync" className="so-cta-logo" />
            <h2>Don't Miss Out on These Amazing Deals! <span>🎁</span></h2>
            <p>Join thousands of happy couples who've saved big on<br />their most memorable moments with HeartSync.</p>
            <div className="so-cta-buttons">
              <button className="btn so-cta-main-btn" onClick={() => setIsWelcomeOpen(true)}>
                View All Offers <ArrowRight size={18} />
              </button>
              <button className="btn so-cta-secondary-btn">
                Contact Us <Sparkles size={16} />
              </button>
            </div>
            <div className="so-cta-badges">
              <span><ShieldCheck size={14} /> Safe & Secure Payments</span>
              <span><Heart size={14} /> Trusted by 10,000+ Couples</span>
              <span><Flame size={14} /> New Deals Every Day</span>
            </div>
          </div>

          <Heart className="so-cta-dec so-cdec-1" fill="rgba(255,255,255,0.12)" color="transparent" />
          <Heart className="so-cta-dec so-cdec-2" fill="rgba(255,255,255,0.08)" color="transparent" />
        </div>
      </section>

      <WelcomeModal isOpen={isWelcomeOpen} onClose={() => setIsWelcomeOpen(false)} />
    </div>
  )
}

export default SpecialOffers
