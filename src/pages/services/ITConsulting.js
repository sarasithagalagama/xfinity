import React from "react";
import PageLayout from "../../components/PageLayout";
import {
  ArrowRight,
  Search,
  BarChart2,
  Shield,
  Cloud,
  Settings,
  CheckCircle,
} from "lucide-react";

const services = [
  {
    icon: <Search size={22} />,
    title: "Technology Audit",
    desc: "Comprehensive review of your current stack, identifying risks, bottlenecks, and quick wins.",
  },
  {
    icon: <BarChart2 size={22} />,
    title: "Digital Strategy",
    desc: "Actionable roadmaps that align technology investments with your business objectives.",
  },
  {
    icon: <Cloud size={22} />,
    title: "Cloud Migration",
    desc: "Seamless migration to AWS, GCP, or Azure with zero operational disruption.",
  },
  {
    icon: <Shield size={22} />,
    title: "Security Consulting",
    desc: "Penetration testing, compliance gap analysis, and remediation planning.",
  },
  {
    icon: <Settings size={22} />,
    title: "Architecture Design",
    desc: "Scalable, resilient system architectures designed for today and ready for tomorrow.",
  },
  {
    icon: <CheckCircle size={22} />,
    title: "Vendor Selection",
    desc: "Unbiased evaluation of tools, platforms, and vendors to find the best fit for your needs.",
  },
];

export default function ITConsulting() {
  return (
    <PageLayout>
      <section className="inner-hero">
        <div className="container inner-hero-inner">
          <p className="badge">IT Consulting</p>
          <h1 className="inner-hero-title">
            Strategic technology
            <br />
            advice that moves the needle.
          </h1>
          <p className="muted inner-hero-sub">
            Our senior consultants partner with your leadership team to untangle
            complexity, reduce technical debt, and put robust technology
            strategies in place.
          </p>
          <div className="hero-btns">
            <a href="/#contact" className="btn btn-fill-pill">
              Book a Free Consultation <ArrowRight size={16} />
            </a>
            <a href="/#about" className="btn btn-outline-pill">
              About Our Team
            </a>
          </div>
        </div>
      </section>

      <section className="section container">
        <p className="badge">Services</p>
        <h2 className="section-title">Where we add the most value.</h2>
        <div className="inner-grid-3">
          {services.map(({ icon, title, desc }) => (
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
            <p className="badge">Why Xfinity Innovations</p>
            <h2 className="section-title text-left">
              Trusted by businesses
              <br />
              to make hard calls.
            </h2>
            <p
              className="muted"
              style={{ lineHeight: 1.8, marginBottom: "1.5rem" }}
            >
              We don't sell bloated engagements or generic frameworks. Every
              recommendation we make is grounded in your specific context — your
              team, your market, your budget.
            </p>
            <p className="muted" style={{ lineHeight: 1.8 }}>
              With a track record across e-commerce, fintech, healthcare, and
              enterprise SaaS, we bring pattern recognition that saves you
              months of trial and error.
            </p>
          </div>
          <div className="inner-stat-block">
            {[
              ["50+", "Engagements completed"],
              ["5+", "Years of consulting"],
              ["100%", "Clients would re-engage"],
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
        <h2 className="section-title">Start with a free discovery call.</h2>
        <p className="muted cta-sub">
          45 minutes with a senior consultant — no pitch, just honest advice.
        </p>
        <a href="/#contact" className="btn btn-fill-pill">
          Book the Call <ArrowRight size={16} />
        </a>
      </section>
    </PageLayout>
  );
}
