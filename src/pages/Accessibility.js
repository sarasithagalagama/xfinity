import React from "react";
import PageLayout from "../components/PageLayout";
import { CheckCircle } from "lucide-react";

const commitments = [
  {
    title: "Keyboard Navigable",
    desc: "All interactive elements are fully operable via keyboard alone, with logical focus order throughout.",
  },
  {
    title: "Screen Reader Support",
    desc: "Semantic HTML, ARIA landmarks, and descriptive labels ensure a coherent experience for assistive technology users.",
  },
  {
    title: "Colour Contrast",
    desc: "All text meets WCAG 2.1 AA minimum contrast ratios (4.5:1 for body text, 3:1 for large text).",
  },
  {
    title: "Scalable Text",
    desc: "Content reflows correctly at up to 200% browser zoom without horizontal scrolling or loss of information.",
  },
  {
    title: "Reduced Motion",
    desc: "Animations and transitions respect the prefers-reduced-motion media query, disabling motion for users who prefer it.",
  },
  {
    title: "Descriptive Alt Text",
    desc: "All meaningful images include descriptive alternative text. Decorative images are hidden from assistive technologies.",
  },
];

export default function Accessibility() {
  return (
    <PageLayout>
      <section className="inner-hero inner-hero--legal">
        <div className="container inner-hero-inner" style={{ maxWidth: 760 }}>
          <p className="badge">Accessibility</p>
          <h1 className="inner-hero-title">Accessibility Statement</h1>
          <p className="muted inner-hero-sub">Last updated: March 1, 2026</p>
        </div>
      </section>

      <section className="container inner-legal-wrap">
        <div className="inner-legal-body">
          <div className="inner-legal-section">
            <h2 className="inner-legal-h2">Our Commitment</h2>
            <p className="muted">
              Xfinity Innovations is committed to ensuring that our website and
              the products we build are accessible to everyone, including people
              with disabilities. We aim to conform to the Web Content
              Accessibility Guidelines (WCAG) 2.1 Level AA.
            </p>
          </div>

          <div className="inner-legal-section">
            <h2 className="inner-legal-h2">What We've Done</h2>
            <div className="inner-grid-2" style={{ marginTop: "1rem" }}>
              {commitments.map(({ title, desc }) => (
                <div className="inner-access-item" key={title}>
                  <CheckCircle
                    size={18}
                    style={{
                      color: "var(--accent)",
                      flexShrink: 0,
                      marginTop: 2,
                    }}
                  />
                  <div>
                    <p style={{ fontWeight: 600, marginBottom: "0.25rem" }}>
                      {title}
                    </p>
                    <p className="muted text-sm">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="inner-legal-section">
            <h2 className="inner-legal-h2">Known Limitations</h2>
            <p className="muted">
              While we strive for full compliance, some older content may not
              yet fully meet all WCAG 2.1 AA requirements. We are actively
              working to identify and address these gaps. If you encounter a
              barrier, please let us know so we can prioritise a fix.
            </p>
          </div>

          <div className="inner-legal-section">
            <h2 className="inner-legal-h2">Feedback & Contact</h2>
            <p className="muted">
              We welcome feedback on the accessibility of our website. If you
              experience any barriers or have suggestions for improvement,
              please contact our accessibility team at{" "}
              <a
                href="mailto:accessibility@xfinityinnovations.com"
                style={{ color: "var(--accent)" }}
              >
                accessibility@xfinityinnovations.com
              </a>
              . We aim to respond within 5 business days.
            </p>
          </div>

          <div className="inner-legal-section">
            <h2 className="inner-legal-h2">Assessment Approach</h2>
            <p className="muted">
              Xfinity Innovations assesses the accessibility of this website
              through self-evaluation and periodic third-party audits. We test
              using common assistive technologies including NVDA (Windows),
              VoiceOver (macOS/iOS), and TalkBack (Android).
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
