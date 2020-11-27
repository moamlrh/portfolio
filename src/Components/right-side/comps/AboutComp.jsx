import React from "react";
import './AboutComp.css'


function AboutComp() {
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
          <img src="/images/left-image.jpg" alt="first section" />
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
          <img src="/images/portfolio-01.jpg" alt="second section" />
        </div>
      </div>
    </div>
  );
}

export default AboutComp;
