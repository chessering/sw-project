import React from "react";
import { useNavigate } from "react-router-dom";
import "../components/ChooseVehicle.css";

function ChooseVehicle() {
  const navigate = useNavigate();

  return (
    <div className="ChooseVehicle">
      <button className="WalkBtn" onClick={() => navigate("/ChooseInput")}>
        보행
      </button>
      <br />
      <button className="PublicTransportBtn" onClick={() => navigate("/ChooseInput")}>
        대중교통
      </button>
    </div>
  );
}

export default ChooseVehicle;
