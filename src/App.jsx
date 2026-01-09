import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "./contexts/authContext";
import Header from "./components/Header";
import {
  Calendar,
  Zap,
  Layers,
  ArrowRight,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import Logo from "./assets/images/Logo.png";
import "./App.css";

function App() {
  const { userLoggedIn } = useAuth();
  const navigate = useNavigate();

  if (userLoggedIn) {
    return <Navigate to="/Timelines/app" />;
  }

  return (
    <div className="landing-page">
      {/* Animated background */}
      <div className="bg-orbs">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
      </div>

      {/* HEADER */}
      <Header />

      {/* HERO */}
      <main className="main-content">
        <div className="hero-section">
          {/* Badge */}
          <div className="hero-badge">
            <Sparkles className="icon-sm" />
            <span>Timeline visualization reimagined</span>
          </div>

          <h1 className="hero-title">
            Build beautiful
            <br />
            <span className="gradient-text">interactive timelines</span>
          </h1>

          <h2 className="hero-subtitle">
            Create, visualize, and share your stories through time. Perfect for
            project planning, historical research, or documenting your journey.
          </h2>

          {/* CTA Buttons */}
          <div className="cta-buttons">
            <button
              onClick={() => navigate("/Timelines/signup")}
              className="btn-primary"
            >
              Start for free
              <ArrowRight className="icon-sm" />
            </button>
            <button
              onClick={() => navigate("/Timelines/contact")}
              className="btn-secondary"
            >
              Contact
            </button>
          </div>
        </div>

        {/* Preview Rectangle */}
        <section className="preview-section">
          <div className="preview-box">
            <div className="preview-shimmer"></div>
            <div className="preview-content">
              <div className="preview-text">Timeline Preview</div>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="features-section">
          <div className="section-header">
            <h3 className="section-label">FEATURES</h3>
            <h2 className="section-title">Everything you need</h2>
            <p className="section-subtitle">
              Powerful tools to bring your timelines to life
            </p>
          </div>

          <div className="features-grid">
            <Feature
              icon={<Calendar className="icon-lg" />}
              title="Point & Range Events"
              description="Add single-date milestones or multi-day spans. Visualize your events exactly how they happened."
              color="cyan"
            />
            <Feature
              icon={<Zap className="icon-lg" />}
              title="Interactive Canvas"
              description="Zoom, pan, and explore your timeline. Click any event to see details and make edits."
              color="violet"
            />
            <Feature
              icon={<Layers className="icon-lg" />}
              title="Multiple Timelines"
              description="Create as many timelines as you need. Organize projects, history, or personal milestones."
              color="blue"
            />
          </div>
        </section>

        {/* Final CTA */}
        <section className="cta-section">
          <div className="cta-box">
            <div className="cta-glow"></div>
            <div className="cta-content">
              <h2 className="cta-title">Ready to get started?</h2>
              <p className="cta-text">
                Join thousands of users creating beautiful timelines. Start
                building for free today.
              </p>
              <button
                onClick={() => navigate("/Timelines/signup")}
                className="btn-cta"
              >
                Get started now
                <ArrowRight className="icon-md" />
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <img src={Logo} alt="Timelines logo" className="footer-logo-img" />
            <span>Timelines</span>
          </div>
          <div className="footer-text">
            © {new Date().getFullYear()} Timelines. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

function Feature({ icon, title, description, color }) {
  return (
    <div className={`feature-card feature-${color}`}>
      <div className="feature-glow"></div>
      <div className="feature-content">
        <div className="feature-icon">{icon}</div>
        <h3 className="feature-title">{title}</h3>
        <p className="feature-description">{description}</p>
      </div>
    </div>
  );
}

export default App;
