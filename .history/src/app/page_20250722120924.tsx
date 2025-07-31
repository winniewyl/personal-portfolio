import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

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
          WW
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
          <li>
            <a
              href="#contact"
              className="hover:text-violet-600 transition-colors"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
      {/* Main Content */}
      <main className="flex-1 w-full flex flex-col items-center px-4 sm:px-0">
        <section className="w-full flex flex-col items-center justify-center py-20 sm:py-28 bg-transparent">
          <Hero name="Winnie Wang" role="AI Product Analyst" />
        </section>
        <section
          id="about"
          className="w-full flex flex-col items-center py-20 sm:py-28 max-w-5xl mx-auto scroll-mt-24"
        >
          <About />
        </section>
        {/* Experience Section */}
        <section
          id="experience"
          className="w-full flex flex-col items-center py-20 sm:py-28 max-w-5xl mx-auto scroll-mt-24"
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
          className="w-full flex flex-col items-center py-20 sm:py-28 max-w-5xl mx-auto scroll-mt-24"
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
            <div className="flex flex-col md:flex-row items-center justify-center w-full gap-8 z-10">
              {/* Middle School */}
              <div className="flex flex-col items-center flex-1 min-w-[220px] max-w-[220px] bg-white dark:bg-[#232336] rounded-xl shadow p-6 border border-violet-100 dark:border-violet-700 text-center">
                <span className="flex items-center justify-center w-10 h-10 bg-violet-100 rounded-full mb-2">
                  <svg
                    className="w-6 h-6 text-violet-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 11H9v-2h2v2zm0-4H9V7h2v2z" />
                  </svg>
                </span>
                <span className="font-bold text-lg text-violet-700">
                  江西育华学校
                </span>
                <span className="text-sm text-gray-700 dark:text-gray-300">
                  2014–2017
                </span>
              </div>
              {/* High School */}
              <div className="flex flex-col items-center flex-1 min-w-[220px] max-w-[220px] bg-white dark:bg-[#232336] rounded-xl shadow p-6 border border-violet-100 dark:border-violet-700 text-center">
                <span className="flex items-center justify-center w-10 h-10 bg-violet-100 rounded-full mb-2">
                  <svg
                    className="w-6 h-6 text-violet-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 11H9v-2h2v2zm0-4H9V7h2v2z" />
                  </svg>
                </span>
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
              {/* Tufts University */}
              <div className="flex flex-col items-center flex-1 min-w-[220px] max-w-[220px] bg-white dark:bg-[#232336] rounded-xl shadow p-6 border border-violet-100 dark:border-violet-700 text-center">
                <span className="flex items-center justify-center w-10 h-10 bg-violet-100 rounded-full mb-2">
                  <svg
                    className="w-6 h-6 text-violet-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 11H9v-2h2v2zm0-4H9V7h2v2z" />
                  </svg>
                </span>
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
                <span className="text-xs text-emerald-600 mt-1">
                  Summa Cum Laude, Dean’s List (all quarters)
                </span>
              </div>
              {/* Purdue University */}
              <div className="flex flex-col items-center flex-1 min-w-[220px] max-w-[220px] bg-white dark:bg-[#232336] rounded-xl shadow p-6 border border-violet-100 dark:border-violet-700 text-center">
                <span className="flex items-center justify-center w-10 h-10 bg-violet-100 rounded-full mb-2">
                  <svg
                    className="w-6 h-6 text-violet-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 11H9v-2h2v2zm0-4H9V7h2v2z" />
                  </svg>
                </span>
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
        </section>
        <section
          id="contact"
          className="w-full flex flex-col items-center py-20 sm:py-28 max-w-5xl mx-auto scroll-mt-24"
        >
          <Contact />
        </section>
      </main>
    </div>
  );
}
