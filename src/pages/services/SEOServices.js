import React from "react";
import PageLayout from "../../components/PageLayout";
import {
  ArrowRight,
  Search,
  TrendingUp,
  FileText,
  Link as LinkIcon,
  BarChart2,
  Globe,
} from "lucide-react";

const features = [
  {
    icon: <Search size={22} />,
    title: "Technical SEO",
    desc: "Site architecture, crawlability, Core Web Vitals, structured data, and indexation fixes.",
  },
  {
    icon: <FileText size={22} />,
    title: "Content Strategy",
    desc: "Keyword mapping, topic clusters, and editorial calendars that drive organic traffic.",
  },
  {
    icon: <LinkIcon size={22} />,
    title: "Link Building",
    desc: "White-hat digital PR and outreach campaigns that build domain authority.",
  },
  {
    icon: <Globe size={22} />,
    title: "International SEO",
    desc: "hreflang implementation, geo-targeting, and multi-region organic growth strategies.",
  },
  {
    icon: <BarChart2 size={22} />,
    title: "Analytics & Reporting",
    desc: "Custom GA4 dashboards and monthly reports tracking rankings, traffic, and conversions.",
  },
  {
    icon: <TrendingUp size={22} />,
    title: "E-Commerce SEO",
    desc: "Category and product page optimisation, faceted navigation fixes, and schema markup.",
  },
];

export default function SEOServices() {
  return (
    <PageLayout>
      <section className="inner-hero">
        <div className="container inner-hero-inner">
          <p className="badge">SEO Services</p>
          <h1 className="inner-hero-title">
            Rank higher. Get found.
            <br />
            Grow faster.
          </h1>
          <p className="muted inner-hero-sub">
            Data-driven search engine optimisation that improves your organic
            visibility, attracts qualified traffic, and turns visitors into
            customers — sustainably.
          </p>
          <div className="hero-btns">
            <a href="/#contact" className="btn btn-fill-pill">
              Get an SEO Audit <ArrowRight size={16} />
            </a>
            <a href="/#portfolio" className="btn btn-outline-pill">
              See Results
            </a>
          </div>
        </div>
      </section>

      <section className="section container">
        <p className="badge">What We Do</p>
        <h2 className="section-title">
          Full-spectrum SEO,
          <br />
          no shortcuts.
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

      <section className="section container">
        <div className="inner-two-col">
          <div>
            <p className="badge">Our Approach</p>
            <h2 className="section-title text-left">
              SEO that compounds
              <br />
              over time.
            </h2>
            <p
              className="muted"
              style={{ lineHeight: 1.8, marginBottom: "1rem" }}
            >
              Unlike paid ads, organic search builds an asset. Every article we
              publish, every backlink we earn, and every technical fix we make
              compounds — creating a flywheel that keeps growing long after
              initial investment.
            </p>
            <p className="muted" style={{ lineHeight: 1.8 }}>
              We're transparent with every action we take and every result we
              produce. Monthly reports, weekly check-ins, and a dedicated
              strategist on every account.
            </p>
          </div>
          <div className="inner-stat-block">
            {[
              ["3×", "Average organic traffic growth"],
              ["6 mo", "Typical time to first-page rankings"],
              ["40+", "SEO campaigns delivered"],
            ].map(([n, l]) => (
              <div className="about-stat-card" key={l}>
                <p className="about-stat-num">{n}</p>
                <p className="muted text-sm">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="inner-cta container text-center">
        <h2 className="section-title">Start ranking for the right keywords.</h2>
        <p className="muted cta-sub">
          Get a free technical SEO audit and a 30-minute strategy call with our
          team.
        </p>
        <a href="/#contact" className="btn btn-fill-pill">
          Claim Your Free Audit <ArrowRight size={16} />
        </a>
      </section>
    </PageLayout>
  );
}
