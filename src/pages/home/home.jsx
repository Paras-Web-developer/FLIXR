import React from "react";
import "./style.scss";
import Herobanner from "./heroBanner/Herobanner";
import Tranding from "./Tranding/Tranding";
const home = () => {
  return (
    <>
      <div className="homepage">
        <Herobanner />
        <Tranding />
        <div style={{ height: 1000 }}></div>
      </div>
    </>
  );
};

export default home;
