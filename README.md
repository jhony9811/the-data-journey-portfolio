[index.html](https://github.com/user-attachments/files/30401743/index.html)
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="The Data Journey — Data Analytics Portfolio" />
  <title>The Data Journey | Data Analytics Portfolio</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Orbitron:wght@500;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="styles.css" />
</head>
<body>
  <header class="hero" id="home">
    <div class="hero-overlay"></div>

    <nav class="navbar container" aria-label="Primary navigation">
      <a class="brand" href="#home" aria-label="The Data Journey home">
        <span class="brand-mark" aria-hidden="true">
          <svg viewBox="0 0 64 64" role="img">
            <circle cx="32" cy="32" r="25"></circle>
            <path d="M17 39V29M25 43V21M33 39V26M41 45V18M49 36V25"></path>
          </svg>
        </span>
        <span class="brand-text"><small>THE</small><strong>DATA</strong><b>JOURNEY</b></span>
      </a>

      <button class="menu-toggle" aria-expanded="false" aria-controls="nav-links" aria-label="Open menu">☰</button>

      <div class="nav-links" id="nav-links">
        <a class="active" href="#home">HOME</a>
        <a href="#missions">MISSIONS</a>
        <a href="#blog">BLOG</a>
        <a href="#tech">TECH STACK</a>
        <a href="#about">ABOUT</a>
        <a href="#contact">CONTACT</a>
      </div>

      <a class="btn btn-outline nav-cta" href="#missions">START THE JOURNEY</a>
    </nav>

    <div class="hero-content container">
      <div class="hero-copy">
        <p class="eyebrow">DATA ANALYTICS PORTFOLIO</p>
        <h1>THE<br><span>DATA</span><br>JOURNEY</h1>
        <p class="tagline">Every dataset tells a story.<br>Every insight shapes the future.</p>
        <a class="btn btn-primary" href="#missions">START THE JOURNEY <span>→</span></a>
      </div>
    </div>
  </header>

  <main>
    <section class="intro-section" id="about">
      <div class="container intro-grid">
        <article class="welcome-card">
          <h2>Welcome, Explorer.</h2>
          <p>You have entered <strong>The Data Journey</strong>.</p>
          <p>This is not just another Data Analytics portfolio.</p>
          <p>It is a collection of real-world missions solved through data.</p>
          <a href="#missions" class="scroll-link">SCROLL TO EXPLORE <span>↓</span></a>
        </article>

        <article class="process-card">
          <h2>Every mission follows the same process:</h2>
          <div class="process-line">
            <div class="process-step">
              <span class="icon-circle">⌕</span>
              <p>Identify<br>the problem</p>
            </div>
            <div class="connector"></div>
            <div class="process-step">
              <span class="icon-circle">▱</span>
              <p>Collect<br>the data</p>
            </div>
            <div class="connector"></div>
            <div class="process-step">
              <span class="icon-circle">⌁</span>
              <p>Clean<br>the data</p>
            </div>
            <div class="connector"></div>
            <div class="process-step">
              <span class="icon-circle">▥</span>
              <p>Analyze<br>the data</p>
            </div>
            <div class="connector"></div>
            <div class="process-step">
              <span class="icon-circle">↗</span>
              <p>Visualize<br>the data</p>
            </div>
            <div class="connector"></div>
            <div class="process-step">
              <span class="icon-circle">♢</span>
              <p>Generate<br>insights</p>
            </div>
            <div class="connector"></div>
            <div class="process-step">
              <span class="icon-circle">➤</span>
              <p>Recommend<br>actions</p>
            </div>
          </div>
        </article>
      </div>

      <div class="container feature-bar">
        <div class="feature"><span>◎</span><p>Real-World<br>Business Cases</p></div>
        <div class="feature"><span>◉</span><p>Actionable<br>Insights</p></div>
        <div class="feature"><span>▥</span><p>Interactive<br>Dashboards</p></div>
        <div class="feature"><span>▤</span><p>Data Storytelling</p></div>
        <div class="feature"><span>◌</span><p>AI-Powered<br>Visuals</p></div>
      </div>
    </section>

    <section class="missions-section" id="missions">
      <div class="container">
        <p class="section-label">MISSION CONTROL</p>
        <h2 class="section-title">Current Missions</h2>
        <div class="mission-grid">
          <article class="mission-card">
            <span class="status in-progress">IN PROGRESS</span>
            <p class="mission-number">MISSION 001</p>
            <h3>Sales Intelligence</h3>
            <p>Analyze sales performance, identify trends, and reveal growth opportunities.</p>
            <div class="chips"><span>Excel</span><span>Power BI</span></div>
          </article>
          <article class="mission-card">
            <span class="status planned">PLANNED</span>
            <p class="mission-number">MISSION 002</p>
            <h3>Automotive Analytics</h3>
            <p>Study product demand, profitability, and opportunities in the automotive market.</p>
            <div class="chips"><span>SQL</span><span>Power BI</span></div>
          </article>
          <article class="mission-card">
            <span class="status planned">PLANNED</span>
            <p class="mission-number">MISSION 003</p>
            <h3>Global Cost of Living</h3>
            <p>Compare salaries, expenses, and purchasing power across countries.</p>
            <div class="chips"><span>Python</span><span>Power BI</span></div>
          </article>
        </div>
      </div>
    </section>

    <section class="tech-section" id="tech">
      <div class="container">
        <p class="section-label">DATA LAB</p>
        <h2 class="section-title">Tech Stack</h2>
        <div class="tech-grid">
          <span>SQL</span><span>Python</span><span>Power BI</span><span>Excel</span><span>GitHub</span><span>AI</span>
        </div>
      </div>
    </section>

    <section class="blog-section" id="blog">
      <div class="container two-column">
        <div>
          <p class="section-label">FIELD NOTES</p>
          <h2 class="section-title">Data Logbook</h2>
        </div>
        <div class="logbook-card">
          <h3>What I Learned Building My First Dashboard</h3>
          <p>Notes about data cleaning, visual hierarchy, storytelling, and business-focused insights.</p>
          <a href="#">READ ENTRY →</a>
        </div>
      </div>
    </section>
  </main>

  <footer id="contact">
    <div class="container footer-inner">
      <div>
        <strong>THE DATA JOURNEY</strong>
        <p>Turning raw data into meaningful decisions.</p>
      </div>
      <a class="btn btn-outline" href="mailto:your-email@example.com">CONTACT ME</a>
    </div>
  </footer>

  <script src="script.js"></script>
</body>
</html>
[styles.css](https://github.com/user-attachments/files/30401751/styles.css):root {
  --bg: #020811;
  --bg-2: #06111e;
  --panel: rgba(5, 18, 31, 0.88);
  --cyan: #00d9ff;
  --cyan-2: #168cff;
  --white: #f7fbff;
  --muted: #b8c5d4;
  --line: rgba(0, 188, 255, 0.34);
  --shadow: 0 0 28px rgba(0, 217, 255, 0.22);
}

* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
  margin: 0;
  color: var(--white);
  background: var(--bg);
  font-family: "Inter", system-ui, sans-serif;
  overflow-x: hidden;
}
a { color: inherit; text-decoration: none; }
.container { width: min(1440px, calc(100% - 72px)); margin: 0 auto; }

.hero {
  min-height: 625px;
  position: relative;
  background-image: url("assets/images/hero-city.png");
  background-size: cover;
  background-position: center 48%;
  overflow: hidden;
}
.hero-overlay {
  position: absolute; inset: 0;
  background:
    linear-gradient(90deg, rgba(0,0,0,.93) 0%, rgba(0,0,0,.67) 23%, rgba(0,0,0,.08) 58%, rgba(0,0,0,.36) 100%),
    linear-gradient(180deg, rgba(0,0,0,.16), rgba(0,0,0,.04) 68%, #020811 100%);
}
.navbar {
  position: relative; z-index: 3;
  height: 92px;
  display: grid;
  grid-template-columns: 250px 1fr auto;
  align-items: center;
  gap: 28px;
}
.brand { display:flex; align-items:center; gap:12px; }
.brand-mark { width:50px; height:50px; filter: drop-shadow(0 0 8px rgba(0,217,255,.55)); }
.brand-mark svg { width:100%; height:100%; fill:none; stroke:var(--cyan); stroke-width:3; }
.brand-text { display:grid; line-height:.86; letter-spacing:.04em; }
.brand-text small { font-size:.62rem; font-family:"Orbitron", sans-serif; }
.brand-text strong { color:var(--cyan); font-size:1.35rem; font-family:"Orbitron", sans-serif; }
.brand-text b { font-size:1.18rem; font-family:"Orbitron", sans-serif; }
.nav-links { display:flex; justify-content:center; gap:38px; font-size:.9rem; font-weight:700; }
.nav-links a { position:relative; padding:10px 0; }
.nav-links a::after { content:""; position:absolute; left:0; right:100%; bottom:0; height:2px; background:var(--cyan); transition:.25s; }
.nav-links a:hover::after, .nav-links .active::after { right:0; }
.nav-links .active { color:var(--cyan); }
.menu-toggle { display:none; }
.btn { display:inline-flex; align-items:center; justify-content:center; gap:14px; padding:15px 27px; border-radius:12px; font-weight:700; letter-spacing:.035em; }
.btn-outline, .btn-primary { border:1px solid var(--cyan); box-shadow: inset 0 0 15px rgba(0,217,255,.08), 0 0 16px rgba(0,217,255,.18); }
.btn-primary { color:var(--cyan); background:rgba(0, 174, 255, .08); }
.btn:hover { transform:translateY(-2px); box-shadow:0 0 30px rgba(0,217,255,.34); }

.hero-content { position:relative; z-index:2; min-height:533px; display:flex; align-items:center; }
.hero-copy { width:510px; padding:24px 0 64px 0; }
.eyebrow { color:var(--cyan); font-size:.78rem; font-weight:800; letter-spacing:.22em; }
.hero h1 { margin:10px 0 14px; font-size:clamp(4.5rem, 6.4vw, 7.5rem); line-height:.82; letter-spacing:-.055em; font-weight:900; }
.hero h1 span { color:var(--cyan); }
.tagline { font-size:1.18rem; line-height:1.7; margin:0 0 30px; }

.intro-section {
  background:
    radial-gradient(circle at 55% 0%, rgba(0,98,181,.13), transparent 38%),
    linear-gradient(180deg, #03101c 0%, #020811 100%);
  border-top:1px solid rgba(0,217,255,.08);
  padding:34px 0 34px;
}
.intro-grid { display:grid; grid-template-columns: 1.05fr 2.2fr; gap:70px; align-items:start; }
.welcome-card, .process-card { position:relative; padding:0 0 0 32px; }
.welcome-card::before, .process-card::before { content:""; position:absolute; left:0; top:4px; width:3px; height:28px; background:linear-gradient(var(--cyan), #236cff); box-shadow:0 0 12px rgba(0,217,255,.45); }
.intro-section h2 { margin:0 0 24px; font-size:1.5rem; }
.welcome-card p { color:#e5edf7; line-height:1.7; margin:10px 0; }
.scroll-link { display:block; border-top:1px solid rgba(0,217,255,.3); margin-top:26px; padding-top:14px; text-align:center; color:var(--cyan); font-size:.78rem; font-weight:700; letter-spacing:.04em; }
.scroll-link span { display:block; font-size:1.4rem; margin-top:3px; }
.process-line { display:flex; align-items:flex-start; justify-content:space-between; gap:10px; }
.process-step { text-align:center; min-width:95px; }
.icon-circle {
  display:grid; place-items:center; width:80px; height:80px; margin:0 auto 12px;
  border:1px solid #0b70ff; border-radius:50%; color:var(--cyan); font-size:2rem;
  background:radial-gradient(circle, rgba(0,186,255,.09), rgba(0,0,0,.12));
  box-shadow:inset 0 0 18px rgba(0,125,255,.16), 0 0 14px rgba(0,125,255,.12);
}
.process-step p { margin:0; font-size:.88rem; line-height:1.45; }
.connector { flex:1; height:1px; border-top:1px dashed var(--cyan); opacity:.55; margin-top:39px; min-width:20px; }
.feature-bar {
  margin-top:26px; min-height:86px; border:1px solid rgba(0,151,255,.4); border-radius:24px;
  display:grid; grid-template-columns:repeat(5,1fr); background:rgba(4,15,28,.8); overflow:hidden;
}
.feature { display:flex; align-items:center; justify-content:center; gap:18px; padding:16px 20px; }
.feature + .feature { border-left:1px solid rgba(255,255,255,.05); }
.feature span { color:var(--cyan); font-size:2rem; }
.feature p { margin:0; line-height:1.5; font-size:.92rem; }

.missions-section, .tech-section, .blog-section { padding:90px 0; }
.missions-section { background:#030b14; }
.section-label { color:var(--cyan); letter-spacing:.2em; font-size:.76rem; font-weight:800; }
.section-title { margin:8px 0 34px; font-size:2.5rem; }
.mission-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:24px; }
.mission-card { border:1px solid var(--line); border-radius:18px; padding:28px; background:linear-gradient(145deg, rgba(5,24,41,.9), rgba(2,10,18,.95)); box-shadow:var(--shadow); }
.status { display:inline-block; padding:7px 10px; font-size:.66rem; border-radius:999px; font-weight:800; letter-spacing:.08em; }
.in-progress { color:#ffd65a; border:1px solid rgba(255,214,90,.4); }
.planned { color:#99b8d6; border:1px solid rgba(153,184,214,.3); }
.mission-number { color:var(--cyan); font-size:.78rem; margin:28px 0 8px; }
.mission-card h3 { font-size:1.5rem; margin:0 0 12px; }
.mission-card p { color:var(--muted); line-height:1.7; }
.chips { display:flex; gap:8px; margin-top:20px; }
.chips span { padding:7px 11px; border-radius:8px; background:rgba(0,217,255,.08); color:var(--cyan); font-size:.72rem; }
.tech-section { background:linear-gradient(180deg,#020811,#06111e); }
.tech-grid { display:grid; grid-template-columns:repeat(6,1fr); gap:14px; }
.tech-grid span { padding:22px 12px; text-align:center; border:1px solid var(--line); border-radius:12px; background:rgba(0,217,255,.04); font-family:"Orbitron",sans-serif; }
.blog-section { background:#030b14; }
.two-column { display:grid; grid-template-columns:1fr 1.2fr; gap:50px; align-items:center; }
.logbook-card { border-left:3px solid var(--cyan); background:var(--panel); padding:28px; }
.logbook-card p { color:var(--muted); line-height:1.7; }
.logbook-card a { color:var(--cyan); font-weight:700; }
footer { padding:34px 0; border-top:1px solid var(--line); background:#01060b; }
.footer-inner { display:flex; align-items:center; justify-content:space-between; gap:30px; }
.footer-inner p { color:var(--muted); }

@media (max-width: 1050px) {
  .navbar { grid-template-columns:1fr auto; }
  .nav-cta { display:none; }
  .menu-toggle { display:block; background:none; color:white; border:1px solid var(--line); border-radius:8px; font-size:1.35rem; padding:8px 12px; }
  .nav-links { position:absolute; top:82px; right:0; display:none; flex-direction:column; gap:8px; width:220px; padding:18px; background:rgba(2,8,17,.97); border:1px solid var(--line); border-radius:12px; }
  .nav-links.open { display:flex; }
  .intro-grid { grid-template-columns:1fr; gap:40px; }
  .process-line { overflow-x:auto; padding-bottom:12px; }
  .mission-grid { grid-template-columns:1fr; }
  .tech-grid { grid-template-columns:repeat(3,1fr); }
}
@media (max-width: 700px) {
  .container { width:min(100% - 32px, 1440px); }
  .hero { min-height:720px; background-position:62% center; }
  .hero-overlay { background:linear-gradient(90deg, rgba(0,0,0,.92), rgba(0,0,0,.58)); }
  .hero h1 { font-size:4.1rem; }
  .hero-copy { width:auto; }
  .feature-bar { grid-template-columns:1fr; }
  .feature + .feature { border-left:none; border-top:1px solid rgba(255,255,255,.05); }
  .tech-grid { grid-template-columns:repeat(2,1fr); }
  .two-column { grid-template-columns:1fr; }
  .footer-inner { flex-direction:column; align-items:flex-start; }
}
[script.js](https://github.com/user-attachments/files/30401758/script.js)<img width="1805" height="871" alt="hero-city" src="https://github.com/user-attachments/assets/ba2fbd3d-9f38-4b18-b52e-76d9cb04ba93" />

