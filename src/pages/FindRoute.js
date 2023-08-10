import React from "react";
import { useNavigate } from "react-router-dom";
import "../components/page.css";
import "../components/button.css";
import "../components/FindRoute.css";

function FindRoute() {
  const navigate = useNavigate();

  return (
    <div className="FindRoute">
      <button className="FindRouteBtn" onClick={() => navigate("/ChooseVehicle")}>
        길찾기
      </button>
      <br />
      <button className="BlockReportBtn">보도블럭 신고</button>
    </div>
  );
}

export default FindRoute;
