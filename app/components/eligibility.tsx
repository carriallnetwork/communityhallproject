import React from 'react';

const EligibilityPage: React.FC = () => {
  return (
    <div className="font-body p-10 md:p-20">
      <h2 className="mt-10 md:mt-20 text-5xl font-bold mb-5">Eligibility:</h2>

      <ul className="list-disc pl-4 md:pl-8">
        <li className="mb-3">Open to architecture graduates, and students pursuing Bachelor or Master of Architecture at a registered university in Tamil Nadu</li>
        <li className="mb-3">Only individuals can participate in this competition; an organization or a group is not eligible to participate.</li>
        <li className="mb-3">Participant must be a resident of Tamil Nadu. Appropriate ID proof must be attached to your profile (valid ID proofs- Aadhar, Passport, Voter ID, and Driving License).</li>
        <li className="mb-3">Degree certificate and/or college ID card(s) must be uploaded in your profile.</li>
      </ul>
    </div>
  );
};

export default EligibilityPage;
