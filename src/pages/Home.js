import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Shield,
  Zap,
  Cpu,
  Globe,
  MessageSquare,
  Monitor,
  ChevronDown,
  Cloud,
  TrendingUp,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import {
  SiReact,
  SiNodedotjs,
  SiTypescript,
  SiWordpress,
  SiPython,
  SiGo,
  SiPostgresql,
} from "react-icons/si";
import "../App.css";
import logo from "../assets/images/logo.png";
import creative1 from "../assets/images/creative-1.jpeg";
import creative2 from "../assets/images/creative-2.jpeg";
import creative3 from "../assets/images/creative-3.jpeg";
import creative4 from "../assets/images/creative-4.jpeg";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    type: "",
    vision: "",
  });

  const handleChange = (e) =>
    setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! We'll be in touch shortly.");
  };

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const navLinks = [
    { label: "Home", href: "/#home" },
    { label: "What We Do", href: "/#whatwedo" },
    { label: "Services", href: "/#services" },
    { label: "Our Work", href: "/#portfolio" },
    { label: "About", href: "/#about" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <div className="home-container" id="home">
      <div className="glow glow-top"></div>
      <div className="glow glow-mid"></div>
      <div className="glow glow-bottom"></div>

      {/* NAVBAR */}
      <nav className={`navbar${menuOpen ? " open" : ""}`}>
        <div className="container nav-content">
          <a href="/#home" className="nav-logo" onClick={() => setMenuOpen(false)}>
            <img
              src={logo}
              alt="Xfinity Innovations"
              className="nav-logo-img"
            />
          </a>
          <div className={`nav-links${menuOpen ? " open" : ""}`} id="mobile-nav-links">
            {navLinks.map(({ label, href }, i) => (
              <a
                key={label}
                href={href}
                className={i === 0 ? "active" : ""}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            ))}
          </div>
          <div className="nav-right">
            <a
              href="/#contact"
              className="btn btn-nav"
              onClick={() => setMenuOpen(false)}
            >
              Get Started <ArrowRight size={15} />
            </a>
            <button
              className="burger"
              aria-label="menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-nav-links"
              onClick={() => setMenuOpen((v) => !v)}
            >
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="nav-backdrop" onClick={() => setMenuOpen(false)} />
        )}
      </nav>

      {/* HERO */}
      <header className="hero" id="hero">
        <div className="container hero-inner">
          <div className="hero-text">
            <p className="badge">Website Development &amp; IT Solutions</p>
            <h1 className="hero-title">
              Engineering the Future of
              <br />
              Digital Experiences
            </h1>
            <p className="hero-sub">
              We don&apos;t just build software &mdash; we craft digital
              ecosystems that inspire, elevate, and transform brands.
            </p>
            <div className="hero-btns">
              <a href="/#portfolio" className="btn btn-outline-pill">
                <MessageSquare size={16} /> View Our Work
              </a>
              <a href="/#contact" className="btn btn-fill-pill">
                Start a Project <ArrowRight size={16} />
              </a>
            </div>
          </div>
          <div className="hero-deco">
            <div className="hero-card">
              <div className="hero-card-header">
                <span className="hc-dot"></span>
                <span className="hc-dot hc-dot--y"></span>
                <span className="hc-dot hc-dot--g"></span>
                <span className="muted text-xs" style={{ marginLeft: "8px" }}>
                  xfinity-project.tsx
                </span>
              </div>
              <div className="hero-card-body">
                <code className="hero-code">
                  <span className="ck">const</span> project = {"{"}"<br />"
                  &nbsp;&nbsp;name:{" "}
                  <span className="cf">&apos;Xfinity Innovations&apos;</span>,
                  <br />
                  &nbsp;&nbsp;stack:{" "}
                  <span className="cf">
                    [&apos;React&apos;, &apos;Node&apos;, &apos;AWS&apos;]
                  </span>
                  ,<br />
                  &nbsp;&nbsp;launched: <span className="ck">true</span>,<br />
                  &nbsp;&nbsp;clients: <span className="cf">50</span>
                  <br />
                  {"};"}{" "}
                </code>
              </div>
            </div>
            <div className="hero-stat-row">
              <div className="hero-stat">
                <span className="hero-stat-n">50+</span>
                <span className="muted text-xs">Projects</span>
              </div>
              <div className="hero-stat">
                <span className="hero-stat-n">100%</span>
                <span className="muted text-xs">Satisfaction</span>
              </div>
              <div className="hero-stat">
                <span className="hero-stat-n">5yr</span>
                <span className="muted text-xs">Experience</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* TECH STRIP */}
      <section className="strip">
        <div className="container">
          <p className="strip-label">
            Trusted Tools &amp; Technologies We Work With
          </p>
          <div className="strip-logos">
            {[
              { icon: <SiReact />, label: "React" },
              { icon: <SiNodedotjs />, label: "Node.js" },
              { icon: <SiTypescript />, label: "TypeScript" },
              { icon: <SiWordpress />, label: "WordPress" },
              { icon: <SiPython />, label: "Python" },
              { icon: <SiGo />, label: "Go" },
              { icon: <SiPostgresql />, label: "PostgreSQL" },
              { icon: <Cloud size={22} />, label: "AWS" },
            ].map(({ icon, label }) => (
              <div className="strip-circle" key={label} title={label}>
                {icon}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section id="whatwedo" className="section container">
        <div className="hook-wrap">
          <div className="hook-text">
            <p className="badge">What We Do</p>
            <h2 className="section-title text-left">
              Bridging imagination
              <br />
              and technology.
            </h2>
            <p className="muted hook-body">
              At Xfinity Innovations, we bridge the gap between imagination and
              technology. Whether it&apos;s a high-performance web platform or a
              complex enterprise software solution, we deliver products that are
              as functional as they are beautiful.
            </p>
            <a href="/#services" className="btn btn-fill-pill hook-cta">
              Explore Our Services <ArrowRight size={16} />
            </a>
          </div>
          <div className="hook-vis">
            <div className="hook-card">
              <div className="hook-icon">
                <Globe size={24} />
              </div>
              <p className="hook-stat">50+</p>
              <p className="muted text-sm">Projects delivered</p>
            </div>
            <div className="hook-card">
              <div className="hook-icon">
                <Monitor size={24} />
              </div>
              <p className="hook-stat">100%</p>
              <p className="muted text-sm">Client satisfaction</p>
            </div>
            <div className="hook-card hook-card--wide">
              <div className="hook-icon">
                <Cpu size={24} />
              </div>
              <p className="hook-stat">End-to-end</p>
              <p className="muted text-sm">
                From concept to deployment &mdash; we own every step.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="section container text-center">
        <p className="badge">Services</p>
        <h2 className="section-title">
          Services Tailored
          <br />
          to Your Ambition
        </h2>
        <div className="svc-grid svc-grid--visual">
          {[
            {
              title: "Creative Web Design",
              copy: "Design beyond boundaries with visually bold websites that reflect your brand and keep audiences engaged.",
              image: creative1,
            },
            {
              title: "Custom Website Development",
              copy: "From idea to impact with conversion-focused websites tailored to your business goals and customer journey.",
              image: creative2,
            },
            {
              title: "Brand-Led Digital Experiences",
              copy: "Your vision, our code. We craft unique, high-performance web experiences that stand out in crowded markets.",
              image: creative3,
            },
            {
              title: "Performance & Optimization",
              copy: "Websites that work wonders: fast, functional, scalable, and built to grow with your brand.",
              image: creative4,
            },
          ].map(({ title, copy, image }) => (
            <article className="svc-card" key={title}>
              <img src={image} alt={title} className="svc-media" loading="lazy" />
              <h3>{title}</h3>
              <p className="muted">{copy}</p>
            </article>
          ))}
        </div>
        <a href="/#contact" className="btn btn-fill-pill mt-12">
          Start a Project <ArrowRight size={16} />
        </a>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section container">
        <div className="why-head">
          <div>
            <p className="badge">Why Choose Us?</p>
            <h2 className="section-title text-left">
              Crafted for impact,
              <br />
              engineered for scale.
            </h2>
          </div>
          <p className="muted why-desc">
            We build with precision and purpose &mdash; every decision weighted
            against your growth goals and brand standards.
          </p>
        </div>
        <div className="why-grid">
          <div className="why-card">
            <div className="why-vis">
              <div className="why-icon-wrap">
                <Shield size={28} />
              </div>
            </div>
            <h3>Creative Precision</h3>
            <p className="muted">
              Every line of code is written with an eye for design.
            </p>
          </div>
          <div className="why-card">
            <div className="why-vis why-vis--graph">
              <div className="why-icon-wrap">
                <TrendingUp size={28} />
              </div>
              <div className="graph-line"></div>
            </div>
            <h3>Scalable Architecture</h3>
            <p className="muted">
              We build for today with an eye on your growth tomorrow.
            </p>
          </div>
          <div className="why-card">
            <div className="why-vis why-vis--check">
              <Zap size={28} />
            </div>
            <h3>Boundary-Breaking Tech</h3>
            <p className="muted">
              We leverage the latest stacks to keep you ahead of the curve.
            </p>
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="section container text-center">
        <p className="badge">Portfolio</p>
        <h2 className="section-title">
          Check out our latest
          <br />
          completed projects
        </h2>
        <div className="port-grid">
          {[
            { cls: "p-darkblue", label: "E-Commerce Platform" },
            { cls: "p-purple", label: "SaaS Dashboard" },
            { cls: "p-black", label: "Corporate Website" },
            { cls: "p-mid", label: "Mobile App UI" },
          ].map(({ cls, label }) => (
            <div className={`port-card ${cls}`} key={cls}>
              <div className="port-bar">
                <span className="port-dot"></span>
                <span className="port-dot"></span>
                <span className="port-dot"></span>
                <span className="port-url"></span>
              </div>
              <div className="port-body">
                <div className="port-line port-line--med"></div>
                <div className="port-line port-line--short"></div>
                <div className="port-block"></div>
              </div>
              <div className="port-overlay">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section container">
        <div className="about-wrap">
          <div className="about-text">
            <p className="badge">About Us</p>
            <h2 className="section-title text-left">
              Where Technology
              <br />
              Meets Imagination.
            </h2>
            <div className="about-block">
              <h4 className="about-block-title">The Story</h4>
              <p className="muted">
                Xfinity Innovations was born from a simple idea: that
                &ldquo;standard&rdquo; isn&apos;t good enough. In an era of
                template-driven digital products, we stand for the bespoke, the
                bold, and the boundary-breaking.
              </p>
            </div>
            <div className="about-block">
              <h4 className="about-block-title">Our Philosophy</h4>
              <p className="muted">
                We believe that the best solutions are found at the intersection
                of logic and creativity. Our team of developers and designers
                works as an extension of your brand, turning complex problems
                into seamless digital realities.
              </p>
            </div>
          </div>
          <div className="about-vis">
            <div className="about-stat-card">
              <p className="about-stat-num">5+</p>
              <p className="muted text-sm">Years delivering excellence</p>
            </div>
            <div className="about-stat-card">
              <p className="about-stat-num">40+</p>
              <p className="muted text-sm">Happy clients worldwide</p>
            </div>
            <div className="about-stat-card">
              <p className="about-stat-num">3</p>
              <p className="muted text-sm">Core service disciplines</p>
            </div>
            <div className="about-stat-card">
              <p className="about-stat-num">100%</p>
              <p className="muted text-sm">Project ownership, every time</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section container text-center">
        <p className="badge">Contact</p>
        <h2 className="section-title">Ready to Elevate Your Brand?</h2>
        <p className="muted contact-sub">
          Have a project in mind or just want to chat about the possibilities?
          <br />
          Our team is ready to listen.
        </p>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Name</label>
              <input
                type="text"
                name="name"
                className="form-input"
                placeholder="Your full name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label">Company Name</label>
              <input
                type="text"
                name="company"
                className="form-input"
                placeholder="Your company"
                value={formData.company}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-group">
            <label className="form-label">Project Type</label>
            <div className="select-wrap">
              <select
                name="type"
                className="form-input form-select"
                value={formData.type}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Select a project type
                </option>
                <option value="Web">Web</option>
                <option value="Software">Software</option>
                <option value="IT">IT</option>
                <option value="Other">Other</option>
              </select>
              <ChevronDown size={16} className="select-arrow" />
            </div>
          </div>
          <div className="form-group">
            <label className="form-label">Tell us about your vision</label>
            <textarea
              name="vision"
              className="form-input form-textarea"
              placeholder="Describe your project, goals, and any requirements..."
              value={formData.vision}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-fill-pill form-submit">
            Send Message <ArrowRight size={16} />
          </button>
        </form>
      </section>

      {/* CTA BOTTOM */}
      <section className="cta-bottom container text-center">
        <h2 className="section-title">
          Get started with Xfinity Innovations today
        </h2>
        <p className="muted cta-sub">
          Join the businesses transforming their digital presence with
          boundary-breaking solutions.
        </p>
        <a href="/#contact" className="btn btn-fill-pill">
          Start a Project &mdash; It&apos;s Free <ArrowRight size={16} />
        </a>
        <div className="globe">
          <div className="globe-ring"></div>
          <div className="globe-ring globe-ring--2"></div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container footer-inner">
          <div className="footer-brand">
            <p className="footer-logo">Xfinity Innovations by Infernite</p>
            <p className="muted text-sm footer-tagline">
              Engineering the future of digital experiences &mdash; bespoke,
              bold, and boundary-breaking.
            </p>
            <div className="footer-contact">
              <p className="footer-contact-title">Get in touch</p>
              <a
                className="muted text-sm footer-contact-link"
                href="https://wa.me/94766338858"
                target="_blank"
                rel="noreferrer"
              >
                <FaWhatsapp size={14} />
                WhatsApp / Call: +94 76 633 8858
              </a>
            </div>
            <div className="newsletter">
              <a
                className="btn btn-fill-pill nl-btn"
                href="https://wa.me/94766338858"
                target="_blank"
                rel="noreferrer"
              >
                Chat on WhatsApp <ArrowRight size={15} />
              </a>
            </div>
          </div>
          <div className="footer-col">
            <p className="footer-col-title">Services</p>
            <Link to="/services/website-development">Website Development</Link>
            <Link to="/services/software-development">
              Software Development
            </Link>
            <Link to="/services/it-consulting">IT Consulting</Link>
            <Link to="/services/seo-services">SEO Services</Link>
            <Link to="/support">Support</Link>
          </div>
          <div className="footer-col">
            <p className="footer-col-title">Company</p>
            <a href="/#about">About Us</a>
            <a href="/#portfolio">Our Work</a>
            <Link to="/case-studies">Case Studies</Link>
            <Link to="/careers">Careers</Link>
            <Link to="/blog">Blog</Link>
          </div>
          <div className="footer-col">
            <p className="footer-col-title">Legal</p>
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-of-service">Terms of Service</Link>
            <Link to="/cookie-policy">Cookie Policy</Link>
            <Link to="/accessibility">Accessibility</Link>
          </div>
        </div>
        <div className="container footer-bottom">
          <p className="muted text-sm">
            &copy; 2026 Xfinity Innovations LLC. All rights reserved.
          </p>
          <div className="socials">
            <a
              className="soc-icon"
              href="http://facebook.com/xfinity.innovations"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <Facebook size={15} />
            </a>
            <a
              className="soc-icon"
              href="https://www.instagram.com/xfinity.innovations/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <Instagram size={15} />
            </a>
            <a
              className="soc-icon"
              href="https://www.linkedin.com/company/xfinity-innovations/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin size={15} />
            </a>
            <a
              className="soc-icon"
              href="https://wa.me/94766338858"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
            >
              <FaWhatsapp size={15} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
