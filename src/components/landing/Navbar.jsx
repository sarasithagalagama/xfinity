"use client";
import React, { useEffect } from "react";

function Navbar() {
  function handleScroll() {
    const bodyScroll = window.scrollY;
    const navbar = document.querySelector(".navbar");

    if (bodyScroll > 300) navbar.classList.add("nav-scroll");
    else navbar.classList.remove("nav-scroll");
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  function scrollToSection(id) {
    setTimeout(
      () =>
        document
          .querySelector(`[data-scroll-index="${id}"]`)
          ?.scrollIntoView({ smooth: true }),
      700,
    );
  }
  return (
    <nav className="navbar navbar-expand-lg bord">
      <div className="container o-hidden">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/">
                <span className="rolling-text">Home</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/page-about">
                <span className="rolling-text">About</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/page-services">
                <span className="rolling-text">Services</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/portfolio-grid">
                <span className="rolling-text">Portfolio</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/blog-grid-sidebar">
                <span className="rolling-text">Blog</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/page-contact">
                <span className="rolling-text">Contact</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="contact-button">
          <a
            href="/page-contact"
            className="butn butn-sm butn-bg main-colorbg radius-5"
          >
            <span className="text fz-14">Get Started</span>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
