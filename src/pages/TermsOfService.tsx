import React, { useEffect } from 'react';
import './StaticPages.css';

const TermsOfService: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="static-page-container">
      <div className="static-page-header">
        <h1>Terms of Service</h1>
        <p>Last updated: October 2023</p>
      </div>
      <div className="static-page-content">
        <h2>1. Acceptance of Terms</h2>
        <p>By creating a HeartSync account, you agree to be bound by these Terms of Service, our Privacy Policy, and our Community Guidelines. If you do not agree with any part of these terms, you may not use our service.</p>

        <h2>2. Eligibility</h2>
        <p>You must be at least 18 years old to create an account on HeartSync. By using the app, you represent and warrant that you are legally permitted to use the service and are not a convicted sex offender.</p>

        <h2>3. Your Account</h2>
        <p>You are responsible for maintaining the confidentiality of your login credentials. You agree to accept responsibility for all activities that occur under your account. We reserve the right to terminate accounts that violate our terms.</p>

        <h2>4. User Content</h2>
        <p>You retain ownership of the content you post on HeartSync (photos, bio, etc.). However, by posting content, you grant us a worldwide, royalty-free license to use, host, and display that content in connection with providing the service.</p>

        <h2>5. Purchases and Subscriptions</h2>
        <p>If you purchase a Premium or Elite subscription, it will automatically renew until you cancel it. You can manage or cancel your subscriptions through your app store settings. All purchases are non-refundable except where required by law.</p>

        <h2>6. Limitation of Liability</h2>
        <p>HeartSync is not responsible for the conduct of any user on or off the platform. You agree to use caution in all interactions with other users, particularly if you decide to communicate off the service or meet in person.</p>
      </div>
    </div>
  );
};

export default TermsOfService;
