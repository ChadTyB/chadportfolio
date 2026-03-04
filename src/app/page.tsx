"use client";

import { useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Home() {
  const line1Ref = useRef<HTMLHeadingElement>(null);
  const line2Ref = useRef<HTMLHeadingElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    // NAVBAR SCROLL
    const nav = document.querySelector("nav");
    const handleScroll = () => {
      if (window.scrollY > 50) nav?.classList.add("scrolled");
      else nav?.classList.remove("scrolled");
    };
    window.addEventListener("scroll", handleScroll);

    // TYPEWRITER
    if (line1Ref.current) line1Ref.current.textContent = "Hi, I'm Tyrique Block";
    const roles = ["IT Graduate", "Software Engineer"];
    let roleIndex = 0;

    const typeRole = (role: string, callback: () => void) => {
      let i = 0;
      const typeChar = () => {
        if (line2Ref.current) {
          line2Ref.current.innerHTML = `<span class="highlight">${role.substring(
            0,
            i
          )}</span>`;
        }
        if (i <= role.length) {
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
      observer.disconnect();
    };
  }, []);

  // CONTACT FORM SUBMISSION
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  if (!formRef.current) return;

  emailjs.sendForm(
    "service_qb5i5pv",      
    "template_gygur2q",     
    formRef.current,
    "Y1bnSvNqaeIT-MQuqH"  
  ).then(
    () => {
      alert("Message sent successfully!");
      formRef.current?.reset();
    },
    (error) => {
      console.error("EmailJS error:", error.text);
      alert("Failed to send message. Check your Service ID, Template ID, and Public Key.");
    }
  );
};

  return (
    <main>
      {/* NAVBAR */}
      <nav>
        <div className="logo">Block PortFolio</div>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* HOME */}
      <section id="home" className="home-section">
        <div className="home-content">
          <div className="hero-text">
            <h1 ref={line1Ref}></h1>
            <h2 ref={line2Ref}></h2>
          </div>
          <div className="hero-logos" style={{ display: "flex", gap: 40, justifyContent: "center", flexWrap: "wrap" }}>
            <span className="emoji">🎮</span>
            <span className="emoji">🎵</span>
            <span className="emoji">💻</span>
            <span className="code-icon">&lt;/&gt;</span>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section">
        <h2>About Me</h2>
        <p>
          My name is Tyrique Block. I am an Information Technology graduate...
        </p>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section">
        <h2>Skills</h2>
        <div className="skills-container">
          <div className="skills-category"><h3>Frontend</h3><span>TypeScript</span><span>HTML</span><span>CSS</span><span>React</span><span>Next.js</span></div>
          <div className="skills-category"><h3>Backend</h3><span>C#.NET</span><span>Asp.NET</span><span>SQL</span><span>Python</span><span>Flask</span></div>
          <div className="skills-category"><h3>Tools</h3><span>Git</span><span>VS Code</span></div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section">
        <h2>Projects</h2>
        <p>UNDER CONSTRUCTION</p>
      </section>

      {/* CONTACT */}
     <section id="contact" className="contact-section">
  <div className="contact-wrapper">
    <div className="contact-info">
      <h2>Contact Me</h2>
      <p>I'm always open to discussing new projects...</p>
    </div>

    <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
      <div className="form-group">
        <label htmlFor="user_name">Name</label>
        <input type="text" name="user_name" required />
      </div>

      <div className="form-group">
        <label htmlFor="user_email">Email</label>
        <input type="email" name="user_email" required />
      </div>

      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea name="message" required />
      </div>

      <button type="submit">Send Message</button>
    </form>
  </div>
</section>

      <footer>© 2026 BLOCK</footer>
    </main>
  );
}