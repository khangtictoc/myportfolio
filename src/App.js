import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Achievements from './components/Achievements';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Make sure Tailwind CSS is properly installed and configured
// If styling is not working:
// 1. Check that tailwindcss, postcss, and autoprefixer are installed
// 2. Verify that tailwind.config.js and postcss.config.js exist and are configured
// 3. Ensure index.css has the @tailwind directives

function App() {
  return (
    <div className="bg-light text-text-primary">
      <Header />
      <main>
        <Hero />
        <About />
        <TechStack />
        <Achievements />
        <Education />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
