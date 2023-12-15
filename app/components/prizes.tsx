import React from 'react';

const PrizesPage: React.FC = () => {
  return (
    <div className="font-body text-center">
      <div className="p-4 text-5xl font-bold text-gray-800 mt-10">
        <h1>Prizes</h1>
      </div>

      <div className="flex items-center justify-center mt-5">
        <div className="flex">
          <div className="w-48 h-35 border-2 border-orange-500 bg-yellow-200 p-5 text-center flex flex-col items-center justify-center mx-2">
            <span>Winner</span>
            <span><b>₹2,00,000</b></span>
          </div>

          <div className="w-48 h-35 border-2 border-gray-300 p-5 bg-white text-center flex flex-col items-center justify-center mx-2">
            <span>Runner-up</span>
            <span><b>₹1,00,000</b></span>
          </div>
        </div>
      </div>

      <div className="text-center mt-10 award-text mr-20 ml-20">
        In addition to the winner and runner-up awards, the top 20 designs will be recognized
        for their outstanding contributions. Each of these exceptional designs will be awarded
        a cash prize of INR 5,000 and showcased on our website, highlighting their unique
        vision and innovative approach. This recognition celebrates the talent and creativity of
        all participants and ensures their designs reach a wider audience.
      </div>
    </div>
  );
};

export default PrizesPage;