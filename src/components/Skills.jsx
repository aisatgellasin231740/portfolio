// ── PLACEHOLDERS — update with your real skills ───────────────────────────────
const SKILL_GROUPS = [
  {
    category: 'frontend',
    icon: '🖥️',
    color: '#60a5fa',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Responsive Design'],
  },
  {
    category: 'backend',
    icon: '⚙️',
    color: '#a78bfa',
    skills: ['Node.js', 'Express', 'REST APIs', 'PostgreSQL', 'MongoDB', 'Prisma', 'JWT / Auth', 'SQL'],
  },
  {
    category: 'tools & devops',
    icon: '🛠️',
    color: '#fb923c',
    skills: ['Git & GitHub', 'Docker', 'Vite', 'Postman', 'Linux / CLI', 'Vercel', 'Railway', 'VS Code'],
  },
  {
    category: 'learning',
    icon: '📚',
    color: '#22c55e',
    skills: ['TypeScript (deepening)', 'Testing (Jest / Vitest)', 'CI/CD', 'AWS Basics', 'System Design'],
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
            Technologies I use to build full-stack applications.
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
