import { useEffect, useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import WebsiteDevelopment from "./pages/services/WebsiteDevelopment";
import SoftwareDevelopment from "./pages/services/SoftwareDevelopment";
import ITConsulting from "./pages/services/ITConsulting";
import SEOServices from "./pages/services/SEOServices";
import Support from "./pages/Support";
import CaseStudies from "./pages/CaseStudies";
import Careers from "./pages/Careers";
import Blog from "./pages/Blog";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CookiePolicy from "./pages/CookiePolicy";
import Accessibility from "./pages/Accessibility";
import SiteLoader from "./components/SiteLoader";

function ScrollManager() {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash?.replace("#", "").trim();

    if (!hash) {
      window.scrollTo({ top: 0, behavior: "auto" });
      return;
    }

    // Wait one frame so routed content is mounted before querying hash targets.
    requestAnimationFrame(() => {
      const target = document.getElementById(decodeURIComponent(hash));
      if (!target) {
        window.scrollTo({ top: 0, behavior: "auto" });
        return;
      }

      const navOffset = 84;
      const top = target.getBoundingClientRect().top + window.pageYOffset - navOffset;
      window.scrollTo({ top: Math.max(top, 0), behavior: "smooth" });
    });
  }, [location.pathname, location.hash]);

  return null;
}

function App() {
  const [showLoader, setShowLoader] = useState(true);
  const [isLoaderExiting, setIsLoaderExiting] = useState(false);
  const [loaderProgress, setLoaderProgress] = useState(8);

  useEffect(() => {
    const minLoaderMs = 900;
    const exitAnimationMs = 380;
    const failSafeMs = 2200;
    const startedAt = Date.now();
    let isDone = false;

    const progressTimer = window.setInterval(() => {
      setLoaderProgress((prev) => {
        if (prev >= 92) return prev;
        const delta = prev < 45 ? 7 : prev < 75 ? 4 : 2;
        return Math.min(prev + delta, 92);
      });
    }, 90);

    const finishLoading = () => {
      if (isDone) return;
      isDone = true;
      window.clearInterval(progressTimer);

      const elapsed = Date.now() - startedAt;
      const remaining = Math.max(minLoaderMs - elapsed, 0);

      setTimeout(() => {
        setLoaderProgress(100);
        setIsLoaderExiting(true);
        setTimeout(() => setShowLoader(false), exitAnimationMs);
      }, remaining + 120);
    };

    const fallbackId = window.setTimeout(finishLoading, failSafeMs);

    if (document.readyState === "complete") {
      finishLoading();
    } else {
      window.addEventListener("load", finishLoading, { once: true });
    }

    return () => {
      window.clearTimeout(fallbackId);
      window.clearInterval(progressTimer);
      window.removeEventListener("load", finishLoading);
    };
  }, []);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    if (showLoader) document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [showLoader]);

  return (
    <>
      {showLoader && (
        <SiteLoader exiting={isLoaderExiting} progress={loaderProgress} />
      )}
      <Router>
        <ScrollManager />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/services/website-development"
            element={<WebsiteDevelopment />}
          />
          <Route
            path="/services/software-development"
            element={<SoftwareDevelopment />}
          />
          <Route path="/services/it-consulting" element={<ITConsulting />} />
          <Route path="/services/seo-services" element={<SEOServices />} />
          <Route path="/support" element={<Support />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/accessibility" element={<Accessibility />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
