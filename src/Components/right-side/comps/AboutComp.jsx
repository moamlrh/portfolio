import React, { useEffect } from "react";
import './AboutComp.css'


function AboutComp() {
  useEffect(() => {
    const images = document.querySelectorAll('.about-img');

    images.forEach((img) => {
      img.addEventListener('mousemove' , e => {
        img.style.transition = 'all .5s'
        img.style.transform = 'scale(1.1)'
      })
      img.addEventListener('mouseleave' , e => {
        img.style.transition = 'all .5s'
        img.style.transform = 'scale(.9)'
      })
    })
  },[])

  return (
    <div className="about" id="about">
      <h2>About me</h2>
      <p>
        This is a Bootstrap v4.2.1 CSS Template for you. Edit and use this
        layout for your site. Updated on 21 May 2019 for repeated main menu HTML
        code.
      </p>
      <div className="about-sections">
        <div className="first-section">
          <img className="about-img" src="/images/left-image.jpg" alt="first section" />
          <div className="information">
            <h3>Reflux HTML CSS Template</h3>
            <p>
              Donec tristique feugiat lacus, at sollicitudin nunc euismod sed.
              Mauris viverra, erat non sagittis gravida, elit dui mollis ante,
              sit amet eleifend purus ligula eget eros. Sed tincidunt quam vitae
              neque pharetra dignissim eget.
            </p>
          </div>
        </div>
        <div className="second-section">
          <div className="information">
            <h3>Reflux HTML CSS Template</h3>
            <p>
              Donec tristique feugiat lacus, at sollicitudin nunc euismod sed.
              Mauris viverra, erat non sagittis gravida, elit dui mollis ante,
              sit amet eleifend purus ligula eget eros. Sed tincidunt quam vitae
              neque pharetra dignissim eget.
            </p>
          </div>
          <img className="about-img" src="/images/portfolio-01.jpg" alt="second section" />
        </div>
      </div>
    </div>
  );
}

export default AboutComp;
