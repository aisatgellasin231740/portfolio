import { useState, useEffect, useRef } from 'react'
import { FiDownload, FiArrowDown, FiGithub, FiLinkedin } from 'react-icons/fi'

// ── PLACEHOLDERS ─────────────────────────────────────────────────────────────
const NAME        = 'Tiyano'
const TAGLINE     = 'Full-Stack Developer — Frontend to Backend'
const INTRO       = `I'm a self-taught full-stack developer who builds complete web applications from the UI all the way to the server and database. I work with React on the frontend and Node.js on the backend, and I'm currently leveling up through hands-on projects. I'm actively looking for opportunities to bring real products to life.`
const PHOTO_SRC   = null
const PHOTO_ALT   = 'Profile photo of Tiyano'
const RESUME_HREF = '/resume.pdf'
const GITHUB_URL  = 'https://github.com/yourusername'
const LINKEDIN_URL= 'https://linkedin.com/in/yourusername'
// ─────────────────────────────────────────────────────────────────────────────

// ── Each "token" is a piece of text with its own color class ─────────────────
// lines = array of lines, each line = array of token objects { text, cls }
const CODE_LINES = [
  [
    { text: 'const ',   cls: 'text-slate-500' },
    { text: 'dev',      cls: 'text-green-400'  },
    { text: ' = {',     cls: 'text-slate-400'  },
  ],
  [
    { text: '  name',     cls: 'text-blue-400'  },
    { text: ': ',         cls: 'text-slate-400' },
    { text: `"${NAME}"`, cls: 'text-amber-300'  },
    { text: ',',          cls: 'text-slate-400' },
  ],
  [
    { text: '  role',         cls: 'text-blue-400'  },
    { text: ': ',             cls: 'text-slate-400' },
    { text: '"Full-Stack Dev"', cls: 'text-amber-300' },
    { text: ',',              cls: 'text-slate-400' },
  ],
  [
    { text: '  stack', cls: 'text-blue-400'  },
    { text: ': [',     cls: 'text-slate-400' },
  ],
  [
    { text: '    "React"',      cls: 'text-amber-300' },
    { text: ',',                cls: 'text-slate-400' },
  ],
  [
    { text: '    "Node.js"',    cls: 'text-amber-300' },
    { text: ',',                cls: 'text-slate-400' },
  ],
  [
    { text: '    "PostgreSQL"', cls: 'text-amber-300' },
    { text: ',',                cls: 'text-slate-400' },
  ],
  [
    { text: '  ],', cls: 'text-slate-400' },
  ],
  [
    { text: '  available', cls: 'text-blue-400'  },
    { text: ': ',          cls: 'text-slate-400' },
    { text: 'true',        cls: 'text-green-400' },
  ],
  [
    { text: '}', cls: 'text-slate-400' },
  ],
]

// Flatten CODE_LINES into a single sequence of characters with metadata
function buildSequence(lines) {
  const seq = []
  lines.forEach((tokens, lineIdx) => {
    tokens.forEach(({ text, cls }) => {
      for (const char of text) {
        seq.push({ char, cls, lineIdx })
      }
    })
    // newline sentinel
    seq.push({ char: '\n', cls: '', lineIdx })
  })
  return seq
}

const SEQUENCE = buildSequence(CODE_LINES)
const CHAR_DELAY = 28 // ms per character

function TerminalTyper() {
  const [revealed, setRevealed] = useState(0) // number of chars typed so far
  const [done, setDone]         = useState(false)
  const timerRef                = useRef(null)

  useEffect(() => {
    if (revealed < SEQUENCE.length) {
      timerRef.current = setTimeout(() => setRevealed(r => r + 1), CHAR_DELAY)
    } else {
      setDone(true)
    }
    return () => clearTimeout(timerRef.current)
  }, [revealed])

  // Build an array of rendered lines from the revealed chars
  const lines = []
  let currentLine = []
  let currentCls  = null
  let currentText = ''

  const flush = () => {
    if (currentText) {
      currentLine.push({ text: currentText, cls: currentCls })
      currentText = ''
      currentCls  = null
    }
  }

  for (let i = 0; i < revealed; i++) {
    const { char, cls } = SEQUENCE[i]
    if (char === '\n') {
      flush()
      lines.push([...currentLine])
      currentLine = []
    } else {
      if (cls !== currentCls) {
        flush()
        currentCls = cls
      }
      currentText += char
    }
  }
  flush()
  if (currentLine.length) lines.push(currentLine)

  return (
    <div className="terminal-card">
      {/* Terminal bar */}
      <div className="terminal-bar">
        <span style={{ background: '#ff5f57' }} className="w-2.5 h-2.5 rounded-full" />
        <span style={{ background: '#febc2e' }} className="w-2.5 h-2.5 rounded-full" />
        <span style={{ background: '#28c840' }} className="w-2.5 h-2.5 rounded-full" />
        <span className="font-mono text-xs text-slate-500 ml-2">profile.js</span>
      </div>

      {/* Code output */}
      <div className="p-5 font-mono text-sm min-h-[220px]">
        {lines.map((tokens, li) => (
          <div key={li} className="leading-6">
            {tokens.map((tok, ti) => (
              <span key={ti} className={tok.cls}>{tok.text}</span>
            ))}
            {/* Blinking cursor on the last line being typed */}
            {li === lines.length - 1 && !done && (
              <span className="inline-block w-[7px] h-[14px] bg-green-400 ml-0.5 align-middle
                               animate-[blink_1s_step-end_infinite]" />
            )}
          </div>
        ))}

        {/* After typing finishes: show the "ready to build" line */}
        {done && (
          <div className="mt-2 text-slate-600 leading-6">
            <span className="text-green-500">▶</span> ready to build
            <span className="inline-block w-[7px] h-[14px] bg-green-400 ml-1 align-middle
                             animate-[blink_1s_step-end_infinite]" />
          </div>
        )}
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section
      id="about"
      aria-labelledby="hero-heading"
      className="min-h-screen flex items-center pt-16 pb-8"
    >
      <div className="section-container w-full">
        <div className="flex flex-col-reverse md:flex-row items-center gap-16">

          {/* ── Text ── */}
          <div className="flex-1 animate-fade-in-up">

            {/* Terminal path */}
            <p className="font-mono text-sm text-slate-500 mb-6">
              <span className="text-green-500">tiyano</span>
              <span className="text-slate-600">@portfolio</span>
              <span className="text-slate-500">:~$ </span>
              <span className="text-slate-300">whoami</span>
            </p>

            {/* Name */}
            <h1
              id="hero-heading"
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-none mb-4
                         text-white"
            >
              {NAME}
              <span className="text-green-400">.</span>
            </h1>

            {/* Tagline */}
            <p className="font-mono text-green-400 text-base sm:text-lg mb-6 text-glow">
              <span className="text-slate-500">// </span>{TAGLINE}
            </p>

            {/* Intro */}
            <p className="text-slate-400 leading-relaxed max-w-xl mb-8 text-sm sm:text-base">
              {INTRO}
            </p>

            {/* Tech stack line */}
            <div className="flex flex-wrap gap-2 mb-10 font-mono text-xs">
              {['React', 'Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'Tailwind'].map(t => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-8">
              <a href="#projects" className="btn-primary">
                view_projects()
              </a>
              <a href={RESUME_HREF} download className="btn-outline">
                <FiDownload size={15} />
                download_cv()
              </a>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-5">
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-slate-500 hover:text-green-400 transition-colors"
              >
                <FiGithub size={20} />
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-slate-500 hover:text-green-400 transition-colors"
              >
                <FiLinkedin size={20} />
              </a>
              <span className="text-slate-700 font-mono text-xs">
                — open to opportunities
              </span>
            </div>
          </div>

          {/* ── Animated terminal window ── */}
          <div
            className="flex-shrink-0 animate-fade-in-up w-full max-w-xs"
            style={{ animationDelay: '0.2s' }}
          >
            <TerminalTyper name={NAME} />
          </div>

        </div>

        {/* Scroll hint */}
        <div className="mt-16 flex justify-start animate-bounce">
          <a
            href="#projects"
            aria-label="Scroll to projects"
            className="text-slate-600 hover:text-green-400 transition-colors font-mono text-xs flex items-center gap-2"
          >
            scroll_down() ↓
          </a>
        </div>
      </div>
    </section>
  )
}
