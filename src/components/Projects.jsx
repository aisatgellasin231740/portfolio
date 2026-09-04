import { FiExternalLink, FiGithub } from 'react-icons/fi'

// ── PLACEHOLDERS ─────────────────────────────────────────────────────────────
const PROJECTS = [
  {
    id: 1,
    title: 'Personal Portfolio',
    subtitle: 'This website',
    description:
      'Designed and built my own developer portfolio from scratch using React and Tailwind CSS. Features a terminal-style dark theme, animated typewriter code block, responsive layout, and smooth scroll navigation.',
    tech: ['React', 'Tailwind CSS', 'Vite', 'JavaScript'],
    demo: 'https://example.com',   // replace with your live URL once deployed
    repo: 'https://github.com',    // replace with your GitHub repo
    status: 'live',
  },
  {
    id: 2,
    title: 'Project #2',
    subtitle: 'Coming soon',
    description:
      'Currently working on this. Check back soon.',
    tech: [],
    demo: null,
    repo: null,
    status: 'coming-soon',
  },
  {
    id: 3,
    title: 'Project #3',
    subtitle: 'Coming soon',
    description:
      'Currently working on this. Check back soon.',
    tech: [],
    demo: null,
    repo: null,
    status: 'coming-soon',
  },
  {
    id: 4,
    title: 'Project #4',
    subtitle: 'Coming soon',
    description:
      'Currently working on this. Check back soon.',
    tech: [],
    demo: null,
    repo: null,
    status: 'coming-soon',
  },
]
// ─────────────────────────────────────────────────────────────────────────────

const STATUS_STYLES = {
  'live':         { dot: '#22c55e', label: 'live' },
  'in-progress':  { dot: '#facc15', label: 'in progress' },
  'coming-soon':  { dot: '#475569', label: 'coming soon' },
}

function ProjectCard({ project, index }) {
  const status = STATUS_STYLES[project.status] || STATUS_STYLES['live']

  return (
    <article className="terminal-card group transition-all duration-300">
      {/* Terminal bar */}
      <div className="terminal-bar justify-between">
        <div className="flex items-center gap-1.5">
          <span style={{ background: '#ff5f57' }} className="w-2.5 h-2.5 rounded-full" />
          <span style={{ background: '#febc2e' }} className="w-2.5 h-2.5 rounded-full" />
          <span style={{ background: '#28c840' }} className="w-2.5 h-2.5 rounded-full" />
          <span className="font-mono text-xs text-slate-600 ml-2">
            project_{String(index + 1).padStart(2, '0')}.js
          </span>
        </div>
        {/* Status badge */}
        <span className="flex items-center gap-1.5 font-mono text-xs text-slate-500">
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: status.dot, boxShadow: `0 0 6px ${status.dot}` }}
          />
          {status.label}
        </span>
      </div>

      <div className="p-6 flex flex-col gap-4">
        {/* Title */}
        <div>
          <p className="font-mono text-xs text-slate-600 mb-1">// {project.subtitle}</p>
          <h3 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors">
            {project.title}
          </h3>
        </div>

        {/* Description */}
        <p className="text-sm text-slate-400 leading-relaxed flex-1">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map(t => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-5 pt-1 border-t border-green-500/10">
          {project.demo ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-mono text-xs text-green-500 hover:text-green-300 transition-colors mt-3"
              aria-label={`Live demo of ${project.title}`}
            >
              <FiExternalLink size={13} />
              live_demo()
            </a>
          ) : null}
          {project.repo ? (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-mono text-xs text-slate-500 hover:text-slate-300 transition-colors mt-3"
              aria-label={`GitHub repo for ${project.title}`}
            >
              <FiGithub size={13} />
              source_code()
            </a>
          ) : null}
          {!project.demo && !project.repo && (
            <span className="font-mono text-xs text-slate-600 mt-3">// links coming soon</span>
          )}
        </div>
      </div>
    </article>
  )
}

export default function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-heading">
      <hr className="section-divider" />
      <div className="section-container">
        <div className="mb-14">
          <p className="section-label">// projects</p>
          <h2 id="projects-heading" className="text-3xl sm:text-4xl font-extrabold text-white mb-3">
            Things I've Built
          </h2>
          <p className="text-slate-500 text-sm font-mono">
            End-to-end applications — database schema to polished UI.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
