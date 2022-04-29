import React, { useMemo } from "react";
import Footer from "../components/Footer";
import LaunchDetails from "../components/LaunchDetails";
import SideBarFilter from "../components/SideBarFilter";
import { useLaunches } from "../hooks/useLaunches";
import "./home.css";

const Home = () => {
  const { launches, isLoading } = useLaunches();

  const getYears = useMemo(
    () => Array.from(new Set(launches.map((launch) => launch.launch_year))),
    [launches]
  );

  return (
    <div>
      <h1>SpaceX Launch Programs</h1>
      <div className="container">
        <div className="sidebar">
          <SideBarFilter allYears={getYears} isLoading={isLoading} />
        </div>
        <div className="launch-content">
          <LaunchDetails launches={launches} isLoading={isLoading} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
