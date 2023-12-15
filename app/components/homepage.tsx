import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const LibrariesPage: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

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



  // useEffect(() => {
  //   // Set the target date to 15th January
  //   const targetDate = new Date('2024-01-15T00:00:00Z').getTime();

  //   const calculateTimeLeft = () => {
  //     const now = new Date().getTime();
  //     const difference = targetDate - now;

  //     if (difference > 0) {
  //       const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  //       const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  //       const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  //       const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  //       setTimeLeft({ days, hours, minutes, seconds });
  //     } else {
  //       // If the target date has passed, set the timeLeft to 0
  //       setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  //     }
  //   };

  //   // Call the function initially
  //   calculateTimeLeft();

  //   // Update the countdown every second
  //   const timerInterval = setInterval(() => {
  //     calculateTimeLeft();
  //   }, 1000);

  //   // Clear the interval when the component is unmounted
  //   return () => clearInterval(timerInterval);
  // }, []);


  const maxUnit: 'days' | 'hours' | 'minutes' | 'seconds' | '' =timeLeft.days > 0
      ? 'days'
      : timeLeft.hours > 0
      ? 'hours'
      : timeLeft.minutes > 0
      ? 'minutes'
      : timeLeft.seconds > 0
      ? 'seconds'
      : '';



  return (
    <div className="font-body">
      <header className="flex justify-between items-center p-4 text-black">
        <img src="/your-logo.png" alt="Logo" className="w-12 h-12 object-contain" />
        <div className="flex">
          <a
            href="https://drive.google.com/file/d/1cxh5yVfX-AAN_7Lg-8RnyEM2FrNElfJP/view?usp=sharing"
            className="bg-red-600 hover:bg-red-300 text-white rounded-full px-4 py-2 mr-2">
            Guidelines
          </a>

          <a
            href="http://bit.ly/communityhallproject"
            className="bg-blue-500 hover:bg-blue-300 text-white rounded-full px-4 py-2 mr-2">
            Submit
          </a>

          {/* <Link href="/login">
            <div className="bg-red-600 hover:bg-red-300 text-white rounded-full px-4 py-2 cursor-pointer">
              Sign up
            </div>
          </Link> */}
        </div>
      </header>


      <div className="flex flex-col justify-center items-center md:flex-row">
        <div className="max-w-full md:max-w-1/2 md:pr-8">
          <p className="text-5xl font-bold mb-4">Your Design<br /> Their Future</p>
          <p className="text-shadow desctext">
            Join a historic mission to design 100<br />
            community centers across Tamil Nadu!<br /><br />
            Compete to shape the future of your community<br />
            through innovative design. Register now and<br />
            leave a lasting legacy.
          </p>
        </div>

        <div className="max-w-full md:max-w-1/2 mt-4 md:mt-0">
          <img src="/homebg.png" alt="Target" className="h-auto w-full" />
        </div>
      </div>
      {/* <p className="text-center font-bold text-3xl mt-4">You have: 20 hours left to submit your design</p> */}

     

     <p className="text-center font-bold text-3xl mt-4">
        You have: {timeLeft[maxUnit as keyof typeof timeLeft]} {maxUnit}
        {timeLeft[maxUnit as keyof typeof timeLeft] > 1 ? '' : ''} left to submit your design
      </p>
    </div>
  );
};

export default LibrariesPage;



