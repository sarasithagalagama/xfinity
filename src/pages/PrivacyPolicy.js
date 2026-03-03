import React from "react";
import PageLayout from "../components/PageLayout";

const Section = ({ title, children }) => (
  <div className="inner-legal-section">
    <h2 className="inner-legal-h2">{title}</h2>
    {children}
  </div>
);

export default function PrivacyPolicy() {
  return (
    <PageLayout>
      <section className="inner-hero">
        <div className="container inner-hero-inner" style={{ maxWidth: 760 }}>
          <p className="badge">Legal</p>
          <h1 className="inner-hero-title">Privacy Policy</h1>
          <p className="muted inner-hero-sub">Last updated: March 1, 2026</p>
        </div>
      </section>

      <section className="section container">
        <div className="inner-legal-body">
          <Section title="1. Who We Are">
            <p className="muted">
              Xfinity Innovations LLC ("Xfinity Innovations", "we", "us", or
              "our") operates the website at xfinityinnovations.com and delivers
              technology services to clients worldwide. This Privacy Policy
              explains how we collect, use, store, and share your personal
              information when you interact with our website or services.
            </p>
          </Section>

          <Section title="2. Information We Collect">
            <p className="muted">
              We collect information you provide directly — such as your name,
              company name, email address, and project details — when you fill
              in our contact form or subscribe to communications. We also
              collect certain technical data automatically, including IP
              address, browser type, pages visited, and referral source, via
              cookies and analytics tools.
            </p>
          </Section>

          <Section title="3. How We Use Your Information">
            <p className="muted">
              We use your information to respond to enquiries, deliver and
              improve our services, send you updates or newsletters (where you
              have opted in), comply with legal obligations, and prevent
              fraudulent or abusive use of our website. We do not sell or rent
              your personal data to third parties.
            </p>
          </Section>

          <Section title="4. Cookies">
            <p className="muted">
              Our website uses cookies to enhance your experience and collect
              analytics data. Essential cookies are required for the site to
              function. Analytics cookies (e.g., Google Analytics 4) are set
              only with your consent. You can manage cookie preferences at any
              time via our Cookie Settings panel or your browser settings.
            </p>
          </Section>

          <Section title="5. Data Retention">
            <p className="muted">
              We retain personal data for as long as necessary to fulfil the
              purposes outlined in this policy, or as required by law. Contact
              enquiry data is retained for up to three years. You may request
              deletion at any time by contacting us at{" "}
              <a
                href="mailto:privacy@xfinityinnovations.com"
                style={{ color: "var(--accent)" }}
              >
                privacy@xfinityinnovations.com
              </a>
              .
            </p>
          </Section>

          <Section title="6. Your Rights">
            <p className="muted">
              Depending on your jurisdiction, you may have the right to access,
              correct, port, or delete your personal data, and to object to or
              restrict certain processing activities. To exercise any of these
              rights, contact us at the email above. We will respond within 30
              days.
            </p>
          </Section>

          <Section title="7. Third-Party Services">
            <p className="muted">
              We use trusted third-party tools including Google Analytics
              (analytics), Postmark (transactional email), and AWS (hosting).
              Each provider is governed by their own privacy policies and data
              processing agreements, which comply with applicable privacy law.
            </p>
          </Section>

          <Section title="8. Changes to This Policy">
            <p className="muted">
              We may update this policy periodically. Material changes will be
              communicated via email or a prominent notice on our website. The
              "Last updated" date at the top of this page always reflects the
              current version.
            </p>
          </Section>

          <Section title="9. Contact">
            <p className="muted">
              Questions about this policy? Reach us at{" "}
              <a
                href="mailto:privacy@xfinityinnovations.com"
                style={{ color: "var(--accent)" }}
              >
                privacy@xfinityinnovations.com
              </a>{" "}
              or write to: Xfinity Innovations LLC, 1234 Innovation Drive, Suite
              500, New York, NY 10001, USA.
            </p>
          </Section>
        </div>
      </section>
    </PageLayout>
  );
}
