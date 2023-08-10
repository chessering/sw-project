import React from "react";
import "../components/OptimalWalk.css";

function OptimalWalk() {
  return (
    <div className="OptimalWalk">
      <button className="MinTimeBtn">
        최소
        <br />
        시간
      </button>
      <button className="MainStreetBtn">
        큰길
        <br />
        우선
      </button>
      <br />
      <button className="MinCrossWalkBtn">
        최소
        <br />
        횡단
        <br />
        보도
      </button>
      <button className="MinWalkBtn">
        최소
        <br />
        도보
      </button>
    </div>
  );
}

export default OptimalWalk;
