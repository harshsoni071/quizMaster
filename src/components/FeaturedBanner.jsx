export default function FeaturedBanner({ app }) {
  if (!app) return null

  const handleClick = () => {
    window.open(app.playStoreLink, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="featured-banner">
      <div className="featured-inner">
        <div>
          <p className="featured-label">✦ App of the Week</p>
          <h2 className="featured-title">{app.name}</h2>
          <p className="featured-sub">{app.description}</p>
        </div>
        <button className="featured-cta" onClick={handleClick}>
          <svg viewBox="0 0 24 24">
            <path d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2z" />
            <polygon points="10,8 16,12 10,16" fill="currentColor" stroke="none" />
          </svg>
          Get it Free
        </button>
      </div>
    </div>
  )
}
