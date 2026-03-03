import React from "react";
import PageLayout from "../components/PageLayout";
import { ArrowRight, Headphones, FileText, Clock, Zap } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "Free",
    desc: "Self-service access to our knowledge base and community forum.",
    features: [
      "Documentation portal",
      "Community forum",
      "Email support (72h SLA)",
      "Bug reports",
    ],
  },
  {
    name: "Growth",
    price: "$199 / mo",
    desc: "Priority support for growing teams who need faster response times.",
    features: [
      "All Starter features",
      "Priority email (24h SLA)",
      "Monthly check-in call",
      "Performance reports",
    ],
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    desc: "White-glove support for mission-critical products and large teams.",
    features: [
      "All Growth features",
      "Dedicated support engineer",
      "4-hour SLA",
      "On-call escalation",
      "Quarterly roadmap reviews",
    ],
  },
];

export default function Support() {
  return (
    <PageLayout>
      <section className="inner-hero">
        <div className="container inner-hero-inner">
          <p className="badge">Support</p>
          <h1 className="inner-hero-title">
            We're here when
            <br />
            you need us most.
          </h1>
          <p className="muted inner-hero-sub">
            Every project we deliver is backed by knowledgeable, responsive
            support. Choose the plan that fits your team and we'll keep your
            product running at its best.
          </p>
          <div className="hero-btns">
            <a href="/#contact" className="btn btn-fill-pill">
              Contact Support <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* PLANS */}
      <section className="section container">
        <p className="badge">Support Plans</p>
        <h2 className="section-title">Find the right level of cover.</h2>
        <div className="inner-grid-3" style={{ alignItems: "start" }}>
          {plans.map(({ name, price, desc, features, highlight }) => (
            <div
              className={`inner-card${highlight ? " inner-card--highlight" : ""}`}
              key={name}
            >
              <p className="inner-plan-name">{name}</p>
              <p className="inner-plan-price">{price}</p>
              <p className="muted text-sm" style={{ marginBottom: "1.2rem" }}>
                {desc}
              </p>
              <ul className="inner-feature-list">
                {features.map((f) => (
                  <li key={f}>
                    <Zap size={13} style={{ color: "var(--accent)" }} /> {f}
                  </li>
                ))}
              </ul>
              <a
                href="/#contact"
                className={`btn ${highlight ? "btn-fill-pill" : "btn-outline-pill"}`}
                style={{
                  marginTop: "auto",
                  width: "100%",
                  justifyContent: "center",
                }}
              >
                Get Started <ArrowRight size={15} />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* HOW WE HELP */}
      <section className="section container">
        <p className="badge">How We Help</p>
        <h2 className="section-title">Fast, human, expert support.</h2>
        <div className="inner-grid-3">
          {[
            {
              icon: <Headphones size={22} />,
              title: "Real People",
              desc: "No chatbots. Every support request is handled by an engineer who knows your product.",
            },
            {
              icon: <Clock size={22} />,
              title: "Defined SLAs",
              desc: "Response and resolution windows in writing — so you always know what to expect.",
            },
            {
              icon: <FileText size={22} />,
              title: "Root-Cause Fixes",
              desc: "We don't patch symptoms. We diagnose, fix root causes, and document every resolution.",
            },
          ].map(({ icon, title, desc }) => (
            <div className="inner-card" key={title}>
              <div className="hook-icon">{icon}</div>
              <h3 className="inner-card-title">{title}</h3>
              <p className="muted text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="inner-cta container text-center">
        <h2 className="section-title">Need help right now?</h2>
        <p className="muted cta-sub">
          Reach us by email at{" "}
          <a
            href="mailto:support@xfinityinnovations.com"
            style={{ color: "var(--accent)" }}
          >
            support@xfinityinnovations.com
          </a>{" "}
          — we typically respond within a few hours.
        </p>
        <a href="/#contact" className="btn btn-fill-pill">
          Open a Support Ticket <ArrowRight size={16} />
        </a>
      </section>
    </PageLayout>
  );
}
