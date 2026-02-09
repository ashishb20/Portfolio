import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contribution from './components/Contribution'
import Contact from './components/Contact'
import './App.css'

function App() {
    const [darkMode, setDarkMode] = useState(true);
    useEffect( () => {
        const savedTheme = localStorage.getItem('theme');
        if(savedTheme) {
            setDarkMode(savedTheme === 'dark');;
        } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setDarkMode(true);
        }
    }, []);

    useEffect( () => {
        document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
        localStorage.setItem('theme', darkMode ? 'dark' : 'light');
    }, [darkMode]);

    const toggleTheme = () => {
        setDarkMode(!darkMode);
    };

    return (
    <div className="app">
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <Projects />
        <Contribution />
        <About />
        <Contact />
      </main>

      <footer style={{
        textAlign: 'center',
        padding: '2rem',
        color: 'var(--text-secondary)',
        fontSize: '0.9rem',
        marginTop: 'auto'
      }}>
        <p>Built with ❤️ by Ashish Bairwa</p>
      </footer>
    </div>
  );
}

export default App
