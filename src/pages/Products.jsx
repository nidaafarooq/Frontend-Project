import { useState } from 'react';

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // 🎨 Skills as Products / Technical Expertise
  const skillsList = [
    { id: 1, title: 'React.js', category: 'Frontend', desc: 'Component Architecture, Custom Hooks, State Management & React Router', icon: '⚛️', level: 'Advanced' },
    { id: 2, title: 'JavaScript ES6+', category: 'Frontend', desc: 'Async/Await, Promises, Closures, DOM Manipulation & Modern Syntax', icon: '⚡', level: 'Advanced' },
    { id: 3, title: 'Vite & Webpack', category: 'Tooling', desc: 'Lightning fast HMR, asset bundlers & environment setup', icon: '🚀', level: 'Intermediate' },
    { id: 4, title: 'HTML5 & CSS3', category: 'Design', desc: 'Responsive Design, Grid, Flexbox, Animations & Glassmorphism UI', icon: '🎨', level: 'Advanced' },
    { id: 5, title: 'REST APIs & JSON', category: 'Backend Integration', desc: 'HTTP Requests, Axios/Fetch API integration, Dynamic Data rendering', icon: '🌐', level: 'Intermediate' },
    { id: 6, title: 'Git & GitHub', category: 'Tooling', desc: 'Version Control, Branching, Pull Requests & CI/CD deployment', icon: '📦', level: 'Intermediate' },
    { id: 7, title: 'UI/UX Design', category: 'Design', desc: 'Wireframing, Prototyping, Accessibility (a11y) & Clean UI layouts', icon: '✨', level: 'Intermediate' }
  ];

  const categories = ['All', 'Frontend', 'Design', 'Tooling', 'Backend Integration'];

  const filteredSkills = selectedCategory === 'All' 
    ? skillsList 
    : skillsList.filter(s => s.category === selectedCategory);

  return (
    <div style={{ padding: '1rem 0', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      
      {/* Page Header */}
      <div>
        <h1 style={{ fontSize: '2.2rem', fontWeight: '800', color: '#f8fafc', margin: '0 0 0.5rem 0' }}>
          Technical Skills & Stack 🚀
        </h1>
        <p style={{ color: '#94a3b8', margin: 0, fontSize: '1rem' }}>
          Explore technologies, frameworks, and tools used across various web projects.
        </p>
      </div>

      {/* Category Filter Buttons */}
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            style={{
              padding: '8px 18px',
              borderRadius: '20px',
              border: selectedCategory === cat ? '1px solid #a855f7' : '1px solid rgba(255, 255, 255, 0.1)',
              background: selectedCategory === cat ? 'rgba(168, 85, 247, 0.25)' : 'rgba(30, 41, 59, 0.5)',
              color: selectedCategory === cat ? '#c084fc' : '#94a3b8',
              fontWeight: '600',
              fontSize: '0.88rem',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product-Style Skills Grid */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
        gap: '1.5rem' 
      }}>
        {filteredSkills.map((skill) => (
          <div key={skill.id} style={{
            background: 'rgba(30, 41, 59, 0.4)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '16px',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{ fontSize: '2.5rem' }}>{skill.icon}</span>
              <span style={{ 
                fontSize: '0.75rem', 
                color: '#38bdf8', 
                background: 'rgba(56, 189, 248, 0.1)', 
                padding: '4px 10px', 
                borderRadius: '12px',
                fontWeight: '600',
                border: '1px solid rgba(56, 189, 248, 0.2)'
              }}>
                {skill.level}
              </span>
            </div>

            <div>
              <h3 style={{ color: '#f8fafc', fontSize: '1.2rem', fontWeight: '700', margin: '0 0 4px 0' }}>
                {skill.title}
              </h3>
              <span style={{ color: '#818cf8', fontSize: '0.8rem', fontWeight: '600' }}>
                {skill.category}
              </span>
            </div>

            <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.5, margin: 0 }}>
              {skill.desc}
            </p>
          </div>
        ))}
      </div>

    </div>
  );
}