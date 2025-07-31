import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

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
          <Hero
            name="Winnie Wang"
            role="AI Product Analyst"
            resumeLink="/Winnie_Wang_Resume.pdf"
          />
        </section>
        <section
          id="about"
          className="w-full flex flex-col items-center py-16 sm:py-20 max-w-3xl mx-auto"
        >
          <About />
        </section>
        {/* Placeholder for Experience */}
        <section
          id="experience"
          className="w-full flex flex-col items-center py-16 sm:py-20 max-w-3xl mx-auto"
        >
          <h2 className="text-2xl font-bold mb-4">Experience</h2>
          <p className="max-w-xl text-center text-gray-700 dark:text-gray-300">
            Add your experience here.
          </p>
        </section>
        <section
          id="projects"
          className="w-full flex flex-col items-center py-16 sm:py-20 max-w-3xl mx-auto"
        >
          <Projects />
        </section>
        <section
          id="education"
          className="w-full flex flex-col items-center py-16 sm:py-20 max-w-3xl mx-auto"
        >
          <h2 className="text-2xl font-bold mb-4">Education</h2>
          <p className="max-w-xl text-center text-gray-700 dark:text-gray-300">
            Add your education here.
          </p>
        </section>
        <section
          id="contact"
          className="w-full flex flex-col items-center py-16 sm:py-20 max-w-3xl mx-auto"
        >
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}
