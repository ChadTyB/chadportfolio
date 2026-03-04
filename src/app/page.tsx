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
          line2Ref.current.innerHTML = `<span class="highlight">${role.substring(0, i)}</span><span class="cursor">|</span>`;
        }

        if (i < role.length) {
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

    // CLEANUP
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
      .sendForm("service_qb5i5pv", "template_gygur2q", formRef.current)
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

      {/* About, Skills, Projects, Contact sections remain unchanged */}
      {/* Ensure your <form> has onSubmit={handleSubmit} and ref={formRef} */}
      <form ref={formRef} onSubmit={handleSubmit} id="contact-form" className="contact-form">
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
        <button type="submit" className="contact-btn"><span>Send Message</span></button>
      </form>
    </main>
  );
}