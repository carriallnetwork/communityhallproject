// import React from 'react';

// const PrizesPage: React.FC = () => {
//   return (
//     <section id="prizes">

// <div className="font-body min-h-screen p-20 text-left flex flex-col justify-center">
//       <div className="p-4 text-6xl font-bold text-gray-800 mt-10">
//         <h1>Prizes</h1>
//       </div>

//       <div className="flex items-center justify-center mt-5">
//         <div className="flex">
//           <div className="w-48 h-35 border-2 border-orange-500 bg-yellow-200 p-5 text-center flex flex-col items-center justify-center mx-2">
//             <span>Winner</span>
//             <span><b>₹2,00,000</b></span>
//           </div>

//           <div className="w-48 h-35 border-2 border-gray-300 p-5 bg-white text-center flex flex-col items-center justify-center mx-2">
//             <span>Runner-up</span>
//             <span><b>₹1,00,000</b></span>
//           </div>
//         </div>
//       </div>

//       <div className="text-left mt-10 award-text">
//           In addition to the winner and runner-up awards, the top 20 designs will be recognized
//           for their outstanding contributions. Each of these exceptional designs will be awarded
//           a cash prize of INR 5,000 and showcased on our website, highlighting their unique
//           vision and innovative approach. This recognition celebrates the talent and creativity of
//           all participants and ensures their designs reach a wider audience.
//         </div>
//     </div>

//     </section>
   
//   );
// };

// export default PrizesPage;




import React from 'react';

interface PrizesPageProps {
  selectedLanguage: 'english' | 'tamil';
}

const PrizesPage: React.FC<PrizesPageProps> = ({ selectedLanguage }) => {
  const translations = {
    english: {
      title: 'Prizes',
      winner: 'Winner',
      winnerPrize: '₹2,00,000',
      runnerUp: 'Runner-up',
      runnerUpPrize: '₹1,00,000',
      additionalText:
        'In addition to the winner and runner-up awards, the top 20 designs will be recognized for their outstanding contributions. Each of these exceptional designs will be awarded a cash prize of INR 5,000 and showcased on our website, highlighting their unique vision and innovative approach. This recognition celebrates the talent and creativity of all participants and ensures their designs reach a wider audience.',
    },
    tamil: {
      title: 'பரிசுகள்',
      winner: 'வினர்',
      winnerPrize: '₹2,00,000',
      runnerUp: 'ரன்னர்-அப்',
      runnerUpPrize: '₹1,00,000',
      additionalText:
        'வினர் மற்றும் ரன்னர்-அப் பரிசுக்கு சேர்ந்து, சிறந்த 20 வடிவங்கள் அவற்றின் அருமானங்களுக்கான உரையாடல்களாக அறிந்துகொள்ளப்படும். இந்த அதிர்ச்சியான வடிவங்களுடன் ஒவ்வொரு வடிவுக்கும் INR 5,000 பரிசு வழங்கப்படும் மற்றும் அவைகள் எங்கள் இணையதளத்தில் காட்டப்படும், அவற்றின் உன்னத கருத்து மற்றும் புதிய விருத்தியான பிராக்டிஸை குறிக்கும். இந்த அங்கீகாரம் அனைத்து பங்களிப்பாளர்களின் தேன் மற்றும் கருத்துக்களை கொண்டுவருகின்றது மற்றும் அவர்கள் விரும்பிய வடிவங்கள் குறித்து ஒரு பெருமிதமான அழைப்புக்கு சார்பு செய்கின்றது.',
    },
  };

  const {
    title,
    winner,
    winnerPrize,
    runnerUp,
    runnerUpPrize,
    additionalText,
  } = translations[selectedLanguage];

  return (
    <section id="prizes">
      <div className="font-body min-h-screen p-20 text-left flex flex-col justify-center">
        <div className="p-4 text-6xl font-bold text-gray-800 mt-10">
          <h1>{title}</h1>
        </div>

        <div className="flex items-center justify-center mt-5">
          <div className="flex">
            <div className="w-48 h-35 border-2 border-orange-500 bg-yellow-200 p-5 text-center flex flex-col items-center justify-center mx-2">
              <span>{winner}</span>
              <span>
                <b>{winnerPrize}</b>
              </span>
            </div>

            <div className="w-48 h-35 border-2 border-gray-300 p-5 bg-white text-center flex flex-col items-center justify-center mx-2">
              <span>{runnerUp}</span>
              <span>
                <b>{runnerUpPrize}</b>
              </span>
            </div>
          </div>
        </div>

        <div className="text-left mt-10 award-text">{additionalText}</div>
      </div>
    </section>
  );
};

export default PrizesPage;

