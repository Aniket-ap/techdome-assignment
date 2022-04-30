import React from "react";
import "./launchDetailCard.css";

const LaunchDetailCard = ({ launch }) => {
  return (
    <div className="card">
      <div className="img">
        <img src={launch?.links?.mission_patch_small} alt="img" />
      </div>
      <p className="m-name">
        <span className="span">
          {launch?.mission_name} #{launch?.flight_number}
        </span>
      </p>
      <p>
        Mission Id :<span className="span">{launch?.mission_id}</span>
      </p>
      <p>
        Launch Year:
        <span className="span">{launch?.launch_year}</span>
      </p>
      <p>
        Successfull Lunch:
        <span className="span">
          {String(launch?.launch_success) === "true" && "True"}
          {String(launch?.launch_success) === "false" && "False"}
        </span>
      </p>
      <p>
        Successfull Landing:
        <span className="span">
          {String(launch?.rocket?.first_stage.cores[0].land_success) === "true"
            ? "True"
            : "False"}
        </span>
      </p>
    </div>
  );
};

export default LaunchDetailCard;
