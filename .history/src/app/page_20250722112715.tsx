import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="font-sans flex flex-col items-center justify-center min-h-screen p-8 sm:p-20">
      <Hero
        name="Winnie Wang"
        role="AI Product Analyst"
        resumeLink="/Winnie_Wang_Resume.pdf"
      />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
