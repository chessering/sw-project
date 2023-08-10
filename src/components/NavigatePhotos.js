import React from "react";
import { useState } from "react";
import "./NavigatePhotos.css";

function NavigatePhotos() {
  const [length, setLength] = useState(0);
  return (
    <div className="NavigatePhotos">
      <svg
        className="Photos"
        xmlns="http://www.w3.org/2000/svg"
        width="115"
        height="159"
        viewBox="0 0 115 159"
        fill="none"
      >
        <path
          d="M8 57.5L59 8M59 8L107.5 57.5M59 8V151.5"
          stroke="black"
          stroke-width="15"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <br />
      <text className="Txt">전방 {length}M 직진하세요</text>
    </div>
  );
}

export default NavigatePhotos;
