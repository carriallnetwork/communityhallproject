// import React from 'react';

// const SubmitDesignsPage: React.FC = () => {
//   return (
//     <section id="submitDesigns" >

// <div className="font-body  min-h-screen flex flex-col justify-between p-10 md:p-20">
//       <h2 className="text-left font-bold text-6xl mb-5 md:mb-10">Submit Your Designs</h2>

//       <ul className="text-left list-disc pl-4 md:pl-8 mb-5 md:mb-8">
//         <li className="mb-3">Submissions must be in A2 digital boards, oriented in landscape format, accompanied by a 3D render of the design.</li>
//         <li className="mb-3">Two separate text boxes will be provided in the submission portal: one for the design description (300 words) and another for any additional information about the design.</li>
//         <li className="mb-3">The participants should submit the required documents in the submission portal, and should also send it via email to abcdxxx@gmail.com.</li>
//       </ul>

// <div className="flex justify-center items-center">
// <a
//             href="http://bit.ly/communityhallproject"
//             target="_blank"
//             className="bg-blue-500 hover:bg-blue-300 text-white rounded-full px-4 py-2 mr-2">
//             Submit
//           </a>
// </div>
//       <div className="text-center italic mb-5 md:mb-8">
//         You will be redirected to a different page to submit your designs
//       </div>


//       <footer className="mt-8 bg-blue-300">
//         <div className="footertop flex justify-between">
//           <img src="/your-logo.png" alt="Logo" className="w-16 h-16 m-5 object-contain" />
//           <span className=" m-5 text-right">
//             <span className="font-bold">Write to us:</span><br />
//             <p className="italic text-right">
//               If you have any questions, please feel free to<br /> contact us. We typically respond within 24 hours.
//             </p>
//             <p className="italic text-right">
//               Email us at{' '}
//               <a href="mailto:abc@domain.com" className="text-blue-500 hover:underline">
//                 abc@domain.com
//               </a>
//             </p>
//           </span>
//         </div>

//         <div className="flex flex-row justify-around bg-gray-300 mt-5 md:mt-8">
//           <div className="flex items-left mb-2">
//             <img src="/x-logo.png" alt="X Logo" className="w-10 h-10 object-contain" />
//             <img src="/ig-logo.png" alt="IG Logo" className="w-10 h-10 object-contain" />
//             <img src="/fb-logo.png" alt="FB Logo" className="w-10 h-10 object-contain" />
//           </div>
//           <div className="flex items-center mb-4">
//             <span>Powered by PEN</span>
//           </div>
//           <div>
//             abc@domain.com
//           </div>
//         </div>
//       </footer>
//     </div>


//     </section>
    
//   );
// };

// export default SubmitDesignsPage;




import React from 'react';

interface SubmitDesignsPageProps {
  selectedLanguage: 'english' | 'tamil';
}

const SubmitDesignsPage: React.FC<SubmitDesignsPageProps> = ({ selectedLanguage }) => {
  const translations = {
    english: {
      title: 'Submit Your Designs',
      points: [
        'Submissions must be in A2 digital boards, oriented in landscape format, accompanied by a 3D render of the design.',
        'Two separate text boxes will be provided in the submission portal: one for the design description (300 words) and another for any additional information about the design.',
        'The participants should submit the required documents in the submission portal and should also send them via email to abcdxxx@gmail.com.',
      ],
      submitButton: 'Submit',
      redirectText: 'You will be redirected to a different page to submit your designs',
      footer: {
        writeUs: 'Write to us:',
        responseTime: 'If you have any questions, please feel free to contact us. We typically respond within 24 hours.',
        email: 'Email us at abc@domain.com',
        poweredBy: 'Powered by PEN',
      },
    },
    tamil: {
      title: 'உங்கள் வடிவங்களை சமர்ப்பிக்கவும்',
      points: [
        'சமர்ப்பிக்கும் வினாடிகள் A2 டிஜிட்டல் போர்டுகளில் இருக்க வேண்டும், பின்பு வடிவமைக்கப்பட்டு, வடிவ வடிவமைப்புடன் இணைந்து வரும் ஒரு 3D ரெண்டர் உள்ளது.',
        'சமர்ப்பிப்பு போர்ட்டலில் உள்ள விண்ணப்ப பெட்டிகளுக்கு இரண்டு வேண்டிய உரை பெட்டிகள் இருக்கும்: ஒருவர் வடிவ விளக்கத்தை (300 வார்த்தைகள்) மற்றும் பிற வடிவ பற்றிய எந்த கருத்துரையையும் ஒருவர் வடிவ விளக்கத்தில் வழங்கப்படும்.',
        'பங்களிகள் தங்கள் பதிவில் தேவையான ஆவணங்களை சமர்ப்பிக்க வேண்டும், மேலும் அவையை abcdxxx@gmail.com க்கு மின்னஞ்சல் அனுப்ப வேண்டும்.',
      ],
      submitButton: 'சமர்ப்பிக்கவும்',
      redirectText: 'உங்கள் வடிவங்களை சமர்ப்பிக்க வேண்டும் என்று நீங்கள் விரும்பினால், நீங்கள் ஒரு விதமாக பக்கத்திற்குப் பாரம் செல்லப்படுவீர்கள்',
      footer: {
        writeUs: 'எங்களுக்கு எழுதுங்கள்:',
        responseTime: 'உங்களிடம் ஏதாவது கேள்விகள் இருந்தால், தயவுசெய்து எங்களுக்கு தெரிவிக்கவும். நாங்கள் பொருத்தப்படுகிறது என்று பொதுவாக 24 மணி நேரத்திற்குள் பதிலளிக்கின்றோம்.',
        email: 'இந்த மின்னஞ்சல் மூலம் எங்களுக்கு அனுப்பவும் abc@domain.com',
        poweredBy: 'செல்லும் வழியாக',
      },
    },
  };

  return (
    <section id="submitDesigns">
      <div className="font-body min-h-screen flex flex-col justify-between p-10 md:p-20">
        <h2 className="text-left font-bold text-6xl mb-5 md:mb-10">{translations[selectedLanguage].title}</h2>

        <ul className="text-left list-disc pl-4 md:pl-8 mb-5 md:mb-8">
          {translations[selectedLanguage].points.map((point, index) => (
            <li key={index} className="mb-3">
              {point}
            </li>
          ))}
        </ul>

        <div className="flex justify-center items-center">
          <a
            href="http://bit.ly/communityhallproject"
            target="_blank"
            className="bg-blue-500 hover:bg-blue-300 text-white rounded-full px-4 py-2 mr-2"
          >
            {translations[selectedLanguage].submitButton}
          </a>
        </div>

        <div className="text-center italic mb-5 md:mb-8">{translations[selectedLanguage].redirectText}</div>

        <footer className="mt-8 bg-blue-300">
          <div className="footertop flex justify-between">
            <img src="/your-logo.png" alt="Logo" className="w-16 h-16 m-5 object-contain" />
            <span className=" m-5 text-right">
              <span className="font-bold">{translations[selectedLanguage].footer.writeUs}</span>
              <br />
              <p className="italic text-right">{translations[selectedLanguage].footer.responseTime}</p>
              <p className="italic text-right">
                {translations[selectedLanguage].footer.email}
              </p>
            </span>
          </div>

          <div className="flex flex-row justify-around bg-gray-300 mt-5 md:mt-8">
            <div className="flex items-left mb-2">
              <img src="/x-logo.png" alt="X Logo" className="w-10 h-10 object-contain" />
              <img src="/ig-logo.png" alt="IG Logo" className="w-10 h-10 object-contain" />
              <img src="/fb-logo.png" alt="FB Logo" className="w-10 h-10 object-contain" />
            </div>
            <div className="flex items-center mb-4">
              <span>{translations[selectedLanguage].footer.poweredBy}</span>
            </div>
            <div>{translations[selectedLanguage].footer.email}</div>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default SubmitDesignsPage;
