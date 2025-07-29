import './Navbar.scss';

export default function Navbar() {
  return (
    <header>
      <nav>
        <a href="../" className="brand-name">
          FinTrack
        </a>
        <div className="nav-right">
          <a href="/dashboard">Dashboard</a>
          <a href="/account">Account</a>
          <a href="/budgeting">Budgeting</a>
          <a href="/sign-in" className="sign-in-btn">
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
