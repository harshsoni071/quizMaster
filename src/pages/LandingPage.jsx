import { useState, useMemo } from "react";
import { apps, CATEGORIES } from "../data/apps";
import AppCard from "../components/AppCard";
import FeaturedBanner from "../components/FeaturedBanner";
import BannerImage from "../assets/logos/Banner.png";
import appImage from "../assets/logos/Banner.png";

export default function LandingPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const featured = useMemo(() => apps.find((a) => a.featured), []);

  const filtered = useMemo(() => {
    if (activeCategory === "All") return apps;
    return apps.filter((a) => a.category === activeCategory);
  }, [activeCategory]);

  // Compute total downloads display
  const totalDownloads = "25M+";
  const appCount = apps.length;

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────── */}
      <section>
        <div className="w-full h-[450px] md:h-[450px] h-[220px]">
          <img
            src={appImage}
            alt="banner"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="hero">
          <div>
            <h1 className="hero-title">
              Apps worth
              <br />
              <em>your space.</em>
            </h1>
            <p className="hero-subtitle">
              Every app in QuizMaster is handpicked for quality, design, and
              usefulness. No filler. No bloatware. Just great software.
            </p>
          </div>

          <div className="hero-stats">
            <div className="hero-stat">
              <div className="hero-stat-number">{appCount}</div>
              <div className="hero-stat-label">Apps listed</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-number">{totalDownloads}</div>
              <div className="hero-stat-label">Downloads</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-number">4.6★</div>
              <div className="hero-stat-label">Avg rating</div>
            </div>
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* ── Featured Banner ────────────────────────────────── */}
      {/* {featured && <FeaturedBanner app={featured} />} */}

      {/* ── App Grid ──────────────────────────────────────── */}
      <section className="apps-section">
        <div className="section-header">
          <h2 className="section-title">Browse All Apps</h2>
          <span className="section-count">
            {filtered.length} app{filtered.length !== 1 ? "s" : ""}
          </span>
        </div>

        {/* Category filter */}
        <div
          className="filter-bar"
          role="group"
          aria-label="Filter by category"
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`filter-btn${activeCategory === cat ? " active" : ""}`}
              onClick={() => setActiveCategory(cat)}
              aria-pressed={activeCategory === cat}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="app-grid">
          {filtered.length > 0 ? (
            filtered.map((app) => <AppCard key={app.id} app={app} />)
          ) : (
            <div className="empty-state">
              <div className="empty-state-icon">📭</div>
              <h3>No apps in this category</h3>
              <p>Try selecting a different category above.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
