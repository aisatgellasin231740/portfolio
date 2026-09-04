import { useState, useEffect } from 'react'
import Navbar   from './components/Navbar'
import Hero     from './components/Hero'
import Projects from './components/Projects'
import Skills   from './components/Skills'
import Resume   from './components/Resume'
import Contact  from './components/Contact'
import Footer   from './components/Footer'

export default function App() {
  // Dark-first: defaults to dark, respects toggle + localStorage
  const [darkMode, setDarkMode] = useState(() => {
    const stored = localStorage.getItem('darkMode')
    if (stored !== null) return stored === 'true'
    return true // dark by default
  })

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
    localStorage.setItem('darkMode', darkMode)
  }, [darkMode])

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar darkMode={darkMode} toggleDarkMode={() => setDarkMode(p => !p)} />
      <main id="main-content" className="flex-1">
        <Hero />
        <Projects />
        <Skills />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
