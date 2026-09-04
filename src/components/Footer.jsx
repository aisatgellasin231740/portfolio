import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

// ── PLACEHOLDERS ─────────────────────────────────────────────────────────────
const NAME         = 'Tiyano'
const GITHUB_URL   = 'https://github.com/yourusername'
const LINKEDIN_URL = 'https://linkedin.com/in/yourusername'
const EMAIL        = 'you@example.com'
const YEAR         = new Date().getFullYear()
// ─────────────────────────────────────────────────────────────────────────────

const SOCIAL = [
  { label: 'GitHub',   href: GITHUB_URL,         icon: FiGithub   },
  { label: 'LinkedIn', href: LINKEDIN_URL,        icon: FiLinkedin },
  { label: 'Email',    href: `mailto:${EMAIL}`,   icon: FiMail     },
]

export default function Footer() {
  return (
    <footer
      className="border-t border-green-500/10 bg-[#0a0a0f] py-8"
      role="contentinfo"
    >
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-slate-600">
          <span className="text-green-600">©</span> {YEAR}{' '}
          <span className="text-slate-400">{NAME}</span>
          <span className="text-slate-700"> — built with React & Tailwind</span>
        </p>

        <nav aria-label="Social media links">
          <ul className="flex items-center gap-4" role="list">
            {SOCIAL.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-2 rounded text-slate-600 hover:text-green-400
                             hover:bg-green-500/10 transition-colors
                             focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-green-500"
                >
                  <Icon size={16} />
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  )
}
