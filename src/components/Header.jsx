export default function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        {/* Logo */}
        <a href="/" className="header-logo" aria-label="QuizMaster home">
          <div className="header-logo-icon">
            <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="2" width="7" height="7" rx="1.5" />
              <rect x="11" y="2" width="7" height="7" rx="1.5" />
              <rect x="2" y="11" width="7" height="7" rx="1.5" />
              <rect x="11" y="11" width="7" height="7" rx="1.5" />
            </svg>
          </div>
          <span className="header-logo-text">
            Quiz<span>Master</span>
          </span>
        </a>

        {/* Badge */}
        <span className="header-badge">Android &amp; iOS</span>
      </div>
    </header>
  )
}
