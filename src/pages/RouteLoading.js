import "../components/page.css";
import Spinner from "../asset/184F8A4E4E55932B06.gif";

function RouteLoading() {
    return(
        <div className="LoadingPage">
            <img src={Spinner} alt='Loading' style={{
                width: "76px",
                height: "76px",
                flexShrink: 0,
            }}/>
            <div>경로를 탐색 중입니다<br/>잠시만 기다려주세요</div>
        </div>
    );
}

export default RouteLoading;