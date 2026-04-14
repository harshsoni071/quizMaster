export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-inner">
        {/* Brand */}
        <div className="footer-brand">
          <div className="footer-brand-name">Quiz<span>Master</span></div>
          <p className="footer-tagline">
            A curated collection of beautifully crafted mobile applications for Android and iOS.
            Download with confidence.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <p className="footer-heading">Explore</p>
          <ul className="footer-links">
            <li><a href="#">All Apps</a></li>
            <li><a href="#">Productivity</a></li>
            <li><a href="#">Fitness</a></li>
            <li><a href="#">Finance</a></li>
            <li><a href="#">Creative</a></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <p className="footer-heading">Company</p>
          <ul className="footer-links">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Submit Your App</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Use</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {year} QuizMaster. All rights reserved.</span>
        <span>
          Made with ♥ · <a href="#">Affiliate Disclosure</a>
        </span>
      </div>
    </footer>
  )
}
