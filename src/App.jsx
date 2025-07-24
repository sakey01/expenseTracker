export default function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <HeroSection />
        <AboutSection />
        <OfferSection />
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
          <a href="#" className="sign-in-btn">
            Sign In <span className="gt-arrow"> &rsaquo;</span>
          </a>
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
        <input type="email" placeholder="Email address" required />
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
      <div className="card">
        <h2>What is FinTrack?</h2>
        <div className="column-2x half-item">
          <div className="content">
            <p>
              We are a simple budgeting application dedicated to students, focused on helping you
              save money here and there.
            </p>
            <p>
              Our mission is to simplify financial management with emerging technologies. We believe
              in empowering everyone with the tools they need to succeed.
            </p>
          </div>
          <img src="src/assets/stonks.png" alt="Finance concept" />
        </div>
      </div>
    </section>
  );
}

function OfferSection() {
  return (
    <section id="offer-section">
      <h2>What You Can Do</h2>
      <div className="card-list">
        <Card icon="fas fa-receipt" desc="Log income and expenses in seconds" />
        <Card icon="fas fa-chart-pie" desc="See where your money goes with category" />
        <Card icon="fas fa-receipt" desc="See where your money goes with category" />
        <Card icon="fas fa-bullseye" desc="Set personal savings goals and track progress" />
        <Card icon="fas fa-chart-line" desc="Stay within budget and get spending insights" />
        <Card icon="fas fa-lock" desc="100% private — your data stays with you" />
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="footer-section">
      <h2>Join Now</h2>
      <p>© 2025 FinTrack. All rights reserved.</p>
      <div>
        <a>Privacy Policy</a>
        <span></span>
        <a>Terms of Service</a>
        <span></span>
        <a>Contact Us</a>
      </div>
    </footer>
  );
}

function Card({ icon, desc }) {
  return (
    <div className="card">
      <i className={`${icon} card-icons`}></i>
      <p className="card-desc">{desc}</p>
    </div>
  );
}
