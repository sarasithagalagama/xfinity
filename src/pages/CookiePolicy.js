import React from "react";
import PageLayout from "../components/PageLayout";

const Section = ({ title, children }) => (
  <div className="inner-legal-section">
    <h2 className="inner-legal-h2">{title}</h2>
    {children}
  </div>
);

export default function CookiePolicy() {
  return (
    <PageLayout>
      <section className="inner-hero">
        <div className="container inner-hero-inner" style={{ maxWidth: 760 }}>
          <p className="badge">Legal</p>
          <h1 className="inner-hero-title">Cookie Policy</h1>
          <p className="muted inner-hero-sub">Last updated: March 1, 2026</p>
        </div>
      </section>

      <section className="section container">
        <div className="inner-legal-body">
          <Section title="1. What Are Cookies?">
            <p className="muted">
              Cookies are small text files placed on your device when you visit
              a website. They are widely used to make websites work more
              efficiently, remember your preferences, and provide information to
              website owners about how the site is being used.
            </p>
          </Section>

          <Section title="2. Cookies We Use">
            <p className="muted" style={{ marginBottom: "0.75rem" }}>
              We use the following categories of cookies:
            </p>
            <table className="inner-cookie-table">
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Purpose</th>
                  <th>Examples</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Essential</td>
                  <td>
                    Required for the website to function. Cannot be disabled.
                  </td>
                  <td>Session ID, CSRF token</td>
                </tr>
                <tr>
                  <td>Analytics</td>
                  <td>
                    Help us understand how visitors use the site so we can
                    improve it.
                  </td>
                  <td>Google Analytics 4 (_ga, _gid)</td>
                </tr>
                <tr>
                  <td>Preferences</td>
                  <td>Remember choices you make to improve your experience.</td>
                  <td>cookie-consent, theme</td>
                </tr>
              </tbody>
            </table>
          </Section>

          <Section title="3. Third-Party Cookies">
            <p className="muted">
              Some cookies are placed by third-party services that appear on our
              pages, such as Google Analytics. These third parties have their
              own privacy policies governing how they use such information. We
              encourage you to review their policies.
            </p>
          </Section>

          <Section title="4. Managing Cookies">
            <p className="muted">
              You can control and manage cookies in several ways. Most browsers
              allow you to view, delete, and block cookies through their
              settings. Please note that disabling cookies may affect the
              functionality of this website. You can also opt out of Google
              Analytics tracking by installing the{" "}
              <a
                href="https://tools.google.com/dlpage/gaoptout"
                target="_blank"
                rel="noreferrer"
                style={{ color: "var(--accent)" }}
              >
                Google Analytics Opt-Out Browser Add-on
              </a>
              .
            </p>
          </Section>

          <Section title="5. Cookie Consent">
            <p className="muted">
              When you first visit our website, you will be shown a cookie
              consent notice. Non-essential cookies are only set once you have
              given your consent. You may withdraw consent at any time by
              clearing your browser cookies and revisiting the site.
            </p>
          </Section>

          <Section title="6. Changes to This Policy">
            <p className="muted">
              We may update this Cookie Policy when we change the cookies we use
              or when legislation changes. The "Last updated" date at the top of
              this page will reflect the latest version.
            </p>
          </Section>

          <Section title="7. Contact">
            <p className="muted">
              For questions about our use of cookies, contact us at{" "}
              <a
                href="mailto:privacy@xfinityinnovations.com"
                style={{ color: "var(--accent)" }}
              >
                privacy@xfinityinnovations.com
              </a>
              .
            </p>
          </Section>
        </div>
      </section>
    </PageLayout>
  );
}
