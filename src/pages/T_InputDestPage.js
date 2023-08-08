//text로 출발지 입력받기
import "../components/button.js";
import "../components/page.css";
import { useState, useEffect} from 'react';
import styled from "styled-components";

const StyledInput = styled.input`
    border: none;
    border-radius: 30px;
    background: #E1FF68;
    line-height: 5;
    outline: none;
    text-indent: 1em;
`

function OutputText() {

    const [start, setStart] = useState({
        point : "",
    });
    
    const onChangeArea = (e) => {
        setStart({
            ...start,
            [e.target.area]: e.target.value,
        });
    };

    return(
        <div className="InputPage">
            <svg xmlns="http://www.w3.org/2000/svg" style={{
                width:"32", 
                height:"32", 
                viewBox:"0 0 32 32", 
                fill:"none",
                float:"left",
                }}>
                <path d="M20.5 16C20.5 18.4853 18.4853 20.5 16 20.5C13.5147 20.5 11.5 18.4853 11.5 16C11.5 13.5147 13.5147 11.5 16 11.5C18.4853 11.5 20.5 13.5147 20.5 16ZM16 23.5C20.1421 23.5 23.5 20.1421 23.5 16C23.5 11.8579 20.1421 8.5 16 8.5C11.8579 8.5 8.5 11.8579 8.5 16C8.5 20.1421 11.8579 23.5 16 23.5ZM30.5 16C30.5 24.0081 24.0081 30.5 16 30.5C7.99187 30.5 1.5 24.0081 1.5 16C1.5 7.99187 7.99187 1.5 16 1.5C24.0081 1.5 30.5 7.99187 30.5 16Z" stroke="#000518" stroke-width="3"/>
            </svg>
            <div className="btn">
                <StyledInput
                type = "text"
                placeholder = "목적지 입력" 
                area = "point"
                onChange = {onChangeArea}/>
                <button>
                    확인
                </button>
            </div>
        </div>
    );
}

export default OutputText;