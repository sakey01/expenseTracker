import './footer.scss';

export default function Footer() {
  return (
    <footer>
      <div className="column-4x">
        <div className="child-column">
          <h3>Links</h3>
          <a href="#">Dashboard</a>
          <a>Budgeting</a>
          <a>Account</a>
          <a>Sign in &rsaquo;</a>
        </div>

        <div className="child-column">
          <h3>Resources</h3>
          <a href="">Guides</a>
          <a href="">Blog</a>
          <a href="">Licences</a>
          <a href="">Cookie settings</a>
        </div>

        <div className="child-column">
          <h3>Legal</h3>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
        </div>

        <div className="child-column">
          <h3>Contact Us</h3>
          <div>
            <a href="#">info@fintrack.com</a>
          </div>
          <div>
            <a href="#">+44 12345 6789</a>
          </div>
        </div>
      </div>
      <div className="divider"></div>
      <p id="copywrite">© 2025 FinTrack. All rights reserved.</p>
    </footer>
  );
}
