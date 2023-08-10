import "../components/button.js";
import "../components/page.css";
import { useNavigate } from 'react-router-dom';

function ReNavigateCheck() {
    const navigate = useNavigate();

    return(
        <div className="CheckPage">
            <h2 style={{marginTop:'10%'}}>
                경로를 벗어났습니다.
                <br/>
                재탐색 하시겠습니까?
            </h2>

            <div className="btn" onClick={() => navigate("/ReNavigate")} id='CheckBtn'>예</div>
            <div className="btn" id='CheckBtn'>아니오</div>
        </div>
    );


}

export default ReNavigateCheck;