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
  function handleToggleNav() {
    if (
      document
        .querySelector(".navbar .navbar-collapse")
        .classList.contains("show")
    ) {
      document
        .querySelector(".navbar .navbar-collapse")
        .classList.remove("show");
    } else if (
      !document
        .querySelector(".navbar .navbar-collapse")
        .classList.contains("show")
    ) {
      document.querySelector(".navbar .navbar-collapse").classList.add("show");
    }
  }
  return (
    <nav className="navbar navbar-expand-lg bord blur">
      <div className="container o-hidden">
        <a className="logo icon-img-100" href="#">
          <img src="/assets/upd/Xfinity Logo W.png" alt="logo" />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={handleToggleNav}
        >
          <span className="icon-bar">
            <i className="fas fa-bars"></i>
          </span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarSupportedContent"
        >
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
            <span className="text">Let&apos;s contact</span>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
