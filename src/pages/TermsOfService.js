import React from "react";
import PageLayout from "../components/PageLayout";

const Section = ({ title, children }) => (
  <div className="inner-legal-section">
    <h2 className="inner-legal-h2">{title}</h2>
    {children}
  </div>
);

export default function TermsOfService() {
  return (
    <PageLayout>
      <section className="inner-hero">
        <div className="container inner-hero-inner" style={{ maxWidth: 760 }}>
          <p className="badge">Legal</p>
          <h1 className="inner-hero-title">Terms of Service</h1>
          <p className="muted inner-hero-sub">Last updated: March 1, 2026</p>
        </div>
      </section>

      <section className="section container">
        <div className="inner-legal-body">
          <Section title="1. Acceptance of Terms">
            <p className="muted">
              By accessing or using the services provided by Xfinity Innovations
              LLC ("Xfinity Innovations", "we", "us"), you agree to be bound by
              these Terms of Service. If you do not agree, please do not use our
              services.
            </p>
          </Section>

          <Section title="2. Services">
            <p className="muted">
              Xfinity Innovations provides website development, software
              development, IT consulting, and SEO services. The specific scope,
              deliverables, timeline, and fees for any engagement are set out in
              a separate Statement of Work or Service Agreement signed by both
              parties.
            </p>
          </Section>

          <Section title="3. Client Responsibilities">
            <p className="muted">
              Clients are responsible for providing accurate project
              information, timely feedback and approvals, access to necessary
              systems and assets, and payment in accordance with the agreed
              schedule. Delays caused by the client may affect delivery
              timelines without penalty to Xfinity Innovations.
            </p>
          </Section>

          <Section title="4. Intellectual Property">
            <p className="muted">
              Upon receipt of full payment, Xfinity Innovations assigns to the
              client all intellectual property rights in the custom deliverables
              created specifically for that project. We retain the right to
              feature the work in our portfolio unless otherwise agreed in
              writing. Open-source components used in development remain
              governed by their respective licences.
            </p>
          </Section>

          <Section title="5. Payment Terms">
            <p className="muted">
              Payment terms are as specified in the Statement of Work. Unless
              otherwise agreed, invoices are due within 14 days of issue. Late
              payments accrue interest at 1.5% per month. We reserve the right
              to suspend services for accounts more than 30 days overdue.
            </p>
          </Section>

          <Section title="6. Confidentiality">
            <p className="muted">
              Both parties agree to keep confidential all non-public information
              disclosed during the engagement. This obligation survives
              termination of the agreement for a period of three years.
            </p>
          </Section>

          <Section title="7. Limitation of Liability">
            <p className="muted">
              To the maximum extent permitted by law, Xfinity Innovations' total
              liability for any claim arising out of or related to our services
              shall not exceed the total fees paid by the client in the three
              months preceding the claim. We are not liable for indirect,
              consequential, or incidental damages.
            </p>
          </Section>

          <Section title="8. Termination">
            <p className="muted">
              Either party may terminate an engagement with 14 days' written
              notice. On termination, the client shall pay for all work
              completed to date. Xfinity Innovations will deliver all completed
              work products upon receipt of outstanding payment.
            </p>
          </Section>

          <Section title="9. Governing Law">
            <p className="muted">
              These terms are governed by the laws of the State of New York,
              USA. Any disputes shall be resolved by binding arbitration under
              the rules of the American Arbitration Association.
            </p>
          </Section>

          <Section title="10. Contact">
            <p className="muted">
              Questions about these terms? Email us at{" "}
              <a
                href="mailto:legal@xfinityinnovations.com"
                style={{ color: "var(--accent)" }}
              >
                legal@xfinityinnovations.com
              </a>
              .
            </p>
          </Section>
        </div>
      </section>
    </PageLayout>
  );
}
