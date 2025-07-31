import React from 'react';

const aboutData = [
  {
    icon: (
      <span className="bg-blue-100 text-blue-600 rounded-xl p-2 mr-2">
        {/* AI Icon */}
        <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 17.93V20a1 1 0 11-2 0v-.07A8.001 8.001 0 014.07 13H4a1 1 0 110-2h.07A8.001 8.001 0 0111 4.07V4a1 1 0 112 0v.07A8.001 8.001 0 0119.93 11H20a1 1 0 110 2h-.07A8.001 8.001 0 0113 19.93z"
          ></path>
        </svg>
      </span>
    ),
    title: 'AI & Machine Learning',
    skills: [
      {
        name: 'Neural Networks',
        desc: 'Deep learning architectures and training',
      },
      {
        name: 'Computer Vision',
        desc: 'Image processing and object detection',
      },
      { name: 'TensorFlow/PyTorch', desc: 'ML framework expertise' },
      { name: 'Model Optimization', desc: 'Performance tuning and deployment' },
    ],
    color: 'blue',
  },
  {
    icon: (
      <span className="bg-fuchsia-100 text-fuchsia-600 rounded-xl p-2 mr-2">
        {/* Full-Stack Icon */}
        <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M12 2a10 10 0 100 20 10 10 0 000-20zm-1 17.93V20a1 1 0 102 0v-.07A8.001 8.001 0 0020 13h.07a1 1 0 100-2H20a8.001 8.001 0 00-7-7.93V4a1 1 0 10-2 0v.07A8.001 8.001 0 004 11H3.93a1 1 0 100 2H4a8.001 8.001 0 007 7.93z"
          ></path>
        </svg>
      </span>
    ),
    title: 'Full-Stack Development',
    skills: [
      { name: 'React.js/Next.js', desc: 'Modern frontend frameworks' },
      { name: 'Python/Flask', desc: 'Backend development and APIs' },
      { name: 'Database Design', desc: 'SQL and data architecture' },
      { name: 'Cloud Deployment', desc: 'Scalable application hosting' },
    ],
    color: 'fuchsia',
  },
  {
    icon: (
      <span className="bg-green-100 text-green-600 rounded-xl p-2 mr-2">
        {/* Data Science Icon */}
        <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" fill="currentColor" opacity=".2" />
          <circle cx="12" cy="12" r="6" fill="currentColor" />
        </svg>
      </span>
    ),
    title: 'Data Science',
    skills: [
      { name: 'Data Analysis', desc: 'Statistical analysis and insights' },
      { name: 'Visualization', desc: 'Interactive charts and dashboards' },
      {
        name: 'Algorithm Design',
        desc: 'Efficient problem-solving approaches',
      },
      { name: 'Research Methods', desc: 'Scientific approach to development' },
    ],
    color: 'green',
  },
];

const About: React.FC = () => (
  <section className="w-full flex flex-col items-center">
    <h2 className="text-4xl font-extrabold text-center mb-4 mt-4 text-gray-900 dark:text-white">
      <span className="inline-block align-middle mr-2 text-blue-500">•</span>
      About Me
    </h2>
    <p className="text-lg text-center text-gray-700 dark:text-gray-300 max-w-2xl mb-12">
      Passionate about the intersection of artificial intelligence and product
      strategy. I build intelligent solutions that drive business value and user
      engagement.
    </p>
    <div className="w-full max-w-6xl flex flex-col md:flex-row gap-8 justify-center items-stretch">
      {aboutData.map((card, idx) => (
        <div
          key={card.title}
          className="flex-1 bg-white dark:bg-[#18181c] rounded-2xl shadow-md p-8 flex flex-col mb-4 md:mb-0 border border-gray-100 dark:border-gray-800 min-w-[260px] max-w-sm mx-auto"
        >
          <div className="flex items-center mb-4">
            {card.icon}
            <span className={`text-lg font-bold text-gray-900 dark:text-white`}>
              {card.title}
            </span>
          </div>
          <ul className="space-y-3">
            {card.skills.map((skill) => (
              <li key={skill.name} className="flex flex-col">
                <span
                  className={`font-semibold text-${card.color}-700 dark:text-${card.color}-400`}
                >
                  {skill.name}
                </span>
                <span className="text-gray-600 dark:text-gray-400 text-sm">
                  {skill.desc}
                </span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
);

export default About;
