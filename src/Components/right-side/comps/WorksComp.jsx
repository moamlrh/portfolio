import React, { useEffect } from "react";
import './WorksComp.css'

function WorksComp() {
  
  return (
    <div className="works" id="works">
      <h2>My Work</h2>
      <p>
        Aenean sollicitudin ex mauris, lobortis lobortis diam euismod sit amet.
        Duis ac elit vulputate, lobortis arcu quis, vehicula mauris
      </p>
      <div className="works-sections">
        <div className="works-tabs">
          <h4>All</h4>
          <h4>People</h4>
          <h4>Human</h4>
          <h4>Javascripts</h4>
          <h4>More</h4>
        </div>
        <div className="projects">
          <div className="first-project col-1">
            <img src="/images/portfolio-04.jpg" alt="portfolio-04" />
          </div>
          <div className="first-project col-1">
            <img src="/images/portfolio-04.jpg" alt="portfolio-04" />
          </div>
          <div className="first-project col-1">
            <img src="/images/portfolio-04.jpg" alt="portfolio-04" />
          </div>
          <div className="first-project col-2">
            <img src="/images/portfolio-04.jpg" alt="portfolio-04" />
          </div>
          <div className="first-project col-2">
            <img src="/images/portfolio-01.jpg" alt="portfolio-04" />
          </div>
          <div className="first-project col-2">
            <img src="/images/portfolio-02.jpg" alt="portfolio-04" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorksComp;
