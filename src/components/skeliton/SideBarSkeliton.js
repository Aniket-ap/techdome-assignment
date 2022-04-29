import React from "react";
import "./skeliton.css"

const SideBarSkeliton = () => {
  return (
    <div className="sidebar-card">
      <div className="big-square skeleton"></div>
      <p className="name skeleton"></p>
      <p className="status skeleton"></p>
    </div>
  );
};

export default SideBarSkeliton;
