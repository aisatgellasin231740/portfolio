import { FiDownload, FiEye } from 'react-icons/fi'

// ── PLACEHOLDER — drop your PDF at public/resume.pdf ─────────────────────────
const RESUME_PDF = '/resume.pdf'

const HIGHLIGHTS = [
  { label: 'projects_shipped',   value: '10+' },
  { label: 'frontend_hours',     value: '500+' },
  { label: 'backend_hours',      value: '300+' },
  { label: 'open_to_work',       value: 'true' },
]
// ─────────────────────────────────────────────────────────────────────────────

export default function Resume() {
  return (
    <section id="resume" aria-labelledby="resume-heading">
      <hr className="section-divider" />
      <div className="section-container">
        <div className="mb-14">
          <p className="section-label">// resume</p>
          <h2 id="resume-heading" className="text-3xl sm:text-4xl font-extrabold text-white mb-3">
            My Resume
          </h2>
          <p className="text-slate-500 text-sm font-mono">
            Full work history, education, and skill set.
          </p>
        </div>

        <div className="terminal-card overflow-hidden">
          {/* Terminal bar */}
          <div className="terminal-bar">
            <span style={{ background: '#ff5f57' }} className="w-2.5 h-2.5 rounded-full" />
            <span style={{ background: '#febc2e' }} className="w-2.5 h-2.5 rounded-full" />
            <span style={{ background: '#28c840' }} className="w-2.5 h-2.5 rounded-full" />
            <span className="font-mono text-xs text-slate-600 ml-2">resume.json</span>
          </div>

          <div className="p-8 md:p-12">
            {/* Stats grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-10">
              {HIGHLIGHTS.map(({ label, value }) => (
                <div key={label} className="border border-green-500/10 rounded-lg p-4 bg-green-500/5">
                  <p className="font-mono text-2xl font-bold text-green-400 mb-1">{value}</p>
                  <p className="font-mono text-xs text-slate-500">{label}</p>
                </div>
              ))}
            </div>

            {/* Output line */}
            <div className="font-mono text-sm text-slate-400 mb-8 space-y-1">
              <p><span className="text-green-500">$</span> cat resume.pdf | summary</p>
              <p className="text-slate-500 pl-4">→ Self-taught full-stack developer</p>
              <p className="text-slate-500 pl-4">→ Building end-to-end web applications</p>
              <p className="text-slate-500 pl-4">→ Currently open to new opportunities</p>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <a href={RESUME_PDF} download className="btn-primary">
                <FiDownload size={15} />
                download_pdf()
              </a>
              <a
                href={RESUME_PDF}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                <FiEye size={15} />
                view_online()
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
