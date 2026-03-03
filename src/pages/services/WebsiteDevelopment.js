import React from "react";
import PageLayout from "../../components/PageLayout";
import {
  ArrowRight,
  Monitor,
  Zap,
  Globe,
  Shield,
  Code,
  Layers,
} from "lucide-react";

const features = [
  {
    icon: <Monitor size={22} />,
    title: "Responsive by Default",
    desc: "Pixel-perfect layouts that work flawlessly on every device — mobile, tablet, and desktop.",
  },
  {
    icon: <Zap size={22} />,
    title: "Performance Optimised",
    desc: "Blazing-fast load times through code splitting, lazy loading, and Core Web Vitals tuning.",
  },
  {
    icon: <Globe size={22} />,
    title: "Global-Ready",
    desc: "Internationalisation, multi-region deployments, and CDN delivery built in from day one.",
  },
  {
    icon: <Shield size={22} />,
    title: "Secure & Compliant",
    desc: "HTTPS everywhere, GDPR-compliant data handling, and regular security audits.",
  },
  {
    icon: <Code size={22} />,
    title: "Modern Tech Stack",
    desc: "React, Next.js, TypeScript, and TailwindCSS — the tools that power the world's best products.",
  },
  {
    icon: <Layers size={22} />,
    title: "CMS Integration",
    desc: "Headless WordPress, Contentful, Sanity — full editorial control without touching code.",
  },
];

const process = [
  {
    n: "01",
    title: "Discovery",
    desc: "We learn your brand, audience, and goals in depth.",
  },
  {
    n: "02",
    title: "Wireframes",
    desc: "Low-fidelity layouts that map every page and user journey.",
  },
  {
    n: "03",
    title: "UI Design",
    desc: "High-fidelity mockups in Figma matching your brand identity.",
  },
  {
    n: "04",
    title: "Development",
    desc: "Component-driven build with daily previews for your feedback.",
  },
  {
    n: "05",
    title: "QA & Testing",
    desc: "Cross-browser, cross-device, performance, and accessibility audits.",
  },
  {
    n: "06",
    title: "Launch & Support",
    desc: "Zero-downtime deployment and ongoing maintenance plans.",
  },
];

export default function WebsiteDevelopment() {
  return (
    <PageLayout>
      {/* HERO */}
      <section className="inner-hero">
        <div className="container inner-hero-inner">
          <p className="badge">Website Development</p>
          <h1 className="inner-hero-title">
            Websites that convert,
            <br />
            impress, and scale.
          </h1>
          <p className="muted inner-hero-sub">
            From landing pages to enterprise portals, we design and develop
            bespoke web experiences that reflect your brand, delight your users,
            and drive measurable results.
          </p>
          <div className="hero-btns">
            <a href="/#contact" className="btn btn-fill-pill">
              Start Your Project <ArrowRight size={16} />
            </a>
            <a href="/#portfolio" className="btn btn-outline-pill">
              View Our Work
            </a>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="section container">
        <p className="badge">What's Included</p>
        <h2 className="section-title">
          Everything you need to
          <br />
          succeed online.
        </h2>
        <div className="inner-grid-3">
          {features.map(({ icon, title, desc }) => (
            <div className="inner-card" key={title}>
              <div className="hook-icon">{icon}</div>
              <h3 className="inner-card-title">{title}</h3>
              <p className="muted text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="section container">
        <p className="badge">Our Process</p>
        <h2 className="section-title">How we build your website.</h2>
        <div className="inner-process-grid">
          {process.map(({ n, title, desc }) => (
            <div className="inner-process-step" key={n}>
              <span className="inner-step-n">{n}</span>
              <h4 className="inner-step-title">{title}</h4>
              <p className="muted text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="inner-cta container text-center">
        <h2 className="section-title">Ready to build something remarkable?</h2>
        <p className="muted cta-sub">
          Let's craft a website that puts you miles ahead of the competition.
        </p>
        <a href="/#contact" className="btn btn-fill-pill">
          Get a Free Quote <ArrowRight size={16} />
        </a>
      </section>
    </PageLayout>
  );
}
