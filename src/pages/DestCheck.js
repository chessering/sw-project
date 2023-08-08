import "../components/button.js";
import "./T_InputDestPage.js";
import "./S_InputDestPage.js";
import "../components/page.css";
import styled from "styled-components";

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
    return(
    <div>

            <div className="btn" style={{
                textAlign:"center",
                marginTop: "10%",
                width: "50%",
                lineHeight: "5",
            }}>
                ddd
            </div>

            <h2 style={{textAlign: 'center', marginTop: '10%'}}>입력한 정보가 맞나요?</h2>

            <div className="btn" style={{
                marginLeft : '10%', 
                marginTop: "5%",
                display:'inline-block', 
                width: '30%', 
                textAlign: 'center',
                fontWeight: '600',
                fontSize: '30px',
                lineHeight: '14'}}>예</div>
            <div className="btn" style={{
                marginright : '10%', 
                marginTop: "5%",
                display:'inline-block', 
                width: '30%', 
                textAlign: 'center',
                fontWeight: '600',
                fontSize: '30px',
                lineHeight: '14'}}>아니오</div>

            
        </div>
    );
}

export default OutputCheck;