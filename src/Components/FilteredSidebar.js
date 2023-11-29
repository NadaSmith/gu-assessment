import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const FilteredSidebar = () => {
    return (
        <div className="filteredsidebar">
          <h2>Filter Attendees</h2>
          <form className="form">
            <label className="name-label">
              By Name
              <div className="input-container">
                <input className="input" type="text" />
                <div className="magnifying-glass">
                    <FontAwesomeIcon icon={faSearch} />
                </div>
              </div>
            </label>
            <hr></hr>
            <label className="school-label">
              School
                <div className="school-checkbox">
                 <label className="college-label">
                    <input className="school-input" type="checkbox" />
                    College
                  </label>
                  <label className="law-label">
                    <input className="school-input" type="checkbox" />
                    Law
                  </label>
                </div>
            </label>
            <hr></hr>
            <label className="registration-status">
              Registration Status
              <div className="register-checkbox">
                <label className="registered">
                <input className="registered-input" type="checkbox" />
                  Registered
                </label>
                <label className="not-registered">
                  <input className="registered-input" type="checkbox" />
                  Not Registered
                </label>
              </div>
            </label>
          </form>
        </div>
      );
    };
    
export default FilteredSidebar;