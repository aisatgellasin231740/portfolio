import { useState, useEffect } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'
import { FiMoon, FiSun } from 'react-icons/fi'

const NAV_LINKS = [
  { label: 'ABOUT',    href: '#about'    },
  { label: 'PROJECTS', href: '#projects' },
  { label: 'SKILLS',   href: '#skills'   },
  { label: 'RESUME',   href: '#resume'   },
  { label: 'CONTACT',  href: '#contact'  },
]

export default function Navbar({ darkMode, toggleDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${scrolled
          ? 'bg-[#0a0a0f]/95 backdrop-blur-md border-b border-green-500/10 shadow-lg shadow-black/50'
          : 'bg-transparent'
        }`}
      role="banner"
    >
      <nav
        className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between"
        aria-label="Primary navigation"
      >
        {/* Logo */}
        <a
          href="#about"
          className="font-mono text-green-400 font-bold text-lg hover:text-green-300 transition-colors"
          aria-label="Go to top"
        >
          <span className="text-slate-500">~/</span>tiyano
          <span className="animate-[blink_1s_step-end_infinite] text-green-400">_</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8" role="list">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className="font-mono text-sm text-slate-400 hover:text-green-400 transition-colors"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleDarkMode}
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            className="p-2 rounded text-slate-400 hover:text-green-400
                       hover:bg-green-500/10 transition-colors
                       focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-green-500"
          >
            {darkMode ? <FiSun size={16} /> : <FiMoon size={16} />}
          </button>

          <button
            className="md:hidden p-2 rounded text-slate-400 hover:text-green-400
                       hover:bg-green-500/10 transition-colors
                       focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-green-500"
            onClick={() => setMenuOpen(prev => !prev)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? <HiX size={20} /> : <HiMenu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-all duration-300
          ${menuOpen ? 'max-h-80 border-t border-green-500/10' : 'max-h-0'}`}
        aria-hidden={!menuOpen}
      >
        <ul className="flex flex-col px-6 py-5 gap-5 bg-[#0a0a0f]/98" role="list">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                onClick={() => setMenuOpen(false)}
                className="font-mono text-sm text-slate-400 hover:text-green-400 transition-colors"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
