import './App.css';

function App() {
  return (
    <div className="app">
      <header className="hero">
        <div className="hero-content">
          <p className="hero-tag">Results-driven Software Engineer</p>
          <h1 className="hero-name">Nirav Gaglani</h1>
          <p className="hero-role">Software Engineer</p>
          <p className="hero-summary">
            Results-driven Software Engineer with 2.5+ years of experience building and
            maintaining web applications using Fiber (Golang), Laravel, JavaScript, Vue,
            and Python Scrapy. Strong communicator, quick to adapt to new technologies,
            and comfortable managing multiple projects end-to-end.
          </p>
          <div className="hero-actions">
            <a href="#experience" className="btn primary">View Experience</a>
            <a href="#contact" className="btn secondary">Contact Me</a>
          </div>
        </div>
        <aside className="hero-contact" id="contact">
          <h2>Contact</h2>
          <ul>
            <li>Gujarat, India</li>
            <li><a href="mailto:niravgaglani6268@gmail.com">niravgaglani6268@gmail.com</a></li>
            <li><a href="https://linkedin.com/in/nirav-gaglani" target="_blank" rel="noreferrer">linkedin.com/in/nirav-gaglani</a></li>
            <li><a href="https://github.com/Nirav-Gaglani" target="_blank" rel="noreferrer">github.com/Nirav-Gaglani</a></li>
          </ul>
        </aside>
      </header>

      <main className="main">
        <section id="skills" className="section">
          <h2>Technical Skills</h2>
          <div className="chips">
            <span className="chip">Laravel</span>
            <span className="chip">Fiber (Golang)</span>
            <span className="chip">JavaScript</span>
            <span className="chip">Vue 2</span>
            <span className="chip">Python</span>
            <span className="chip">Scrapy</span>
            <span className="chip">Docker</span>
            <span className="chip">k9s</span>
            <span className="chip">GCP</span>
            <span className="chip">CircleCI</span>
            <span className="chip">SQS</span>
            <span className="chip">SNS</span>
            <span className="chip">S3</span>
            <span className="chip">Linux (Garuda / Arch)</span>
          </div>
        </section>

        <section className="section">
          <h2>Soft Skills</h2>
          <ul className="list">
            <li>Adaptable to new technologies and environments</li>
            <li>Easy to work with, collaborative team member</li>
            <li>Takes ownership, accountability & responsibility for work and projects</li>
            <li>Keeps client satisfaction and communication as a priority</li>
            <li>Documents and traces business decisions clearly</li>
          </ul>
        </section>

        <section id="experience" className="section">
          <h2>Work Experience</h2>

          <article className="card">
            <header className="card-header">
              <div>
                <h3>Software Engineer</h3>
                <p className="card-company">Improwised Technologies Pvt. Ltd.</p>
              </div>
              <p className="card-meta">March 2023 – June 2025</p>
            </header>
            <ul className="list">
              <li>
                Developed and implemented a cost-saving feature that significantly reduced
                3rd-party API expenses without impacting service delivery.
              </li>
              <li>
                Identified a critical gap between service delivery to customers and
                accurate billing, helping improve overall reliability.
              </li>
              <li>Upgraded a Laravel application from version 8.x to 11.x.</li>
              <li>
                Proactively identified and resolved bugs via both customer feedback and
                code exploration during feature work.
              </li>
              <li>Set up Docker environments for projects when required.</li>
              <li>
                Estimated effort for feature requests, secured client approvals, and
                delivered within agreed timelines.
              </li>
              <li>
                Developed and maintained web scraping spiders using Python Scrapy for
                accurate and efficient data collection.
              </li>
              <li>
                Built multiple UI components such as filters and search features using
                Vue 2.
              </li>
              <li>
                Led client calls, documented scopes, notes, and action items to ensure
                clarity and strong follow-up.
              </li>
              <li>
                Authored documentation for key processes, including sandbox credential
                generation, customer onboarding, and spider creation.
              </li>
            </ul>
          </article>

          <article className="card">
            <header className="card-header">
              <div>
                <h3>Software Engineering Apprentice</h3>
                <p className="card-company">Improwised Technologies Pvt. Ltd.</p>
              </div>
              <p className="card-meta">Sept 2022 – Feb 2023</p>
            </header>
            <ul className="list">
              <li>
                Built a complete blogging platform with Golang (Fiber) backend and
                Nuxt 3 frontend as part of apprenticeship training.
              </li>
              <li>
                Implemented OAuth 2.0 authentication using Zitadel.
              </li>
            </ul>
          </article>
        </section>

        <section id="education" className="section">
          <h2>Education</h2>
          <ul className="timeline">
            <li>
              <div className="timeline-item">
                <p className="timeline-period">July 2025 – Present</p>
                <h3>Master in Information Technology (Drop out)</h3>
                <p className="timeline-school">RMIT University</p>
              </div>
            </li>
            <li>
              <div className="timeline-item">
                <p className="timeline-period">July 2018 – May 2022</p>
                <h3>Bachelor of Technology – 8.25 CPI</h3>
                <p className="timeline-school">Dharmsinh Desai University</p>
              </div>
            </li>
            <li>
              <div className="timeline-item">
                <p className="timeline-period">May 2017 – April 2018</p>
                <h3>HSC – 60%</h3>
                <p className="timeline-school">Shakti Higher Secondary School</p>
              </div>
            </li>
            <li>
              <div className="timeline-item">
                <p className="timeline-period">April 2015 – March 2016</p>
                <h3>SSC – 9.1 CGPA</h3>
                <p className="timeline-school">Sarvodaya Secondary School</p>
              </div>
            </li>
          </ul>
        </section>

        <section className="section">
          <h2>Languages</h2>
          <ul className="list inline">
            <li>English (PTE: 78/90)</li>
            <li>Gujarati</li>
            <li>Hindi</li>
          </ul>
        </section>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Nirav Gaglani. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
