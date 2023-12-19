

// import React from 'react';

// const EligibilityPage: React.FC = () => {
//   return (
//     <section id="eligibility">

// <div className="font-body p-10 min-h-screen md:p-20 bg-gray-100 flex flex-col justify-center">
//       <h2 className="mt-10 md:mt-20 text-6xl font-bold p-4 text-left">Eligibility</h2>

//       <ul className="list-disc p-5 text-left">
//         <li className="mb-3">Open to architecture graduates, and students pursuing Bachelor or Master of Architecture at a registered university in Tamil Nadu.</li>
//         <li className="mb-3">Only individuals can participate in this competition; an organization or a group is not eligible to participate.</li>
//         <li className="mb-3">Participant must be a resident of Tamil Nadu. Appropriate ID proof must be attached to your profile (valid ID proofs- Aadhaar, Passport, Voter ID, and Driving License).</li>
//         <li className="mb-3">Degree certificate and/or college ID card(s) must be uploaded in your profile.</li>
//       </ul>
//     </div>

//     </section>
    
//   );
// };

// export default EligibilityPage;




import React from 'react';

interface EligibilityPageProps {
  selectedLanguage: 'english' | 'tamil';
}

const EligibilityPage: React.FC<EligibilityPageProps> = ({ selectedLanguage }) => {
  const translations = {
    english: {
      title: 'Eligibility',
      points: [
        'Open to architecture graduates, and students pursuing Bachelor or Master of Architecture at a registered university in Tamil Nadu.',
        'Only individuals can participate in this competition; an organization or a group is not eligible to participate.',
        'Participant must be a resident of Tamil Nadu. Appropriate ID proof must be attached to your profile (valid ID proofs- Aadhaar, Passport, Voter ID, and Driving License).',
        'Degree certificate and/or college ID card(s) must be uploaded in your profile.',
      ],
    },
    tamil: {
      title: 'தகுதி',
      points: [
        'கட்டிடக் கல்விக்கு மேற்பட்டவர்களுக்கு திறந்தது, மற்றும் தமிழ்நாட்டில் ஒரு பதிவுசெய்யப்பட்ட பல்கலைக்கழகத்தில் பெற்றவர்களுக்கு அர்கிடெக்சனில் பங்குபற்ற அனுமதி உள்ளது.',
        'இந்த போட்டியில் உள்ளவர்கள் குழு அல்லது கழுவும் அனுமதிப்படுகின்றனர்; ஒரு நிறுவனம் அல்லது குழு பங்குபற்ற முடியாது.',
        'பங்குபற்றுவதற்கு உங்கள் பதிவில் உள்ளது தமிழ்நாடு வாசிக்கும் உள்ளவர் ஆகவும். உங்கள் சுட்டியில் செருகுநரின் உறுதி அணியப்படுகின்றது (செருகுநர், பாஸ்போர்ட், வாட்டர் ஐடி, மற்றும் ஓட்டுநாயக் அனுமதி).',
        'உங்கள் பதிவில் பட்டம் அல்லது கல்லூரி ஐடி அட்டை(கள்) பதிவேற்றப்படவேண்டும்.',
      ],
    },
  };

  return (
    <section id="eligibility">
      <div className="font-body p-10 min-h-screen md:p-20 bg-gray-100 flex flex-col justify-center">
        <h2 className="mt-10 md:mt-20 text-6xl font-bold p-4 text-left">{translations[selectedLanguage].title}</h2>

        <ul className="list-disc p-5 text-left">
          {translations[selectedLanguage].points.map((point, index) => (
            <li key={index} className="mb-3">
              {point}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default EligibilityPage;




