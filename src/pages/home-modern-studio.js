import Lines from '../components/common/Lines';
import ProgressScroll from '../components/common/ProgressScroll';
import Cursor from '../components/common/cusor';
import LoadingScreen from '../components/common/loader';
import Footer from '../components/common/Footer';
import Navbar from '../components/common/Navbar';
import Marq2 from '../components/common/Marq2';
import { Helmet } from 'react-helmet';
import Blog from '../components/home-main/Blog';
import Header from '../components/home-modern-studio/Header';
import Services from '../components/home-modern-studio/Services';
import Intro from '../components/home-modern-studio/Intro';
import Numbers from '../components/home-modern-studio/Numbers';
import Portfolio from '../components/home-modern-studio/Portfolio';
import Feat from '../components/home-modern-studio/Feat';
import Clients from '../components/common/Clients';
import Team from '../components/home-modern-studio/Team';
import Testimonials from '../components/home-modern-studio/Testimonials';
import WOW from 'wowjs';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { ScrollSmoother } from 'gsap-trial/ScrollSmoother';

import { useGSAP } from '@gsap/react';
import { useEffect, useRef } from 'react';
gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function HomeModernStudio() {
  const main = useRef();
  const smoother = useRef();

  useEffect(() => {
    const loadScript = (src) => {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.async = true;

        script.onload = () => {
          resolve(true);
        };

        script.onerror = () => {
          reject(new Error(`Failed to load ${src}`));
        };

        document.body.appendChild(script);
      });
    };

    // Load ScrollSmoother.min.js first
    loadScript('/assets/js/gsap.min.js')
      .then(() => {
        loadScript('/assets/js/ScrollSmoother.min.js');
      })
      .then(() => {
        // Once ScrollSmoother.min.js is loaded, load smoother-script.js
        return loadScript('/assets/js/smoother-script.js');
      })
      .catch((error) => {
        console.error(error.message);
      });

    // // Cleanup function
    // return () => {
    //   document.body.removeChild(script);
    // };
  }, []);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      new WOW.WOW({
        animateClass: 'animated',
        offset: 100,
      }).init();
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>webfolio</title>
        <link rel="icon" href="/assets/imgs/favicon.ico" />
        <link rel="shortcut icon" href="/assets/imgs/favicon.ico" />
        <link rel="stylesheet" type="text/css" href="/assets/css/plugins.css" />
        <link rel="stylesheet" type="text/css" href="/assets/css/style.css" />

        <link
          rel="stylesheet"
          type="text/css"
          href="https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200;300;400;500;600;700&display=swap"
        />
        <script src="/assets/js/ScrollTrigger.min.js" defer />
        <script src="/assets/js/ScrollSmoother.min.js" defer />
        <script defer src="/assets/js/gsap.min.js"></script>
        <script defer src="/assets/js/splitting.min.js"></script>
        <script defer src="/assets/js/isotope.pkgd.min.js"></script>
        <script defer src="/assets/js/plugins.js"></script>
        <script defer src="/assets/js/TweenMax.min.js"></script>
        <script defer src="/assets/js/charming.min.js"></script>
        <script defer src="/assets/js/countdown.js"></script>
      </Helmet>
      <body>
        <LoadingScreen />
        <Cursor />
        <ProgressScroll />
        <Lines />
        <Navbar />
        <div id="smooth-wrapper" ref={main}>
          <div id="smooth-content">
            <main className="main-bg o-hidden">
              <Header />
              <Services />
              <Intro />
              <Numbers />
              <Portfolio />
              <Feat />
              <Team />
              <Testimonials />
              <Clients />
              <Blog />
              <Marq2 />
            </main>
            <Footer />
          </div>
        </div>
      </body>
    </>
  );
}
