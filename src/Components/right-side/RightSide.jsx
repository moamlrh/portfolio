import React, { useEffect } from "react";
import AboutComp from "./comps/AboutComp";
import ContactComp from "./comps/ContactComp";
import GoodComp from "./comps/GoodComp";
import WorksComp from "./comps/WorksComp";
import "./rightside.css";

function RightSide() {
  return (
    <div className="right-side">
      <AboutComp />
      <GoodComp />
      <WorksComp />
      <ContactComp />
    </div>
  );
}

export default RightSide;
