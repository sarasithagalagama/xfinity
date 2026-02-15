import React from "react";

function Contact() {
  return (
    <section className="contact section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 valign">
            <div className="sec-head info-box full-width md-mb80">
              <div className="phone fz-30 fw-600 underline main-color">
                <a href="#0"></a>
              </div>
              <div className="morinfo mt-50 pb-30 bord-thin-bottom">
                <h6 className="mb-15">Address</h6>
                <p>Xfinity Innovations</p>
              </div>
              <div className="morinfo mt-30 pb-30 bord-thin-bottom">
                <h6 className="mb-15">Email</h6>
                <p>Hello@xfinityinnovations.com</p>
              </div>

              <div className="social-icon mt-50">
                <a href="#0">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#0">
                  <i className="fab fa-dribbble"></i>
                </a>
                <a href="#0">
                  <i className="fab fa-behance"></i>
                </a>
                <a href="#0">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-8 offset-lg-2 valign">
            <div className="full-width text-center">
              <div className="sec-head mb-50">
                <h6 className="sub-title main-color mb-15">Let&apos;s Chat</h6>
                <h3 className="text-u ls1">
                  Ready to start your <span className="fw-200">project?</span>
                </h3>
              </div>
              <div className="row justify-content-center">
                <div className="col-md-6 mb-30">
                  <div className="item-box p-4 border radius-15 text-center">
                    <h5 className="mb-15">Email Us</h5>
                    <a
                      href="mailto:Hello@xfinityinnovations.com"
                      className="fz-20 fw-600 main-color"
                    >
                      Hello@xfinityinnovations.com
                    </a>
                  </div>
                </div>
                {/* 
                <div className="col-md-6 mb-30">
                  <div className="item-box p-4 border radius-15 text-center">
                     <h5 className="mb-15">Call Us</h5>
                     <a href="tel:+1234567890" className="fz-20 fw-600 main-color">+1 234 567 890</a>
                  </div>
                </div>
                */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
