"use client";

import { useEffect } from "react";
import Image from "next/image";

export default function Home(){
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

    function typeRole(role: string, callback: () => void){

      let i = 0;
      function typeChar(){

        if (i <= role.length){

          if (line2E1)
            line2E1.innerHTML = `<span class="highlight">${role.substring(0, i)}</span>`;

          i++;

          setTimeout(typeChar, 150);

        } else {

          setTimeout(callback, 2000);

        }

      }

      typeChar();

    }


    function startTypewriter(){

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
      {threshold: 0.2}

    );

   categories.forEach((cat) => observer.observe(cat));


    return () => window.removeEventListener("scroll", onScroll);

  }, []);


  return(

    <main>

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


      <section id="about" className="section">
        <h2>About Me</h2>

        <p>

         My name is Tyrique Block. I am an Information Technology graduate. With that being said,

         my course was a three-year Diploma in Information Technology that consisted of modules

         such as Programming, Information Systems, Web Development and Networking just to

         name a few. I am highly motivated, dedicated a hard worker and a quick learner. I have

         good time management, communication, and organizational skills. I work well under

         pressure, and I can work effectively both independently and in groups. I know I have a lot

         to offer to your organization and I am keen to develop my professional skills.

        </p>

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
            <path d="M12 .5C5.7.5.8 5.4.8 11.7c0 4.9 3.2 9 7.6 10.5.6.1.8-.3.8-.6v-2.3
            c-3.1.7-3.8-1.5-3.8-1.5-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 
            1.1.1 1.7 1.2 1.7 1.2 1 .1 1.6-.8 2-1.3.1-.7.4-1.2.7-1.5
            -2.5-.3-5.2-1.3-5.2-5.7 0-1.3.5-2.3 1.2-3.2
            -.1-.3-.5-1.6.1-3.3 0 0 1-.3 3.3 1.2
            .9-.3 1.9-.4 2.8-.4.9 0 1.9.1 2.8.4
            2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 3 .1 3.3
            .8.9 1.2 2 1.2 3.2 0 4.4-2.7 5.3-5.3 5.6
            .4.3.8 1 .8 2v3c0 .3.2.7.8.6
            4.4-1.5 7.6-5.6 7.6-10.5C23.2 5.4 18.3.5 12 .5z"/>
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


      <footer>

        <p>© 2026 BLOCK</p>

      </footer>
    </main>
  
  );
}