import type { IconType } from "react-icons";
import {
  SiGooglechrome,
  SiDocker,
  SiExpress,
  SiFastapi,
  SiFirebase,
  SiFlutter,
  SiGithub,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenai,
  SiOpenjdk,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReact,
  SiStripe,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";

const projects = [
  {
    name: "DeepEnd",
    description:
      "Won 1st place at the McMaster Google Solutions Challenge. A learning app that uses GPT-4 to generate short project briefs from a prompt.",
    tags: ["Next.js", "TypeScript", "OpenAI", "Firebase", "Vercel"],
    liveUrl: "https://deep-end.vercel.app",
    githubUrl: "https://github.com/benjiavdullahu/DeepEnd-hackathon",
  },
  {
    name: "BidBoard",
    description:
      "A pay-to-rank leaderboard with Stripe checkout. Hit 5,000 visitors and $100 in revenue the first week through organic traffic.",
    tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Prisma"],
    liveUrl: "https://bidboard.site",
    githubUrl: "https://github.com/benjiavdullahu/BidBoard",
  },
  {
    name: "Intellex",
    description:
      "Won DeltaHacks X. A peer-to-peer skill-sharing platform with live video lessons over WebRTC.",
    tags: ["Next.js", "React", "WebRTC", "Firebase", "Node.js"],
    liveUrl: "https://intellex.vercel.app",
    githubUrl: "https://github.com/benjiavdullahu/intellex",
  },
];

type Skill = {
  name: string;
  Icon: IconType;
  color: string;
};

const skills: Skill[] = [
  { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
  { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
  { name: "Java", Icon: SiOpenjdk, color: "#F89820" },
  { name: "Next.js", Icon: SiNextdotjs, color: "#FFFFFF" },
  { name: "React", Icon: SiReact, color: "#61DAFB" },
  { name: "Node.js", Icon: SiNodedotjs, color: "#5FA04E" },
  { name: "Express", Icon: SiExpress, color: "#FFFFFF" },
  { name: "Tailwind", Icon: SiTailwindcss, color: "#38BDF8" },
  { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
  { name: "Prisma", Icon: SiPrisma, color: "#FFFFFF" },
  { name: "Firebase", Icon: SiFirebase, color: "#FFCA28" },
  { name: "Supabase", Icon: SiSupabase, color: "#3ECF8E" },
  { name: "Stripe", Icon: SiStripe, color: "#635BFF" },
  { name: "Flutter", Icon: SiFlutter, color: "#02569B" },
  { name: "Python", Icon: SiPython, color: "#3776AB" },
  { name: "FastAPI", Icon: SiFastapi, color: "#009688" },
  { name: "OpenAI", Icon: SiOpenai, color: "#FFFFFF" },
  { name: "Docker", Icon: SiDocker, color: "#2496ED" },
  { name: "GitHub", Icon: SiGithub, color: "#FFFFFF" },
  { name: "Vercel", Icon: SiVercel, color: "#FFFFFF" },
];

const marqueeSkills = [...skills, ...skills];

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 6h16v12H4z" />
      <path d="M4 6l8 7 8-7" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="fill-icon">
      <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.5-1.4-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.3.5-2.4 1.2-3.2-.1-.4-.5-1.6.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.7 1.6.2 2.8.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="fill-icon">
      <path d="M19 0H5a5 5 0 0 0-5 5v14a5 5 0 0 0 5 5h14a5 5 0 0 0 5-5V5a5 5 0 0 0-5-5zM8 19H5V8h3v11zM6.5 6.7a1.8 1.8 0 1 1 0-3.5 1.8 1.8 0 0 1 0 3.5zM20 19h-3v-5.6c0-1.4-.5-2.3-1.7-2.3-.9 0-1.5.6-1.7 1.2-.1.2-.1.5-.1.8V19h-3V8h3v1.3a3 3 0 0 1 2.7-1.5c2 0 3.5 1.3 3.5 4.1V19z" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3v12m0 0-4-4m4 4 4-4M4 21h16" />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="site-shell">
      <div className="orb orb-one" />
      <div className="orb orb-two" />
      <div className="grain" />

      <div className="content">
        <nav className="top-nav" aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#stack">Stack</a>
          <a href="/resume.pdf" target="_blank" rel="noreferrer">
            Resume
          </a>
          <a className="nav-pill" href="#contact">
            Contact
          </a>
        </nav>

        <section className="hero" aria-labelledby="intro-title">
          <h1 id="intro-title">Benjamin Avdullahu</h1>
          <p>
            Hey, I&apos;m Ben. I&apos;m a software engineer who likes building
            projects, solving problems, and learning as I go.
          </p>

          <div className="contact-links" aria-label="Contact links">
            <a className="pill pill-primary" href="mailto:bavdullahub@gmail.com">
              <MailIcon />
              <span>bavdullahub@gmail.com</span>
            </a>
            <a
              className="pill"
              href="https://github.com/benjiavdullahu"
              target="_blank"
              rel="noreferrer"
            >
              <GithubIcon />
              <span>github.com/benjiavdullahu</span>
            </a>
            <a
              className="pill"
              href="https://www.linkedin.com/in/benjaminavdullahu"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
              <span>in/benjaminavdullahu</span>
            </a>
            <a className="pill" href="/resume.pdf" target="_blank" rel="noreferrer">
              <DownloadIcon />
              <span>Resume</span>
            </a>
          </div>
        </section>

        <section id="work" className="section">
          <header className="section-heading">
            <h2>Projects</h2>
          </header>
          <div className="project-list">
            {projects.map((project) => (
              <article className="project" key={project.name}>
                <div className="project-title-row">
                  <h3>
                    <a href={project.liveUrl} target="_blank" rel="noreferrer">
                      {project.name}
                    </a>
                  </h3>
                  <div className="project-links" aria-label={`${project.name} links`}>
                    <a href={project.liveUrl} target="_blank" rel="noreferrer">
                      <SiGooglechrome aria-hidden="true" />
                      <span>Live</span>
                    </a>
                    <a href={project.githubUrl} target="_blank" rel="noreferrer">
                      <SiGithub aria-hidden="true" />
                      <span>GitHub</span>
                    </a>
                  </div>
                </div>
                <p>{project.description}</p>
                <div className="tag-row" aria-label={`${project.name} stack`}>
                  {project.tags.map((tag) => (
                    <span className="tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="stack" className="section stack-section">
          <header className="stack-heading">
            <h2>Skills</h2>
          </header>
          <div className="marquee" aria-label="Technology stack">
            <div className="marquee-track">
              {marqueeSkills.map(({ Icon, ...skill }, index) => (
                <div className="skill" key={`${skill.name}-${index}`}>
                  <Icon className="skill-logo" style={{ color: skill.color }} />
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="cta">
          <div>
            <h2>Contact</h2>
            <p>Best way to reach me is email.</p>
          </div>
          <div className="cta-actions">
            <a className="button button-primary" href="mailto:bavdullahub@gmail.com">
              bavdullahub@gmail.com
            </a>
            <a
              className="button button-ghost"
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
          </div>
        </section>

        <footer className="footer">
          <p>2026 Benjamin Avdullahu</p>
          <div className="footer-links">
            <a
              href="https://github.com/benjiavdullahu"
              aria-label="GitHub"
              target="_blank"
              rel="noreferrer"
            >
              <SiGithub aria-hidden="true" />
            </a>
            <a
              href="https://www.linkedin.com/in/benjaminavdullahu"
              aria-label="LinkedIn"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </a>
            <a href="mailto:bavdullahub@gmail.com" aria-label="Email">
              <MailIcon />
            </a>
          </div>
        </footer>
      </div>
    </main>
  );
}
