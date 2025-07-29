import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import './Home.scss';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <OfferSection />
      </main>
      <Footer />
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
          FinTrack helps you stay on top of your finances with ease. Whether you're budgeting for
          groceries, tracking income, or saving for your next big goal, we've got you covered.
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
        <div className="column-2x">
          <img src="src/assets/stock.png" />
        </div>
      </div>
    </section>
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
