import React from "react";
import PageLayout from "../../components/PageLayout";
import {
  ArrowRight,
  Cpu,
  GitBranch,
  Server,
  Lock,
  RefreshCw,
  Users,
} from "lucide-react";

const features = [
  {
    icon: <Cpu size={22} />,
    title: "Custom Software",
    desc: "Tailor-made applications built to your exact specifications — no bloat, no compromise.",
  },
  {
    icon: <Server size={22} />,
    title: "API & Microservices",
    desc: "Scalable, well-documented REST and GraphQL APIs that power your ecosystem.",
  },
  {
    icon: <GitBranch size={22} />,
    title: "CI/CD Pipelines",
    desc: "Automated testing and deployment workflows for fast, reliable releases.",
  },
  {
    icon: <Lock size={22} />,
    title: "Enterprise Security",
    desc: "Role-based access control, encryption at rest & in transit, and compliance auditing.",
  },
  {
    icon: <RefreshCw size={22} />,
    title: "Legacy Modernisation",
    desc: "Transform ageing systems into cloud-native, maintainable platforms without downtime.",
  },
  {
    icon: <Users size={22} />,
    title: "Dedicated Teams",
    desc: "Senior engineers embedded in your workflow, aligned to your processes and tools.",
  },
];

const stack = [
  "React",
  "Node.js",
  "Python",
  "Go",
  "PostgreSQL",
  "AWS",
  "Docker",
  "Kubernetes",
];

export default function SoftwareDevelopment() {
  return (
    <PageLayout>
      <section className="inner-hero">
        <div className="container inner-hero-inner">
          <p className="badge">Software Development</p>
          <h1 className="inner-hero-title">
            Custom software built
            <br />
            to last and scale.
          </h1>
          <p className="muted inner-hero-sub">
            We engineer robust, maintainable software solutions — from SaaS
            platforms and enterprise tools to real-time APIs and cloud-native
            applications.
          </p>
          <div className="hero-btns">
            <a href="/#contact" className="btn btn-fill-pill">
              Discuss Your Project <ArrowRight size={16} />
            </a>
            <a href="/#portfolio" className="btn btn-outline-pill">
              View Case Studies
            </a>
          </div>
        </div>
      </section>

      <section className="section container">
        <p className="badge">Capabilities</p>
        <h2 className="section-title">
          End-to-end software
          <br />
          engineering.
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
        <p className="badge">Tech Stack</p>
        <h2 className="section-title">Technologies we master.</h2>
        <div className="inner-tag-row">
          {stack.map((t) => (
            <span className="inner-tag" key={t}>
              {t}
            </span>
          ))}
        </div>
      </section>

      <section className="inner-cta container text-center">
        <h2 className="section-title">Let's engineer your vision.</h2>
        <p className="muted cta-sub">
          Tell us what you're building and we'll put together a tailored team
          and plan.
        </p>
        <a href="/#contact" className="btn btn-fill-pill">
          Start a Conversation <ArrowRight size={16} />
        </a>
      </section>
    </PageLayout>
  );
}
