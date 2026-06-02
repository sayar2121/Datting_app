import React, { useEffect } from 'react';
import './StaticPages.css';

const CookiePolicy: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="static-page-container">
      <div className="static-page-header">
        <h1>Cookie Policy</h1>
        <p>Last updated: October 2023</p>
      </div>
      <div className="static-page-content">
        <h2>What Are Cookies?</h2>
        <p>Cookies are small text files that are stored on your device when you visit a website or use an app. They are widely used to make websites work more efficiently and provide information to the owners of the site.</p>

        <h2>How We Use Cookies</h2>
        <p>HeartSync uses cookies and similar tracking technologies for several purposes:</p>
        <ul>
          <li><strong>Essential Cookies:</strong> These are necessary for the app to function properly. They enable you to log in securely and navigate the platform.</li>
          <li><strong>Performance Cookies:</strong> These help us understand how users interact with our platform by collecting anonymous analytical data. This helps us improve the user experience.</li>
          <li><strong>Functional Cookies:</strong> These remember your preferences and settings, such as your language choice, so you don't have to set them every time.</li>
          <li><strong>Targeting Cookies:</strong> We may use these to deliver relevant advertisements and measure the effectiveness of our marketing campaigns.</li>
        </ul>

        <h2>Your Choices</h2>
        <p>Most web browsers allow you to manage your cookie preferences through their settings. You can choose to block all cookies or receive a warning before a cookie is stored. However, please note that disabling essential cookies may impact your ability to use certain features of HeartSync.</p>

        <h2>Updates to This Policy</h2>
        <p>We may update this Cookie Policy occasionally to reflect changes in technology, regulation, or our business practices. We will notify you of any significant changes through the app or website.</p>
      </div>
    </div>
  );
};

export default CookiePolicy;
