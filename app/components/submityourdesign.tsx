import React from 'react';
import Link from 'next/link';

const SubmitDesignsPage: React.FC = () => {
  return (
    <div className="font-body p-10 md:p-20">
      <h2 className="text-left font-bold text-5xl mb-5 md:mb-10">Submit Your Designs:</h2>

      <ul className="text-left list-disc pl-4 md:pl-8 mb-5 md:mb-8">
        <li className="mb-3">Submissions must be in A2 digital boards, oriented in landscape format, accompanied by a 3D render of the design</li>
        <li className="mb-3">Two separate text boxes will be provided in the submission portal: one for the design description (300 words) and another for any additional information about the design</li>
        <li className="mb-3">The participants should submit the required documents in the submission portal, and should also send it via email to abcdxxx@gmail.com.</li>
      </ul>

<div className="flex justify-center items-center">
<a
            href="http://bit.ly/communityhallproject"
            className="bg-blue-500 hover:bg-blue-300 text-white rounded-full px-4 py-2 mr-2">
            Submit
          </a>
</div>
         

      {/* <div className="flex justify-center mb-5 md:mb-8">
        <button className="bg-red-600 hover:bg-red-300 text-white rounded-full px-4 py-2" type="button">
          Submit
        </button>
      </div> */}
      <div className="text-center italic mb-5 md:mb-8">
        You will be redirected to a different page to submit your designs
      </div>

      <footer className="mt-8 bg-blue-300">
        <div className="footertop flex justify-between">
          <img src="/your-logo.png" alt="Logo" className="w-16 h-16 m-5 object-contain" />
          <span className="write-to-us font-bold m-5 text-right">
            Write to us:<br />
            <div className="flex items-center justify-end">
              <input
                type="text"
                placeholder="Ask a question"
                className="rounded-l-full p-2 w-48"
              />
              <button
                type="button"
                className="bg-red-600 text-white rounded-r-full px-4 py-2"
                // Add your onClick handler for the send button here
              >
                Send
              </button>
            </div>
            <p className="italic text-right">
              If you have any questions, please feel free to<br /> contact us. We typically respond within 24 hours.
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
            <span>Powered by PEN</span>
          </div>
          <div>
            abc@domain.com
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SubmitDesignsPage;