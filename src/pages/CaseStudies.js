import React from "react";
import PageLayout from "../components/PageLayout";
import { ArrowRight } from "lucide-react";

const studies = [
  {
    tag: "E-Commerce",
    title: "Tripled Revenue for a Fashion Retailer",
    desc: "We redesigned the end-to-end buying experience — from product discovery to checkout — for a growing fashion brand. A complete frontend rebuild in Next.js reduced load times by 68% and increased conversion rate from 1.2% to 3.7%, translating to a 3× revenue uplift within six months.",
    stats: [
      ["68%", "Faster load time"],
      ["3.1×", "Revenue growth"],
      ["6 mo", "Timeline"],
    ],
    stack: ["Next.js", "TypeScript", "Shopify Storefront API", "Vercel"],
  },
  {
    tag: "SaaS / Fintech",
    title: "Zero-to-One SaaS Platform for a Fintech Startup",
    desc: "A Series-A fintech needed to move from a fragile MVP to a production-grade platform in under four months. We designed the architecture, built the frontend and backend, integrated KYC/AML providers, and delivered an audited, compliant product that went live on schedule.",
    stats: [
      ["4 mo", "Delivery"],
      ["99.98%", "Uptime (first year)"],
      ["2×", "User growth MoM post-launch"],
    ],
    stack: ["React", "Node.js", "PostgreSQL", "AWS", "Stripe"],
  },
  {
    tag: "Enterprise Portal",
    title: "Internal Operations Portal for 1,200 Employees",
    desc: "A multinational manufacturer needed a single portal to replace seven legacy tools. We delivered a role-based, multi-tenant application with SSO, real-time dashboards, and automated reporting — saving the operations team an estimated 300 hours per month.",
    stats: [
      ["300 h/mo", "Hours saved"],
      ["7 → 1", "Tools consolidated"],
      ["1,200+", "Daily active users"],
    ],
    stack: ["React", "Python", "FastAPI", "Azure AD", "Power BI Embedded"],
  },
  {
    tag: "Healthcare",
    title: "Patient Engagement Platform for a Clinic Network",
    desc: "We built a HIPAA-compliant patient portal for a network of 14 clinics, covering appointment booking, secure messaging, and test result delivery. Patient satisfaction scores rose 40% in the first quarter following launch.",
    stats: [
      ["14", "Clinics onboarded"],
      ["+40%", "Patient satisfaction"],
      ["HIPAA", "Compliant"],
    ],
    stack: ["React Native", "Node.js", "FHIR API", "AWS GovCloud"],
  },
];

export default function CaseStudies() {
  return (
    <PageLayout>
      <section className="inner-hero">
        <div className="container inner-hero-inner">
          <p className="badge">Case Studies</p>
          <h1 className="inner-hero-title">
            Real work.
            <br />
            Real results.
          </h1>
          <p className="muted inner-hero-sub">
            A selection of projects where we've helped businesses grow,
            transform, and succeed through thoughtful technology.
          </p>
        </div>
      </section>

      <section className="section container">
        <div className="inner-case-list">
          {studies.map(({ tag, title, desc, stats, stack }) => (
            <div className="inner-case-card" key={title}>
              <div className="inner-case-meta">
                <span className="badge" style={{ marginBottom: "1rem" }}>
                  {tag}
                </span>
                <h2 className="inner-case-title">{title}</h2>
                <p
                  className="muted"
                  style={{ lineHeight: 1.8, marginBottom: "1.5rem" }}
                >
                  {desc}
                </p>
                <div
                  className="inner-tag-row"
                  style={{ marginBottom: "1.2rem" }}
                >
                  {stack.map((s) => (
                    <span className="inner-tag" key={s}>
                      {s}
                    </span>
                  ))}
                </div>
                <a
                  href="/#contact"
                  className="btn btn-outline-pill"
                  style={{ fontSize: "0.85rem" }}
                >
                  Discuss a Similar Project <ArrowRight size={14} />
                </a>
              </div>
              <div className="inner-case-stats">
                {stats.map(([n, l]) => (
                  <div className="about-stat-card" key={l}>
                    <p
                      className="about-stat-num"
                      style={{ fontSize: "1.8rem" }}
                    >
                      {n}
                    </p>
                    <p className="muted text-sm">{l}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="inner-cta container text-center">
        <h2 className="section-title">Want to be our next success story?</h2>
        <p className="muted cta-sub">
          Tell us about your project and let's explore what's possible.
        </p>
        <a href="/#contact" className="btn btn-fill-pill">
          Start a Project <ArrowRight size={16} />
        </a>
      </section>
    </PageLayout>
  );
}
