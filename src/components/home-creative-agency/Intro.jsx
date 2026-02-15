"use client";
import isInView from "../../common/isInView";
import React, { useEffect } from "react";

function Intro() {
  function handleShowProgressValues() {
    isInView({
      selector: ".skill-progress .progres",
      isElements: true,
      callback: (element) => {
        element.style.width = element.getAttribute("data-value");
      },
    });
  }
  useEffect(() => {
    window.addEventListener("scroll", handleShowProgressValues);
    return () => window.removeEventListener("scroll", handleShowProgressValues);
  }, []);
  return (
    <section className="intro-skill section-padding pt-0">
      <div className="container pt-80 pb-80">
        <div className="row md-marg">
          <div className="col-lg-6">
            <div className="cont">
              <h6 className="sub-title main-color mb-15">About Us</h6>
              <h2 className="mb-30 fw-600">
                Xfinity Innovation is a forward-thinking software & website
                development company.
              </h2>
              <p>
                We blend technology with imagination to deliver digital
                experiences that inspire, engage, and elevate brands.
              </p>
              <div className="skills-box row mt-80">
                <div className="col-md-6">
                  <div className="skill-item sm-mb30">
                    <h5 className="sub-title mb-15">UI / UX Design 90%</h5>
                    <div className="skill-progress">
                      <div className="progres" data-value="90%"></div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="skill-item">
                    <h5 className="sub-title mb-15">Development 80%</h5>
                    <div className="skill-progress">
                      <div className="progres" data-value="80%"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="imgs">
              <div className="img1">
                <img src="/assets/upd/2.jpeg" alt="" />
              </div>
              <div className="img2">
                <img src="/assets/upd/3.jpeg" alt="" />
              </div>
              <div className="img3">
                <img src="/assets/upd/4.jpeg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
