import React, { useEffect } from 'react';
import './StaticPages.css';

const SafetyTips: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="static-page-container">
      <div className="static-page-header">
        <h1>Safety Tips</h1>
        <p>Your safety is our top priority.</p>
      </div>
      <div className="static-page-content">
        <h2>Online Safety</h2>
        <ul>
          <li><strong>Protect Your Personal Information:</strong> Never share your personal address, financial information, or social security number with someone you just met.</li>
          <li><strong>Stay on the Platform:</strong> Keep your conversations on HeartSync until you fully trust the person. Scammers often try to move you to WhatsApp or email quickly.</li>
          <li><strong>Report Suspicious Behavior:</strong> If someone asks for money, behaves inappropriately, or seems fake, use the in-app reporting tool immediately. Our team investigates all reports.</li>
          <li><strong>Verify Your Match:</strong> Look for the blue verification checkmark. We recommend using our Video Call feature before meeting in person.</li>
        </ul>

        <h2>Meeting Offline</h2>
        <ul>
          <li><strong>Meet in Public:</strong> For your first few dates, always meet in a populated, public place like a coffee shop or a restaurant.</li>
          <li><strong>Tell a Friend:</strong> Always inform a friend or family member about your plans, including who you're meeting, where you're going, and when you expect to be back.</li>
          <li><strong>Be in Control of Your Transportation:</strong> Make sure you have your own ride to and from the date. Do not get into a stranger's car on a first date.</li>
          <li><strong>Trust Your Instincts:</strong> If something feels off, it probably is. You are never obligated to stay on a date if you feel uncomfortable.</li>
        </ul>

        <h2>Resources</h2>
        <p>If you ever feel in immediate danger, contact your local emergency services. For non-emergency support, our Trust & Safety team is available 24/7 through the app.</p>
      </div>
    </div>
  );
};

export default SafetyTips;
