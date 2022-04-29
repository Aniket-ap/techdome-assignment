import React from "react";
import { NavLink } from "react-router-dom";
import "./sidebarFilter.css";

const SideBarFilter = ({ allYears }) => {
  return (
    <section className="filter-container">
      <h4>Filters</h4>
      <p>Launch Year</p>
      <hr />
      <div className="year-links">
        {allYears.map((year, index) => (
          <React.Fragment key={index}>
            <NavLink
              to={`/launch-year=${year}`}
              className={(navData) =>
                navData.isActive ? "grid-item link active" : "grid-item link"
              }
            >
              {year}
            </NavLink>
          </React.Fragment>
        ))}
      </div>
      <p>Successfull Launching</p>
      <hr />
      <div className="links">
        <NavLink
          className={(navData) => (navData.isActive ? "link active" : "link")}
          to={`/launch-success=${true}`}
        >
          True
        </NavLink>
        <NavLink
          className={(navData) => (navData.isActive ? "link active" : "link")}
          to={`/launch-success=${false}`}
        >
          False
        </NavLink>
      </div>
      <p>Successfull Landing</p>
      <hr />
      <div className="links">
        <NavLink
          className={(navData) => (navData.isActive ? "link active" : "link")}
          to={`/land-success=${true}`}
        >
          True
        </NavLink>
        <NavLink
          className={(navData) => (navData.isActive ? "link active" : "link")}
          to={`/land-success=${false}`}
        >
          False
        </NavLink>
      </div>
    </section>
  );
};

export default SideBarFilter;
