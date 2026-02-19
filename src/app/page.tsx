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

            <div className="logo-icon csharp">

              <svg

                viewBox="0 0 24 24"

                fill="none"

                stroke="currentColor"

                strokeWidth="1.8"

                strokeLinecap="round"

                strokeLinejoin="round"
              >
                <polygon points="12 2 20 6 20 18 12 22 4 18 4 6 12 2" />

                <text

                  x="12"

                  y="15"

                  fontSize="5"

                  textAnchor="middle"

                  fill="currentColor"

                  stroke="none"

                  fontWeight="bold"

                >

                  C#
                </text>

              </svg>

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


      <section id="contact" className="section">

        <h2>Contact Me</h2>

        <div className="contact-container">

          <p>
            <strong>Location: Gauteng, Johannesburg</strong>
          </p>
          <p>
            <strong>Cellphone: 081 491 8222</strong>
          </p>
          <p>
            <strong>Email: blockchad26@gmail.com</strong>
          </p>

          <div className="social-links">

            <a href="https://www.linkedin.com/in/tyrique-block-0b02b2244/" target="_blank" className="linkedin">

              <svg viewBox="0 0 24 24" fill="currentColor">

                <path d="M19 0h-14c-2.8 0-5 2.2-5 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5v-14c0-2.8-2.2-5-5-5zm-11 
                        19h-3v-10h3v10zm-1.5-11.3c-1 0-1.7-.8-1.7-1.7 
                        0-1 .8-1.7 1.7-1.7 1 0 1.7.8 1.7 1.7 0 .9-.8 1.7-1.7 1.7zm13.5 
                        11.3h-3v-5.4c0-1.3-.5-2.2-1.7-2.2-.9 0-1.4.6-1.6 
                        1.2-.1.2-.1.5-.1.8v5.6h-3v-10h3v1.4c.4-.7 1.1-1.7 2.8-1.7 
                        2 0 3.6 1.3 3.6 4.1v6.2z" />

              </svg>

            </a>

            <a href="https://github.com" target="_blank" className="github">

              <svg viewBox="0 0 24 24" fill="currentColor">

                <path d="M12 .5C5.7.5.8 5.4.8 11.7c0 4.9 3.2 9 7.6 10.5.6.1.8-.3.8-.6v-2.3c-3.1.7-3.8-1.5-3.8-1.5
                        -.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 
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

      </section>


      <footer>

        <p>© 2026 BLOCK</p>

      </footer>
    </main>
  
  );
}