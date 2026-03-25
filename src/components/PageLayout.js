import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Facebook, Instagram, Linkedin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import logo from "../assets/images/logo.png";

export default function PageLayout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);

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
          <Link to="/" className="nav-logo" onClick={() => setMenuOpen(false)}>
            <img
              src={logo}
              alt="Xfinity Innovations"
              className="nav-logo-img"
            />
          </Link>
          <div
            className={`nav-links${menuOpen ? " open" : ""}`}
            id="mobile-nav-links"
          >
            {navLinks.map(({ label, href }) => (
              <a key={label} href={href} onClick={() => setMenuOpen(false)}>
                {label}
              </a>
            ))}
          </div>
          <div className="nav-right">
            <Link
              to="/#contact"
              className="btn btn-nav"
              onClick={() => setMenuOpen(false)}
            >
              Get Started <ArrowRight size={15} />
            </Link>
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

      {/* PAGE CONTENT */}
      {children}

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
