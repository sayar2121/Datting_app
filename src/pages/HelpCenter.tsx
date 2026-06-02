import React, { useEffect } from 'react';
import './StaticPages.css';

const HelpCenter: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="static-page-container">
      <div className="static-page-header">
        <h1>Help Center</h1>
        <p>How can we help you today?</p>
      </div>
      <div className="static-page-content">
        <h2>Getting Started</h2>
        <p>Welcome to HeartSync! Getting started is easy. Create your profile by adding your best photos, writing a catchy bio, and sharing your interests. Our AI will guide you through the process to ensure you get the best matches.</p>
        
        <h2>Managing Your Profile</h2>
        <p>You can edit your profile anytime by navigating to the Profile tab. Keep your photos updated and answer prompts to give potential matches a better idea of who you are. A complete profile significantly increases your chances of finding a perfect match.</p>

        <h2>Matching & Messaging</h2>
        <p>Swipe right to like someone, and left to pass. If you both swipe right, it's a match! Once matched, you can start messaging immediately. Premium members can also send Voice Notes and start Video Calls.</p>

        <h2>Booking Experiences</h2>
        <p>HeartSync isn't just about matching. Use the Experiences tab to book romantic hotels, candlelight dinners, and room decorations directly within the app.</p>

        <h2>Contact Support</h2>
        <p>If you're experiencing technical issues or have a billing question, please reach out to our support team at <a href="mailto:support@heartsync.app">support@heartsync.app</a>. We typically respond within 24 hours.</p>
      </div>
    </div>
  );
};

export default HelpCenter;
