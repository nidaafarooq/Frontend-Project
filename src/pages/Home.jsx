import { Link } from 'react-router-dom';

export default function Home() {
  const personalInfo = {
    name: "NIDA FAROOQ", 
    role: "Frontend Developer & UI Designer",
    location: "Pakistan 🇵🇰",
    bio: "Passionate about building fast, responsive, and visually appealing web applications. Specialized in React.js, modern UI/UX design, and clean code architecture.",
    

    email: "nidafarooq8024@gmail.com", 
    github: "https://github.com/nidaafarooq/Frontend-Project", 
    linkedin: "https://www.linkedin.com/in/nida-farooq-846177355" 
  };

  const education = {
    degree: "BS Computer Science",
    institution: "University Of Management and Technology (UMT), Lahore",
    details: "Focused on Software Engineering, Web Technologies, Data Structures, and Algorithms."
  };

  const projects = [
    { title: 'Product Catalog', desc: 'Interactive e-commerce product showcase with category filtering.', link: '/products', icon: '🛍️' },
    { title: 'Live Weather App', desc: 'Real-time weather application powered by OpenWeatherMap API.', link: '/weather', icon: '🌤️' },
    { title: 'Task Manager', desc: 'Productivity todo tool with dynamic state management.', link: '/todo', icon: '⚡' }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem', padding: '1rem 0' }}>
      
   
      <section style={{ 
        textAlign: 'center', 
        padding: '3.5rem 1.5rem', 
        background: 'radial-gradient(circle at top, rgba(168, 85, 247, 0.18) 0%, rgba(11, 15, 25, 0) 75%)',
        borderRadius: '24px',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        
        {/* Profile Avatar */}
        <div style={{
          width: '90px',
          height: '90px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #a855f7 0%, #6366f1 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '2.5rem',
          boxShadow: '0 0 25px rgba(168, 85, 247, 0.4)',
          marginBottom: '1.2rem'
        }}>
          👩‍💻
        </div>

        <span style={{ 
          background: 'rgba(168, 85, 247, 0.12)', 
          color: '#c084fc', 
          padding: '6px 16px', 
          borderRadius: '20px', 
          fontSize: '0.85rem', 
          fontWeight: '600',
          border: '1px solid rgba(168, 85, 247, 0.25)',
          marginBottom: '1rem'
        }}>
          {personalInfo.location} • Available for Projects
        </span>

        <h1 style={{ fontSize: '3rem', fontWeight: '800', margin: 0, color: '#f8fafc', lineHeight: 1.2 }}>
          Hi, I'm <span style={{ background: 'linear-gradient(135deg, #a855f7 0%, #38bdf8 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{personalInfo.name}</span>
        </h1>
        
        <h3 style={{ color: '#818cf8', fontWeight: '600', fontSize: '1.2rem', marginTop: '8px', marginBottom: '0.5rem' }}>
          {personalInfo.role}
        </h3>

        {/* Display Email Address */}
        <a 
          href={`mailto:${personalInfo.email}`} 
          style={{ color: '#38bdf8', fontSize: '0.95rem', fontWeight: '500', margin: '0 0 1.5rem 0', textDecoration: 'none' }}
        >
          📧 {personalInfo.email}
        </a>

        <p style={{ color: '#94a3b8', fontSize: '1.05rem', maxWidth: '620px', margin: '0 auto 2rem auto', lineHeight: 1.6 }}>
          {personalInfo.bio}
        </p>

        {/* Social & Contact Buttons */}
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <Link to="/products" style={{
            padding: '12px 24px',
            borderRadius: '12px',
            background: 'linear-gradient(135deg, #a855f7 0%, #6366f1 100%)',
            color: '#fff',
            textDecoration: 'none',
            fontWeight: '600',
            boxShadow: '0 4px 15px rgba(168, 85, 247, 0.4)'
          }}>
            Explore Work
          </Link>

          {/* Direct Email Button */}
          <a 
            href={`mailto:${personalInfo.email}`} 
            style={{
              padding: '12px 20px',
              borderRadius: '12px',
              background: 'rgba(30, 41, 59, 0.6)',
              color: '#f1f5f9',
              textDecoration: 'none',
              fontWeight: '600',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <span>✉️</span> Email Me
          </a>
          
          {/* GitHub External Link */}
          <a 
            href={personalInfo.github} 
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              padding: '12px 20px',
              borderRadius: '12px',
              background: 'rgba(30, 41, 59, 0.6)',
              color: '#f1f5f9',
              textDecoration: 'none',
              fontWeight: '600',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <span>🐱</span> GitHub
          </a>

          {/* LinkedIn External Link */}
          <a 
            href={personalInfo.linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              padding: '12px 20px',
              borderRadius: '12px',
              background: 'rgba(30, 41, 59, 0.6)',
              color: '#38bdf8',
              textDecoration: 'none',
              fontWeight: '600',
              border: '1px solid rgba(56, 189, 248, 0.2)',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <span>💼</span> LinkedIn
          </a>
        </div>
      </section>

      {/* 🎓 Education Section */}
      <section>
        <h2 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#f1f5f9', marginBottom: '1.5rem' }}>
          Education 🎓
        </h2>
        <div style={{
          background: 'rgba(30, 41, 59, 0.4)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '16px',
          padding: '1.8rem',
          backdropFilter: 'blur(10px)',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.8rem',
          boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
            <h3 style={{ color: '#f8fafc', fontSize: '1.3rem', fontWeight: '700', margin: 0 }}>
              🎓 {education.degree}
            </h3>
            <span style={{ 
              fontSize: '0.8rem', 
              color: '#a855f7', 
              background: 'rgba(168, 85, 247, 0.12)', 
              padding: '4px 12px', 
              borderRadius: '12px',
              fontWeight: '600',
              border: '1px solid rgba(168, 85, 247, 0.25)'
            }}>
              {education.status}
            </span>
          </div>

          <p style={{ color: '#38bdf8', fontWeight: '600', margin: 0, fontSize: '0.95rem' }}>
            {education.institution}
          </p>

          <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.5, margin: 0 }}>
            {education.details}
          </p>
        </div>
      </section>

      {/* Featured Applications */}
      <section>
        <h2 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#f1f5f9', marginBottom: '1.5rem' }}>
          Featured Works
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {projects.map((proj, idx) => (
            <Link key={idx} to={proj.link} style={{ textDecoration: 'none' }}>
              <div style={{
                background: 'rgba(30, 41, 59, 0.4)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '16px',
                padding: '1.8rem',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                cursor: 'pointer'
              }}>
                <span style={{ fontSize: '2.5rem' }}>{proj.icon}</span>
                <h3 style={{ color: '#f8fafc', fontSize: '1.2rem', fontWeight: '600', margin: 0 }}>{proj.title}</h3>
                <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.5, margin: 0 }}>{proj.desc}</p>
                <span style={{ color: '#38bdf8', fontSize: '0.85rem', fontWeight: '600', marginTop: 'auto' }}>
                  Launch App →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

    </div>
  );
}