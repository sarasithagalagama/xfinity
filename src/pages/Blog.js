import React from "react";
import PageLayout from "../components/PageLayout";
import { ArrowRight, Clock, User } from "lucide-react";

const posts = [
  {
    slug: "web-performance-guide-2026",
    tag: "Performance",
    title: "The Complete Web Performance Guide for 2026",
    excerpt:
      "Core Web Vitals, INP, and the techniques that separate top-tier sites from the rest. A practical guide for engineers and product teams.",
    author: "James Okafor",
    date: "Feb 18, 2026",
    readTime: "9 min read",
  },
  {
    slug: "react-server-components-explained",
    tag: "React",
    title: "React Server Components Explained — When & Why to Use Them",
    excerpt:
      "Server Components change the mental model for React apps. We break down the what, the why, and the practical trade-offs for real-world projects.",
    author: "Sofia Park",
    date: "Feb 5, 2026",
    readTime: "7 min read",
  },
  {
    slug: "seo-mistakes-2026",
    tag: "SEO",
    title: "10 SEO Mistakes We Still See Brands Making in 2026",
    excerpt:
      "From ignoring Core Web Vitals to over-optimising anchor text — the most costly SEO errors we encounter in audits, and how to fix them.",
    author: "Daniel Marsh",
    date: "Jan 29, 2026",
    readTime: "6 min read",
  },
  {
    slug: "microservices-vs-monolith",
    tag: "Architecture",
    title: "Microservices vs Monolith: Choosing the Right Architecture in 2026",
    excerpt:
      "The pendulum has swung back. We explore when a well-structured monolith beats a distributed system — and when it doesn't.",
    author: "James Okafor",
    date: "Jan 14, 2026",
    readTime: "11 min read",
  },
  {
    slug: "design-system-from-scratch",
    tag: "Design",
    title: "Building a Design System from Scratch: Lessons from 50+ Projects",
    excerpt:
      "Tokens, components, documentation, adoption — the hard-won lessons from building and maintaining design systems across dozens of products.",
    author: "Sofia Park",
    date: "Dec 30, 2025",
    readTime: "8 min read",
  },
  {
    slug: "nextjs-vs-remix-2026",
    tag: "Tech",
    title: "Next.js vs Remix in 2026 — A Practical Comparison",
    excerpt:
      "Both frameworks are mature. We compare them honestly across DX, performance, data loading, and deployment — based on projects we've shipped.",
    author: "Daniel Marsh",
    date: "Dec 12, 2025",
    readTime: "10 min read",
  },
];

const tagColors = {
  Performance: "#5ed9ff",
  React: "#61dafb",
  SEO: "#b66bff",
  Architecture: "#ff9d4f",
  Design: "#ff4fb4",
  Tech: "#7aff8e",
};

export default function Blog() {
  return (
    <PageLayout>
      <section className="inner-hero">
        <div className="container inner-hero-inner">
          <p className="badge">Blog</p>
          <h1 className="inner-hero-title">
            Insights from the
            <br />
            Xfinity Innovations team.
          </h1>
          <p className="muted inner-hero-sub">
            Practical articles on web development, software architecture, SEO,
            and digital strategy — written by the engineers and strategists
            doing the work.
          </p>
        </div>
      </section>

      <section className="section container">
        <div className="inner-blog-grid">
          {posts.map(
            ({ slug, tag, title, excerpt, author, date, readTime }) => (
              <article className="inner-blog-card" key={slug}>
                <div className="inner-blog-top">
                  <span
                    className="inner-blog-tag"
                    style={{ color: tagColors[tag] ?? "var(--accent)" }}
                  >
                    {tag}
                  </span>
                </div>
                <h2 className="inner-blog-title">{title}</h2>
                <p className="muted text-sm inner-blog-excerpt">{excerpt}</p>
                <div className="inner-blog-footer">
                  <span className="muted text-sm inner-blog-meta">
                    <User size={12} /> {author}
                  </span>
                  <span className="muted text-sm inner-blog-meta">
                    <Clock size={12} /> {readTime}
                  </span>
                  <span className="muted text-sm">{date}</span>
                </div>
              </article>
            ),
          )}
        </div>
      </section>

      <section className="inner-cta container text-center">
        <h2 className="section-title">Stay in the loop.</h2>
        <p className="muted cta-sub">
          Subscribe to our newsletter and get new articles delivered to your
          inbox every two weeks.
        </p>
        <a href="/#contact" className="btn btn-fill-pill">
          Subscribe <ArrowRight size={16} />
        </a>
      </section>
    </PageLayout>
  );
}
