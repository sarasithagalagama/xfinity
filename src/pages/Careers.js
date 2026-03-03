import React, { useState } from "react";
import PageLayout from "../components/PageLayout";
import { ArrowRight, MapPin, Clock, DollarSign } from "lucide-react";

const values = [
  {
    title: "Ownership",
    desc: "We trust you to take projects end to end. No hand-holding, no micromanagement.",
  },
  {
    title: "Craft",
    desc: "We take deep pride in quality — clean code, considered design, and deliberate decisions.",
  },
  {
    title: "Transparency",
    desc: "Honest feedback, open salaries, and no politics. We say what we mean.",
  },
  {
    title: "Growth",
    desc: "Every person on the team has a learning budget and a clear progression path.",
  },
];

const openRoles = [
  {
    title: "Senior Full-Stack Engineer",
    type: "Full-time",
    location: "Remote (Global)",
    salary: "$90k – $130k",
    desc: "Join our engineering team to build client-facing products and internal tooling using React, Node.js, and PostgreSQL.",
  },
  {
    title: "UI / UX Designer",
    type: "Full-time",
    location: "Remote (Global)",
    salary: "$70k – $100k",
    desc: "Own the design language across our client projects — from wireframes to polished Figma prototypes and design systems.",
  },
  {
    title: "DevOps Engineer",
    type: "Full-time",
    location: "Remote (Global)",
    salary: "$85k – $120k",
    desc: "Scale our cloud infrastructure on AWS, maintain CI/CD pipelines, and champion reliability across all production systems.",
  },
  {
    title: "SEO Strategist",
    type: "Full-time",
    location: "Remote (Global)",
    salary: "$55k – $80k",
    desc: "Drive organic growth for our clients with data-led keyword strategies, content plans, and technical audits.",
  },
  {
    title: "Project Manager",
    type: "Full-time",
    location: "Remote (Global)",
    salary: "$65k – $90k",
    desc: "Coordinate cross-functional teams, manage client relationships, and keep every project on track and on budget.",
  },
];

export default function Careers() {
  const [applied, setApplied] = useState(null);

  return (
    <PageLayout>
      <section className="inner-hero">
        <div className="container inner-hero-inner">
          <p className="badge">Careers</p>
          <h1 className="inner-hero-title">
            Build the future
            <br />
            with us.
          </h1>
          <p className="muted inner-hero-sub">
            We're a remote-first team of engineers, designers, and strategists
            who believe that great work and great culture aren't trade-offs.
            Come work on interesting problems with people who care about their
            craft.
          </p>
          <div className="hero-btns">
            <a href="#open-roles" className="btn btn-fill-pill">
              See Open Roles <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="section container">
        <p className="badge">Our Values</p>
        <h2 className="section-title">
          What it means to work
          <br />
          at Xfinity Innovations.
        </h2>
        <div className="inner-grid-4">
          {values.map(({ title, desc }) => (
            <div className="inner-card" key={title}>
              <h3 className="inner-card-title">{title}</h3>
              <p className="muted text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BENEFITS */}
      <section className="section container">
        <p className="badge">Perks & Benefits</p>
        <h2 className="section-title">We invest in our people.</h2>
        <div className="inner-grid-3">
          {[
            [
              "Competitive salaries",
              "Benchmarked against top quartile market rates, reviewed annually.",
            ],
            [
              "$2,000 learning budget",
              "Books, courses, conferences — invest in yourself however you see fit.",
            ],
            [
              "Flexible hours",
              "Async-first culture. Work when you're at your best.",
            ],
            [
              "Home office setup",
              "$1,000 allowance to build the workspace you deserve.",
            ],
            [
              "25 days PTO",
              "Plus local public holidays and a company-wide winter break.",
            ],
            [
              "Health cover",
              "Medical, dental, and vision coverage for you and your dependants.",
            ],
          ].map(([t, d]) => (
            <div className="inner-card" key={t}>
              <h3 className="inner-card-title">{t}</h3>
              <p className="muted text-sm">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* OPEN ROLES */}
      <section id="open-roles" className="section container">
        <p className="badge">Open Roles</p>
        <h2 className="section-title">Join the team.</h2>
        <div className="inner-role-list">
          {openRoles.map(({ title, type, location, salary, desc }) => (
            <div className="inner-role-card" key={title}>
              <div className="inner-role-info">
                <h3 className="inner-role-title">{title}</h3>
                <p
                  className="muted text-sm"
                  style={{ marginBottom: "0.75rem" }}
                >
                  {desc}
                </p>
                <div className="inner-role-meta">
                  <span>
                    <Clock size={13} /> {type}
                  </span>
                  <span>
                    <MapPin size={13} /> {location}
                  </span>
                  <span>
                    <DollarSign size={13} /> {salary}
                  </span>
                </div>
              </div>
              {applied === title ? (
                <p className="inner-applied">✓ Application sent!</p>
              ) : (
                <button
                  className="btn btn-outline-pill"
                  style={{ flexShrink: 0 }}
                  onClick={() => setApplied(title)}
                >
                  Apply Now <ArrowRight size={14} />
                </button>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="inner-cta container text-center">
        <h2 className="section-title">Don't see the right role?</h2>
        <p className="muted cta-sub">
          We're always interested in hearing from talented people. Send us your
          CV and we'll keep you in mind for future openings.
        </p>
        <a
          href="mailto:careers@xfinityinnovations.com"
          className="btn btn-fill-pill"
        >
          Send Your CV <ArrowRight size={16} />
        </a>
      </section>
    </PageLayout>
  );
}
