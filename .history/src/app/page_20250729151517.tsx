import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';

const experienceData = [
  {
    org: 'Data Intensive Studies Center, Tufts University',
    title: 'Data Analyst Intern & Co-Author',
    date: 'Jun 2023 – Dec 2023',
    highlights: [
      'Developed a custom Drupal-based content management site to present visualizations and insights from research on AI/ML ethics, integrating cross-functional feedback and automation techniques to enhance visibility.',
      'Co-led the development of an open-source AI Ethics tool using GitBook, contributing to interface design, stakeholder engagement, and survey analysis in the context of autonomous vehicle applications.',
      'Co-authored The Third Moment of AI Ethics, published on arXiv: https://arxiv.org/abs/2501.16954.',
    ],
  },
];

const projectData = [
  {
    title: 'Super Bowl Advertising Analysis Capstone Project',
    role: 'Developer',
    date: 'Summer 2025',
    highlights: [
      'Developed a multi-source data pipeline in Python and Google Colab to scrape 25 years of Super Bowl commercials, extracting YouTube links, Reddit threads, and online commentary for sentiment and theme analysis.',
      'Applied generative AI (Gemini API) and NLP techniques to summarize and classify ads by emotional tone, audience reception, and creative elements, supporting strategic insights for future advertising campaigns.',
    ],
  },
  {
    title:
      'Digital Transformation of Johnson & Johnson, Technology-Driven Business Course',
    role: 'Analyst',
    date: 'Fall 2024',
    highlights: [
      'Conducted thorough data analysis on the digital transformation of medical company Johnson & Johnson by examining its business model, value creation model, profit model, and logic of business.',
      'Created high-impact presentations that translated technical findings into business-oriented recommendations to predict future trends.',
      'Developed a pricing model to support strategic product positioning; forecasted future trends using historical sales and competitive data.',
    ],
  },
  {
    title: 'Data Intensive Studies Center, Tufts University',
    role: 'Researcher',
    date: 'Jun 2023 – Dec 2023',
    highlights: [
      'Simulated and visualized database cache behavior to evaluate the impact of user access patterns and storage strategies on web browser performance, using Python for data analysis and graphical comparisons.',
      'Analyzed cache hit rates across multiple strategies, identified performance drivers, and recommended optimal configurations tailored to specific usage scenarios.',
      'Implemented the recommended cache strategy, increasing hit rates to over 80% and demonstrating practical application of automation and performance optimization principles.',
    ],
  },
];

export default function Home() {
  return (
    <div className="font-sans min-h-screen flex flex-col bg-gradient-to-br from-white via-slate-50 to-slate-100 dark:from-[#18181c] dark:via-[#1a1a22] dark:to-[#101014]">
      {/* Navbar */}
      <nav className="w-full flex items-center justify-between py-6 px-8 border-b border-gray-100 dark:border-gray-800 bg-white/80 dark:bg-[#101010]/80 backdrop-blur z-10 sticky top-0">
        <div className="text-2xl font-extrabold text-violet-600 tracking-tight">
          Winnie Wang
        </div>
        <ul className="flex gap-8 text-base font-medium text-gray-900 dark:text-white">
          <li>
            <a
              href="#about"
              className="hover:text-violet-600 transition-colors"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#experience"
              className="hover:text-violet-600 transition-colors"
            >
              Experience
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="hover:text-violet-600 transition-colors"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#education"
              className="hover:text-violet-600 transition-colors"
            >
              Education
            </a>
          </li>
        </ul>
      </nav>
      {/* Main Content */}
      <main className="flex-1 w-full flex flex-col items-center px-4 sm:px-0">
        <section className="w-full flex flex-col items-center justify-center py-20 sm:py-28 bg-violet-50 dark:bg-violet-900/20 relative">
          {/* Headshot */}
          <img
            src="/my-headshot.png"
            alt="Winnie Wang"
            className="w-80 h-80 object-contain"
          />
        </section>
        <section
          id="about"
          className="w-full flex flex-col items-center py-20 sm:py-28 max-w-5xl mx-auto scroll-mt-24 bg-blue-50 dark:bg-blue-900/20"
        >
          <About />
        </section>
        {/* Experience Section */}
        <section
          id="experience"
          className="w-full flex flex-col items-center py-20 sm:py-28 max-w-5xl mx-auto scroll-mt-24 bg-green-50 dark:bg-green-900/20"
        >
          <h2 className="text-3xl font-bold mb-10 text-violet-700 dark:text-violet-400">
            Internship & Professional Experience
          </h2>
          <ol className="relative border-l-2 border-violet-200 dark:border-violet-700">
            {experienceData.map((exp, idx) => (
              <li key={exp.title} className="mb-12 ml-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-violet-100 rounded-full -left-4 ring-4 ring-white dark:ring-[#18181c]">
                  <svg
                    className="w-5 h-5 text-violet-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 11H9v-2h2v2zm0-4H9V7h2v2z" />
                  </svg>
                </span>
                <div className="bg-white dark:bg-[#232336] rounded-xl shadow p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <span className="font-semibold text-lg text-gray-900 dark:text-white">
                      {exp.title}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {exp.date}
                    </span>
                  </div>
                  <div className="text-md font-medium text-violet-700 dark:text-violet-300 mb-1">
                    {exp.org}
                  </div>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                    {exp.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </section>
        {/* Projects Section */}
        <section
          id="projects"
          className="w-full flex flex-col items-center py-20 sm:py-28 max-w-5xl mx-auto scroll-mt-24 bg-yellow-50 dark:bg-yellow-900/20"
        >
          <h2 className="text-3xl font-bold mb-10 text-violet-700 dark:text-violet-400">
            Academic & Research Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            {projectData.map((proj, idx) => (
              <div
                key={proj.title}
                className="bg-white dark:bg-[#232336] rounded-xl shadow p-6 flex flex-col"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <span className="font-semibold text-lg text-gray-900 dark:text-white">
                    {proj.title}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {proj.date}
                  </span>
                </div>
                <div className="text-md font-medium text-violet-700 dark:text-violet-300 mb-1">
                  {proj.role}
                </div>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                  {proj.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
        <section
          id="education"
          className="w-full flex flex-col items-center py-20 sm:py-28 max-w-5xl mx-auto scroll-mt-24"
        >
          <h2 className="text-3xl font-bold mb-10 text-violet-700 dark:text-violet-400">
            Education
          </h2>
          <div className="relative w-full flex flex-col md:flex-row items-center justify-center">
            {/* Timeline SVG Connector */}
            <svg
              className="hidden md:block absolute left-0 right-0 top-1/2 -translate-y-1/2 z-0"
              height="120"
              width="100%"
              viewBox="0 0 1000 120"
              fill="none"
              preserveAspectRatio="none"
            >
              <path
                d="M 80 60 Q 180 10, 280 60 T 480 60 T 680 60 T 880 60"
                stroke="#a78bfa"
                strokeWidth="4"
                fill="none"
              />
              <circle cx="80" cy="60" r="8" fill="#a78bfa" />
              <circle cx="280" cy="60" r="8" fill="#a78bfa" />
              <circle cx="480" cy="60" r="8" fill="#a78bfa" />
              <circle cx="680" cy="60" r="8" fill="#a78bfa" />
            </svg>
            {/* Education Cards */}
            <div className="flex flex-col md:flex-row items-center justify-center w-full gap-0 z-10">
              {/* Middle School */}
              <div
                className="group flex-1 w-72 h-72 relative -mr-12 transform rotate-3 hover:rotate-0 transition-all duration-300 perspective-1000"
                data-flipped="false"
              >
                {/* Front Side - Logo */}
                <div className="absolute inset-0 bg-white dark:bg-[#232336] rounded-xl shadow-xl p-6 border border-violet-100 dark:border-violet-700 text-center flex flex-col items-center justify-center backface-hidden group-hover:rotate-y-180 group-data-[flipped=true]:rotate-y-180 transition-transform duration-1000">
                  <div className="w-24 h-24 flex items-center justify-center rounded-full bg-white/30 backdrop-blur-md shadow-inner">
                    <img
                      src="/yu-hua-logo.png"
                      alt="江西育华学校 logo"
                      className="w-20 h-20 object-contain filter grayscale"
                      style={{ mixBlendMode: 'multiply' }}
                    />
                  </div>
                </div>
                {/* Back Side - Description */}
                <div className="absolute inset-0 bg-white dark:bg-[#232336] rounded-xl shadow-xl p-6 border border-violet-100 dark:border-violet-700 text-center flex flex-col items-center justify-center backface-hidden rotate-y-180 group-hover:rotate-y-0 group-data-[flipped=true]:rotate-y-0 transition-transform duration-1000">
                  <div className="flex flex-col items-center space-y-2">
                    <span className="font-bold text-lg text-violet-700">
                      江西育华学校
                    </span>
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      2014–2017
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      Middle School
                    </span>
                  </div>
                </div>
              </div>
              {/* High School */}
              <div className="group flex-1 w-72 h-72 relative -mr-12 transform -rotate-3 hover:rotate-0 transition-all duration-300 perspective-1000">
                {/* Front Side - Logo */}
                <div className="absolute inset-0 bg-white dark:bg-[#232336] rounded-xl shadow-xl p-6 border border-violet-100 dark:border-violet-700 text-center flex flex-col items-center justify-center backface-hidden group-hover:rotate-y-180 transition-transform duration-1000">
                  <div className="w-24 h-24 flex items-center justify-center rounded-full bg-white/30 backdrop-blur-md shadow-inner">
                    <img
                      src="/JXSDFZ-logo.png"
                      alt="江西师大附中国际部 logo"
                      className="w-20 h-20 object-contain filter grayscale"
                      style={{ mixBlendMode: 'multiply' }}
                    />
                  </div>
                </div>
                {/* Back Side - Description */}
                <div className="absolute inset-0 bg-white dark:bg-[#232336] rounded-xl shadow-xl p-6 border border-violet-100 dark:border-violet-700 text-center flex flex-col items-center justify-center backface-hidden rotate-y-180 group-hover:rotate-y-0 transition-transform duration-1000">
                  <div className="flex flex-col items-center space-y-2">
                    <span className="font-bold text-lg text-violet-700">
                      江西师大附中国际部
                    </span>
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      High School Diploma
                    </span>
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      2017–2020
                    </span>
                  </div>
                </div>
              </div>
              {/* Tufts University */}
              <div className="group flex-1 w-72 h-72 relative -mr-12 transform rotate-5 hover:rotate-0 transition-all duration-300 perspective-1000">
                {/* Front Side - Logo */}
                <div className="absolute inset-0 bg-white dark:bg-[#232336] rounded-xl shadow-xl p-6 border border-violet-100 dark:border-violet-700 text-center flex flex-col items-center justify-center backface-hidden group-hover:rotate-y-180 transition-transform duration-1000">
                  <div className="w-24 h-24 flex items-center justify-center rounded-full bg-white/30 backdrop-blur-md shadow-inner">
                    <img
                      src="/tufts-logo.png"
                      alt="Tufts University logo"
                      className="w-20 h-20 object-contain filter grayscale"
                      style={{ mixBlendMode: 'multiply' }}
                    />
                  </div>
                </div>
                {/* Back Side - Description */}
                <div className="absolute inset-0 bg-white dark:bg-[#232336] rounded-xl shadow-xl p-6 border border-violet-100 dark:border-violet-700 text-center flex flex-col items-center justify-center backface-hidden rotate-y-180 group-hover:rotate-y-0 transition-transform duration-1000">
                  <div className="flex flex-col items-center space-y-2">
                    <span className="font-bold text-lg text-violet-700">
                      Tufts University
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      May 2024
                    </span>
                    <span className="text-gray-900 dark:text-white">
                      B.S. in Applied Mathematics & Computer Science
                    </span>
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      GPA: 3.83 / 4.00
                    </span>
                    <span className="text-xs text-emerald-600">
                      Summa Cum Laude, Dean's List
                    </span>
                  </div>
                </div>
              </div>
              {/* Purdue University */}
              <div className="group flex-1 w-72 h-72 relative transform -rotate-5 hover:rotate-0 transition-all duration-300 perspective-1000">
                {/* Front Side - Logo */}
                <div className="absolute inset-0 bg-white dark:bg-[#232336] rounded-xl shadow-xl p-6 border border-violet-100 dark:border-violet-700 text-center flex flex-col items-center justify-center backface-hidden group-hover:rotate-y-180 transition-transform duration-1000">
                  <div className="w-24 h-24 flex items-center justify-center rounded-full bg-white/30 backdrop-blur-md shadow-inner">
                    <img
                      src="/purdue-logo.png"
                      alt="Purdue University logo"
                      className="w-20 h-20 object-contain filter grayscale"
                      style={{ mixBlendMode: 'multiply' }}
                    />
                  </div>
                </div>
                {/* Back Side - Description */}
                <div className="absolute inset-0 bg-white dark:bg-[#232336] rounded-xl shadow-xl p-6 border border-violet-100 dark:border-violet-700 text-center flex flex-col items-center justify-center backface-hidden rotate-y-180 group-hover:rotate-y-0 transition-transform duration-1000">
                  <div className="flex flex-col items-center space-y-2">
                    <span className="font-bold text-lg text-violet-700">
                      Purdue University
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      Expected Jun 2026
                    </span>
                    <span className="text-gray-900 dark:text-white">
                      Master of Business and Technology
                    </span>
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      GPA: 3.75 / 4.00
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* Footer */}
      <footer className="w-full py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-8 flex flex-col items-center space-y-8">
          {/* Social Media Icons */}
          <div className="flex space-x-8">
            <a
              href="https://www.instagram.com/winnie0302_wyl"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 dark:text-gray-200 hover:text-pink-500 transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/yuling.wang.9822/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 dark:text-gray-200 hover:text-blue-600 transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/yuling-winnie-wang-8634171b6/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 dark:text-gray-200 hover:text-blue-700 transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="#"
              className="text-gray-800 dark:text-gray-200 hover:text-green-500 transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.659-2.24-9.239-2.759-13.561-1.5-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15.6 10.561 19.8 13.2c.361.181.54.78.361 1.26zm.12-3.48C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
              </svg>
            </a>
            <a
              href="https://github.com/winniewyl/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 dark:text-gray-200 hover:text-gray-900 transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </div>

          {/* Acknowledgment Text */}
          <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
            Last updated August 2025.
          </p>
        </div>
      </footer>
      <script
        dangerouslySetInnerHTML={{
          __html: `
          document.addEventListener('DOMContentLoaded', function() {
            const educationSection = document.getElementById('education');
            const cards = document.querySelectorAll('[data-flipped]');
            let isInEducationSection = false;
            
            // Track if user is in education section
            const observer = new IntersectionObserver((entries) => {
              entries.forEach(entry => {
                if (entry.isIntersecting) {
                  isInEducationSection = true;
                } else {
                  isInEducationSection = false;
                  // Reset all cards when leaving education section
                  cards.forEach(card => {
                    card.setAttribute('data-flipped', 'false');
                  });
                }
              });
            }, { threshold: 0.5 });
            
            if (educationSection) {
              observer.observe(educationSection);
            }
            
            // Handle card hover
            cards.forEach(card => {
              card.addEventListener('mouseenter', function() {
                const isFlipped = this.getAttribute('data-flipped') === 'true';
                this.setAttribute('data-flipped', (!isFlipped).toString());
              });
            });
          });
        `,
        }}
      />
    </div>
  );
}
