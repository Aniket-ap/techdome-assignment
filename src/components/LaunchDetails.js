import React, { useMemo } from "react";
import { useParams } from "react-router-dom";
import LaunchDetailCard from "./LaunchDetailCard";
import "./launchDetails.css";
import LaunchDetailsContainer from "./skeliton/LaunchDetailsContainer";

const LaunchDetails = ({ launches, isLoading }) => {
  const params = useParams();

  const filterLaunches = useMemo(() => {
    return launches.filter((launch) => {
      if (params.id) {
        return launch.launch_year === params.id;
      }
      if (params.successLaunchId) {
        return String(launch.launch_success) === params.successLaunchId;
      }
      if (params.successLandId) {
        return (
          String(launch.rocket?.first_stage.cores[0].land_success) ===
          params.successLandId
        );
      }

      return launches;
    });
  }, [launches, params]);

  return (
    <>
      {isLoading ? (
        <LaunchDetailsContainer />
      ) : (
        <>
          <section className="launchdetails-container">
            {filterLaunches.map((launch, index) => (
              <React.Fragment key={index}>
                <LaunchDetailCard launch={launch} />
              </React.Fragment>
            ))}
          </section>
        </>
      )}
    </>
  );
};

export default LaunchDetails;
