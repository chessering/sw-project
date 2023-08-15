import "../components/page.css";

function Intro4() {
    return(
        <div className="startPage" style={{position:"relative"}}>
            <img src="https://s3-alpha-sig.figma.com/img/f519/63a1/233276bb5ea77d767097e0b1a6957569?Expires=1693180800&Signature=U70FgmEKZ1YQm52G-tE8CWR05SdpiEYHX0LMc0j~br097Om-UIDTI4QN4CIIAhtZ5QBB1FzbE5pY4iP9LWp0ZDwiDpQCy3GT1pEwa3tf1JtqD~-fs84424VOy-FTOWZCZv~aVCnBFm9UTkLe7q81LrkOpzIhzd3TNjLs6TvUS6pBZF-Q2HRC~CozEr8PVtzbIJpWJUpO0ic0liUHhc31MP5IypVlKncb-CDEQpLMOYFQUrFoFDGa0GzsDmTs60xvTqNZWavELdCO2CuWBl3LhQRioUGesxEatWs5a~qSU8II1cchalGyfyQ1UcNkiIIz43QjWs5XJKJ~Mb4p0gqNkA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            style={{
                position:"absolute",
                marginTop:"240px",
                width: "184px",
                height:"184px",
                flexShrink:'0',
                color: "lightgray 50%",
                cover: "no-repeat"
            }}
            />
            <div style={{
                position:"absolute",
                marginTop:"360px",
                textAlign: "center",
                fontFamily: "EliceDigitalBaeum-Bd",
                fontSize: "35px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "normal",
            }}>
                2
            </div>

            <div style={{
                position:"absolute",
                marginTop:"470px",
                textAlign: "center",
                fontFamily: "EliceDigitalBaeum-Bd",
                fontSize: "35px",
                fontStyle: "normal",
                fontWeight: "200",
                lineHeight: "normal",
            }}>두 번 터치하면<br/>선택할 수 있어요</div>
        </div>
    );
}
export default Intro4;