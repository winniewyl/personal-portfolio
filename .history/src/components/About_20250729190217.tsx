import React from 'react';

const About: React.FC = () => (
  <section className="w-full flex flex-col items-center">
    <h2 className="text-4xl font-extrabold text-center mb-4 mt-4 text-gray-900 dark:text-white">
      About Me
    </h2>
    <div className="w-full max-w-6xl">
      {/* Map effect will be added here */}
      <div className="text-center text-gray-600 dark:text-gray-400">
        Map effect coming soon...
      </div>
    </div>
  </section>
);

export default About;
