import React, { useEffect } from 'react';
import './StaticPages.css';

const CommunityGuidelines: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="static-page-container">
      <div className="static-page-header">
        <h1>Community Guidelines</h1>
        <p>Building a respectful and authentic community.</p>
      </div>
      <div className="static-page-content">
        <h2>Respect Everyone</h2>
        <p>HeartSync is a diverse community. We do not tolerate any form of harassment, hate speech, bullying, or discrimination based on race, ethnicity, religion, sexual orientation, gender identity, or disability. Be kind, or be banned.</p>

        <h2>Keep It Authentic</h2>
        <p>Be yourself. Do not impersonate others, use fake photos, or create multiple accounts. Authenticity is the foundation of meaningful connections. Accounts found to be catfishing will be permanently removed.</p>

        <h2>No Solicitation or Prostitution</h2>
        <p>HeartSync is for finding love and connections. Using the platform to sell services, promote OnlyFans, or engage in any form of transactional companionship is strictly prohibited.</p>

        <h2>Keep It Appropriate</h2>
        <p>Nudity, sexually explicit content, and graphic violence are not allowed in your profile photos or bio. Keep your public profile clean. Private messages should also remain respectful—unsolicited explicit content will result in an immediate ban.</p>

        <h2>Reporting Violations</h2>
        <p>We rely on our community to help keep HeartSync safe. If you encounter a profile that violates these guidelines, please report them using the flag icon on their profile. Our team reviews every report seriously and takes appropriate action.</p>
      </div>
    </div>
  );
};

export default CommunityGuidelines;
