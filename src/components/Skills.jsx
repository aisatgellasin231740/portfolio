// ── Real skills — honest beginner level ──────────────────────────────────────
const SKILL_GROUPS = [
  {
    category: 'getting started',
    icon: '🚀',
    color: '#4ade80',
    skills: ['HTML5', 'CSS3', 'Git & GitHub', 'Vercel', 'VS Code / Kiro'],
  },
  {
    category: 'currently learning',
    icon: '📖',
    color: '#60a5fa',
    skills: ['JavaScript', 'React', 'Tailwind CSS', 'Node.js'],
  },
  {
    category: 'exploring next',
    icon: '🔭',
    color: '#a78bfa',
    skills: ['TypeScript', 'PostgreSQL', 'Express', 'REST APIs'],
  },
  {
    category: 'mindset',
    icon: '🧠',
    color: '#fb923c',
    skills: ['Self-Taught', 'Problem Solving', 'Consistent Learner', 'Open to Feedback'],
  },
]
// ─────────────────────────────────────────────────────────────────────────────

function SkillGroup({ category, icon, color, skills }) {
  return (
    <div className="terminal-card group">
      <div className="terminal-bar">
        <span style={{ background: '#ff5f57' }} className="w-2.5 h-2.5 rounded-full" />
        <span style={{ background: '#febc2e' }} className="w-2.5 h-2.5 rounded-full" />
        <span style={{ background: '#28c840' }} className="w-2.5 h-2.5 rounded-full" />
        <span className="font-mono text-xs text-slate-600 ml-2">{category}.config</span>
      </div>

      <div className="p-5">
        <h3
          className="font-mono text-sm font-semibold mb-4 flex items-center gap-2"
          style={{ color }}
        >
          <span>{icon}</span>
          <span>{'{ '}{category}{' }'}</span>
        </h3>

        <ul className="flex flex-wrap gap-2" role="list">
          {skills.map(skill => (
            <li key={skill} className="tag">{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-heading">
      <hr className="section-divider" />
      <div className="section-container">
        <div className="mb-14">
          <p className="section-label">// skills</p>
          <h2 id="skills-heading" className="text-3xl sm:text-4xl font-extrabold text-white mb-3">
            Tech Stack
          </h2>
          <p className="text-slate-500 text-sm font-mono">
            Where I am now and where I'm heading.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {SKILL_GROUPS.map(group => (
            <SkillGroup key={group.category} {...group} />
          ))}
        </div>
      </div>
    </section>
  )
}
