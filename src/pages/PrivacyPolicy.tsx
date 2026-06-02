import React, { useEffect } from 'react';
import './StaticPages.css';

const PrivacyPolicy: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="static-page-container">
      <div className="static-page-header">
        <h1>Privacy Policy</h1>
        <p>Last updated: October 2023</p>
      </div>
      <div className="static-page-content">
        <h2>1. Information We Collect</h2>
        <p>When you register for HeartSync, we collect information you provide directly, such as your name, email address, date of birth, gender, and photos. As you use the app, we also collect information about your interactions, preferences, and location data (if you grant permission) to provide you with relevant matches.</p>

        <h2>2. How We Use Your Information</h2>
        <p>We use your information to operate and improve our platform, match you with other users, and provide customer support. Your profile information, including photos and bio, will be visible to other users on the platform. We use AI algorithms to analyze your preferences and improve your match recommendations.</p>

        <h2>3. Information Sharing</h2>
        <p>We do not sell your personal data to third parties. We may share your information with trusted service providers who help us operate our business (e.g., cloud hosting, analytics, SMS delivery). These providers are bound by strict confidentiality agreements.</p>

        <h2>4. Your Rights</h2>
        <p>Depending on your location, you may have the right to access, correct, or delete your personal data. You can manage your data preferences and delete your account entirely from the Settings menu within the app.</p>

        <h2>5. Security</h2>
        <p>We implement robust security measures to protect your data from unauthorized access. However, no internet transmission is 100% secure. We encourage you to use a strong password and keep your login credentials confidential.</p>
        
        <h2>6. Contact Us</h2>
        <p>If you have any questions about this Privacy Policy, please contact our Data Protection Officer at privacy@heartsync.app.</p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
