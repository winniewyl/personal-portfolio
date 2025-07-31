'use client';

import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import { useState, useEffect } from 'react';

const experienceData = [
  {
    org: 'Data Intensive Studies Center',
    title: 'Data Analyst Intern & Co-Author',
    date: 'Jun 2023 – Dec 2023',
    highlights: [
      'Developed a custom Drupal-based content management site to present visualizations and insights from research on AI/ML ethics, integrating cross-functional feedback and automation techniques to enhance visibility.',
      'Co-led the development of an open-source AI Ethics tool using GitBook, contributing to interface design, stakeholder engagement, and survey analysis in the context of autonomous vehicle applications.',
      'Co-authored The Third Moment of AI Ethics, published on arXiv: https://arxiv.org/abs/2501.16954.',
    ],
  },
  {
    org: 'Tufts StAAR Center',
    title: 'Computer Science Tutor',
    date: 'Sept 2022 – Jun 2023',
    highlights: [
      'Tutored students from three distinct classes: Introduction to Computer Science, Data Structures, and Web Programming.',
      'Conducted one-on-one sessions with an average of three students per week, addressing questions and providing guidance on homework and class projects.',
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
    title: 'Digital Transformation of Johnson & Johnson',
    role: 'Analyst',
    date: 'Fall 2024',
    highlights: [
      'Conducted thorough data analysis on the digital transformation of medical company Johnson & Johnson by examining its business model, value creation model, profit model, and logic of business.',
      'Created high-impact presentations that translated technical findings into business-oriented recommendations to predict future trends.',
      'Developed a pricing model to support strategic product positioning; forecasted future trends using historical sales and competitive data.',
    ],
  },
  {
    title: 'Data Intensive Studies Center',
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
  const [currentSection, setCurrentSection] = useState('hero');
  const [currentProject, setCurrentProject] = useState(0);

  useEffect(() => {
    const sections = ['hero', 'about', 'experience', 'projects', 'education'];
    const sectionColors = {
      hero: 'text-violet-600',
      about: 'text-blue-600',
      experience: 'text-green-600',
      projects: 'text-yellow-600',
      education: 'text-pink-600',
    };

    const observers = sections.map((sectionId) => {
      const element =
        sectionId === 'hero'
          ? document.querySelector('section:first-of-type')
          : document.getElementById(sectionId);

      if (!element) return null;

      return new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setCurrentSection(sectionId);
            }
          });
        },
        { threshold: 0.5 }
      );
    });

    observers.forEach((observer, index) => {
      if (observer) {
        const sectionId = sections[index];
        const element =
          sectionId === 'hero'
            ? document.querySelector('section:first-of-type')
            : document.getElementById(sectionId);
        if (element) {
          observer.observe(element);
        }
      }
    });

    return () => {
      observers.forEach((observer) => {
        if (observer) observer.disconnect();
      });
    };
  }, []);

  const getNavbarColor = () => {
    const colors = {
      hero: 'text-violet-600',
      about: 'text-blue-600',
      experience: 'text-green-600',
      projects: 'text-yellow-600',
      education: 'text-pink-600',
    };
    return colors[currentSection as keyof typeof colors] || 'text-violet-600';
  };

  const getNavLinkColor = (section: string) => {
    const colors = {
      about: 'text-blue-600',
      experience: 'text-green-600',
      projects: 'text-yellow-600',
      education: 'text-pink-600',
    };
    return currentSection === section
      ? colors[section as keyof typeof colors]
      : 'text-gray-900 dark:text-white';
  };

  const getNavHoverColor = () => {
    const colors = {
      hero: 'hover:bg-violet-100 dark:hover:bg-violet-900/30',
      about: 'hover:bg-blue-100 dark:hover:bg-blue-900/30',
      experience: 'hover:bg-green-100 dark:hover:bg-green-900/30',
      projects: 'hover:bg-yellow-100 dark:hover:bg-yellow-900/30',
      education: 'hover:bg-pink-100 dark:hover:bg-pink-900/30',
    };
    return (
      colors[currentSection as keyof typeof colors] ||
      'hover:bg-violet-100 dark:hover:bg-violet-900/30'
    );
  };

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projectData.length);
  };

  const prevProject = () => {
    setCurrentProject(
      (prev) => (prev - 1 + projectData.length) % projectData.length
    );
  };

  const goToProject = (index: number) => {
    setCurrentProject(index);
  };

  return (
    <div className="font-sans min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="w-full sticky top-0 z-10 bg-white/80 dark:bg-[#101010]/80 backdrop-blur border-b border-gray-100 dark:border-gray-800">
        <div className="w-full flex items-center justify-between py-4 sm:py-6 px-4 sm:px-8">
          <div
            className={`text-lg sm:text-xl md:text-2xl font-extrabold tracking-tight transition-colors duration-300 ${getNavbarColor()} cursor-pointer hover:opacity-80`}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Winnie Wang
          </div>
          <ul className="flex gap-2 sm:gap-4 md:gap-8 text-sm sm:text-base font-medium">
            <li>
              <a
                href="#about"
                className={`px-2 sm:px-3 py-1 sm:py-2 rounded-lg ${getNavHoverColor()} transition-all duration-300 ${getNavLinkColor(
                  'about'
                )}`}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#experience"
                className={`px-2 sm:px-3 py-1 sm:py-2 rounded-lg ${getNavHoverColor()} transition-all duration-300 ${getNavLinkColor(
                  'experience'
                )}`}
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className={`px-2 sm:px-3 py-1 sm:py-2 rounded-lg ${getNavHoverColor()} transition-all duration-300 ${getNavLinkColor(
                  'projects'
                )}`}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#education"
                className={`px-2 sm:px-3 py-1 sm:py-2 rounded-lg ${getNavHoverColor()} transition-all duration-300 ${getNavLinkColor(
                  'education'
                )}`}
              >
                Education
              </a>
            </li>
          </ul>
        </div>
      </nav>
      {/* Main Content */}
      <main className="flex-1 w-full flex flex-col items-center">
        <section className="w-full flex flex-col items-center justify-center py-8 sm:py-12 md:py-16 lg:py-20 bg-violet-50 dark:bg-violet-900/20 relative min-h-screen">
          {/* Headshot */}
          <img
            src="/my-headshot.png"
            alt="Winnie Wang"
            className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 object-contain"
          />
        </section>
        <section
          id="about"
          className="w-full flex flex-col items-center py-12 sm:py-12 md:py-16 lg:py-20 bg-blue-50 dark:bg-blue-900/20"
        >
          <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <About />
          </div>
        </section>
        {/* Experience Section */}
        <section
          id="experience"
          className="w-full flex flex-col items-center py-12 sm:py-12 md:py-16 lg:py-20 bg-green-50 dark:bg-green-900/20 min-h-screen"
        >
          <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 lg:mb-10 text-green-600 dark:text-green-400">
              Professional Experience
            </h2>
            <div className="space-y-8">
              {experienceData.map((exp, idx) => (
                <div
                  key={exp.title}
                  className="bg-white dark:bg-[#232336] rounded-xl shadow-lg p-4 sm:p-6 transform translate-y-8 opacity-0 animate-fade-in-up"
                  style={{
                    animationDelay: `${idx * 200}ms`,
                    animationFillMode: 'forwards',
                  }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 sm:mb-4">
                    <div>
                      <h3 className="font-semibold text-lg sm:text-xl text-gray-900 dark:text-white mb-1">
                        {exp.title}
                      </h3>
                      <div className="text-base sm:text-lg font-medium text-green-700 dark:text-green-300 mb-1">
                        {exp.org}
                      </div>
                      <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                        {exp.date}
                      </div>
                    </div>
                  </div>
                  <ul className="list-disc pl-4 sm:pl-5 space-y-1 sm:space-y-2 text-sm sm:text-base text-gray-700 dark:text-gray-300">
                    {exp.highlights.map((h, i) => (
                      <li key={i} className="leading-relaxed">
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Projects Section */}
        <section
          id="projects"
          className="w-full flex flex-col items-center py-12 sm:py-12 md:py-16 lg:py-20 bg-yellow-50 dark:bg-yellow-900/20 min-h-screen"
        >
          <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 lg:mb-10 text-yellow-600 dark:text-yellow-400">
              Research Projects
            </h2>
            <div className="relative w-full max-w-6xl mx-auto">
              {/* Carousel Container */}
              <div className="relative overflow-hidden rounded-xl">
                <div className="flex transition-transform duration-500 ease-in-out">
                  {projectData.map((proj, idx) => (
                    <div
                      key={proj.title}
                      className="w-full flex-shrink-0 bg-white dark:bg-[#232336] rounded-xl shadow-lg p-4 sm:p-6 px-6 sm:px-12"
                      style={{
                        transform: `translateX(-${currentProject * 100}%)`,
                      }}
                    >
                      <div className="text-center mx-4 sm:mx-8">
                        {/* Project Header */}
                        <div className="mb-3 sm:mb-4">
                          <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2">
                            {proj.title}
                          </h3>
                          <div className="text-sm sm:text-base font-medium text-yellow-700 dark:text-yellow-300 mb-1">
                            {proj.role}
                          </div>
                          <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                            {proj.date}
                          </div>
                        </div>

                        {/* Project Details */}
                        <div className="text-left">
                          <ul className="list-disc pl-4 sm:pl-5 space-y-1 sm:space-y-2 text-sm sm:text-base text-gray-700 dark:text-gray-300">
                            {proj.highlights.map((h, i) => (
                              <li key={i} className="leading-relaxed">
                                {h}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevProject}
                className="absolute left-1 top-1/2 -translate-y-1/2 bg-white dark:bg-[#232336] rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110"
                aria-label="Previous project"
              >
                <svg
                  className="w-5 h-5 text-yellow-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <button
                onClick={nextProject}
                className="absolute right-1 top-1/2 -translate-y-1/2 bg-white dark:bg-[#232336] rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110"
                aria-label="Next project"
              >
                <svg
                  className="w-5 h-5 text-yellow-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>

              {/* Dots Indicator */}
              <div className="flex justify-center mt-6 space-x-2">
                {projectData.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => goToProject(idx)}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      idx === currentProject
                        ? 'bg-yellow-600 scale-125'
                        : 'bg-gray-300 dark:bg-gray-600 hover:bg-yellow-400'
                    }`}
                    aria-label={`Go to project ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
        <section
          id="education"
          className="w-full flex flex-col items-center py-12 sm:py-12 md:py-16 lg:py-20 bg-pink-50 dark:bg-pink-900/20 min-h-screen"
        >
          <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 lg:mb-10 text-pink-600 dark:text-pink-400">
              Education
            </h2>
            <div className="relative w-full flex flex-col lg:flex-row items-center justify-center">
              {/* Education Cards */}
              <div className="flex flex-col lg:flex-row items-center justify-center w-full gap-6 sm:gap-8 lg:gap-0">
                {/* Middle School */}
                <div
                  className="group w-64 h-64 sm:w-72 sm:h-72 lg:flex-1 relative lg:-mr-12 transform rotate-3 hover:rotate-0 transition-all duration-300 perspective-1000"
                  data-flipped="false"
                >
                  {/* Front Side - Logo */}
                  <div className="absolute inset-0 bg-white dark:bg-[#232336] rounded-xl shadow-xl p-4 sm:p-6 border border-pink-100 dark:border-pink-700 text-center flex flex-col items-center justify-center backface-hidden group-hover:rotate-y-180 group-data-[flipped=true]:rotate-y-180 transition-transform duration-1000">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 flex items-center justify-center rounded-full bg-white/30 backdrop-blur-md shadow-inner">
                      <img
                        src="/yu-hua-logo.png"
                        alt="江西育华学校 logo"
                        className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 object-contain filter grayscale"
                        style={{ mixBlendMode: 'multiply' }}
                      />
                    </div>
                  </div>
                  {/* Back Side - Description */}
                  <div className="absolute inset-0 bg-white dark:bg-[#232336] rounded-xl shadow-xl p-4 sm:p-6 border border-pink-100 dark:border-pink-700 text-center flex flex-col items-center justify-center backface-hidden rotate-y-180 group-hover:rotate-y-0 group-data-[flipped=true]:rotate-y-0 transition-transform duration-1000">
                    <div className="flex flex-col items-center space-y-1 sm:space-y-2">
                      <span className="font-bold text-sm sm:text-base lg:text-lg text-pink-700">
                        江西育华学校
                      </span>
                      <span className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                        2014–2017
                      </span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        Middle School
                      </span>
                    </div>
                  </div>
                </div>
                {/* High School */}
                <div className="group w-64 h-64 sm:w-72 sm:h-72 lg:flex-1 relative lg:-mr-12 transform -rotate-3 hover:rotate-0 transition-all duration-300 perspective-1000">
                  {/* Front Side - Logo */}
                  <div className="absolute inset-0 bg-white dark:bg-[#232336] rounded-xl shadow-xl p-4 sm:p-6 border border-pink-100 dark:border-pink-700 text-center flex flex-col items-center justify-center backface-hidden group-hover:rotate-y-180 transition-transform duration-1000">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 flex items-center justify-center rounded-full bg-white/30 backdrop-blur-md shadow-inner">
                      <img
                        src="/JXSDFZ-logo.png"
                        alt="江西师大附中国际部 logo"
                        className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 object-contain filter grayscale"
                        style={{ mixBlendMode: 'multiply' }}
                      />
                    </div>
                  </div>
                  {/* Back Side - Description */}
                  <div className="absolute inset-0 bg-white dark:bg-[#232336] rounded-xl shadow-xl p-4 sm:p-6 border border-pink-100 dark:border-pink-700 text-center flex flex-col items-center justify-center backface-hidden rotate-y-180 group-hover:rotate-y-0 transition-transform duration-1000">
                    <div className="flex flex-col items-center space-y-1 sm:space-y-2">
                      <span className="font-bold text-sm sm:text-base lg:text-lg text-pink-700">
                        江西师大附中国际部
                      </span>
                      <span className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                        High School Diploma
                      </span>
                      <span className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                        2017–2020
                      </span>
                    </div>
                  </div>
                </div>
                {/* Tufts University */}
                <div className="group w-64 h-64 sm:w-72 sm:h-72 lg:flex-1 relative lg:-mr-12 transform rotate-5 hover:rotate-0 transition-all duration-300 perspective-1000">
                  {/* Front Side - Logo */}
                  <div className="absolute inset-0 bg-white dark:bg-[#232336] rounded-xl shadow-xl p-4 sm:p-6 border border-pink-100 dark:border-pink-700 text-center flex flex-col items-center justify-center backface-hidden group-hover:rotate-y-180 transition-transform duration-1000">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 flex items-center justify-center rounded-full bg-white/30 backdrop-blur-md shadow-inner">
                      <img
                        src="/tufts-logo.png"
                        alt="Tufts University logo"
                        className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 object-contain filter grayscale"
                        style={{ mixBlendMode: 'multiply' }}
                      />
                    </div>
                  </div>
                  {/* Back Side - Description */}
                  <div className="absolute inset-0 bg-white dark:bg-[#232336] rounded-xl shadow-xl p-4 sm:p-6 border border-pink-100 dark:border-pink-700 text-center flex flex-col items-center justify-center backface-hidden rotate-y-180 group-hover:rotate-y-0 transition-transform duration-1000">
                    <div className="flex flex-col items-center space-y-1 sm:space-y-2">
                      <span className="font-bold text-sm sm:text-base lg:text-lg text-pink-700">
                        Tufts University
                      </span>
                      <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                        May 2024
                      </span>
                      <span className="text-xs sm:text-sm text-gray-900 dark:text-white text-center">
                        B.S. in Applied Mathematics & Computer Science
                      </span>
                      <span className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                        GPA: 3.83 / 4.00
                      </span>
                      <span className="text-xs text-emerald-600">
                        Summa Cum Laude, Dean's List
                      </span>
                    </div>
                  </div>
                </div>
                {/* Purdue University */}
                <div className="group w-64 h-64 sm:w-72 sm:h-72 lg:flex-1 relative transform -rotate-5 hover:rotate-0 transition-all duration-300 perspective-1000">
                  {/* Front Side - Logo */}
                  <div className="absolute inset-0 bg-white dark:bg-[#232336] rounded-xl shadow-xl p-4 sm:p-6 border border-pink-100 dark:border-pink-700 text-center flex flex-col items-center justify-center backface-hidden group-hover:rotate-y-180 transition-transform duration-1000">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 flex items-center justify-center rounded-full bg-white/30 backdrop-blur-md shadow-inner">
                      <img
                        src="/purdue-logo.png"
                        alt="Purdue University logo"
                        className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 object-contain filter grayscale"
                        style={{ mixBlendMode: 'multiply' }}
                      />
                    </div>
                  </div>
                  {/* Back Side - Description */}
                  <div className="absolute inset-0 bg-white dark:bg-[#232336] rounded-xl shadow-xl p-4 sm:p-6 border border-pink-100 dark:border-pink-700 text-center flex flex-col items-center justify-center backface-hidden rotate-y-180 group-hover:rotate-y-0 transition-transform duration-1000">
                    <div className="flex flex-col items-center space-y-1 sm:space-y-2">
                      <span className="font-bold text-sm sm:text-base lg:text-lg text-pink-700">
                        Purdue University
                      </span>
                      <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                        Expected Jun 2026
                      </span>
                      <span className="text-xs sm:text-sm text-gray-900 dark:text-white text-center">
                        Master of Business and Technology
                      </span>
                      <span className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                        GPA: 3.75 / 4.00
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* Footer */}
      <footer className="w-full py-8 sm:py-12 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center space-y-8">
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
