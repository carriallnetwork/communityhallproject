// import React from 'react';

// interface DesignObjectivesPageProps {
//   selectedLanguage: 'english' | 'tamil';
// }

// const DesignObjectivesPage: React.FC<DesignObjectivesPageProps> = ({ selectedLanguage }) => {
//   return (
//     <section  id="designObjectives">
// <div className="font-body p-10 flex flex-col justify-center min-h-screen md:p-20 bg-gray-100">
//         <div className="p-4 text-6xl font-bold text-gray-800  animate-fade-in-up">
//           <h1>Design Objectives</h1>
//         </div>

//       <div className="flex flex-col md:flex-row justify-between p-5" id="main-section">
//         <div className="w-full md:w-2/5 text-justify mb-5 md:mb-0 animate-fade-in-up">
//           <p>
//             <b>Accessibility & Inclusivity</b><br />
//             Ensure a single-story design with accessible amenities for all users<br />
//             <br />
//             <b>Vibrant Community Hub</b><br />
//             Foster community engagement through flexible spaces and outdoor areas.
//           </p>
//         </div>
//         <div className="w-full md:w-2/5 text-justify animate-fade-in-up">
//           <p>
//             <b>Cultural Celebration</b><br />
//             Reflect the unique cultural heritage of Tamil Nadu through design elements<br />
//             <br />
//             <b>Sustainable Future</b><br />
//             Employ eco-friendly strategies for long-term environmental impact.
//           </p>
//         </div>
//       </div>
//       <div className="text-center mt-10 animate-fade-in-up" id="download-text">
//         <p>
//           Download guidelines here as a PDF file:{' '}
//           <a
//             id="download-link"
//             href="https://drive.google.com/file/d/1Dcak8IKQX0U_3a5ocm6FrwJvSiWRP9qs/view?usp=sharing"
//             target="_blank"
//             className="text-blue-500 underline"
//           >
//             guidelines.pdf
//           </a>
//           .
//         </p>
//       </div>
//     </div>
//     </section>
  
//   );
// };
// export default DesignObjectivesPage;





import React from 'react';

interface DesignObjectivesPageProps {
  selectedLanguage: 'english' | 'tamil';
}

const DesignObjectivesPage: React.FC<DesignObjectivesPageProps> = ({ selectedLanguage }) => {

  const translations = {
    english: {
      title: 'Design Objectives',
      accessibility: {
        title: 'Accessibility & Inclusivity',
        description: 'Ensure a single-story design with accessible amenities for all users',
      },
      communityHub: {
        title: 'Vibrant Community Hub',
        description: 'Foster community engagement through flexible spaces and outdoor areas.',
      },
      culturalCelebration: {
        title: 'Cultural Celebration',
        description: 'Reflect the unique cultural heritage of Tamil Nadu through design elements',
      },
      sustainableFuture: {
        title: 'Sustainable Future',
        description: 'Employ eco-friendly strategies for long-term environmental impact.',
      },
      download:{
        downloadText: 'Download guidelines here as a PDF file:',
      },
      guidelineslink: 'guidelines.pdf'
      
    
    },
    tamil: {
      title: 'வடிவமைப்பு நோக்கம்',
      accessibility: {
        title: 'அழுக்காறும் உள்ளேயே',
        description: 'அனைத்து பயனாளர்களுக்கும் எளிதாகவும் அணுகவும் எளிதாகவும் உள்ள வசதிகளோடு ஒரு கதை வடிவத்தை உள்ளடக்கவும்',
      },
      communityHub: {
        title: 'விழிப்புடன் சமூக மையம்',
        description: 'நாடும் வெளிநாடும் ஒன்றுக்கு முழுமையான இடத்தை உருவாக்குவதன் மூலம் சமூக ஈடுபாட்டை வளர்க்கவும் வெளிநாடு பராமரிப்புகளையும் வளர்க்கவும்.',
      },
      culturalCelebration: {
        title: 'கலாசர ஆசிரியர்',
        description: 'தமிழ்நாடுக்குரிய உரிம பாரம்பரியத்தை வடிவமைக்கும் மூலம் அந்தச் சிறப்புகளைக் காண முடியும்',
      },
      sustainableFuture: {
        title: 'சுற்றுச்சூழலின் வடிவமைப்பு',
        description: 'குறிப்புகளின் பொருளாதாரத்தை நேராகவும் உயர்த்த உரிம விளக்கம் பயன்படுத்துதல்.',
      },
      download:{
        downloadText: 'இங்கே வழங்கப்பட்ட வழிமுறைகளை பதிவிறக்கவும்:',
      },
      guidelineslink: 'வழிகாட்டுதல்கள்.pdf'
     
    },
  };

  

  // const translations = {
  //   english: {
  //     title: 'Design Objectives',
  //     accessibility: 'Ensure a single-story design with accessible amenities for all users.',
  //     vibrantCommunity: 'Foster community engagement through flexible spaces and outdoor areas.',
  //     culturalCelebration: 'Reflect the unique cultural heritage of Tamil Nadu through design elements.',
  //     sustainableFuture: 'Employ eco-friendly strategies for long-term environmental impact.',
  //     downloadText: 'Download guidelines here as a PDF file:',
  //     downloadLink:
  //       'https://drive.google.com/file/d/1Dcak8IKQX0U_3a5ocm6FrwJvSiWRP9qs/view?usp=sharing',
  //   },
  //   tamil: {
  //     title: 'வடிவமைப்பு இலக்கம்',
  //     accessibility: 'அனைத்து பயனாளர்களுக்கும் அணுகல் வகையான வடிவமைப்பை உறுதிப்படுத்தவும்.',
  //     vibrantCommunity: 'நிரவாக இடத்திற்கும் வெள்ளத்திற்கும் வடிவமைப்புகள் மற்றும் வெளியேறும் பகுதிகளின் மூலம் சமூக இணைப்பை உள்கொள்ளுதல்.',
  //     culturalCelebration: 'தமிழகத்தின் அனைத்து பொருளாதாரத்தையும் வடிவமைப்பு உறுதிப்படுத்துதல்.',
  //     sustainableFuture: 'வானிலை ஆளப்பிரிவுகளுக்கு கோடைக்கால பரிணாமத்தை உண்டாக்குவதற்கு இயங்குதல்.',
  //     downloadText: 'இங்கே வழங்கப்பட்ட வழிமுறைகளை பதிவிறக்கவும்:',
  //     downloadLink:
  //       'https://drive.google.com/file/d/1Dcak8IKQX0U_3a5ocm6FrwJvSiWRP9qs/view?usp=sharing',
  //   },
  // };

  // const {
  //   title,
  //   accessibility,
  //   vibrantCommunity,
  //   culturalCelebration,
  //   sustainableFuture,
  //   downloadText,
  //   downloadLink,
  // } = translations[selectedLanguage];

  return (
    <section id="designObjectives">
      <div className="font-body p-10 flex flex-col justify-center min-h-screen md:p-20 bg-gray-100">

      <div className="p-4 text-6xl font-bold text-gray-800  animate-fade-in-up">
    <h1>{translations[selectedLanguage].title}</h1>
  </div>

  <div className="flex flex-col md:flex-row justify-between p-5" id="main-section">
    <div className="w-full md:w-2/5 text-justify mb-5 md:mb-0 animate-fade-in-up">
      <p>
        <b>{translations[selectedLanguage].accessibility.title}</b><br />
        {translations[selectedLanguage].accessibility.description}<br />
        <br />
        <b>{translations[selectedLanguage].communityHub.title}</b><br />
        {translations[selectedLanguage].communityHub.description}
      </p>
    </div>
    <div className="w-full md:w-2/5 text-justify animate-fade-in-up">
      <p>
        <b>{translations[selectedLanguage].culturalCelebration.title}</b><br />
        {translations[selectedLanguage].culturalCelebration.description}<br />
        <br />
        <b>{translations[selectedLanguage].sustainableFuture.title}</b><br />
        {translations[selectedLanguage].sustainableFuture.description}
      </p>
    </div>
  </div>

        {/* <div className="p-4 text-6xl font-bold text-gray-800  animate-fade-in-up">
          <h1>{title}</h1>
        </div>

        <div className="flex flex-col md:flex-row justify-between p-5" id="main-section">
          <div className="w-full md:w-2/5 text-justify mb-5 md:mb-0 animate-fade-in-up">
            <p>
              <b>{accessibility}</b>
              <br />
              <br />
              <b>{vibrantCommunity}</b>
            </p>
          </div>
          <div className="w-full md:w-2/5 text-justify animate-fade-in-up">
            <p>
              <b>{culturalCelebration}</b>
              <br />
              <br />
              <b>{sustainableFuture}</b>
            </p>
          </div>
        </div> */}
        <div className="text-center mt-10 animate-fade-in-up" id="download-text">
          <p>
          {translations[selectedLanguage].download.downloadText}{' '}
            <a id="download-link" href='https://drive.google.com/file/d/1Dcak8IKQX0U_3a5ocm6FrwJvSiWRP9qs/view?usp=sharing' target="_blank" className="text-blue-500 underline">
            {translations[selectedLanguage].guidelineslink}
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
};

export default DesignObjectivesPage;
