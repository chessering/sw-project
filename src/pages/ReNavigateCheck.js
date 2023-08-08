import "../components/button.js";
import "../components/page.css";
import { useNavigate } from 'react-router-dom';

function ReNavigateCheck() {
    const navigate = useNavigate();

    return(
        <div className="basePage">
            <h2 style={{textAlign: 'center', marginTop: '10%'}}>
                경로를 벗어났습니다.
                <br/>
                재탐색 하시겠습니까?
            </h2>

            <div className="btn" onClick={() => navigate("/ReNavigate")} style={{
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

export default ReNavigateCheck;