"use client";

const email = "bavdullahub@gmail.com";

const projects = [
  {
    name: "DeepEnd",
    description:
      "Won 1st place at the McMaster Google Solutions Challenge. A learning app that uses GPT-4 to generate short project briefs from a prompt.",
    tags: ["Next.js", "TypeScript", "OpenAI", "Firebase", "Vercel"],
    liveUrl: "https://deep-end.vercel.app",
  },
  {
    name: "BidBoard",
    description:
      "A pay-to-rank leaderboard with Stripe checkout. Hit 5,000 visitors and $100 in revenue the first week through organic traffic.",
    tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Prisma"],
    liveUrl: "https://bidboard.site",
  },
  {
    name: "Intellex",
    description:
      "Won DeltaHacks X. A peer-to-peer skill-sharing platform with live video lessons over WebRTC.",
    tags: ["Next.js", "React", "WebRTC", "Firebase", "Node.js"],
    liveUrl: "https://intellex.vercel.app",
  },
];

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

function copyEmail() {
  void navigator.clipboard.writeText(email);
}

export default function Home() {
  return (
    <main className="site-shell">
      <div className="orb orb-one" />
      <div className="orb orb-two" />
      <div className="grain" />

      <div className="content">
        <section className="hero" aria-labelledby="intro-title">
          <h1 id="intro-title">Benjamin Avdullahu</h1>
          <p>
            Hey, I&apos;m Ben. I&apos;m a software engineer who likes building
            projects, solving problems, and learning as I go.
          </p>

          <div className="contact-links" aria-label="Contact links">
            <button
              className="pill pill-primary"
              type="button"
              onClick={copyEmail}
              title="Copy email"
            >
              <MailIcon />
              <span>{email}</span>
            </button>
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
          </div>
        </section>

        <section id="work" className="section">
          <header className="section-heading">
            <h2>Projects</h2>
          </header>
          <div className="project-list">
            {projects.map((project) => (
              <a
                className="project"
                href={project.liveUrl}
                key={project.name}
                target="_blank"
                rel="noreferrer"
              >
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className="tag-row" aria-label={`${project.name} stack`}>
                  {project.tags.map((tag) => (
                    <span className="tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </section>

        <section id="contact" className="cta">
          <div>
            <h2>Contact</h2>
            <p>Best way to reach me is email.</p>
          </div>
          <div className="cta-actions">
            <button className="button button-primary" type="button" onClick={copyEmail}>
              {email}
            </button>
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
              <GithubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/benjaminavdullahu"
              aria-label="LinkedIn"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </a>
            <button type="button" onClick={copyEmail} aria-label="Copy email">
              <MailIcon />
            </button>
          </div>
        </footer>
      </div>
    </main>
  );
}
