import './navbar.scss';

export default function Navbar() {
  return (
    <header>
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
    </header>
  );
}
