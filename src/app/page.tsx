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

      <div className="logo" data-text="BLOCK" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          BLOCK
      </div>

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

              <span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#3178C6">
                  <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"/>
                </svg>TypeScript</span>

              <span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path fill="#E34F26" d="M71 460L30 0h451l-41 460-184 52"/>
                  <path fill="#EF652A" d="M256 472l149-41 35-394H256"/>
                  <path fill="#EBEBEB" d="M256 208h-75l-5-58h80V94H114l1 15 14 156h127zm-1 147l-63-17-4-45h-56l7 89 116 32"/>
                  <path fill="#FFF" d="M255 208v56h67l-6 64-61 17v58l113-31 16-174zm0-114v56h124l1-15 3-28 1-13z"/>
                </svg>HTML</span>


              <span>
                
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
                  <path fill="#1572B6" d="M18.814 114.123L8.76 1.352h110.48l-10.064 112.754-45.243 12.543-45.119-12.526z"/>
                  <path fill="#33A9DC" d="M64.001 117.062l36.559-10.136 8.601-96.354h-45.16v106.49z"/>
                  <path fill="#fff" d="M64.001 51.429h18.302l1.264-14.163H64.001V23.435h34.682l-.332 3.711-3.4 38.114h-30.95V51.429z"/>
                  <path fill="#EBEBEB" d="M64.083 87.349l-.061.018-15.403-4.159-.985-11.031H33.752l1.937 21.717 28.331 7.863.063-.018v-14.39z"/>
                  <path fill="#fff" d="M81.127 64.675l-1.666 18.522-15.426 4.164v14.39l28.354-7.858.208-2.337 2.406-26.881H81.127z"/>
                  <path fill="#EBEBEB" d="M64.048 23.435v13.831H30.64l-.277-3.108-.63-7.012-.331-3.711h34.646zm-.047 27.996v13.831H48.792l-.277-3.108-.631-7.012-.33-3.711h16.447z"/>
                </svg>CSS</span>

              <span>
                <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="256" cy="256" r="36" fill="#61DAFB"/>
                  <g fill="none" stroke="#61DAFB" strokeWidth="18">
                  <ellipse cx="256" cy="256" rx="214" ry="82"/>
                  <ellipse cx="256" cy="256" rx="214" ry="82" transform="rotate(60 256 256)"/>
                  <ellipse cx="256" cy="256" rx="214" ry="82" transform="rotate(120 256 256)"/></g>
                </svg>React</span>


              <span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000">
                  <path d="M18.665 21.978C16.758 23.255 14.465 24 12 24 5.377 24 0 18.623 0 12S5.377 0 12 0s12 5.377 12 12c0 3.583-1.574 6.801-4.067 9.001L9.219 7.2H7.2v9.596h1.615V9.251l9.85 12.727Zm-3.332-8.533 1.6 2.061V7.2h-1.6v6.245Z"/>
                </svg>Next.js</span>


            </div>

          </div>

          <div className="skills-category">

            <h3>Backend</h3>

            <div className="skills-list">

              <span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
                  <path fill="#9B4F96" d="M115.4 30.7L67.1 2.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.4 1 3.5l106.8-62c-.6-1.2-1.5-2.1-2.4-2.7z"/>
                  <path fill="#68217A" d="M10.7 95.3c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c0-.9-.1-1.9-.6-2.8l-106.6 62z"/>
                  <path fill="#fff" d="M85.3 76.1C81.1 83.5 73.1 88.5 64 88.5c-13.5 0-24.5-11-24.5-24.5s11-24.5 24.5-24.5c9.1 0 17.1 5 21.3 12.5l13-7.5c-6.8-11.9-19.6-20-34.3-20-21.8 0-39.5 17.7-39.5 39.5s17.7 39.5 39.5 39.5c14.6 0 27.4-8 34.2-19.8l-12.9-7.6zM97 66.2l.9-4.3h-4.2v-4.7h5.1L100 51h4.9l-1.2 6.1h3.8l1.2-6.1h4.8l-1.2 6.1h2.4v4.7h-3.3l-.9 4.3h4.2v4.7h-5.1l-1.2 6h-4.9l1.2-6h-3.8l-1.2 6h-4.8l1.2-6h-2.4v-4.7H97zm4.8 0h3.8l.9-4.3h-3.8l-.9 4.3z"/>
                </svg>C#.NET</span>


              <span>Asp.NET</span>

              <span>
                <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                  <ellipse cx="256" cy="96" rx="192" ry="64" fill="#00618A"/>
                  <path fill="#00618A" d="M64 96v320c0 35.346 85.961 64 192 64s192-28.654 192-64V96c0 35.346-85.961 64-192 64S64 131.346 64 96z"/>
                  <ellipse cx="256" cy="96" rx="192" ry="64" fill="#00758F"/>
                  <path fill="none" stroke="#FFF" stroke-width="10" d="M200 340l30 40 80-90" opacity=".6"/>
                </svg>SQL</span>


              <span>
                <svg viewBox="0 0 256 255" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#366A96" d="M126.916.072c-64.832 0-60.784 28.115-60.784 28.115l.072 29.128h61.868v8.745H41.631S.145 61.355.145 126.77c0 65.417 36.21 63.097 36.21 63.097h21.61v-30.356s-1.165-36.21 35.632-36.21h61.362s34.475.557 34.475-33.319V33.97S194.67.072 126.916.072zM92.802 19.66a11.12 11.12 0 0 1 11.13 11.13 11.12 11.12 0 0 1-11.13 11.13 11.12 11.12 0 0 1-11.13-11.13 11.12 11.12 0 0 1 11.13-11.13z"/>
                  <path fill="#FFC331" d="M128.757 254.126c64.832 0 60.784-28.115 60.784-28.115l-.072-29.127H127.6v-8.745h86.441s41.486 4.705 41.486-60.712c0-65.416-36.21-63.096-36.21-63.096h-21.61v30.355s1.165 36.21-35.632 36.21h-61.362s-34.475-.557-34.475 33.32v56.013s-5.235 33.897 62.519 33.897zm34.114-19.586a11.12 11.12 0 0 1-11.13-11.13 11.12 11.12 0 0 1 11.13-11.131 11.12 11.12 0 0 1 11.13 11.13 11.12 11.12 0 0 1-11.13 11.13z"/>
                </svg>Python</span>


              <span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000">
                <path d="M10.773 2.878c-.013 1.434.322 4.624.445 5.734l-8.558 3.83c-.56-.959-.98-2.304-1.237-3.38l-.06.027c-.205.09-.406.053-.494-.088l-.011-.018-.82-1.506c-.058-.105-.05-.252.024-.392a.78.78 0 0 1 .358-.331l9.824-4.207c.146-.064.299-.063.4.004.106.062.127.128.13.327Zm.68 7c.523 1.97.675 2.412.832 2.818l-7.263 3.7a19.35 19.35 0 0 1-1.81-2.83l8.24-3.689Zm12.432 8.786h.003c.283.402-.047.657-.153.698l-.947.37c.037.125.035.319-.217.414l-.736.287c-.229.09-.398-.059-.42-.2l-.025-.125c-4.427 1.784-7.94 1.685-10.696.647-1.981-.745-3.576-1.983-4.846-3.379l6.948-3.54c.721 1.431 1.586 2.454 2.509 3.178 2.086 1.638 4.415 1.712 5.793 1.563l-.047-.233c-.015-.077.007-.135.086-.165l.734-.288a.302.302 0 0 1 .342.086l.748-.288a.306.306 0 0 1 .341.086l.583.89Z"/>
              </svg>Flask</span>

            </div>

          </div>

          <div className="skills-category">

            <h3>Tools</h3>

            <div className="skills-list">

              <span>
                <svg viewBox="0 0 496 512" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#181717" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.8-14.3-112.8-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8z"/>
                </svg>Git</span>

              <span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
                  <mask
                    id="a"
                    width="128"
                    height="128"
                    x="0"
                    y="0"
                    maskUnits="userSpaceOnUse"
                    style={{ maskType: "alpha" }}
                  >
                    <path
                      fill="#fff"
                      fillRule="evenodd"
                      d="M90.767 127.126a7.968 7.968 0 0 0 6.35-.244l26.353-12.681a8 8 0 0 0 4.53-7.209V21.009a8 8 0 0 0-4.53-7.21L97.117 1.12a7.97 7.97 0 0 0-9.093 1.548l-50.45 46.026L15.6 32.013a5.328 5.328 0 0 0-6.807.302l-7.048 6.411a5.335 5.335 0 0 0-.006 7.888L20.796 64 1.74 81.387a5.336 5.336 0 0 0 .006 7.887l7.048 6.411a5.327 5.327 0 0 0 6.807.303l21.974-16.68 50.45 46.025a7.96 7.96 0 0 0 2.743 1.793Zm5.252-92.183L57.74 64l38.28 29.058V34.943Z"
                      clipRule="evenodd"
                    />
                  </mask>

                  <g mask="url(#a)">
                    <path
                      fill="#0065A9"
                      d="M123.471 13.82 97.097 1.12A7.973 7.973 0 0 0 88 2.668L1.662 81.387a5.333 5.333 0 0 0 .006 7.887l7.052 6.411a5.333 5.333 0 0 0 6.811.303l103.971-78.875c3.488-2.646 8.498-.158 8.498 4.22v-.306a8.001 8.001 0 0 0-4.529-7.208Z"
                    />
                    <path
                      fill="#007ACC"
                      d="m123.471 114.181-26.374 12.698A7.973 7.973 0 0 1 88 125.333L1.662 46.613a5.333 5.333 0 0 1 .006-7.887l7.052-6.411a5.333 5.333 0 0 1 6.811-.303l103.971 78.874c3.488 2.647 8.498.159 8.498-4.219v.306a8.001 8.001 0 0 1-4.529 7.208Z"
                    />
                    <path
                      fill="#1F9CF0"
                      d="M97.098 126.882A7.977 7.977 0 0 1 88 125.333c2.952 2.952 8 .861 8-3.314V5.98c0-4.175-5.048-6.266-8-3.313a7.977 7.977 0 0 1 9.098-1.549L123.467 13.8A8 8 0 0 1 128 21.01v85.982a8 8 0 0 1-4.533 7.21l-26.369 12.681Z"
                    />
                  </g>
                </svg> VS Code</span>
                

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
