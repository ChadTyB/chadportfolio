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
   useEffect(() => {
  if (line1Ref.current) line1Ref.current.textContent = "Hi, I'm Tyrique Block";

  const roles = ["IT Graduate", "Software Engineer"];
  let roleIndex = 0;

  const typeRole = (role: string, callback: () => void) => {
    let i = 0;

    const typeChar = () => {
      if (line2Ref.current) {
        line2Ref.current.innerHTML = `<span class="highlight">${role.substring(0, i)}</span>`;
      }

      if (i < role.length) {  // <--- make sure it's strictly less than role.length
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
}, []);

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

    emailjs
      .sendForm(
        "service_qb5i5pv",
        "template_gygur2q",
        formRef.current
      )
      .then(
        () => {
          alert("Message sent successfully!");
          formRef.current?.reset();
        },
        (error: any) => {
          alert("Failed to send message. Try again.");
          console.error(error);
        }
      );
  };

  return (
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
            <h1 className="typewriter" ref={line1Ref}></h1>
            <h2 className="typewriter roles" ref={line2Ref}></h2>
          </div>

          <div className="hero-logos" style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', justifyContent: 'center' }}>
            <div className="logo-icon gaming"><span className="emoji">🎮</span></div>
            <div className="logo-icon music"><span className="emoji">🎵</span></div>
            <div className="logo-icon laptop"><span className="emoji">💻</span></div>
            <div className="logo-icon code"><span className="code-icon">&lt;/&gt;</span></div>
          </div>
        </div>
      </section>

      {/* Other sections unchanged */}
      <section id="contact" className="contact-section">
        <div className="contact-wrapper">
          <div className="contact-info">
            <h2>Contact Me</h2>
            <p>I'm always open to discussing new projects, creative ideas, or opportunities. Feel free to reach out!</p>

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
                <h4>
                  <a href="mailto:blockchad26@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>blockchad26@gmail.com</a>
                </h4>
              </div>
            </div>

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
                    A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div>
                <span>Phone</span>
                <h4>
                  <a href="tel:0814918222" style={{ color: 'inherit', textDecoration: 'none' }}>081 491 8222</a>
                </h4>
              </div>
            </div>

            {/* Socials unchanged */}
          </div>

          <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
            {/* form fields unchanged */}
          </form>
        </div>
      </section>
    </main>
  );
}