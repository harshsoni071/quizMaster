// src/components/AppCard.jsx

function StarRating({ rating }) {
  const full = Math.floor(rating)
  const half = rating % 1 >= 0.5
  const empty = 5 - full - (half ? 1 : 0)

  return (
    <div className="stars" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: full }).map((_, i) => (
        <svg key={`f${i}`} className="star" viewBox="0 0 16 16">
          <path d="M8 1l1.9 3.8 4.2.6-3 2.9.7 4.2L8 10.5l-3.8 2 .7-4.2-3-2.9 4.2-.6z" fill="currentColor" stroke="none" />
        </svg>
      ))}
      {half && (
        <svg className="star" viewBox="0 0 16 16">
          <defs>
            <linearGradient id="half">
              <stop offset="50%" stopColor="currentColor" />
              <stop offset="50%" stopColor="transparent" />
            </linearGradient>
          </defs>
          <path d="M8 1l1.9 3.8 4.2.6-3 2.9.7 4.2L8 10.5l-3.8 2 .7-4.2-3-2.9 4.2-.6z" fill="url(#half)" stroke="currentColor" strokeWidth="1" />
        </svg>
      )}
      {Array.from({ length: empty }).map((_, i) => (
        <svg key={`e${i}`} className="star empty" viewBox="0 0 16 16">
          <path d="M8 1l1.9 3.8 4.2.6-3 2.9.7 4.2L8 10.5l-3.8 2 .7-4.2-3-2.9 4.2-.6z" fill="currentColor" stroke="none" />
        </svg>
      ))}
    </div>
  )
}

export default function AppCard({ app }) {
  const handleClick = () => {
    window.open(app.playStoreLink, '_blank', 'noopener,noreferrer')
  }

  const handleBtnClick = (e) => {
    e.stopPropagation()
    window.open(app.playStoreLink, '_blank', 'noopener,noreferrer')
  }

  return (
    <article
      className="app-card"
      onClick={handleClick}
      role="button"
      tabIndex={0}
      aria-label={`Download ${app.name}`}
      onKeyDown={e => e.key === 'Enter' && handleClick()}
    >
      {/* Top row: logo + category */}
      <div className="card-top">
        <div className="app-logo-wrap">
          <img
            src={app.logo}
            alt={`${app.name} icon`}
            loading="lazy"
            width={104}
            height={104}
          />
        </div>
        {/* <span className="category-pill">{app.category}</span> */}
      </div>

      {/* App info */}
      <h2 className="app-name">{app.name}</h2>
      {/* {app.description && (
        <p className="app-desc">{app.description}</p>
      )} */}

      {/* Footer: rating + download */}
      <div className="card-footer">
        <div className="app-rating">
          <StarRating rating={app.rating} />
          <span className="rating-text">{app.rating.toFixed(1)}</span>
        </div>

        <button
          className="download-btn"
          onClick={handleBtnClick}
          aria-label={`Download ${app.name}`}
        >
          {/* Play Store icon */}
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <polygon points="5,3 19,12 5,21" strokeLinecap="round" strokeLinejoin="round" stroke="currentColor" fill="none" />
          </svg>
          <span>Download</span>
        </button>
      </div>
    </article>
  )
}
