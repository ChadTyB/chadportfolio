import { useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./styles.css";

export const Portfolio = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const line1Ref = useRef<HTMLHeadingElement>(null);
  const line2Ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    emailjs.init("1bnSvNqaeIT-MQuqH");

    // NAVBAR SCROLL
    const nav = document.querySelector("nav")!;
    const handleScroll = () => {
      if (window.scrollY > 50) nav.classList.add("scrolled");
      else nav.classList.remove("scrolled");
    };
    window.addEventListener("scroll", handleScroll);

    // TYPEWRITER
    if (line1Ref.current && line2Ref.current) {
      line1Ref.current.textContent = "Hi, I'm Tyrique Block";

      const roles = ["IT Graduate", "Software Engineer"];
      let roleIndex = 0;

      const typeRole = (role: string, callback: () => void) => {
        let i = 0;
        const typeChar = () => {
          if (i <= role.length) {
            line2Ref.current!.innerHTML = `<span class="highlight">${role.substring(
              0,
              i
            )}</span>`;
            i++;
            setTimeout(typeChar, 150);
          } else {
            setTimeout(callback, 2000);
          }
        };
        typeChar();
      };

      const startTypewriter = () => {
        typeRole(roles[roleIndex], () => {
          roleIndex = (roleIndex + 1) % roles.length;
          startTypewriter();
        });
      };
      startTypewriter();
    }

    // SKILLS INTERSECTION OBSERVER
    const categories = document.querySelectorAll(".skills-category");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.2 }
    );
    categories.forEach((cat) => observer.observe(cat));

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formRef.current) {
      emailjs
        .sendForm(
          "service_qb5i5pv",
          "template_gygur2q",
          formRef.current
        )
        .then(
          () => {
            alert("Message sent successfully!");
            formRef.current!.reset();
          },
          (error) => {
            alert("Failed to send message. Try again.");
            console.error(error);
          }
        );
    }
  };

  return (
    <>
      {/* NAVBAR */}
      <nav>
        <div className="logo">MyPortfolio</div>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* HOME SECTION */}
      <section id="home" className="home-section">
        <div className="home-content">
          <div className="hero-text">
            <h1 ref={line1Ref} className="typewriter" id="typewriter-line1"></h1>
            <h2 ref={line2Ref} className="typewriter roles" id="typewriter-line2"></h2>

            <div className="hero-emojis">
              <span className="emoji gaming">🎮</span>
              <span className="emoji music">🎵</span>
              <span className="emoji laptop">💻</span>
              <span className="emoji code">&lt;/&gt;</span>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="section">
        <h2>About Me</h2>
        <p>
          I am a passionate developer who enjoys building modern web
          applications with clean UI and powerful functionality.
        </p>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="section">
        <h2>Skills</h2>
        <div className="skills-container">
          {/* Frontend */}
          <div className="skills-category">
            <h3>Frontend</h3>
            <div className="skills-list">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>React</span>
              <span>TypeScript</span>
            </div>
          </div>

          {/* Backend */}
          <div className="skills-category">
            <h3>Backend</h3>
            <div className="skills-list">
              <span>Node.js</span>
              <span>SQL</span>
              <span>Express</span>
            </div>
          </div>

          {/* Tools */}
          <div className="skills-category">
            <h3>Tools</h3>
            <div className="skills-list">
              <span>Git</span>
              <span>VS Code</span>
              <span>Postman</span>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="section">
        <h2>Projects</h2>
        <p className="construction">UNDER CONSTRUCTION</p>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="contact-section">
        <div className="contact-wrapper">
          {/* LEFT SIDE */}
          <div className="contact-info">
            <h2>Contact Me</h2>
            <p>
              I'm always open to discussing new projects, creative ideas,
              or opportunities to be part of something amazing. Feel free to reach out!
            </p>

            {/* Email */}
            <div className="info-item">
              <div className="info-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16v16H4z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div>
                <span>Email</span>
                <h4>your.email@example.com</h4>
              </div>
            </div>

            {/* Phone */}
            <div className="info-item">
              <div className="info-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2
                  19.79 19.79 0 0 1-8.63-3.07
                  19.5 19.5 0 0 1-6-6
                  19.79 19.79 0 0 1-3.07-8.67
                  A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72
                  12.84 12.84 0 0 0 .7 2.81
                  2 2 0 0 1-.45 2.11L8.09 9.91
                  a16 16 0 0 0 6 6l1.27-1.27
                  a2 2 0 0 1 2.11-.45
                  12.84 12.84 0 0 0 2.81.7
                  A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <div>
                <span>Phone</span>
                <h4>+1 (234) 567-8900</h4>
              </div>
            </div>

            {/* Location */}
            <div className="info-item">
              <div className="info-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13S3 17 3 10
                  a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <span>Location</span>
                <h4>Your City, Country</h4>
              </div>
            </div>

            {/* Socials */}
            <div className="contact-socials">
              <a href="https://linkedin.com" target="_blank" className="linkedin" rel="noreferrer">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.8 0-5 2.2-5 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 
                  5-5v-14c0-2.8-2.2-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.3c-1 0-1.7-.8-1.7-1.7 
                  0-1 .8-1.7 1.7-1.7 1 0 1.7.8 1.7 1.7 0 .9-.8 1.7-1.7 1.7zm13.5 
                  11.3h-3v-5.4c0-1.3-.5-2.2-1.7-2.2-.9 0-1.4.6-1.6 
                  1.2-.1.2-.1.5-.1.8v5.6h-3v-10h3v1.4c.4-.7 1.1-1.7 2.8-1.7 
                  2 0 3.6 1.3 3.6 4.1v6.2z"/>
                </svg>
              </a>

              <a href="https://github.com" target="_blank" className="github" rel="noreferrer">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 .5C5.65.5.5 5.65.5 12 a11.5 11.5 0 0 0 7.86 10.94c.57.1.78-.25.78-.55
                  0-.27-.01-1.17-.02-2.13-3.2.7-3.87-1.54-3.87-1.54
                  -.52-1.33-1.27-1.68-1.27-1.68-1.04-.71.08-.7.08-.7
                  1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.68 1.24 3.33.95
                  .1-.74.4-1.24.72-1.52-2.56-.29-5.26-1.28-5.26-5.71
                  0-1.26.45-2.3 1.18-3.11-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.15 1.19
                  a10.96 10.96 0 0 1 5.74 0 c2.19-1.5 3.15-1.19 3.15-1.19.62 1.59.23 2.77.11 3.06
                  .73.81 1.18 1.85 1.18 3.11 0 4.44-2.7 5.41-5.27 5.7
                  .41.35.77 1.04.77 2.1 0 1.52-.01 2.75-.01 3.12
                  0 .3.2.65.79.54A11.5 11.5 0 0 0 23.5 12 C23.5 5.65 18.35.5 12 .5z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label>Name</label>
              <input type="text" name="user_name" placeholder="Your name" required />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input type="email" name="user_email" placeholder="your@email.com" required />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea name="message" placeholder="Tell me about your project..." required />
            </div>

            <button type="submit" className="contact-btn">
              <span>Send Message</span>
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <p>© 2026 My Portfolio</p>
      </footer>
    </>
  );
};