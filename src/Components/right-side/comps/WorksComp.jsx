import React, { useEffect } from "react";
import './WorksComp.css'

function WorksComp() {
  useEffect(() => {
    const images = document.querySelectorAll('.works-img');

    images.forEach((img) => {
      img.addEventListener('mousemove' , e => {
        img.style.transition = 'all 1s'
        img.style.transform = 'scale(2)'
      })
      img.addEventListener('mouseleave' , e => {
        img.style.transition = 'all .6s'
        img.style.transform = 'scale(1)'
      })
    })
  },[])
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
            <img className="works-img" src="/images/portfolio-04.jpg" alt="portfolio-04" />
          </div>
          <div className="first-project col-1">
            <img className="works-img"src="/images/portfolio-04.jpg" alt="portfolio-04" />
          </div>
          <div className="first-project col-1">
            <img className="works-img"src="/images/portfolio-04.jpg" alt="portfolio-04" />
          </div>
          <div className="first-project col-2">
            <img className="works-img"src="/images/portfolio-04.jpg" alt="portfolio-04" />
          </div>
          <div className="first-project col-2">
            <img className="works-img"src="/images/portfolio-01.jpg" alt="portfolio-04" />
          </div>
          <div className="first-project col-2">
            <img className="works-img"src="/images/portfolio-02.jpg" alt="portfolio-04" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorksComp;
