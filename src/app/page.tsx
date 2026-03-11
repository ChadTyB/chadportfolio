"use client";

import { useEffect, useState } from "react";

export default function Home() {

  const [showToast, setShowToast] = useState(false);

  useEffect(() => {

    const nav = document.querySelector("nav");

    const onScroll = () => {

      if (window.scrollY > 50) nav?.classList.add("scrolled");

      else nav?.classList.remove("scrolled");
    };
    window.addEventListener("scroll", onScroll);

    const line1E1 = document.getElementById("typewriter-line1");

    const line2E1 = document.getElementById("typewriter-line2");

    if (line1E1) line1E1.textContent = "Hi, I'm Tyrique Block";

    const roles = ["I.T Graduate", "Software Engineer"];

    let roleIndex = 0;

    function typeRole(role: string, callback: () => void) {

      let i = 0;

      function typeChar() {

        if (i <= role.length) {

          if (line2E1)

            line2E1.innerHTML = `<span class="highlight">${role.substring(0, i)}</span>`;
          i++;

          setTimeout(typeChar, 150);

        } else setTimeout(callback, 2000);
      }
      typeChar();
    }

    function startTypewriter() {

      typeRole(roles[roleIndex], () => {

        roleIndex = (roleIndex + 1) % roles.length;

        startTypewriter();
      });
    }

    startTypewriter();

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

    function showNotification(message: string, type: "success" | "error" = "success") {

      const notification = document.getElementById("notification");

      if (!notification) return;

      notification.textContent = message;

      notification.className = `notification ${type} show`;

      setTimeout(() => {

        notification.className = "notification";

      }, 3000);
    }

    const form = document.getElementById("contact-form") as HTMLFormElement;

    form.addEventListener("submit", async (e) => {

      e.preventDefault();

      const formData = new FormData(form);

      const data = Object.fromEntries(formData.entries());

      try {
        const res = await fetch("/api/contact", {
          
          method: "POST",

          headers: { "Content-Type": "application/json" },

          body: JSON.stringify(data),
        });

        const result = await res.json();

        if (res.ok) {

          showNotification("Your email has been sent!", "success");

          form.reset();

        } else {
          showNotification(result.error || "Failed to send message.", "error");

        }
      } catch (err) {

        showNotification("Unexpected error occurred.", "error");

        console.error(err);
      }
    });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main>

      {/* NOTIFICATION */}
      <div id="notification" className="notification"></div>

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


      <section id="home" className="home-section">

        <div className="home-content">

          <div className="hero-text">

            <h1 className="typewriter" id="typewriter-line1"></h1>

            <h2 className="typewriter roles" id="typewriter-line2"></h2>

          </div>

          <div className="hero-logos" style={{display: 'flex', flexWrap: 'wrap', gap: '40px', justifyContent: 'center'}}>

            <div className="logo-icon gaming">

              <span className="emoji">🎮</span>

            </div>

            <div className="logo-icon music">

              <span className="emoji">🎵</span>

            </div>

             <div className="logo-icon laptop">

              <span className="emoji">💻</span>

            </div>

            <div className="logo-icon code">

              <span className="code-icon">&lt;/&gt;</span>
              
            </div>
          </div>

        </div>

      </section>


     <section id="about" className="about">

  <div className="about-container">

    <div className="about-left">

      <div className="about-header">

        <div className="about-icon">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">

            <path d="M20 21a8 8 0 0 0-16 0"/>

            <circle cx="12" cy="7" r="4"/>

          </svg>
    </div>
        <h2>Who I Am</h2>
      </div>

      <p>
      My name is Tyrique Block. I am an Information Technology graduate. With that being said,
      my course was a three-year Diploma in Information Technology that consisted of modules
      such as Programming, Information Systems, Web Development and Networking just to
      name a few. 
      </p>

      <p>
      I am highly motivated, dedicated a hard worker and a quick learner. I have
      good time management, communication, and organizational skills. I work well under
      pressure, and I can work effectively both independently and in groups. I know I have a lot
      to offer to your organization and I am keen to develop my professional skills.
      </p>
    </div>

    <div className="about-right">

      <div className="about-block">

        <div className="about-header">

         <div className="about-icon">

          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">

            <path d="M22 10L12 5 2 10l10 5 10-5z"/>

            <path d="M6 12v5c3 3 9 3 12 0v-5"/>

            </svg>

          </div>
          <h2>Education</h2>
        </div>

        <div className="about-card">

          <h3>Diploma in Information Technology</h3>

          <p className="about-sub">Damelin College</p>

          <p className="about-date">2020 – 2022</p>

        </div>
      </div>

      <div className="about-block">

  <div className="about-header">

    <div className="about-icon">

      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">

        <rect x="2" y="7" width="20" height="14" rx="2"/>

        <path d="M16 3H8v4h8V3z"/>
      </svg>
    </div>
    <h2>Experience</h2>
  </div>

  {/* Experience 1 */}
  <div className="about-card">

    <h3>Software Engineer Learner</h3>

    <p className="about-sub accent">Mindworx Consulting</p>

    <p className="about-date">January 2025 – Present</p>

    <p className="about-desc">
      Building modern web applications and scalable solutions.
    </p>

  </div>

  {/* Experience 2 */}
  <div className="about-card">

    <h3>Software Engineer Intern</h3>

    <p className="about-sub accent">ThutoNet</p>

    <p className="about-date">August 2025 – October 2025</p>

    <p className="about-desc">
      Developed responsive web interfaces and collaborated with teams to improve user experience.
    </p>
    
  </div>

</div>

    </div>

  </div>
</section>


      <section id="skills" className="section">

        <h2>Skills</h2>

        <div className="skills-container">

          <div className="skills-category">

            <h3>Frontend</h3>

            <div className="skills-list">

              <span>TypeScript</span>

              <span>HTML</span>

              <span>CSS</span>

              <span>React</span>

              <span>Next.js</span>

            </div>

          </div>

          <div className="skills-category">

            <h3>Backend</h3>

            <div className="skills-list">

              <span>C#.NET</span>

              <span>Asp.NET</span>

              <span>SQL</span>

              <span>Python</span>

              <span>Flask</span>

            </div>

          </div>

          <div className="skills-category">

            <h3>Tools</h3>

            <div className="skills-list">

              <span>Git</span>

              <span>VS Code</span>

            </div>

          </div>

        </div>

      </section>

      <section id="projects" className="section">

        <h2>Projects</h2>

        <p className="construction">UNDER CONSTRUCTION</p>

      </section>


     <section id="contact" className="contact-section">

  <div className="contact-wrapper">

    {/* LEFT SIDE */}
    <div className="contact-info">

      <h2>Contact Me</h2>

      <p>
        I'm always open to discussing new projects, creative ideas,
        or opportunities to be part of something amazing.
        Feel free to reach out!
      </p>

      {/* Email Info */}
      <div className="info-item">

        <div className="info-icon">

          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"

               strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">

            <path d="M4 4h16v16H4z"/>

            <polyline points="22,6 12,13 2,6"/>

          </svg>
        </div>
        <div>
          <span>Email</span>
          <h4>
            <a href="mailto:blockchad26@gmail.com">blockchad26@gmail.com</a>
          </h4>
        </div>
      </div>

      {/* Phone Info */}
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

          <h4><a href="tel:0814918222">081 491 8222</a></h4>

        </div>
      </div>

      {/* Location Info */}
      <div className="info-item">

        <div className="info-icon">

          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"

               strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">

            <path d="M21 10c0 7-9 13-9 13S3 17 3 10
            a9 9 0 0 1 18 0z"/>
            
            <circle cx="12" cy="10" r="3"/>
          </svg>
        </div>
        <div>
          <span>Location</span>
          <h4>Gauteng, Johannesburg</h4>
        </div>
      </div>

      {/* Social Links */}
      <div className="contact-socials">
        <a href="https://www.linkedin.com/in/tyrique-block-0b02b2244/" target="_blank" rel="noreferrer" className="linkedin">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 0h-14c-2.8 0-5 2.2-5 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 
            5-5v-14c0-2.8-2.2-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.3c-1 0-1.7-.8-1.7-1.7 
            0-1 .8-1.7 1.7-1.7 1 0 1.7.8 1.7 1.7 0 .9-.8 1.7-1.7 1.7zm13.5 
            11.3h-3v-5.4c0-1.3-.5-2.2-1.7-2.2-.9 0-1.4.6-1.6 
            1.2-.1.2-.1.5-.1.8v5.6h-3v-10h3v1.4c.4-.7 1.1-1.7 2.8-1.7 
            2 0 3.6 1.3 3.6 4.1v6.2z"/>
          </svg>
        </a>

        <a href="https://github.com/ChadTyB" target="_blank" rel="noreferrer" className="github">
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

    {/* RIGHT SIDE (FORM) */}
   <form id="contact-form" className="contact-form">
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
        <textarea name="message" placeholder="Tell me about your project..." required></textarea>
      </div>

      <button type="submit" className="contact-btn">
        <span>Send Message</span>
      </button>
    </form>
  </div>
</section>

    {showToast && (
      <div className="toast">
         Your email has been sent successfully!
      </div>
    )}

      <footer>

        <p>© 2026 BLOCK</p>

      </footer>
    </main>
  
  );
}
