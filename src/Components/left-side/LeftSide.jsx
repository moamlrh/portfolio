import {
  GitHub,
  LinkedIn,
  Twitter,
  Info,
  Stars,
  EmojiEmotions,
  ContactMail,
} from "@material-ui/icons";
import React, { useEffect } from "react";
import "./leftside.css";

export default function LeftSide() {
  useEffect(() => {
    const image = document.querySelector("img");
    const container = document.querySelector(".image");
    const menu = document.querySelectorAll(".about-menu");
    const icons = document.querySelectorAll(".icons");
    const text = document.querySelectorAll("h4");

    container.addEventListener("mousemove", (e) => {
      let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
      let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
      image.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
      image.style.transition = "all .2s ";
    });
    container.addEventListener("mouseleave", (e) => {
      image.style.transition = "all .8s ease";
      image.style.transform = `rotateY(0deg) rotateX(0deg)`;
    });
    menu.forEach((item) => {
      item.addEventListener("click", (e) => {
        menu.forEach((i) => {
          i.classList.remove("active");
          i.style.backgroundColor = " rgba(0, 83, 109, 0.178)";
        });

        text.forEach((t) => {
          t.style.opacity = "0";
          t.style.transform = "scale(0)";
        });

        item.classList.add("active");
        item.style.backgroundColor = " rgba(5, 142, 184, 0.349)";
        icons.forEach((icon) => {
          icon.style.marginLeft = "0";
          icon.style.color = "rgba(0, 207, 162, 0.342)";
        });
        icons.forEach((icon) => {
          if (icon.parentElement.classList.contains("active")) {
            icon.style.marginLeft = "-170px";
            icon.style.transition = "all .5s";
            icon.style.color = "rgb(68, 255, 215)";
          }
        });
        text.forEach((t) => {
          if (t.parentElement.classList.contains("active")) {
            t.style.opacity = "1";
            t.style.transform = "scale(1)";
          }
        });
      });
    });
  }, []);
  return (
    <div className="left-side">
      <div className="image">
        <img alt="logo" src="/images/author-image.jpg" />
      </div>
      <div className="info">
        <h1>Moaml Rh</h1>
        <strong>Web Developer</strong>
      </div>
      <div className="menu">
        <div className="about-menu">
          <Info className="icons" />
          <h4>About Me</h4>
        </div>
        <div className="about-menu">
          <EmojiEmotions className="icons" />
          <h4>Good at</h4>
        </div>
        <div className="about-menu">
          <Stars className="icons" />
          <h4>My Work</h4>
        </div>
        <div className="about-menu">
          <ContactMail className="icons" />
          <h4>Contact Me</h4>
        </div>
      </div>
      <div className="social-media-icons">
        <GitHub />
        <Twitter />
        <LinkedIn />
      </div>
      <div className="footer">
        <span>Copyright 2020 Reflux Design </span>
      </div>
    </div>
  );
}
