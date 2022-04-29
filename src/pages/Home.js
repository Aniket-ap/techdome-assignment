import React, { useState, useMemo } from "react";
import Footer from "../components/Footer";
import LaunchDetails from "../components/LaunchDetails";
import SideBarFilter from "../components/SideBarFilter";
import { useLaunches } from "../hooks/useLaunches";
import "./home.css";

const Home = () => {
  const { launches, isLoading, error } = useLaunches();

  const getYears = useMemo(
    () => Array.from(new Set(launches.map((launch) => launch.launch_year))),
    [launches]
  );

  return (
    <div>
      <h1>SpaceX Launch Programs</h1>
      <div className="container">
        <div className="sidebar">
          <SideBarFilter allYears={getYears} />
        </div>
        <div className="launch-content">
          <LaunchDetails launches={launches} />
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
