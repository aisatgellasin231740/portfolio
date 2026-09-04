import { useState } from 'react'
import { FiMail, FiGithub, FiLinkedin, FiSend } from 'react-icons/fi'

// ── PLACEHOLDERS ─────────────────────────────────────────────────────────────
const EMAIL        = 'you@example.com'
const GITHUB_URL   = 'https://github.com/yourusername'
const LINKEDIN_URL = 'https://linkedin.com/in/yourusername'
const FORMSPREE_ID = null   // e.g. 'xabcdefg' — get one free at formspree.io
// ─────────────────────────────────────────────────────────────────────────────

const SOCIAL_LINKS = [
  { label: 'Email',    href: `mailto:${EMAIL}`,  icon: FiMail,     display: EMAIL,                        color: '#f87171' },
  { label: 'GitHub',   href: GITHUB_URL,          icon: FiGithub,   display: 'github.com/yourusername',   color: '#e2e8f0' },
  { label: 'LinkedIn', href: LINKEDIN_URL,        icon: FiLinkedin, display: 'linkedin.com/in/yourusername', color: '#60a5fa' },
]

function ContactForm() {
  const [fields, setFields] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle')

  const handleChange = e =>
    setFields(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    if (FORMSPREE_ID) {
      setStatus('sending')
      try {
        const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(fields),
        })
        setStatus(res.ok ? 'success' : 'error')
      } catch {
        setStatus('error')
      }
    } else {
      const subject = encodeURIComponent(`Portfolio contact from ${fields.name}`)
      const body    = encodeURIComponent(`${fields.message}\n\nReply to: ${fields.email}`)
      window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`
    }
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center gap-3">
        <p className="font-mono text-green-400 text-lg">✓ message_sent()</p>
        <p className="text-sm text-slate-500 font-mono">I'll get back to you soon.</p>
        <button
          onClick={() => { setStatus('idle'); setFields({ name: '', email: '', message: '' }) }}
          className="mt-2 font-mono text-xs text-green-600 hover:text-green-400 transition-colors"
        >
          send_another()
        </button>
      </div>
    )
  }

  const inputClass = `w-full px-4 py-3 rounded-md font-mono text-sm
    border border-green-500/15
    bg-[#0a0a0f]
    text-slate-300
    placeholder-slate-700
    focus:outline-none focus:border-green-500/50 focus:ring-1 focus:ring-green-500/30
    transition-colors`

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="contact-name" className="sr-only">Name</label>
          <input id="contact-name" type="text" name="name" required
            placeholder="// your_name" value={fields.name} onChange={handleChange}
            className={inputClass} />
        </div>
        <div>
          <label htmlFor="contact-email" className="sr-only">Email</label>
          <input id="contact-email" type="email" name="email" required
            placeholder="// your@email.com" value={fields.email} onChange={handleChange}
            className={inputClass} />
        </div>
      </div>
      <div>
        <label htmlFor="contact-message" className="sr-only">Message</label>
        <textarea id="contact-message" name="message" required rows={5}
          placeholder="// your_message..." value={fields.message} onChange={handleChange}
          className={`${inputClass} resize-none`} />
      </div>

      {status === 'error' && (
        <p role="alert" className="font-mono text-xs text-red-400">
          error: try emailing me directly at{' '}
          <a href={`mailto:${EMAIL}`} className="underline text-red-300">{EMAIL}</a>
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="btn-primary justify-center disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <FiSend size={14} />
        {status === 'sending' ? 'sending...' : 'send_message()'}
      </button>
    </form>
  )
}

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading">
      <hr className="section-divider" />
      <div className="section-container">
        <div className="mb-14">
          <p className="section-label">// contact</p>
          <h2 id="contact-heading" className="text-3xl sm:text-4xl font-extrabold text-white mb-3">
            Get In Touch
          </h2>
          <p className="text-slate-500 text-sm font-mono">
            Have a project or opportunity? Let's talk.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Social links */}
          <div className="flex flex-col gap-4">
            {SOCIAL_LINKS.map(({ label, href, icon: Icon, display, color }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                aria-label={label}
                className="terminal-card flex items-center gap-4 p-4 group"
              >
                <span
                  className="p-2.5 rounded-md bg-[#0a0a0f] border border-green-500/10
                             group-hover:border-green-500/30 transition-colors"
                  style={{ color }}
                >
                  <Icon size={18} />
                </span>
                <div>
                  <p className="font-mono text-xs text-slate-600">{label}</p>
                  <p className="font-mono text-sm text-slate-300 group-hover:text-green-400 transition-colors">
                    {display}
                  </p>
                </div>
              </a>
            ))}

            {/* Available status */}
            <div className="terminal-card p-4 mt-2">
              <p className="font-mono text-xs text-slate-600 mb-2">// status</p>
              <p className="font-mono text-sm flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_6px_#22c55e]" />
                <span className="text-green-400">available</span>
                <span className="text-slate-600">= true</span>
              </p>
            </div>
          </div>

          {/* Contact form */}
          <div className="terminal-card">
            <div className="terminal-bar">
              <span style={{ background: '#ff5f57' }} className="w-2.5 h-2.5 rounded-full" />
              <span style={{ background: '#febc2e' }} className="w-2.5 h-2.5 rounded-full" />
              <span style={{ background: '#28c840' }} className="w-2.5 h-2.5 rounded-full" />
              <span className="font-mono text-xs text-slate-600 ml-2">send_message.js</span>
            </div>
            <div className="p-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
