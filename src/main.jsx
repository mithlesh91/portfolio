import React from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight, Github, Linkedin, Mail, MapPin, Code2,
  Database, Server, Globe, Download, ExternalLink, Menu, X
} from "lucide-react";
import "./styles.css";

const projects = [
  {
    title: "Moodify",
    description:
      "A music recommendation experience that uses facial expressions to understand mood and recommend songs.",
    tags: ["React", "Node.js", "MongoDB", "Face Detection"],
    github: "https://github.com/mithlesh91",
  },
  {
    title: "Perplexity",
    description:
      "An AI-powered search application with a modern chat interface, web search integration and backend APIs.",
    tags: ["React", "Node.js", "Express", "AI APIs"],
    github: "https://github.com/mithlesh91",
  },
  {
    title: "InstaClone",
    description:
      "A full-stack social media application concept with authentication, posts, profiles and interactive features.",
    tags: ["React", "Node.js", "MongoDB", "JWT"],
    github: "https://github.com/mithlesh91",
  },
];

const skills = [
  { name: "JavaScript", icon: <Code2 size={22} /> },
  { name: "React.js", icon: <Globe size={22} /> },
  { name: "Node.js", icon: <Server size={22} /> },
  { name: "Express.js", icon: <Server size={22} /> },
  { name: "MongoDB", icon: <Database size={22} /> },
  { name: "Git & GitHub", icon: <Github size={22} /> },
];

function App() {
  const [open, setOpen] = React.useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <div className="app">
      <nav className="nav">
        <div className="nav-inner">
          <button className="logo" onClick={() => scrollTo("home")}>MK<span>.</span></button>

          <div className={`nav-links ${open ? "open" : ""}`}>
            {["about", "skills", "projects", "contact"].map((item) => (
              <button key={item} onClick={() => scrollTo(item)}>
                {item[0].toUpperCase() + item.slice(1)}
              </button>
            ))}
          </div>

          <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      <main>
        <section id="home" className="hero section">
          <div className="hero-copy">
            <div className="eyebrow"><span className="dot" /> Available for opportunities</div>
            <h1>Building digital experiences that <em>solve real problems.</em></h1>
            <p className="hero-text">
              I'm Mithlesh Kumar, a Full Stack Developer focused on creating
              clean, scalable and user-friendly web applications.
            </p>
            <div className="hero-actions">
              <button className="primary-btn" onClick={() => scrollTo("projects")}>
                View my work <ArrowUpRight size={18} />
              </button>
              <button className="text-btn" onClick={() => scrollTo("contact")}>
                Let's connect
              </button>
            </div>
          </div>

          <div className="hero-card">
            <div className="grid-bg" />
            <div className="code-card">
              <div className="window-dots"><i /><i /><i /></div>
              <pre>{`const developer = {
  name: "Mithlesh Kumar",
  role: "Full Stack Developer",
  stack: ["React", "Node.js",
          "MongoDB"],
  mindset: "Keep learnings."
};`}</pre>
            </div>
            <div className="floating-chip">React + Node.js</div>
          </div>
        </section>

        <section id="about" className="section split">
          <div className="section-label">01 / About</div>
          <div>
            <h2>Curious by nature.<br /><span>Focused on building.</span></h2>
            <p className="large-copy">
              I enjoy turning ideas into functional web products. My approach
              combines a strong foundation in JavaScript with practical
              experience building frontend interfaces, REST APIs, databases and
              authentication systems.
            </p>
            <p>
              I'm continuously learning modern development practices and
              looking for opportunities where I can contribute, grow and build
              meaningful products with a team.
            </p>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="section-label">02 / Skills</div>
          <div>
            <h2>Tools I use to<br /><span>bring ideas to life.</span></h2>
            <div className="skill-grid">
              {skills.map((skill) => (
                <div className="skill" key={skill.name}>
                  <div className="skill-icon">{skill.icon}</div>
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="section projects-section">
          <div className="section-label">03 / Selected work</div>
          <div>
            <h2>Things I've<br /><span>built and explored.</span></h2>
            <div className="project-list">
              {projects.map((project, index) => (
                <article className="project" key={project.title}>
                  <div className="project-number">0{index + 1}</div>
                  <div className="project-main">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="tags">
                      {project.tags.map(tag => <span key={tag}>{tag}</span>)}
                    </div>
                  </div>
                  <a href={project.github} target="_blank" rel="noreferrer" className="round-link" aria-label={`${project.title} GitHub`}>
                    <Github size={19} />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="contact section">
          <div className="contact-inner">
            <div className="section-label">04 / Contact</div>
            <div>
              <h2>Have an idea?<br /><em>Let's build it.</em></h2>
              <p>
                I'm open to internships, entry-level roles, freelance work and
                interesting collaborations.
              </p>
              <div className="contact-links">
                <a href="mailto:aryanrajnwd9155@gmail.com"><Mail size={19} /> aryanrajnwd9155@gmail.com</a>
                <a href="https://github.com/mithlesh91" target="_blank" rel="noreferrer"><Github size={19} /> GitHub</a>
                <a href="https://www.linkedin.com/in/mithlesh-kumar-71a024343" target="_blank" rel="noreferrer"><Linkedin size={19} /> LinkedIn</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <span>© {new Date().getFullYear()} Mithlesh Kumar</span>
        <span>Designed & built with React</span>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);