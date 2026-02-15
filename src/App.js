import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import loadBackgroudImages from "./common/loadBackgroudImages";
import BlogDetails from "./pages/blog-details.js";
import BlogGridSidebar from "./pages/blog-grid-sidebar.js";
import HomeCreativeAgency from "./pages/home-creative-agency";
import Page404 from "./pages/page-404.js";
import PageAbout from "./pages/page-about.js";
import PageContact from "./pages/page-contact.js";
import PageFAQ from "./pages/page-FAQ.js";
import PageServices from "./pages/page-services.js";
import PageServicesDetails from "./pages/page-services-details.js";
import PageTeam from "./pages/page-team.js";
import PageTeamDetails from "./pages/page-team-details.js";
import PortfolioGrid from "./pages/portfolio-grid.js";
import ProjectDetails from "./pages/project-details.js";

// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// // // import { ScrollSmoother } from 'gsap-trial/ScrollSmoother';

// gsap.registerPlugin(ScrollTrigger);
// gsap.config({ trialWarn: false });
function App() {
  useEffect(() => {
    loadBackgroudImages();
  }, []);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeCreativeAgency />} />
        <Route path="/page-about" element={<PageAbout />} />
        <Route path="/page-services" element={<PageServices />} />
        <Route
          path="/page-services-details"
          element={<PageServicesDetails />}
        />
        <Route path="/page-contact" element={<PageContact />} />
        <Route path="/page-team" element={<PageTeam />} />
        <Route path="/page-team-details" element={<PageTeamDetails />} />
        <Route path="/page-FAQ" element={<PageFAQ />} />
        <Route path="/page-404" element={<Page404 />} />
        <Route path="/portfolio-grid" element={<PortfolioGrid />} />
        <Route path="/project-details" element={<ProjectDetails />} />
        <Route path="/blog-grid-sidebar" element={<BlogGridSidebar />} />
        <Route path="/blog-details" element={<BlogDetails />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Router>
  );
}

export default App;
