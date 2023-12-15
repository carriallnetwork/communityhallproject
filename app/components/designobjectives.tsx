import React from 'react';

const DesignObjectivesPage: React.FC = () => {
  return (
    <div className="font-body p-10 md:p-20">
      <div className="flex items-center justify-start md:items-start p-10">
        <div className="mr-5">
          <img src="/target.png" alt="Target" className="w-20 h-20" />
        </div>

        <div className="p-4 text-5xl font-bold text-gray-800">
          <h1>Design Objectives</h1>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between p-5" id="main-section">
        <div className="w-full md:w-2/5 text-justify mb-5 md:mb-0">
          <p>
            <b>Accessibility & Inclusivity</b><br />
            Ensure a single-story design with accessible amenities for all users<br />
            <br />
            <b>Vibrant Community Hub</b><br />
            Foster community engagement through flexible spaces and outdoor areas.
          </p>
        </div>
        <div className="w-full md:w-2/5 text-justify">
          <p>
            <b>Cultural Celebration</b><br />
            Reflect the unique cultural heritage of Tamil Nadu through design elements<br />
            <br />
            <b>Sustainable Future</b><br />
            Employ eco-friendly strategies for long-term environmental impact.
          </p>
        </div>
      </div>

      <div className="text-center mt-10" id="download-text">
        <p>
          Download guidelines here as a PDF file:{' '}
          <a
            id="download-link"
            href="https://drive.google.com/file/d/1cxh5yVfX-AAN_7Lg-8RnyEM2FrNElfJP/view?usp=sharing"
            target="_blank"
            className="text-blue-500 underline"
          >
            guidelines.pdf
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default DesignObjectivesPage;
