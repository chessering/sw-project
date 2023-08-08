import "../components/button.js";
import "./T_InputStartPage.js";
import "./S_InputStartPage.js";
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

function InputCheck() {
    return(
        <div className="basePage">
            <div style={{
                display:"flex",
                flexDirection: "row",
                alignItems: "center",
                marginLeft: "20%",
                width: "60%",
                marginTop: "5%",
            }}>
                <svg xmlns="http://www.w3.org/2000/svg" style={{
                    width:"32", 
                    height:"32", 
                    viewBox:"0 0 32 32", 
                    fill:"none",
                    }}>
                    <path d="M20.5 16C20.5 18.4853 18.4853 20.5 16 20.5C13.5147 20.5 11.5 18.4853 11.5 16C11.5 13.5147 13.5147 11.5 16 11.5C18.4853 11.5 20.5 13.5147 20.5 16ZM16 23.5C20.1421 23.5 23.5 20.1421 23.5 16C23.5 11.8579 20.1421 8.5 16 8.5C11.8579 8.5 8.5 11.8579 8.5 16C8.5 20.1421 11.8579 23.5 16 23.5ZM30.5 16C30.5 24.0081 24.0081 30.5 16 30.5C7.99187 30.5 1.5 24.0081 1.5 16C1.5 7.99187 7.99187 1.5 16 1.5C24.0081 1.5 30.5 7.99187 30.5 16Z" stroke="#000518" stroke-width="3"/>
                </svg>
                <div className="btn" style={{
                    float:"left",
                    lineHeight: "5",
                    width:"85%",
                    textIndent: "2",
                }}>
                    ddd
                </div>
            </div>


            <h2 style={{textAlign: 'center', marginTop: '10%'}}>입력한 정보가 맞나요?</h2>

            <div className="btn" style={{
                marginLeft : '20%',
                marginTop: "5%",
                display:'inline-block', 
                width: '25%', 
                textAlign: 'center',
                fontWeight: '600',
                fontSize: '30px',
                lineHeight: '13'}}>예</div>
            <div className="btn" style={{
                marginLeft : '10%', 
                marginTop: "5%",
                display:'inline-block', 
                width: '25%', 
                textAlign: 'center',
                fontWeight: '600',
                fontSize: '30px',
                lineHeight: '13'}}>아니오</div>

            
        </div>
    );
}

export default InputCheck;