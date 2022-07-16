import React from "react";
import { ProgressBar } from "react-bootstrap";
import "./shopes.css";
const ProperitiesMap = () => {
  return (
    <div>
      <div className="container">
        <div className="map-properties">
          <div className="d-flex mt-3">
            <p className="map">Europe</p>
            <p className="ml-3 map" id="unit">
              653 Unit
            </p>
          </div>
          <ProgressBar className="barcolor" now={40} />
          <div className="d-flex mt-3">
            <p className="map">Asia</p>
            <p className="ml-3 map" id="unit">
              653 Unit
            </p>
          </div>
          <ProgressBar variant="success" now={40} />
          <div className="d-flex mt-3">
            <p className="map">Africa</p>
            <p className="ml-3 map" id="unit">
              653 Unit
            </p>
          </div>
          <ProgressBar variant="success" now={40} />
          <div className="d-flex mt-3">
            <p className="map">Austraila</p>
            <p className="ml-3 map" id="unit">
              653 Unit
            </p>
          </div>
          <ProgressBar variant="success" now={40} />
          <div className="d-flex mt-3">
            <p className="map">America</p>
            <p className="ml-3 map" id="unit">
              653 Unit
            </p>
          </div>
          <ProgressBar variant="success" now={40} />
          <div className="d-flex mt-3">
            <p className="map">England</p>
            <p className="ml-3 map" id="unit">
              653 Unit
            </p>
          </div>
          <ProgressBar variant="success" now={40} />
        </div>
      </div>
    </div>
  );
};

export default ProperitiesMap;
