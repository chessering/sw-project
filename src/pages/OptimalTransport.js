import React from "react";
import "../components/OptimalTransport.css";

function OptimalTransport() {
  return (
    <div className="P6">
      <button className="MinTimeBtn">
        최소
        <br />
        시간
      </button>
      <button className="MinTransferBtn">
        최소
        <br />
        환승
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

export default OptimalTransport;
