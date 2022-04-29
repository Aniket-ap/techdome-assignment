import React, { useMemo } from "react";
import { useParams } from "react-router-dom";
import LaunchDetailCard from "./LaunchDetailCard";
import "./launchDetails.css";

const LaunchDetails = ({ launches }) => {
  const params = useParams();

  const filterLaunches = useMemo(() => {
    return launches.filter((launch) => {
      if (params.id) {
        return launch.launch_year === params.id;
      }
      if (params.successLaunchId) {
        return launch.launch_success.toString() === params.successLaunchId;
      }
      if (params.successLandId) {
        return (
          launch.rocket?.cores?.land_success.toString() === params.successLandId
        );
      }
      return launches;
    });
  }, [launches, params]);

  return (
    <section className="launchdetails-container">
      {filterLaunches.map((launch, index) => (
        <React.Fragment key={index}>
          <LaunchDetailCard launch={launch} />
        </React.Fragment>
      ))}
    </section>
  );
};

export default LaunchDetails;
