import React from "react";
import "../components/ChooseInput.css";
import { useNavigate } from "react-router-dom";

function ChooseInput() {
    const navigate = useNavigate();
  return (
    <div className="ChooseInput">
      <button className="StartPointBtn">현재 위치</button>
      <br/>
      <button className="DestinationBtn" onClick={() => navigate("/StartInput")}>출발지 입력</button>
    </div>
  );
}

export default ChooseInput;
