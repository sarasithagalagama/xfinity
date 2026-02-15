import React from "react";

function Intro() {
  return (
    <section className="page-intro section-padding pb-0">
      <div className="container">
        <div className="row md-marg">
          <div className="col-lg-6">
            <div className="img md-mb80">
              <div className="row">
                <div className="col-6">
                  <img src="/assets/imgs/intro/i1.jpg" alt="" />
                  <div className="img-icon">
                    <img src="/assets/imgs/arw0.png" alt="" />
                  </div>
                </div>
                <div className="col-6 mt-40">
                  <img src="/assets/imgs/intro/i2.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 valign">
            <div className="cont">
              <h3 className="mb-30">
                Xfinity Innovations is a full-service{" "}
                <span className="fw-200">
                  software & website development company
                </span>{" "}
                creating unique{" "}
                <span className="fw-200">digital solutions</span> & products.
              </h3>
              <p>
                We blend technology with imagination to deliver digital
                experiences that inspire, engage, and elevate brands.
              </p>
              <a href="/page-services" className="underline main-color mt-40">
                <span className="text">
                  Our Services <i className="ti-arrow-top-right"></i>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
