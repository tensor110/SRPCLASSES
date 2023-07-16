import React from "react";
import jeelogo from "../Assets/jee-main logo.png";
import "../StyleSheets/test-series.css";

function Testseries() {
  return (
    <>
      <div id="testseries-container">
        <div id="test-series-heading">
          <p>
            Test series for <span>2023 & 2024</span>
          </p>
        </div>
        <div id="test-series">
          <div className="test-series1">
            <div className="test-series-logo">
              <img src={jeelogo} alt="" />
            </div>
            <div className="test-series-name">JEE Main 2024 Test Series</div>
            <p className="test-series-description">
              Achieve that 99+ Percentile in JEE Main
            </p>
            <a href="" className="test-series-join">
              Join now
            </a>
          </div>
          <div className="test-series1">
            <div className="test-series-logo">
              <img src={jeelogo} alt="" />
            </div>
            <div className="test-series-name">JEE Main 2024 Test Series</div>
            <p className="test-series-description">
              Achieve that 99+ Percentile in JEE Main
            </p>
            <a href="" className="test-series-join">
              Join now
            </a>
          </div>
          <div className="test-series1">
            <div className="test-series-logo">
              <img src={jeelogo} alt="" />
            </div>
            <div className="test-series-name">JEE Main 2024 Test Series</div>
            <p className="test-series-description">
              Achieve that 99+ Percentile in JEE Main
            </p>
            <a href="" className="test-series-join">
              Join now
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Testseries;
