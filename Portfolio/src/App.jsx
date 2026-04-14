import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Certifications from './components/Certifications'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Contribution from './components/Contribution'
import Contact from './components/Contact'
import SocialStrip from './components/SocialStrip'
import './App.css'
import { motion } from 'framer-motion'

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setDarkMode(savedTheme === 'dark');
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <div className="app">
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />

      <main>
        {/* 1. Hero */}
        <Hero />

        {/* 2. Projects */}
        <Projects />

        {/* 3. Experience + Certifications — side by side */}
        <section className="section">
          <div className="container">
            <div className="exp-cert-grid">
              <Experience />
              <Certifications />
            </div>
          </div>
        </section>

        {/* 4. Skills */}
        <Skills />

        {/* 5. About */}
        <About />

        {/* 6. Contribution */}
        <Contribution />

        {/* 7. Contact */}
        <Contact />
      </main>

      <footer className="footer">
        <p>Built with ❤️ by Ashish Bairwa</p>
      </footer>
    </div>
  );
}

export default App
