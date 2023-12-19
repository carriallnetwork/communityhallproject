// import React, { useEffect, useState } from 'react';

// const LibrariesPage: React.FC = () => {
//   const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  
  
//   useEffect(() => {
//     // Set the target date to 15th January
//     const targetDate = new Date('2024-01-15T00:00:00Z').getTime();

//     const calculateTimeLeft = () => {
//       const now = new Date().getTime();
//       const difference = targetDate - now;

//       if (difference > 0) {
//         const days = Math.floor(difference / (1000 * 60 * 60 * 24));
//         const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//         const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
//         const seconds = Math.floor((difference % (1000 * 60)) / 1000);

//         setTimeLeft({ days, hours, minutes, seconds });
//       } else {
//         // If the target date has passed, set the timeLeft to 0
//         setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
//       }
//     };

//     // Call the function initially
//     calculateTimeLeft();

//     // Update the countdown every second
//     const timerInterval = setInterval(() => {
//       calculateTimeLeft();
//     }, 1000);

//     // Clear the interval when the component is unmounted
//     return () => clearInterval(timerInterval);
//   }, []);
//   const maxUnit: 'days' | 'hours' | 'minutes' | 'seconds' | '' =timeLeft.days > 0
//       ? 'days'
//       : timeLeft.hours > 0
//       ? 'hours'
//       : timeLeft.minutes > 0
//       ? 'minutes'
//       : timeLeft.seconds > 0
//       ? 'seconds'
//       : '';
//   return (
//     <section  id="libraries">

// <div className=" min-h-screen font-body">
//       <header className="flex justify-between items-center p-4 text-black">
//         <img src="/your-logo.png" alt="Logo" className="w-12 h-12 object-contain" />
//         <div className="flex">
//           <a
//             href="https://drive.google.com/file/d/1Dcak8IKQX0U_3a5ocm6FrwJvSiWRP9qs/view?usp=sharing"
//             className="bg-red-600 hover:bg-red-300 text-white rounded-full px-4 py-2 mr-2">
//             Guidelines
//           </a>

//           <a
//             href="http://bit.ly/communityhallproject"
//             className="bg-blue-500 hover:bg-blue-300 text-white rounded-full px-4 py-2 mr-2">
//             Submit
//           </a>
//         </div>
//       </header>


//       <div className="flex flex-col justify-center items-center md:flex-row">
//         <div className="max-w-full md:max-w-1/2 md:pr-8">
//           <p className="text-6xl font-bold mb-4">Your Design<br /> Their Future</p>
//           <p className="text-shadow desctext">
//             Join a historic mission to design 100<br />
//             community centers across Tamil Nadu!<br /><br />
//             Compete to shape the future of your community<br />
//             through innovative design. Register now and<br />
//             leave a lasting legacy.
//           </p>
//         </div>

//         <div className="max-w-full md:max-w-1/2 mt-4 md:mt-0">
//           <img src="/homebg.png" alt="Target" className="h-auto w-full" />
//         </div>
//       </div>
//      <p className="text-center font-bold text-3xl m-4">
//         You have {timeLeft[maxUnit as keyof typeof timeLeft]} {maxUnit}
//         {timeLeft[maxUnit as keyof typeof timeLeft] > 1 ? '' : ''} left to submit your design
//       </p>
//     </div>
//     </section>
//   );
// };
// export default LibrariesPage;





import React, { useEffect, useState } from 'react';
import DesignObjectivesPage from "./designobjectives";
import PrizesPage from './prizes';
import EligibilityPage from './eligibility';
import SubmitDesignsPage from './submityourdesign';

const LibrariesPage: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [selectedLanguage, setSelectedLanguage] = useState<'english' | 'tamil'>('english');

  useEffect(() => {
    // Set the target date to 15th January
    const targetDate = new Date('2024-01-15T00:00:00Z').getTime();

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        // If the target date has passed, set the timeLeft to 0
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    // Call the function initially
    calculateTimeLeft();

    // Update the countdown every second
    const timerInterval = setInterval(() => {
      calculateTimeLeft();
    }, 1000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(timerInterval);
  }, []);

  const maxUnit: 'days' | 'hours' | 'minutes' | 'seconds' | '' = timeLeft.days > 0
    ? 'days'
    : timeLeft.hours > 0
      ? 'hours'
      : timeLeft.minutes > 0
        ? 'minutes'
        : timeLeft.seconds > 0
          ? 'seconds'
          : '';

          const translations = {
            english: {
              timeformat: {
                days: 'days',
                hours: 'hours',
                minutes: 'minutes',
                seconds: 'seconds',
              },
              title: (
                <>
                  Your Design<br />
                  Their Future
                </>
              ),
              description: (
                <>
                  Join a historic mission to design 100<br />
                  community centers across Tamil Nadu!<br /><br />
                  Compete to shape the future of your community<br />
                  through innovative design. Register now and<br />
                  leave a lasting legacy.
                </>
              ),
              submitDesign: 'You have',
              timeLeft: 'left to submit your design',
              submitbutton: 'Submit',
              guidelines: 'Guidelines',
              deadline:"Deadline: "

             
            },
            tamil: {
              timeformat: {
                days: 'நாட்கள்',
                hours: 'மணிநேரம்',
                minutes: 'நிமிடங்கள்',
                seconds: 'விநாடிகள்',
              },
              title: (
                <>
                  உங்கள் வடிவமைப்பு<br />
                  அவர்களது எதிர்காலம்
                </>
              ),
              description: (
                <>
                  தமிழ் நாடு முழுவதும் 100 கம்யூனிடி சென்டர்களை வடிவமை!<br />
                  உங்கள் கம்யூனிடி மூலம் எங்கள் கம்யூனிடிகளின் எதிர்காலத்தை<br />
                  வடிவமைக்கவும். இப்போது பதிவு செய்யவும் மற்றும் நிரந்தரமான<br /> 
                  பதிவில் உங்கள் பகுதியை விளக்கமாக விடுங்கள்.
                </>
              ),
              submitDesign: 'உங்கள் வடிவமைப்பைச் சமர்ப்பிக்க இன்னும்',
              timeLeft: 'உள்ளன',
              submitbutton: 'சமர்ப்பிக்கவும்',
              guidelines: 'வழிகாட்டுதல்கள்',
              deadline: "காலக்கெடுவை:"
            },
          };

          // const maxUnitTranslated: 'days' | 'hours' | 'minutes' | 'seconds' | '' = maxUnit as 'days' | 'hours' | 'minutes' | 'seconds' | '';
          const timeUnitTranslations = translations[selectedLanguage].timeformat;


  return (
    <section id="libraries">

      <div className="min-h-screen font-body">
        <header className="flex justify-between items-center p-4 text-black">
          <img src="/your-logo.png" alt="Logo" className="w-12 h-12 object-contain" />
          <div className="flex">
            <a
              href="https://drive.google.com/file/d/1Dcak8IKQX0U_3a5ocm6FrwJvSiWRP9qs/view?usp=sharing"
              target="_blank"
              className="bg-red-600 hover:bg-red-300 text-white rounded-full px-4 py-2 mr-2">
                 {translations[selectedLanguage].guidelines}
            </a>

            <a
              href="http://bit.ly/communityhallproject"
              target="_blank"
              className="bg-blue-500 hover:bg-blue-300 text-white rounded-full px-4 py-2 mr-2">
               {translations[selectedLanguage].submitbutton}
            </a>
            <button
  onClick={() => setSelectedLanguage(selectedLanguage === 'english' ? 'tamil' : 'english')}
  className={`relative inline-flex items-center cursor-pointer bg-gray-300 hover:bg-gray-400 text-black rounded-full px-4 py-2 mr-2 ${
    selectedLanguage === 'tamil' ? 'bg-blue-600' : ''
  }`}
>
  <div className="relative inline-block w-10 h-6 bg-white rounded-full transition-transform duration-300 transform">
    <div
      className={`absolute inset-y-0 left-0 w-5 h-5 bg-gray-300 rounded-full transform transition-transform ${
        selectedLanguage === 'tamil' ? 'translate-x-full' : 'translate-x-0'
      }`}
    >
      <span className="absolute inset-0 flex items-center justify-center text-sm font-medium text-gray-900 dark:text-gray-300 ">
        {selectedLanguage === 'english' ? 'E' : 'த'}
      </span>
    </div>
  </div>

</button>
          </div>
        </header>

        <div className="flex flex-col justify-center items-center md:flex-row">
          <div className="max-w-full md:max-w-1/2 md:pr-8">
            <p className="text-6xl font-bold mb-4">{translations[selectedLanguage].title}</p>
            <p className="text-shadow desctext">
              {translations[selectedLanguage].description}
            </p>
          </div>

          <div className="max-w-full md:max-w-1/2 mt-4 md:mt-0">
            <img src="/homebg.png" alt="Target" className="h-auto w-full" />
          </div>
        </div>

        <p className="text-center font-bold text-3xl m-4">
  {translations[selectedLanguage].submitDesign} {timeLeft[maxUnit as keyof typeof timeLeft]}{' '}
  {maxUnit && timeUnitTranslations[maxUnit]}
  {timeLeft[maxUnit as keyof typeof timeLeft] > 1 ? '' : ''} {translations[selectedLanguage].timeLeft}
  <span className="text-red-700"><br></br> {translations[selectedLanguage].deadline} 15/01/2024</span>
</p>
      
      </div>
      <DesignObjectivesPage selectedLanguage={selectedLanguage} />

      <PrizesPage selectedLanguage={selectedLanguage} />

      <EligibilityPage selectedLanguage={selectedLanguage} />

      <SubmitDesignsPage selectedLanguage={selectedLanguage} />


      
    </section>
  );
};
export default LibrariesPage;



