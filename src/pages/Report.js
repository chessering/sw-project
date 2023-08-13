import "../components/Report.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';

const StyledInput = styled.input`
    border: none;
    border-radius: 23px;
    background: #E1FF68;
    line-height: 5;
    outline: none;
    text-indent: 1em;
    color: rgba(0, 5, 24, 0.30);

    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`

function Report() {
    const navigate = useNavigate();
  return (
    <div className="Report">
      <button className="Camera">
        <label for="file">
            <div class="btn-upload">
                +
                <br/>
                사진촬영
                <br/>
                카메라로 이동
            </div>
        </label>
        <input type="file" name="file" id="file" capture="camera" style={{display:"none"}}/>
        
      </button>
      <br/>
      <button className="Gallary" onClick={() => navigate("/SearchArea")}>
        <label for="file">
            <div class="btn-upload">
                +
                <br/>
                갤러리에서
                <br/>
                사진 추가
            </div>
        </label>
        <input type="file" name="file" id="file" style={{display:"none"}}/>
      </button>
    </div>
  );
}

export default Report;
