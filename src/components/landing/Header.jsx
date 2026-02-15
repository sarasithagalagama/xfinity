'use client';
import React, { useEffect } from 'react';

import loadBackgroudImages from '../../common/loadBackgroudImages';
function Header() {
  useEffect(() => {
    loadBackgroudImages();
  }, []);
  return (
    <header
      className="pre-header bg-img valign"
      data-background="/landing-preview/img/bg.jpg"
      data-overlay-dark="7"
    >
      <div className="full-width">
        <div className="container ontop">
          <div className="row mb-40">
            <div className="col-lg-8 valign">
              <div className="caption">
                <h1>
                  The Ultimate{' '}
                  <span className="fw-200">Creative Portfolio</span> Reactjs
                  Template is Here
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <h2>Webfolio</h2>
        </div>
      </div>
      <div
        className="img-header bg-img"
        data-background="/landing-preview/img/head.png"
      ></div>
    </header>
  );
}

export default Header;
