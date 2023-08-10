import "../components/button.js";
import "./DestInput.js";
import "../components/page.css";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const StyledInput = styled.input`
    border: none;
    border-radius: 30px;
    background: #E1FF68;
    line-height: 5;
    outline: none;
    text-indent: 1em;
    color: #000518;
    font-family: Inter;
    font-style: normal;
`

function OutputCheck() {

    const navigate = useNavigate();

    return(
        <div className="CheckPage">
            <div style={{
                display:"flex",
                flexDirection: "row",
                alignItems: "center",
            }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="29" height="37" viewBox="0 0 29 37" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5 37C14.5 37 29 23.2843 29 15C29 6.71573 23.2843 0 15 0C6.71573 0 0 6.71573 0 15C0 23.2843 14.5 37 14.5 37ZM14.5 20C17.5376 20 20 17.5375 20 14.5C20 11.4624 17.5376 8.99997 14.5 8.99997C11.4624 8.99997 9 11.4624 9 14.5C9 17.5375 11.4624 20 14.5 20Z" fill="#000518"/>
                </svg>
                <div className="btn" id="SearchBtn">
                    <div style={{
                        textIndent: '1em',
                        display:"flex",
                        alignItems: "center",
                    }}>경희대학교 국제캠퍼스</div>
                </div>
            </div>


            <h2 style={{textAlign: 'center', marginTop: '10%'}}>입력한 정보가 맞나요?</h2>

            <div className="btn" id='CheckBtn'>예</div>
            <div className="btn" id='CheckBtn' onClick={() => navigate("/DestInput")}>아니오</div>

            
        </div>
    );
}

export default OutputCheck;