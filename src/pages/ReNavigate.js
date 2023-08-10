import "../components/button.js";
import "../components/page.css";
import { useNavigate } from 'react-router-dom';
import { useEffect, useRef } from 'react';

function ReNavigate() {

    const navigate = useNavigate();



    return(
        <div className="EndPage" onClick={() => navigate("/FindRoute")}>
            <p style={{
                marginTop: "305px",
            }}>
                안내를 종료합니다.
                <br/>
                처음 화면으로
                <br/>
                돌아갑니다.
            </p>

        </div>

    );

}

export default ReNavigate;