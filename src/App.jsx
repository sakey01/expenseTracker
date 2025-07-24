export default function App() {
  return (
    <>
      <header>
        <Header />
      </header>

      <main>
        <HeroSection />
        <AboutSection />
        <WhyUsSection />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

function Header() {
  return (
    <>
      <nav>
        <a href="../" className="brand-name">
          FinTrack
        </a>
        <div className="nav-right">
          <a href="/">Dashboard</a>
          <a href="/">Account</a>
          <a href="/">Budgeting</a>
          <button className="login-btn">
            Sign In <span className="gt-arrow"> &rsaquo;</span>
          </button>
        </div>
        <button className="menu-icon">
          <span>&#9776;</span>
        </button>
      </nav>
    </>
  );
}

function HeroSection() {
  return (
    <section id="hero-section">
      <h1>
        Welcome to <div style={{ color: "#7490c1ff" }}>FinTrack</div>
      </h1>
      <div className="content">
        <p>Take control of your money — simply and smartly.</p>
        <p>
          <span style={{ fontWeight: "bold" }}>FinTrack</span> helps you stay on top of your
          finances with ease. Whether you're budgeting for groceries, tracking income, or saving for
          your next big goal, we've got you covered.
        </p>
      </div>
      <div className="email-input">
        <input type="email" placeholder="Email address" aria-required required />
        <a href="/" className="ctaButton">
          Start Now <span className="gt-arrow"> &rsaquo;</span>
        </a>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about-section">
      <h2>What You Can Do</h2>
      <ul>
        <li>Log income and expenses in seconds</li>
        <li>See where your money goes with category breakdowns</li>
        <li>Set personal savings goals and track progress</li>
        <li>Stay within budget and get spending insights</li>
        <li>100% private — your data stays with you</li>
      </ul>
    </section>
  );
}

function WhyUsSection() {
  return (
    <section id="why-us-section">
      <h2>Why FinTrack?</h2>
      <p>
        We believe financial tracking should be easy and intuitive — not confusing. That’s why
        FinTrack gives you only what you need, right when you need it.
      </p>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer-section">
      <h2>Ready to start?</h2>
      <p>Click "Get Started" and begin tracking your finances today — all in one place.</p>
    </footer>
  );
}
