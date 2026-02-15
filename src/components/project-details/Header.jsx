'use client';
import React, { useEffect, useLayoutEffect } from 'react';

import loadBackgroudImages from '../../common/loadBackgroudImages';
function Header() {
  useEffect(() => {
    loadBackgroudImages();
  }, []);
  return (
    <header
      className=" header-project bg-img d-flex align-items-end"
      data-background="/assets/imgs/works/3/1.jpg"
      data-overlay-dark="9"
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="caption">
              <h1>Technology Process</h1>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
