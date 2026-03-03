import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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

function App() {
  return (
    <Router>
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
  );
}

export default App;
