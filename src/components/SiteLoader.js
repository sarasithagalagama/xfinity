import React from "react";
import logo from "../assets/images/logo.png";

export default function SiteLoader({ exiting = false, progress = 0 }) {
  const pct = Math.max(0, Math.min(100, Math.round(progress)));

  return (
    <div
      className={`site-loader${exiting ? " is-exiting" : ""}`}
      role="status"
      aria-live="polite"
      aria-label="Loading site"
    >
      <div className="site-loader__halo site-loader__halo--one" />
      <div className="site-loader__halo site-loader__halo--two" />

      <div className="site-loader__panel">
        <div
          className="site-loader__ring"
          style={{ "--loader-progress": `${pct}%` }}
          aria-hidden="true"
        >
          <img
            src={logo}
            alt="Xfinity Innovations"
            className="site-loader__logo"
          />
        </div>

        <p className="site-loader__text">Preparing your digital experience</p>
        <p className="site-loader__pct">{pct}%</p>

        <div className="site-loader__track" aria-hidden="true">
          <span style={{ width: `${pct}%` }} />
        </div>

        <div className="site-loader__bars" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>
    </div>
  );
}
