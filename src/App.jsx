function App() {
  return (
    <header>
      <Nav />
      <HeroSection />
      <UsesSection />
    </header>
  );
}

function Nav() {
  return (
    <nav>
      <a href='#'>Dashboard</a>
      <a href='#'>Account</a>
      <a href='#'>Budgeting</a>
      <a href='#'>Log In</a>
    </nav>
  )
}

function HeroSection() {
  return (
    <section>
      <h1>Welcome to FinTrack</h1>
      <p>Take control of your money — simply and smartly.</p>
      <p>FinTrack helps you stay on top of your finances with ease. Whether you're budgeting for groceries, tracking income, or saving for your next big goal, we've got you covered.</p>
    </section>
  )
}

function UsesSection() {
  <section>
    <h2>What You Can Do</h2>
    <ul>
      <li>Log income and expenses in seconds</li>
      <li>See where your money goes with category breakdowns</li>
      <li>Set personal savings goals and track progress</li>
      <li>Stay within budget and get spending insights</li>
      <li>100% private — your data stays with you</li>
    </ul>
  </section>
}

export default App;